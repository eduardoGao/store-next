import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // const product = await prisma.product.findMany()
    const product = await prisma.product.create({
      data: {
        name: "Dona Chocolate y Coco",
        price: 19.9,
        image: "donas_14",
        category_id: 4,
      }
    })

    console.log('product:', product);
    
  } catch (error) {
    console.log(error);
  }
}

main().catch(e => {
  console.log(e);
  process.exit(1)
})
.finally(async () => {
  await prisma.$disconnect()
})