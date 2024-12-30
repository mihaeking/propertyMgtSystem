import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../../../../lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const user = await prisma.users.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password!))) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "7h" }
  );

  const response = NextResponse.json({ message: "Login successful" });
  localStorage.setItem("token", token);
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
    path: "/",
  });

  return response;
}
