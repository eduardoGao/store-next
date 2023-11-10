import prisma from "@/utils/prisma";

export default async function Home() {
  // const prisma = new PrismaClient()

  // const categories = await prisma.product.findMany()

  // console.log(categories);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Store
    </main>
  )
}
