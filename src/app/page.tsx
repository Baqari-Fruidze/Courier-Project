// import { Table } from "antd";
import { getServerSession } from "next-auth";

// export default async function Home() {
//   // const session = await getServerSession(options);
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log(data.slice(0, 10));
//   // const dataSource = [
//   //   {
//   //     key: "1",
//   //     name: "Mike",
//   //     age: 32,
//   //     address: "10 Downing Street",
//   //     email: "megmail.com",
//   //   },
//   //   {
//   //     key: "2",
//   //     name: "John",
//   //     age: 42,
//   //     address: "10 Downing Street",
//   //     email: "shen@gmail.com",
//   //   },
//   // ];

//   const columns = [
//     {
//       title: "userId",
//       dataIndex: "userId",
//       key: "userId",
//     },
//     {
//       title: "id",
//       dataIndex: "id",
//       key: "id",
//     },
//     {
//       title: "title",
//       dataIndex: "title",
//       key: "title",
//     },
//     {
//       title: "body",
//       dataIndex: "body",
//       key: "body",
//     },
//   ];
//   return (
//     <>
//       <h1>main</h1>
//       <Table dataSource={data} columns={columns} className="h-[200px]" />;
//     </>
//   );
// }

import { Table } from "antd";
import { options } from "./api/auth/[...nextauth]/option";

export default async function Home() {
  const session = await getServerSession(options); ///// server side
  console.log(session);
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const columns = [
    {
      title: "userId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "body",
      dataIndex: "body",
      key: "body",
    },
  ];

  return (
    <>
      <h1>main</h1>
      <Table
        dataSource={data.slice(0, 10)} // Slice to reduce data for easier display
        columns={columns}
        scroll={{ y: 300 }} // This sets the table body height to 200px and enables vertical scroll
        pagination={false} // Optionally disable pagination for better scrolling experience
      />
      <h1>{session?.user?.name}</h1>
    </>
  );
}
