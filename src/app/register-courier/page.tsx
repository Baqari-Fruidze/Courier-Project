"use client";
import hide from "../../images/inputhide.svg";
import show from "../../images/inputShow.svg";
import { ICourier } from "@/types/Courier";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { courierScema } from "@/scema/ScemaCourier";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [hidePass, setHidePas] = useState(true);
  const [RhidePass, setRHidePas] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICourier>({ resolver: yupResolver(courierScema) });

  const inputsData: SubmitHandler<ICourier> = (data) => console.log(data);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Register Courier
      </h1>
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        onSubmit={handleSubmit(inputsData)}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`outline-none mt-1 block w-full border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Enter your name"
            {...register("name")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className={`outline-none mt-1 block w-full border ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Enter your last name"
            {...register("lastName")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            className={`outline-none mt-1 block w-full border ${
              errors.phoneNumber ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Email
          </label>
          <input
            type="text"
            id="address"
            className={`outline-none mt-1 block w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Enter your email"
            {...register("email")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="username"
          >
            UserName
          </label>
          <input
            type="text"
            id="username"
            className={`outline-none mt-1 block w-full border ${
              errors.userName ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Enter your username"
            {...register("userName")}
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type={`${hidePass ? "password" : "text"}`}
            id="password"
            className={`outline-none mt-1 block w-full border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Enter your password"
            {...register("password")}
          />
          {hidePass ? (
            <Image
              src={hide}
              width={24}
              height={24}
              alt=" hide icon"
              className="absolute top-[50%] right-6"
              onClick={() => setHidePas((prev) => !prev)}
            ></Image>
          ) : (
            <Image
              src={show}
              width={24}
              height={24}
              alt="show Icon"
              className="absolute top-[50%] right-6"
              onClick={() => setHidePas((prev) => !prev)}
            ></Image>
          )}
        </div>
        <div className="mb-6 relative">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="repeatPassword"
          >
            Repeat Password
          </label>
          <input
            type={RhidePass ? "password" : "text"}
            id="repeatPassword"
            className={`outline-none mt-1 block w-full border ${
              errors.Rpassword ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm p-2`}
            placeholder="Repeat your password"
            {...register("Rpassword")}
          />
          {RhidePass ? (
            <Image
              src={hide}
              width={24}
              height={24}
              alt=" hide icon"
              className="absolute top-[50%] right-6"
              onClick={() => setRHidePas((prev) => !prev)}
            ></Image>
          ) : (
            <Image
              src={show}
              width={24}
              height={24}
              alt="show Icon"
              className="absolute top-[50%] right-6"
              onClick={() => setRHidePas((prev) => !prev)}
            ></Image>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
}
