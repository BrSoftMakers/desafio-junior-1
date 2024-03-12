-- CreateTable
CREATE TABLE "Pets" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "dono" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,

    CONSTRAINT "Pets_pkey" PRIMARY KEY ("id")
);
