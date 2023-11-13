import { PrismaClient } from "@prisma/client";

export async function GET(request, { params }) {
  console.log(params);

  // return Response.json({params})
  const prisma = new PrismaClient()
  try {
    const order = await prisma.order.update({
      where: {
        id: parseInt(params.id)
      },
      data: {
        status: true
      }
    })

    return Response.json({
      order
    })
  } catch (error) {
    console.log(error);
    return Response.status(500).json({
      error: error.message
    })
  }
}