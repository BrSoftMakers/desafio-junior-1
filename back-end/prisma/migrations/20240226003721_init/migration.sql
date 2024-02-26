-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "ownerId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "nascimento" TIMESTAMP(3) NOT NULL,
    "animal" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "ownerPhone" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id","ownerId")
);
