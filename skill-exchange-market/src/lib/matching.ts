import { prisma } from "@/lib/db";

export async function findMatchCandidates(userId: string, limit = 20) {
  const myTeach = await prisma.userSkill.findMany({
    where: { userId },
    select: { skill: { select: { name: true, category: true } } }
  });
  const myLearn = await prisma.learningNeed.findMany({
    where: { userId },
    select: { name: true, category: true }
  });

  const teachNames = myTeach.map((t) => t.skill.name);
  const learnNames = myLearn.map((n) => n.name);

  if (teachNames.length === 0 && learnNames.length === 0) return [];

  // Simple heuristic:
  // - Candidate teaches what I want to learn OR wants to learn what I can teach.
  // - Exclude myself.
  const candidates = await prisma.user.findMany({
    where: {
      id: { not: userId },
      OR: [
        {
          teachSkills: {
            some: { skill: { name: { in: learnNames.length ? learnNames : ["__none__"] } } }
          }
        },
        {
          learning: {
            some: { name: { in: teachNames.length ? teachNames : ["__none__"] } }
          }
        }
      ]
    },
    take: limit,
    select: {
      id: true,
      username: true,
      displayName: true,
      image: true,
      grade: true,
      department: true,
      teachSkills: { take: 5, select: { skill: { select: { name: true, category: true } } } },
      learning: { take: 5, select: { name: true, category: true } }
    }
  });

  return candidates;
}

