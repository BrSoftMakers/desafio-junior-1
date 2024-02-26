import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const dog = await prisma.petType.create({
        data: {
            type: 'DOG'
        }
    })

    const cat = await prisma.petType.create({
        data: {
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