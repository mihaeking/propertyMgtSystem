import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const property = await prisma.properties.findMany();
    return NextResponse.json(property);
  } catch (error) {
    console.error("error fetching properties: ", error);
    return NextResponse.json(
      { error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const properties = await req.json();

  try {
    const result = await prisma.properties.create({ data: { name: "Rehema" } });
    console.log({ result });
  } catch (e) {
    console.log(e);
  }

  //   console.log({ result });
  return Response.json({ message: "Property added successfuly" });
}
