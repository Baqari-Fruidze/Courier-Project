"use client";
// import { getServerSession } from "next-auth";
import React, { useState } from "react";
// import { options } from "../api/auth/[...nextauth]/option";
// import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Page() {
  // const session = await getServerSession(options); ///// server side
  // console.log(session?.user);
  const router = useRouter();
  const [userData, setUaserData] = useState({
    username: "",
    password: "",
  });
  const inputsData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUaserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await signIn("credentials", {
      username: userData.username,
      password: userData.password,
      redirect: false,
    });

    if (response?.ok) {
      router.push("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={inputsData}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={inputsData}
          />
        </div>
        <button
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 mb-4"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <button className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
          Register
        </button>
      </div>
    </div>
  );
}
