"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "flowbite-react";

import { useState } from "react";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const defaultData: Person[] = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "Soykus",
    lastName: "Iglis",
    age: 32,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    header: () => <span>First Name d</span>,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
  }),
  columnHelper.accessor("none", {
    header: "Edit",
    cell: (info) => {
      console.log(info, "info");
      return "skat";
    },
  }),
];

const ProductTable = ({ products }: { products: any }) => {
  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="p-2">
      <Table striped>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Head key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.HeadCell key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.HeadCell>
            ))}
          </Table.Head>
        ))}
        <Table.Body className="divide-y">
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <div className="h-4" />
      <button
        onClick={() => setData([...data, ...data])}
        className="border p-2"
      >
        Rerender
      </button>
    </div>
  );
};

export default ProductTable;
