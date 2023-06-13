-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'doctor', 'admin');

-- CreateEnum
CREATE TYPE "HeMeets" AS ENUM ('agreement', 'private', 'public', 'null');

-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('man', 'woman', 'null');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar_url" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "first_time" BOOLEAN NOT NULL DEFAULT true,
    "role" "Role" NOT NULL DEFAULT 'user',
    "userInfoId" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_info" (
    "id" TEXT NOT NULL,
    "he_meets" "HeMeets" NOT NULL DEFAULT 'null',
    "cell" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "birth" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "passport" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "complement" TEXT,
    "maritial_status" TEXT NOT NULL,
    "rg" TEXT NOT NULL,
    "sex" "Sex" NOT NULL DEFAULT 'null',
    "uf" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appointment" (
    "id" TEXT NOT NULL,
    "id_patient" TEXT NOT NULL,
    "id_professional" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" TEXT NOT NULL,
    "status" BOOLEAN,
    "payment" BOOLEAN NOT NULL,
    "in_person" BOOLEAN NOT NULL,
    "multiple_users" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "appointment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_cell_key" ON "user_info"("cell");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_phone_key" ON "user_info"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_cpf_key" ON "user_info"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_passport_key" ON "user_info"("passport");

-- CreateIndex
CREATE UNIQUE INDEX "user_info_rg_key" ON "user_info"("rg");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "user_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
