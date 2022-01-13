/*
  Warnings:

  - Added the required column `observations` to the `House` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_House" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "owner_name_lastname" TEXT NOT NULL,
    "land_line" TEXT NOT NULL,
    "cellphone" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "construction" TEXT NOT NULL,
    "carpentry" TEXT NOT NULL,
    "garage" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "square_meters" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "interiors" TEXT NOT NULL,
    "exteriors" TEXT NOT NULL,
    "visited" BOOLEAN NOT NULL,
    "observations" TEXT NOT NULL,
    "images_path" TEXT NOT NULL
);
INSERT INTO "new_House" ("address", "carpentry", "cellphone", "construction", "exteriors", "garage", "id", "images_path", "interiors", "land_line", "municipality", "owner_name_lastname", "price", "province", "square_meters", "status", "type", "visited") SELECT "address", "carpentry", "cellphone", "construction", "exteriors", "garage", "id", "images_path", "interiors", "land_line", "municipality", "owner_name_lastname", "price", "province", "square_meters", "status", "type", "visited" FROM "House";
DROP TABLE "House";
ALTER TABLE "new_House" RENAME TO "House";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
