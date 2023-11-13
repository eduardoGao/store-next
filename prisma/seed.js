const { PrismaClient } = require("@prisma/client");
const { categories } = require("./data/categories.js");
const { products } = require ("./data/products.js");

const prisma = new PrismaClient()

const seedData = async () => {

  try {
    await prisma.category.createMany({
      data: categories
    })

    await prisma.product.createMany({
      data: products
    })
  } catch (error) {
    console.log(error);
  }
}

seedData()