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
  try {
    const { propertyName, price, Location } = await req.json();

    if (!propertyName || !price || !Location) {
      return NextResponse.json(
        {
          error:
            "Missing required fields, please enter name, location or price",
        },
        { status: 400 } //Bad request
      );
    }

    //creating new property on db
    const result = await prisma.properties.create({
      data: { propertyName, price, Location },
    });
    return NextResponse.json({
      message: "Property added successfully",
      property: result,
    });
  } catch (error) {
    console.error("Error adding property: ", error);
    return NextResponse.json(
      { error: "Failed to add property" },
      { status: 500 }
    );
  }
}