import React from "react";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";

// components

// layout for page
import AdminWithStats from "../../layouts/AdminWithStats";

export default function DashboardView() {
  return (
    <AdminWithStats>
      <div className="flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
          <CardLineChart />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardBarChart />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4 xl:mb-0 xl:w-8/12">
          <CardPageVisits />
        </div>
        <div className="w-full px-4 xl:w-4/12">
          <CardSocialTraffic />
        </div>
      </div>
    </AdminWithStats>
  );
}
