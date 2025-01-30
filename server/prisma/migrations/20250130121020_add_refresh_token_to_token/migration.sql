/*
  Warnings:

  - You are about to drop the column `activationLink` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `isActivated` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Token` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `activation_link` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "activationLink",
DROP COLUMN "isActivated",
ADD COLUMN     "activation_link" TEXT NOT NULL,
ADD COLUMN     "is_activated" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Token";

-- CreateTable
CREATE TABLE "tokens" (
    "id" SERIAL NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tokens_user_id_key" ON "tokens"("user_id");

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
