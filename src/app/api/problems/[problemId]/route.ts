// app/api/problems/[problemId]/route.ts

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// --- GET関数 (問題データを取得するため) ---
export async function GET(request: Request, { params }: { params: Promise<{ problemId: string }> }) {
  const resolvedParams = await params; 
  const problemId = parseInt(resolvedParams.problemId);

  if (isNaN(problemId)) {
    return NextResponse.json({ message: '無効な問題IDです' }, { status: 400 });
  }

  try {
    // これらの関係は現在のスキーマに存在しません
    const problem = await prisma.problem.findUnique({
      where: { id: problemId },
      // include: {
      //   sampleCases: true,  // ❌ この関係は存在しません
      //   testCases: true,    // ❌ この関係は存在しません
      //   // files: true,     // ❌ この関係も存在しません
      // },
    });

    if (!problem) {
      return NextResponse.json({ message: '問題が見つかりません' }, { status: 404 });
    }

    return NextResponse.json(problem, { status: 200 });
  } catch (error: any) {
    console.error('問題の取得中にエラーが発生しました:', error);
    return NextResponse.json({ message: '問題の取得に失敗しました', error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

// --- PUT関数 (問題データを更新するため) ---
export async function PUT(request: Request, { params }: { params: Promise<{ problemId: string }> }) {
  const resolvedParams = await params; 
  const problemId = parseInt(resolvedParams.problemId);

  if (isNaN(problemId)) {
    return NextResponse.json({ message: '無効な問題IDです' }, { status: 400 });
  }

  try {
    const body = await request.json();

    // 現在のスキーマに存在するフィールドのみを使用
    const updatedProblem = await prisma.problem.update({
      where: { id: problemId },
      data: {
        title_ja: body.title_ja || body.title,
        title_en: body.title_en || '',
        description_ja: body.description_ja || body.description,
        description_en: body.description_en || '',
        explanation_ja: body.explanation_ja || '',
        explanation_en: body.explanation_en || '',
        programLines_ja: body.programLines_ja || [],
        programLines_en: body.programLines_en || [],
        correctAnswer: body.correctAnswer,
        answerOptions_ja: body.answerOptions_ja || [],
        answerOptions_en: body.answerOptions_en || [],
        initialVariables: body.initialVariables || {},
        logicType: body.logicType || 'STATIC_QA',
        options: body.options || {},
      },
    });

    // これらのテーブルは現在のスキーマに存在しません
    // 
    // 以下のコードは削除されました:
    // - existingSampleCases の処理
    // - newSampleCases の処理
    // - existingTestCases の処理
    // - newTestCases の処理
    //
    // もしこれらの機能が必要な場合は、まずスキーマに SampleCase と TestCase モデルを追加してください

    return NextResponse.json({ message: '問題が正常に更新されました！', problem: updatedProblem }, { status: 200 });
  } catch (error: any) {
    console.error('問題の更新中にエラーが発生しました:', error);
    return NextResponse.json({ message: '問題の更新に失敗しました', error: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

