/*
  Warnings:

  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Permission" AS ENUM ('DeleteYourProfile', 'DeleteAllProfiles');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "currentHashedRefreshToken" TEXT,
ADD COLUMN     "permissions" "Permission"[] DEFAULT ARRAY['DeleteYourProfile']::"Permission"[];

-- DropTable
DROP TABLE "tokens";
