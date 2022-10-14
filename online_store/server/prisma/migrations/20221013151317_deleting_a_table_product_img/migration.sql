/*
  Warnings:

  - You are about to drop the `ProductImg` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductImg" DROP CONSTRAINT "ProductImg_productId_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "img" TEXT[];

-- DropTable
DROP TABLE "ProductImg";
