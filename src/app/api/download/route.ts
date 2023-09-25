import { defaultResponse } from "asset/types";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest) {
  let { lang } = await req.json();
  const filePath = path.join(process.cwd(), `./src/files/${lang}.pdf`);

  try {
    let res = new Response;
    const imageBuffer = fs.createReadStream(filePath).on("open", () => {
      res.headers.set("Content-Type", "application/pdf");
      imageBuffer.pipe(res);
    });
  } catch (e) {}
}
