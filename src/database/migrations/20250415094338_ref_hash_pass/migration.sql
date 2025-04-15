/*
  Warnings:

  - You are about to drop the column `hashPassword` on the `users` table. All the data in the column will be lost.
  - Added the required column `hash_password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "hashPassword",
ADD COLUMN     "hash_password" TEXT NOT NULL;
