/*
  Warnings:

  - You are about to drop the column `category_id` on the `reviews` table. All the data in the column will be lost.
  - You are about to drop the column `role_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `reviews` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Book', 'Game', 'Movie');

-- DropForeignKey
ALTER TABLE "reviews" DROP CONSTRAINT "reviews_category_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_id_fkey";

-- AlterTable
ALTER TABLE "reviews" DROP COLUMN "category_id",
ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role_id",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Admin';

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "roles";
