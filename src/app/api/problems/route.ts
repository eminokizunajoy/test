import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// 問題一覧取得
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const category = searchParams.get('category')
    const isPublic = searchParams.get('isPublic')
    const isDraft = searchParams.get('isDraft')

    const skip = (page - 1) * limit

    const where: any = {}
    if (category) where.category = category
    if (isPublic !== null) where.isPublic = isPublic === 'true'
    if (isDraft !== null) where.isDraft = isDraft === 'true'

    const [problems, total] = await Promise.all([
      prisma.problem.findMany({
        where,
        skip,
        take: limit,
        include: {
          sampleCases: {
            orderBy: { order: 'asc' }
          },
          testCases: {
            orderBy: { order: 'asc' }
          },
          files: true,
          _count: {
            select: {
              userAnswers: true
            }
          }
        },
        orderBy: { createdAt: 'desc' }
      }),
      prisma.problem.count({ where })
    ])

    return NextResponse.json({
      problems,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Error fetching problems:', error)
    return NextResponse.json(
      { error: 'Failed to fetch problems' },
      { status: 500 }
    )
  }
}

// 問題作成
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      title,
      problemType,
      difficulty,
      timeLimit,
      category,
      topic,
      tags,
      description,
      codeTemplate,
      isPublic,
      allowTestCaseView,
      isDraft = false,
      sampleCases = [],
      testCases = []
    } = body

    // バリデーション
    if (!title || !problemType || !category || !description) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    const problem = await prisma.problem.create({
      data: {
        title,
        problemType,
        difficulty: parseInt(difficulty),
        timeLimit: parseInt(timeLimit),
        category,
        topic,
        tags: Array.isArray(tags) ? JSON.stringify(tags) : JSON.stringify([]),
        description,
        codeTemplate,
        isPublic: Boolean(isPublic),
        allowTestCaseView: Boolean(allowTestCaseView),
        isDraft: Boolean(isDraft),
        sampleCases: {
          create: sampleCases.map((sc: any, index: number) => ({
            input: sc.input,
            expectedOutput: sc.expectedOutput,
            description: sc.description || '',
            order: index
          }))
        },
        testCases: {
          create: testCases.map((tc: any, index: number) => ({
            name: tc.name || `ケース${index + 1}`,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            description: tc.description || '',
            order: index
          }))
        }
      },
      include: {
        sampleCases: true,
        testCases: true,
        files: true
      }
    })

    return NextResponse.json(problem, { status: 201 })
  } catch (error) {
    console.error('Error creating problem:', error)
    return NextResponse.json(
      { error: 'Failed to create problem' },
      { status: 500 }
    )
  }
}

