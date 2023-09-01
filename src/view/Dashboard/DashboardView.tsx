import React from "react";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";

// components

// layout for page
import AdminWithStats from "../../layouts/MyLayouts/AdminWithStats";
import { DataTableAsset } from "../../components/MyComponent/Shadcn/Table/TableAsset";

export default function DashboardView() {
  return (
    <AdminWithStats>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <DataTableAsset initialPageSize={5} tableName="Barang dan Jasa" />
          </div>
      </div>
    </AdminWithStats>
  );
}

DashboardView.layout = AdminWithStats;