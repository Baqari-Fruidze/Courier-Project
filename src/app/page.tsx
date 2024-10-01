import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/option";

export default async function Home() {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <>
      <h1>loged in</h1>
      <p>{session?.user?.name}</p>
    </>
  );
}
