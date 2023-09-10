import React from "react";
import CardBarChart from "../../components/Notus/Cards/CardBarChart";
import CardLineChart from "../../components/Notus/Cards/CardLineChart";
import CardPageVisits from "../../components/Notus/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Notus/Cards/CardSocialTraffic";

// components

// layout for page
import AdminWithStats from "../../layouts/AdminWithStats";

export default function Dashboard() {
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
