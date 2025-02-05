/*
  Warnings:

  - You are about to drop the column `refreshToken` on the `tokens` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[refresh_token]` on the table `tokens` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refresh_token` to the `tokens` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tokens_refreshToken_key";

-- AlterTable
ALTER TABLE "tokens" DROP COLUMN "refreshToken",
ADD COLUMN     "refresh_token" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT[],
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "commits" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "marker_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "commits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "markers" (
    "id" SERIAL NOT NULL,
    "coordinates" INTEGER[],
    "type" TEXT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "phone_nubmer" TEXT,
    "address" TEXT,
    "working_time" TEXT,
    "vk_url" TEXT,
    "website_url" TEXT,
    "charman_url" TEXT,

    CONSTRAINT "markers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marker_images" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "marker_id" INTEGER NOT NULL,

    CONSTRAINT "marker_images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "commits_marker_id_key" ON "commits"("marker_id");

-- CreateIndex
CREATE UNIQUE INDEX "commits_user_id_key" ON "commits"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "marker_images_marker_id_key" ON "marker_images"("marker_id");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_refresh_token_key" ON "tokens"("refresh_token");

-- AddForeignKey
ALTER TABLE "commits" ADD CONSTRAINT "commits_marker_id_fkey" FOREIGN KEY ("marker_id") REFERENCES "markers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "commits" ADD CONSTRAINT "commits_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "marker_images" ADD CONSTRAINT "marker_images_marker_id_fkey" FOREIGN KEY ("marker_id") REFERENCES "markers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
