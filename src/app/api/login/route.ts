import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import mongoose from 'mongoose'

export async function POST(req: NextRequest) {
  const { email, password  } = await req.json();

  try {


    const salt = await bcrypt.genSalt(10);

    // const hashedPassword = await bcrypt.hash(password, salt);
    // await Credentials.create({username: email, password: hashedPassword});
  

    // const foundUser = await Credentials.findOne({ username: email });
    // const isPasswordMatch = await bcrypt.compare(password, foundUser.password);

    const { TOKEN_SECRET_KEY } = process.env;

    // if (!isPasswordMatch) {
    //   return NextResponse.json(
    //     { status: "error", message: "Invalid credentials" },
    //     {
    //       status: 401,
    //     }
    //   );
    // }

    const token = jwt.sign(
      { remote_address: req.headers['x-real-ip' as keyof Headers] },
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
    console.log(error)

    return NextResponse.json(
      { status: "error", message: "Error" },
      {
        status: 500,
      }
    );
  }
}