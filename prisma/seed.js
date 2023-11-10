import { PrismaClient } from "@prisma/client";
import { categories } from "./data/categories.js";
import { products } from "./data/products.js";

const prisma = new PrismaClient()

const seedData = async () => {

  try {
    await prisma.category.createMany({
      data: categories,
      skipDuplicates: true
    })

    await prisma.product.createMany({
      data: products,
      skipDuplicates: true
    })
  } catch (error) {
    console.log(error);
  }
}

seedData()