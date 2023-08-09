import { getData } from "helpers/fetching";
import All from "sections/all";
import { Providers } from "./providers";

export default async function Page() {
  const data = await getData();

  return (
    <Providers>
      <All {...data} />
    </Providers>
  );
}
