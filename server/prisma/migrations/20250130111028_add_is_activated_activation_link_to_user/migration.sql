/*
  Warnings:

  - You are about to drop the `posts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `activationLink` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "activationLink" TEXT NOT NULL,
ADD COLUMN     "isActivated" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "posts";
