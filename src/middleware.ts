import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);

  if (
    request.nextUrl.pathname.startsWith("/api/verify") ||
    request.nextUrl.pathname.startsWith("/api/config")
  ) {
    let r = await middlewareTestToken(request);
    if (r) {
      return r;
    }
  }

  if (request.nextUrl.pathname === "/admin") {
    let r = await middlewareAlreadyAuth(request);
    if (r) {
      return r;
    }
  }
}

export const config = {
  matcher: ["/api/verify", "/api/config", "/admin"],
};

async function middlewareTestToken(request: NextRequest) {
  const token = request.cookies?.get("token")?.value;

  if (!token) {
    return NextResponse.json(
      { status: "error", message: "Unauthenticated" },
      { status: 401 }
    );
  }

  try {
    await jwtVerify(
      token,
      new TextEncoder().encode(String(process.env.TOKEN_SECRET_KEY))
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "Erro" },
      { status: 401 }
    );
  }
}

async function middlewareAlreadyAuth(request: NextRequest) {
  const token = request.cookies?.get("token")?.value;
  if (token) {
    try {
      await jwtVerify(
        token,
        new TextEncoder().encode(String(process.env.TOKEN_SECRET_KEY))
      );
      const response = NextResponse.next();
      response.cookies.set({
        name: "auth",
        value: "1",
        maxAge: 10
      });
      return response;
    } catch (error) {}
  }
}
