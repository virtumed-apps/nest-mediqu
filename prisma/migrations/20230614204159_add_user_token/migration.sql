-- AlterTable
ALTER TABLE "User" ADD COLUMN     "oldPasswordsId" TEXT;

-- CreateTable
CREATE TABLE "old_passwords" (
    "id" TEXT NOT NULL,
    "old_passwords" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "old_passwords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_token" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_oldPasswordsId_fkey" FOREIGN KEY ("oldPasswordsId") REFERENCES "old_passwords"("id") ON DELETE SET NULL ON UPDATE CASCADE;
