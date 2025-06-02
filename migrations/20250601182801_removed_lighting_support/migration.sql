/*
  Warnings:

  - You are about to drop the column `isUsingLn` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `LnData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LnPayment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LnData" DROP CONSTRAINT "LnData_userId_fkey";

-- DropForeignKey
ALTER TABLE "LnPayment" DROP CONSTRAINT "LnPayment_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isUsingLn";

-- DropTable
DROP TABLE "LnData";

-- DropTable
DROP TABLE "LnPayment";
