import { NextRequest, NextResponse } from "next/server";
import { encode } from "next-auth/jwt";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = {
    name: "admin",
    sub: body.user_id ?? "40783578-9224-4546-91cf-5fa6d69cabb1",
  };

  const secret = process.env.NEXTAUTH_SECRET as string;

  const token = await encode({
    secret,
    token: user,
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  return NextResponse.json({ token });
}
