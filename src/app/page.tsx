import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/option";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <>
      <h1>main</h1>
    </>
  );
}
