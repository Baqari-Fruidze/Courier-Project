export default async function Home() {
  const res = await fetch("http://localhost:3001/users");
  const data = await res.json();
  console.log(data[0].city);
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id} className="border border-red-900">
            <h1 className="text-3xl text-red-400">{item.address.city}</h1>
            <h2>{item.address.zipcode}</h2>
          </div>
        );
      })}
    </>
  );
}
