import React from "react";
import { Button } from "../../../../../@/components/ui/button";

type PropsType = {
  table: any;
};

export default function Pagination({ table }: PropsType) {
  const page = table.getState().pagination.pageIndex + 1;
  const maxPage = table.getPageCount();
  console.log(table.getPageCount());

  const changeCurrentPage = (page: number, table: any) => {
    table.setPageIndex(page);
  };

  return (
    <div className="flex gap-1">
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </Button>
      {
        Array.from({ length: maxPage }, (_, i) => i + 1).map((item, index) => {
          return (
            <Button
              key={index}
              variant={page === item ? "default" : "outline"}
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                changeCurrentPage(index, table);
              }}
            >
              {item}
            </Button>
          );
        })
      }
      <Button
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </Button>
    </div>
  );
}
