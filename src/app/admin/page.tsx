import { createClient } from "@vercel/edge-config";
import { Providers } from "app/providers";
import Admin from "sections/admin";
import { cookies } from "next/headers";
import getInformation from "app/api/information/logic";

export default async function Page() {
  const json = await createClient(process.env.EDGE_CONFIG).getAll();
  const information = await getInformation();
  const auth = cookies().get("auth")?.value === "1";

  return (
    <Providers>
      <Admin information={information} json={json} auth={auth} />
    </Providers>
  );
}
