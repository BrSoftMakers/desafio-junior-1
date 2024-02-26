import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dog = await prisma.petType.upsert({
        where: { id: 1},
        update: { },
        create: {
            type: 'DOG'
        }
    })

    const cat = await prisma.petType.upsert({
        where: { id: 2 },
        update: { },
        create: {
            type: 'CAT'
        }
    })
}

main()
.catch((error) => {
    console.error(error)
    process.exit(1);
})
.finally(async() => {
    await prisma.$disconnect();
})