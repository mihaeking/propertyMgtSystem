import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();
  console.log({ name, email, password, role });

  if (!name || !email || !password || !role) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.users.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json(
      { error: "Email already registered" },
      { status: 400 }
    );
  }

  const user = await prisma.users.create({
    data: {
      name,
      email,
      password,
      role,
    },
  });

  return NextResponse.json({ id: user.id, email: user.email });
}
