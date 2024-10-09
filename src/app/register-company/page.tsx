"use client";
import { ICompany } from "@/types/company";
import { useForm, SubmitHandler } from "react-hook-form";
export default function Page() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ICompany>();
  const inputsData: SubmitHandler<ICompany> = (data) => console.log(data);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Register Company
      </h1>
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        onSubmit={handleSubmit(inputsData)}
      >
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1  block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your company name"
            {...register("companyName")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your address"
            {...register("email")}
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your phone number"
            {...register("phoneNumber")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your city"
            {...register("city")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="street"
          >
            Street
          </label>
          <input
            type="text"
            id="street"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your street"
            {...register("street")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="houseNumber"
          >
            House Number
          </label>
          <input
            type="text"
            id="houseNumber"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your house number"
            {...register("houseNumber")}
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your username"
            {...register("userName")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
            {...register("password")}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="repeatPassword"
          >
            Repeat Password
          </label>
          <input
            type="password"
            id="repeatPassword"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Repeat your password"
            {...register("Rpassword")}
          />
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
