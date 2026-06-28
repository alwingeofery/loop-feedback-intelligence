import { PrismaClient, Role, FeedbackSource, ReportStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const workspace = await prisma.workspace.upsert({
    where: { slug: "demo-workspace" },
    update: {},
    create: {
      name: "Demo Workspace",
      slug: "demo-workspace"
    }
  });

  const user = await prisma.user.upsert({
    where: { email: "admin@loopai.dev" },
    update: {},
    create: {
      email: "admin@loopai.dev",
      name: "Loop Admin"
    }
  });

  await prisma.workspaceMembership.upsert({
    where: {
      userId_workspaceId: {
        userId: user.id,
        workspaceId: workspace.id
      }
    },
    update: { role: Role.ADMIN },
    create: {
      userId: user.id,
      workspaceId: workspace.id,
      role: Role.ADMIN
    }
  });

  const theme = await prisma.theme.create({
    data: {
      workspaceId: workspace.id,
      name: "Support Responsiveness",
      description: "How fast and helpful support feels to customers."
    }
  });

  const feedback = await prisma.feedback.create({
    data: {
      workspaceId: workspace.id,
      title: "Support was quick",
      content: "The support team resolved my issue in under ten minutes.",
      sentiment: 0.9,
      source: FeedbackSource.CSV
    }
  });

  await prisma.feedbackTheme.create({
    data: {
      feedbackId: feedback.id,
      themeId: theme.id
    }
  });

  await prisma.report.create({
    data: {
      workspaceId: workspace.id,
      title: "June VOC Summary",
      summary: "Positive momentum around support responsiveness.",
      status: ReportStatus.READY
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

