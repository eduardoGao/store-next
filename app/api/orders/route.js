import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(request) {
  const body = await request.json()

  const prisma = new PrismaClient()

  try {
    const order = await prisma.order.create({
      data: {
        name: body.name,
        total: body.total,
        date: body.date,
        order: body.order
      }
    })
  
    return NextResponse.json({
      order
    })

  } catch (error) {
    console.log(error);

    return NextResponse.json({
      error: error.message
    })
  }
}

export async function GET() {
  const prisma = new PrismaClient()
  try {
    const orders = await prisma.order.findMany({
      where: {
        status: false
      }
    })

    return NextResponse.json({
      orders
    })
  } catch (error) {
    console.log(error);
    return NextResponse.status(500).json({
      error: error.message
    })
  }
}