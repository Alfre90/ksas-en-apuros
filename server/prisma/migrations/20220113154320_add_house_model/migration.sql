-- CreateTable
CREATE TABLE "House" (
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
    "images_path" TEXT NOT NULL
);
