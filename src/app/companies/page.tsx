import ExcelUploader from "@/components/ExcelelUploadInput";
import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Link href={`/Parcels`}>My Parcels</Link>
      <ExcelUploader />
    </div>
  );
}
