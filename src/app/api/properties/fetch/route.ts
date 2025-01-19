import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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
