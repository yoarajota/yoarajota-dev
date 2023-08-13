import Comments from "../models/Comments";
import dbConnect from "../../../lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
) {
  try {
    await dbConnect();
    const { name, comment, date } = await req.json();

    const Comment = {
      name,
      comment,
      date,
    };

    await Comments.create(Comment);

    return NextResponse.json(
      { status: "success" },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { status: "error", message: err.message },
      {
        status: 400,
      }
    );
  }
}
