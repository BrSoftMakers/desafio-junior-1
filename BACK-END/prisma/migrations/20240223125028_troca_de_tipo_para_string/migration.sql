-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "date" TEXT NOT NULL
);
INSERT INTO "new_Pets" ("date", "id", "name", "owner", "phone", "race", "type") SELECT "date", "id", "name", "owner", "phone", "race", "type" FROM "Pets";
DROP TABLE "Pets";
ALTER TABLE "new_Pets" RENAME TO "Pets";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
