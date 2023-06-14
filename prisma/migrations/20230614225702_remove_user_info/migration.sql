/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `old_passwords` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_oldPasswordsId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userInfoId_fkey";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "old_passwords";

-- DropTable
DROP TABLE "user_info";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "first_time" BOOLEAN NOT NULL DEFAULT true,
    "role" "Role" NOT NULL DEFAULT 'user',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
