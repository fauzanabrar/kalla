"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  Table as TableType,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../../../ui/button";
import { Input } from "@/components/ui/input";
import { DialogDemo } from "../Dialog/MyDialog";
import { SelectPageSize } from "../Select/SelectPageSize";
import { Pagination } from "../Pagination/Pagination";
import StatusItem from "../../Status/StatusItem";
import useStore from "@/lib/zustand/store";
import { fakeAssetData } from "@/lib/fake-data";

interface nameType {
  row: {
    original: {
      name: string;
      jenis: string;
    };
  };
}

interface Step {
  type: string; // This property identifies the type of step
  rejected: boolean; // Indicates whether the step is rejected
  
}
interface StepInfo {
  currentStep: "first" | "second" | "third" | "fourth" | "done" | "failed";
  currentMessage:
  | "Menunggu RAB"
  | "Menunggu PR"
  | "PR diupload"
  | "Diverifikasi"
  | "Pengadaan"
  | "Selesai"
  | "Ditolak";
}


interface PermohonanStep extends Step {
  type: "permohonan";
  name: string;
  user: string;
  filePermohonan: File;
  createdAt: Date;
  updatedAt: Date;
  approvedDate: Date;
}

interface PRStep extends Step {
  type: "pr";
  name: string;
  user: string;
  filePR: File;
  createdAt: Date;
  updatedAt: Date;
  approvedDate: Date;
}

interface RABStep extends Step {
  type: "rab";
  name: string;
  user: string;
  fileRAB: File;
  createdAt: Date;
  updatedAt: Date;
  approvedDate: Date;
}

interface VerifkasiStep extends Step {
  type: "verifikasi";
  name: string;
  user: string;
  fileVerifikasi: File[];
  createdAt: Date;
  updatedAt: Date;
  approvedDate: Date;
}

interface PengadaanStep extends Step {
  type: "pengadaan";
  name: string;
  user: string;
  filePengadaan: File[];
  createdAt: Date;
  updatedAt: Date;
  approvedDate: Date;
}

export type Asset = {
  id: string;
  name: string;
  jenis: string;
  user: string;
  sbu: string;
  status: StepInfo;
  completedSteps: Step[];
  queue: number;
};

type PropsType = {
  tableName: string;
  initialPageSize: number;
};

export function DataTableAsset({ initialPageSize, tableName }: PropsType) {
  const {fakeData, setFakeData, add: addFakeData}: any = useStore();
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const changePageSize = (pageSize: number, table: TableType<Asset>) => {
    table.setPageSize(pageSize);
  };

  const columns: ColumnDef<Asset>[] = React.useMemo(() => {
    return [
      {
        accessorKey: "name",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Name
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }: nameType) => (
          <div>
            <div className="whitespace-nowrap capitalize">
              {row.original.name}
            </div>
            <div className="capitalize text-neutral-400">
              {row.original.jenis}
            </div>
          </div>
        ),
      },
      {
        accessorKey: "user",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              User
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("user")}</div>
        ),
      },
      {
        accessorKey: "sbu",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              SBU
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("sbu")}</div>
        ),
      },
      {
        accessorKey: "status",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              Status
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          );
        },
        cell: ({ row }) => {
          const original = row.original;
          return (
            <StatusItem
              status={original.status.currentMessage}
              variant={original.status.currentStep}
            />
          );
        },
      },
      {
        accessorKey: "queue",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
              className="w-full"
            >
              Queue
              <ArrowUpDown className="h-4" />
            </Button>
          );
        },
        cell: ({ row }) => (
          <div className="text-center capitalize">{row.getValue("queue")}</div>
        ),
      },
      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          return (
            <div className="flex justify-center">
              <DialogDemo />
              <Button
                onClick={() => {
                  console.log(row.original);
                  addFakeData({ ...row.original});
                }}
              >
                Add
              </Button>
            </div>
          );
        },
      },
    ];
  }, [fakeData]);

  React.useEffect(() => {
    setFakeData(fakeAssetData);
  }, []);

  const table: TableType<Asset> = useReactTable({
    data: fakeData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: initialPageSize,
      },
    },
  });

  return (
    <div className="w-full">
      <div>
        <p className="px-1 text-2xl">{tableName}</p>
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter name..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex flex-wrap-reverse items-center justify-start space-x-2 py-4 sm:justify-end">
        <div className="mt-6 flex-1 text-sm text-muted-foreground sm:mt-0">
          <span>Page per row : </span>
          <SelectPageSize
            onValueChange={(value: string) =>
              changePageSize(parseInt(value), table)
            }
            defaultValue="5"
          />
        </div>
        <div className="space-x-2">
          <Pagination table={table} />
        </div>
      </div>
    </div>
  );
}
