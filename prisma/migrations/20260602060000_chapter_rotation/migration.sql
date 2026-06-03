-- AlterTable: add chapter rotation fields to Recording
ALTER TABLE "Recording" ADD COLUMN "sessionId" TEXT;
ALTER TABLE "Recording" ADD COLUMN "chapterNumber" INTEGER;
ALTER TABLE "Recording" ADD COLUMN "previousChapterId" TEXT;

-- CreateIndex
CREATE INDEX "Recording_sessionId_idx" ON "Recording"("sessionId");
