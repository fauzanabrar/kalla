import React from "react";
import MySidebar from "../../components/MyComponent/Sidebar/MySidebar";
import AdminNavbar from "../../components/Notus/Navbars/AdminNavbar";
import HeaderStats from "../../components/Notus/Headers/HeaderStats";
import FooterAdmin from "../../components/Notus/Footers/FooterAdmin";

// components

interface AdminProps {
  children: JSX.Element | JSX.Element[];
}
export default function AdminWithStats(props: AdminProps) {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  return (
    <>
      <MySidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div
        className={
          "bg-blueGray-100 relative z-0" +
          (sidebarOpen ? " md:ml-64" : " md:ml-[90px]")
        }
      >
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="mx-auto -mt-24 mb-16 w-full px-4 md:px-10">
          {children}
        </div>
      </div>
    </>
  );
}
