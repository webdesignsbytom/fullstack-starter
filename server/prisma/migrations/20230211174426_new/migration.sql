/*
  Warnings:

  - You are about to drop the `DeliveryLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeliveryLogLine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'DEV';

-- DropForeignKey
ALTER TABLE "DeliveryLog" DROP CONSTRAINT "DeliveryLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryLogLine" DROP CONSTRAINT "DeliveryLogLine_logId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- DropTable
DROP TABLE "DeliveryLog";

-- DropTable
DROP TABLE "DeliveryLogLine";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";
