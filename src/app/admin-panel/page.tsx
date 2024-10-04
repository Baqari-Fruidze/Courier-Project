import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6 space-y-6 flex flex-col gap-2">
      {/* Main registration card */}
      <div className="flex flex-col md:flex-row items-center justify-start bg-gray-100 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-200 hover:shadow-xl">
        <Link href="/register-company">
          <span className="text-lg font-semibold text-gray-800 cursor-pointer mx-2 px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-gray-300 transition-all duration-300">
            Register Company
          </span>
        </Link>

        <span className="mx-4 text-gray-500 font-medium text-[18px]">Or</span>

        <Link href="/register-courier">
          <span className="text-lg font-semibold text-blue-600 cursor-pointer mx-2 px-3 py-2 rounded-lg hover:text-[#121212] hover:bg-gray-300 transition-all duration-300">
            Register Courier
          </span>
        </Link>
      </div>

      {/* Companies Card */}
      <Link href="/companies">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 hover:shadow-xl cursor-pointer">
          <p className="text-lg font-semibold text-gray-800">Companies</p>
        </div>
      </Link>

      {/* Couriers Card */}
      <Link href="/couriers">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 hover:shadow-xl cursor-pointer">
          <p className="text-lg font-semibold text-gray-800">Couriers</p>
        </div>
      </Link>

      {/* Parcels Card */}
      <Link href="/parcels">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-100 hover:scale-105 hover:shadow-xl cursor-pointer">
          <p className="text-lg font-semibold text-gray-800">Parcels</p>
        </div>
      </Link>
    </div>
  );
}
