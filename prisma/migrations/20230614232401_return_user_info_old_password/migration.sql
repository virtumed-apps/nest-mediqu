-- AlterTable
ALTER TABLE "user" ADD COLUMN     "oldPasswordsId" TEXT,
ADD COLUMN     "userInfoId" TEXT;

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
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "user_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "old_passwords" (
    "id" TEXT NOT NULL,
    "old_passwords" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "old_passwords_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "user" ADD CONSTRAINT "user_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "user_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_oldPasswordsId_fkey" FOREIGN KEY ("oldPasswordsId") REFERENCES "old_passwords"("id") ON DELETE SET NULL ON UPDATE CASCADE;
