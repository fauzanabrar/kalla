import React from "react";

// components

import CardTable from "../../components/Notus/Cards/CardTable";
import Layout from "../../components/layout";

// layout for page

import Admin from "../../layouts/Admin";

export default function Tables() {
  return (
    <Admin>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4">
          <CardTable />
        </div>
        <div className="mb-12 w-full px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </Admin>
  );
}
