-- CreateTable
CREATE TABLE "ResourceLog" (
    "id" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ResourceLog_pkey" PRIMARY KEY ("id")
);
