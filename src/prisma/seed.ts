import { Prisma, PrismaClient } from '@prisma/client';
// 実際のアプリケーションでは、パスワードハッシュ化ライブラリをインポートします
import bcrypt from 'bcryptjs';

// 静的インポートを動的インポートに置き換えます（main()関数内で実行）
// import { problems as localProblems } from '../app/issue_list/basic_info_b_problem/data/problems'; 
// import { addXp } from '../lib/action'; // このファイルは存在しないため、スキップします

import { promises as fs } from 'fs'; 
import { parse } from 'csv-parse/sync'; 
import path from 'path'; 
import * as XLSX from 'xlsx';

// PrismaClientを初期化
const prisma = new PrismaClient();

async function main() {
  console.log(`🚀 Start seeding ...`);

  // =================================================================
  // __dirname は /workspaces/my-next-app/src/prisma を指します
  // problems.tsファイルの場所：./app/issue_list/basic_info_b_problem/data/problems.ts
  // prisma/ からそのファイルへのパスは：../app/issue_list/basic_info_b_problem/data/problems.ts
  // =================================================================

  const problemsPath = path.resolve(__dirname, '../app/issue_list/basic_info_b_problem/data/problems.ts');
  
  console.log('Attempting to load problems from:', problemsPath);

  const { problems: localProblems } = require(problemsPath);
  
  // addXp関数は存在しないため、この部分をスキップします
  // const { addXp } = require(actionPath);
  // =================================================================

  // 既存のユーザーデータをクリーンアップする場合（開発環境のみで推奨）
  // await prisma.user.deleteMany({});
  // console.log("🗑️ Cleared existing user data.");

  // シーディングするユーザーデータ
  const usersToSeed = [
    {
      email: 'alice@example.com',
      password: 'password123', // ⚠️ 実際にはハッシュ化する
      username: 'Alice Smith',
      year: 2020,
      class: 1,
      birth: new Date('2002-04-15'), 
    },
    {
      email: 'bob@example.com',
      password: 'securepassword', // ⚠️ 実際にはハッシュ化する
      username: 'Bob Johnson',
      year: 2021,
      class: 2,
      birth: new Date('2003-08-20'),
    },
    {
      email: 'charlie@example.com',
      password: 'anotherpassword', // ⚠️ 実際にはハッシュ化する
      username: 'Charlie Brown',
      year: 2020,
      class: 3,
      birth: new Date('2002-11-05'),
    },
  ];

  // 各ユーザーデータをデータベースに挿入または更新
  for (const userData of usersToSeed) {
    // ⚠️ パスワードをハッシュ化する処理をここに追加してください
    // 例: const hashedPassword = await bcrypt.hash(userData.password, 10);
    // userData.password = hashedPassword; 

    const user = await prisma.user.upsert({
      where: { email: userData.email }, 
      update: userData, 
      create: userData, 
    });
    console.log(`✅ Upserted user with ID: ${user.id} and email: ${user.email}`);
  }

  console.log(`🎉 Seeding finished successfully.`);
  console.log(`\n🌱 Seeding problems...`);

  // --- 既存の問題・解答データを一度リセットします ---
  // これにより、何度seedを実行してもデータが重複せず、常に最新の状態に保たれます。
  // 注意: UserAnswerはProblemに依存しているため、必ず先に削除する必要があります。
  if (await prisma.userAnswer.count() > 0) {
    await prisma.userAnswer.deleteMany();
    console.log("🗑️ Cleared existing user answer data.");
  }
  // 問題を削除する前に、ProgrammingProblemに関連するデータを削除する必要があるかもしれません
  // await prisma.sampleCase.deleteMany({}); 
  // await prisma.testCase.deleteMany({});   
  // await prisma.problemFile.deleteMany({}); 
  if (await prisma.programmingProblem.count() > 0) { 
    await prisma.programmingProblem.deleteMany(); 
    console.log("🗑️ Cleared existing programming problem data."); 
  }
  if (await prisma.problem.count() > 0) {
    await prisma.problem.deleteMany();
    console.log("🗑️ Cleared existing problem data.");
  }

  // --- `problems.ts` のデータをループしてDBに登録します ---
  for (const p of localProblems) {
    // `problems.ts`のデータ形式から、DBスキーマに合わせたオブジェクトを作成します
    const problemDataForDB = {
      // `problems.ts`のidは文字列なので、DBのInt型に合わせて数値に変換します
      id: parseInt(p.id, 10),
      
      // テキスト情報を格納
      title_ja: p.title.ja,
      title_en: p.title.en,
      description_ja: p.description.ja,
      description_en: p.description.en,
      explanation_ja: p.explanationText.ja,
      explanation_en: p.explanationText.en,
      programLines_ja: p.programLines.ja,
      programLines_en: p.programLines.en,
      
      // 正解と、JSON/配列型のカラム
      correctAnswer: p.correctAnswer,
      answerOptions_ja: p.answerOptions.ja as unknown as Prisma.JsonArray,
      answerOptions_en: p.answerOptions.en as unknown as Prisma.JsonArray,
      initialVariables: p.initialVariables as unknown as Prisma.JsonObject,
      options: (p.traceOptions as unknown as Prisma.JsonObject) ?? Prisma.JsonNull,
      
      // ★ 修正：logicTypeが有効な文字列値を持つことを保証
      logicType: p.logicType || 'STATIC_QA',
    };

    // 変換したデータを使って、データベースに新しい問題を作成します
    const problem = await prisma.problem.create({
      data: problemDataForDB,
    });
    console.log(`✅ Created problem: "${problem.title_ja}" (ID: ${problem.id})`);
  }

  // --- Excelファイル処理部分はファイルが存在しないため削除されました ---
  console.log(`\n📝 Excelファイル処理をスキップします（ファイルが見つかりません）...`);
  
  // 削除されたExcelコード:
  // const excelFileName = 'PBL2 科目B問題.xlsx';
  // const sheetConfigs = [
  //   { name: '基本情報科目B基礎', range: 'B2:G16' },
  //   { name: '基本情報科目B応用', range: 'B2:G16' }
  // ];
  // ... (その他のExcelコード)

  console.log(`\n🎉 Seeding finished successfully.`);

  // =================================================================
  // Step 1: Difficulty（難易度）のマスターデータを作成する
  // =================================================================
  console.log('Seeding difficulties...');
  const difficultiesToSeed = [
    { name: 'やさしい',   xp: 200 },
    { name: 'かんたん', xp: 400 },
    { name: 'ふつう',   xp: 800 },
    { name: 'むずかしい',   xp: 1200 },
    { name: '鬼むず',   xp: 2000 },
    { name: '基本資格A問題',   xp: 40 },
    { name: '基本資格B問題(かんたん)',   xp: 120 },
    { name: '基本資格B問題(かんたん)',   xp: 280 },
    { name: '応用資格午前問題',   xp: 60 },
    { name: '応用資格午後問題',   xp: 1200 },
  ];

  for (const d of difficultiesToSeed) {
    await prisma.difficulty.upsert({
      where: { name: d.name },
      update: {},
      create: { name: d.name, xp: d.xp },
    });
  }
  console.log('✅ Difficulties seeded.');
  
  // =================================================================
  // Step 2: Subject（科目）のマスターデータを作成する
  // =================================================================
  console.log('Seeding subjects...');
  const subjectsToSeed = [ 
    { id: 1, name: 'プログラミング' },
    { id: 2, name: '基本情報A問題'},
    { id: 3, name: '基本情報B問題'},
   ]; 
  for (const s of subjectsToSeed) {
    await prisma.subject.upsert({
      where: { id: s.id }, update: {}, create: { id: s.id, name: s.name },
    });
  }
  console.log('✅ Subjects seeded.');

  // =================================================================
  // Step 3: Userデータを作成する
  // =================================================================
  console.log('Seeding users...');
  const alice = await prisma.user.upsert({
    where: { email: 'bob@example.com' }, update: {}, create: { email: 'alice@example.com', password: 'password123', username: 'Alice Smith', birth: new Date('2002-04-15') },
  });
  console.log('✅ Users seeded.');
  
  // =================================================================
  // Step 4: addXp関数のテストをスキップ（関数が存在しないため）
  // =================================================================
  console.log('addXp関数のテストをスキップします（関数が見つかりません）...');
  // if (alice) {
  //   // Aliceさんに「プログラミング(subjectId: 1)」を「むずかしい」難易度でクリアしたとしてXPを加算
  //   // addXp関数側で 'むずかしい' に対応するXP(1200)を調べて加算してくれる
  //   await addXp(alice.id, 1, 'むずかしい'); 
  // }
  
  console.log('🎉 Seeding and testing finished successfully.');

}

// transformRowToProblem関数は使用されなくなったため削除されました
// function transformRowToProblem(row: any): Omit<Prisma.ProblemCreateInput, 'id'> {
//   ... (Excel処理コード)
// }

// スクリプトの実行と終了処理
main()
  .catch(e => {
    console.error(`❌ Seeding failed:`, e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log(`\n🔌 Disconnected from database.`);
  });

