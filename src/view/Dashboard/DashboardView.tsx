import React from "react";
import CardBarChart from "../../components/Cards/CardBarChart";
import CardLineChart from "../../components/Cards/CardLineChart";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic";

// components

// layout for page
import AdminWithStats from "../../layouts/MyLayouts/AdminWithStats";

export default function DashboardView() {
  return (
    <AdminWithStats>
    </AdminWithStats>
  );
}

DashboardView.layout = AdminWithStats;