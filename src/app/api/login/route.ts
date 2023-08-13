import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import Credentials from "../models/Credentials";
import dbConnect from "lib/dbConnect";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  try {
    await dbConnect()

    const foundUser = await Credentials.findOne({ username: email });
    const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

    const { TOKEN_SECRET_KEY } = process.env;

    if (!isPasswordMatch) {
      return NextResponse.json(
        { status: "error", message: "Invalid credentials" },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      { remote_address: req.headers["x-real-ip" as keyof Headers] },
      String(TOKEN_SECRET_KEY),
      {
        expiresIn: "1h",
      }
    );

    return NextResponse.json(
      { status: "success", token },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { status: "error", message: "Error" },
      {
        status: 500,
      }
    );
  }
}
