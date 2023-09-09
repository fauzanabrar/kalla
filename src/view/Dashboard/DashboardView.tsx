import React from "react";

// layout for page
import AdminWithStats from "../../layouts/MyLayouts/AdminWithStats";
import { DataTableAsset } from "../../components/MyComponent/Shadcn/Table/TableAsset";


export default function DashboardView() {
  return (
    <AdminWithStats>
      <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
        <div className="flex-auto px-4 py-5">
          <DataTableAsset initialPageSize={5} tableName="Barang dan Jasa" />
        </div>
      </div>
    </AdminWithStats>
  );
}

DashboardView.layout = AdminWithStats;
