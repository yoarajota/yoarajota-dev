import { createClient } from "@vercel/edge-config";
import Admin from "sections/admin";

export default async function Page() {
  const json = await createClient(process.env.EDGE_CONFIG).getAll();

  return <Admin json={json} />;
}
