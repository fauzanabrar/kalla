import React from "react";

// components

import CardTable from "../../components/Cards/CardTable";
import ApiTable from "../../components/MonitoringContent/ApiTable";

// layout for page

import Admin from "../../layouts/Admin";

export default function Monitoring() {
  return (
    <Admin>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4">
          <ApiTable color="dark" />
        </div>
      </div>
    </Admin>
  );
}
