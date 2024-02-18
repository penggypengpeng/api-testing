-- CreateTable
CREATE TABLE "Champion" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "health" INTEGER NOT NULL,
    "mana" INTEGER NOT NULL,
    "healthRegen" DOUBLE PRECISION NOT NULL,
    "manaRegen" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Champion_pkey" PRIMARY KEY ("id")
);
