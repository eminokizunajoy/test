// app/api/problems/publish/route.ts
// SOLUSI YANG BENAR untuk masalah "Body has already been read"

import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  let body: any;
  
  try {
    // ★ PERBAIKAN: Baca request.json() hanya sekali dan simpan di variabel
    body = await request.json();
    console.log('Request body diterima:', body);

    // ★ SOLUSI: Cari ID yang tersedia terlebih dahulu
    const lastProblem = await prisma.problem.findFirst({
      orderBy: { id: 'desc' }
    });
    const nextId = lastProblem ? lastProblem.id + 1 : 1;
    
    console.log('ID terakhir:', lastProblem?.id, 'ID berikutnya yang akan digunakan:', nextId);

    // ★ SOLUSI: Gunakan ID eksplisit untuk menghindari konflik
    const problemData = {
      id: nextId, // Gunakan ID yang sudah dipastikan tersedia
      title_ja: body.title || body.title_ja || '',
      title_en: body.title_en || '',
      description_ja: body.description || body.description_ja || '',
      description_en: body.description_en || '',
      explanation_ja: body.explanation_ja || '',
      explanation_en: body.explanation_en || '',
      programLines_ja: body.programLines_ja || [],
      programLines_en: body.programLines_en || [],
      correctAnswer: body.correctAnswer || '',
      answerOptions_ja: body.answerOptions_ja || [],
      answerOptions_en: body.answerOptions_en || [],
      initialVariables: body.initialVariables || {},
      logicType: body.logicType || 'STATIC_QA',
      options: body.options || {},
    };

    console.log('Data yang akan dibuat:', problemData);

    const newProblem = await prisma.problem.create({
      data: problemData,
    });

    console.log('✅ Problem berhasil dibuat dengan ID:', newProblem.id);

    return NextResponse.json({ 
      message: '問題が正常に公開されました！', 
      id: newProblem.id 
    }, { status: 200 });

  } catch (error: any) {
    console.error('❌ Error saat membuat problem:', error);
    
    // ★ SOLUSI BACKUP: Jika ID yang dipilih masih konflik, coba dengan ID random
    if (error.code === 'P2002' && error.meta?.target?.includes('id')) {
      try {
        console.log('🔄 ID konflik, mencoba dengan ID random...');
        
        // Generate ID random yang tinggi untuk menghindari konflik
        const randomId = Math.floor(Math.random() * 1000000) + 10000;
        
        const problemDataWithRandomId = {
          id: randomId,
          title_ja: body.title || body.title_ja || '',
          title_en: body.title_en || '',
          description_ja: body.description || body.description_ja || '',
          description_en: body.description_en || '',
          explanation_ja: body.explanation_ja || '',
          explanation_en: body.explanation_en || '',
          programLines_ja: body.programLines_ja || [],
          programLines_en: body.programLines_en || [],
          correctAnswer: body.correctAnswer || '',
          answerOptions_ja: body.answerOptions_ja || [],
          answerOptions_en: body.answerOptions_en || [],
          initialVariables: body.initialVariables || {},
          logicType: body.logicType || 'STATIC_QA',
          options: body.options || {},
        };
        
        console.log('Menggunakan ID random:', randomId);
        
        const newProblem = await prisma.problem.create({
          data: problemDataWithRandomId,
        });
        
        console.log('✅ Problem berhasil dibuat dengan ID random:', newProblem.id);
        
        return NextResponse.json({ 
          message: '問題が正常に公開されました！', 
          id: newProblem.id 
        }, { status: 200 });
        
      } catch (secondError: any) {
        console.error('❌ Solusi backup juga gagal:', secondError);
        return NextResponse.json({ 
          message: '問題の公開に失敗しました', 
          error: `${error.message} | Backup: ${secondError.message}` 
        }, { status: 500 });
      }
    }
    
    return NextResponse.json({ 
      message: '問題の公開に失敗しました', 
      error: error.message 
    }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}

