import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: Request) {
  const token = request.headers.get("authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json(
      { status: "error", message: "Unauthenticated" },
      { status: 401 }
    );
  }

  try {
    jwt.verify(token, String(process.env.TOKEN_SECRET_KEY));
    return NextResponse.next(request);
  } catch (error) {
    console.log("denied!", error)
    return NextResponse.json(
      { status: "error", message: "Erro" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/verify", "/api/config"],
};
