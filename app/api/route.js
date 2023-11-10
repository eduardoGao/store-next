import { PrismaClient } from "@prisma/client"

export async function GET(request) {
  const prisma = new PrismaClient()
  const categories = await prisma.category.findMany()

  return Response.json({
    categories
  })
}