import React from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";

const ReactTableExample = () => {
  // Define columns
  const columns = React.useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Name",
        accessorKey: "name",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Country",
        accessorKey: "country",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  );

  // Define data
  const data = React.useMemo(
    () => [
      {
        id: 1,
        name: "John Doe",
        age: 28,
        email: "john@example.com",
        country: "USA",
        status: "Active",
      },
      {
        id: 2,
        name: "Jane Smith",
        age: 34,
        email: "jane@example.com",
        country: "UK",
        status: "Inactive",
      },
      {
        id: 3,
        name: "Sam Brown",
        age: 23,
        email: "sam@example.com",
        country: "Canada",
        status: "Active",
      },
      {
        id: 4,
        name: "Emily White",
        age: 30,
        email: "emily@example.com",
        country: "Australia",
        status: "Active",
      },
    ],
    []
  );

  // Use the `useReactTable` hook
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        {/* Table Header */}
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* Table Body */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="even:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border border-gray-300 px-4 py-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReactTableExample;
