/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Link from "next/link";

import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footers/Footer";
import DashboardView from "../view/Dashboard/DashboardView";

export default function Index() {
  return (
    <>
      <DashboardView/>
    </>
  );
}
