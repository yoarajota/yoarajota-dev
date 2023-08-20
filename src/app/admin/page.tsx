import { createClient } from "@vercel/edge-config";
import { Providers } from "app/providers";
import { NextRequest } from "next/server";
import Admin from "sections/admin";
import { cookies } from "next/headers";

export default async function Page(req: NextRequest) {
  const json = await createClient(process.env.EDGE_CONFIG).getAll();
  const auth = cookies().get("auth")?.value === "1";

  console.log(auth, cookies().getAll())

  return (
    <Providers>
      <Admin json={json} auth={auth} />
    </Providers>
  );
}
