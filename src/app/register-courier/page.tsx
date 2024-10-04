import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Register Courier
      </h1>
      <form className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
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
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your last name"
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
