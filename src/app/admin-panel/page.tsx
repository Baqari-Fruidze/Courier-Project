import React from "react";

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      {/* Register Section */}
      <div className="flex flex-col md:flex-row items-center justify-start bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-xl font-semibold text-gray-800">
          Register Company <span className="mx-2 text-gray-500">Or</span>
        </p>
        <span className="text-lg font-semibold ml-2 text-blue-600 cursor-pointer hover:text-blue-800">
          Register Courier
        </span>
      </div>

      {/* View Company List Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition-colors">
        <p className="text-lg font-semibold text-gray-800 cursor-pointer">
          View Companies
        </p>
      </div>

      {/* View Couriers Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-100 transition-colors">
        <p className="text-lg font-semibold text-gray-800 cursor-pointer">
          View Couriers
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
        <p className="text-lg font-semibold text-gray-800 cursor-pointer">
          View Parcels
        </p>
      </div>
    </div>
  );
}
