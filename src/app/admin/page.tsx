import { createClient } from "@vercel/edge-config";
import { Providers } from "app/providers";
import Admin from "sections/admin";

export default async function Page() {
  const json = await createClient(process.env.EDGE_CONFIG).getAll();

  return <Providers>
    <Admin json={json} />
  </Providers>
}
