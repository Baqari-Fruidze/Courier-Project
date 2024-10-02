import { Table } from "antd";

export default async function Home() {
  // const session = await getServerSession(options);
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
      email: "megmail.com",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
      email: "shen@gmail.com",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
  ];
  return (
    <>
      <h1>main</h1>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
}
