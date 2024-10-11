"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

interface ExcelData {
  [key: string]: string | number;
}

export default function ExcelUploader() {
  const [data, setData] = useState<ExcelData[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    const reader = new FileReader();
    reader.onload = (event: ProgressEvent<FileReader>) => {
      const binaryStr = event.target?.result as string;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData: ExcelData[] = XLSX.utils.sheet_to_json(sheet);
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
  });
  console.log(data);
  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        className="border p-4 border-dashed border-gray-500"
      >
        <input {...getInputProps()} />
        <p>Drag and drop an Excel file here, or click to select one</p>
      </div>
    </div>
  );
}
