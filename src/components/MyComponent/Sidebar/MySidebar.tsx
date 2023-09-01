/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "../../Dropdowns/NotificationDropdown";
import UserDropdown from "../../Dropdowns/UserDropdown";
import { SidebarContext } from "../../../lib/context/SidebarContext";

interface SidebarProps {
  setSidebarOpen?: any;
  sidebarOpen?: boolean;
}

export default function MySidebar(props: SidebarProps) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  // const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const { sidebarOpen, setSidebarOpen } = props;
  const context = useContext(SidebarContext);

  const {
    activeSubmenuDashboard,
    activeSubmenuBarangJasa,
    setActiveSubmenuDashboard,
    setActiveSubmenuBarangJasa,
  } = context || {
    setActiveSubmenuBarangJasa: () => {},
    setActiveSubmenuDashboard: () => {},
  };

  const [submenuOpenDashboard, setSubmenuOpenDashboard] = React.useState(
    activeSubmenuDashboard === "dashboard" || false
  );
  const [submenuOpenBarangJasa, setSubmenuOpenBarangJasa] = React.useState(
    activeSubmenuBarangJasa === "barangjasa" || false
  );

  const router = useRouter();
  return (
    <>
      <nav
        className={`relative z-10 flex flex-wrap items-center justify-between bg-white py-4 pl-6 pr-0 shadow-xl md:fixed md:bottom-0 md:left-0 md:top-0 md:block md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto ${
          sidebarOpen ? "md:w-64" : "md:w-[90px]"
        }`}
      >
        <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
          {/* Toggler */}
          <button
            className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <div className="flex justify-between">
            <Link
              href="/"
              className={`text-blueGray-600 mr-0 whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:pb-2 ${
                sidebarOpen ? "inline-block" : "hidden"
              }`}
            >
              Notus NextJS
            </Link>
            <button
              className="hidden cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:block"
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* User */}
          <ul className="flex list-none flex-wrap items-center md:hidden">
            <li className="relative inline-block">
              <NotificationDropdown />
            </li>
            <li className="relative inline-block">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "absolute left-0 right-0 top-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="border-blueGray-200 mb-4 block border-b border-solid pb-4 md:hidden md:min-w-full">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="#pablo"
                    className="text-blueGray-600 mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase md:block md:pb-2"
                  >
                    Notus NextJS
                  </Link>
                </div>
                <div className="flex w-6/12 justify-end">
                  <button
                    type="button"
                    className="cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mb-4 mt-6 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 h-12 w-full rounded border border-solid bg-white px-3 py-2 text-base font-normal leading-snug shadow-none outline-none focus:outline-none"
                />
              </div>
            </form>

            {/* Navigation */}
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
              {sidebarOpen ? "Home" : ""}
            </h6>

            <ul className="flex list-none flex-col md:min-w-full md:flex-col">
              <li className="items-center">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!submenuOpenDashboard) {
                      setActiveSubmenuDashboard("dashboard");
                      console.log("activeSubmenu dashboard");
                    } else {
                      setActiveSubmenuDashboard("");
                      console.log("activeSubmenu null");
                    }
                    setSubmenuOpenDashboard(!submenuOpenDashboard);
                    console.log("submenu", !submenuOpenDashboard);
                  }}
                  className={
                    "group flex w-full items-center py-3 text-xs font-bold uppercase transition duration-75 " +
                    (router.pathname.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-home mr-2 text-sm " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300") +
                      (sidebarOpen ? "" : " ml-3 flex-1")
                    }
                  ></i>{" "}
                  <span className="ml-1 flex-1 whitespace-nowrap text-left">
                    {sidebarOpen ? "Dashboard" : ""}
                  </span>
                  <span
                    className={
                      "text-sm " +
                      (sidebarOpen && activeSubmenuDashboard === "dashboard"
                        ? "rotate-180"
                        : "rotate-0") +
                      (!sidebarOpen ? " hidden" : "")
                    }
                  >
                    <svg
                      className={"h-6 w-6 "}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>
                  </span>
                </Link>

                <ul
                  id="dropdown-example"
                  className={
                    "item-center -mt-2 space-y-0 py-1" +
                    (activeSubmenuDashboard !== "dashboard" ? " hidden" : "") +
                    (sidebarOpen ? " pl-5" : " pl-3")
                  }
                >
                  <li>
                    <Link
                      href="/admin/dashboard/all"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf("/admin/dashboard/all") !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "All" : ""}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/dashboard/barang-jasa"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/dashboard/barang-jasa"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Barang dan Jasa" : "B"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/dashboard/maintenance"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/dashboard/maintenance"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Maintenance Asset" : "I"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/dashboard/it-tools"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/dashboard/it-tools"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "IT Tools Asset" : "I"}
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Divider */}
              <hr className="my-4 md:min-w-full" />
              {/* Heading */}
              <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
                {sidebarOpen ? "Asset" : ""}
              </h6>

              <li className="items-center">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!submenuOpenBarangJasa) {
                      setActiveSubmenuBarangJasa("barangjasa");
                      console.log("activeSubmenu barangjasa");
                    } else {
                      setActiveSubmenuBarangJasa("");
                      console.log("activeSubmenu null");
                    }
                    setSubmenuOpenBarangJasa(!submenuOpenBarangJasa);
                    console.log("submenu", !submenuOpenBarangJasa);
                  }}
                  className={
                    "group flex w-full items-center py-3 text-xs font-bold uppercase transition duration-75 " +
                    (router.pathname.indexOf("/admin/asset/barang-jasa") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (router.pathname.indexOf("/admin/asset/barang-jasa") !==
                      -1
                        ? "opacity-75"
                        : "text-blueGray-300") +
                      (sidebarOpen ? "" : " ml-3 flex-1")
                    }
                  ></i>{" "}
                  <span className="ml-1 flex-1 whitespace-nowrap text-left">
                    {sidebarOpen ? "Barang dan Jasa" : ""}
                  </span>
                  <span
                    className={
                      "text-sm " +
                      (sidebarOpen && activeSubmenuBarangJasa === "barangjasa"
                        ? "rotate-180"
                        : "rotate-0") +
                      (!sidebarOpen ? " hidden" : "")
                    }
                  >
                    <svg
                      className={"h-6 w-6 "}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>
                  </span>
                </Link>

                <ul
                  id="dropdown-example"
                  className={
                    "item-center -mt-2 space-y-0 py-1" +
                    (activeSubmenuBarangJasa !== "barangjasa"
                      ? " hidden"
                      : "") +
                    (sidebarOpen ? " pl-5" : " pl-3")
                  }
                >
                  <li>
                    <Link
                      href="/admin/asset/barang-jasa/list"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/asset/barang-jasa/list"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "List" : "P"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/asset/barang-jasa/disetujui"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/asset/barang-jasa/disetujui"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Disetujui" : "B"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/asset/barang-jasa/ditolak"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/asset/barang-jasa/ditolak"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Ditolak" : "I"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/asset/barang-jasa/verifikasi"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/asset/barang-jasa/verifikasi"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Verifikasi" : "I"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/asset/barang-jasa/pengadaan"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/asset/barang-jasa/pengadaan"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Pengadaan" : "I"}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/admin/asset/barang-jasa/selesai"
                      className={
                        "block py-2 text-xs font-bold" +
                        (sidebarOpen ? " ml-2" : " ml-1") +
                        (router.pathname.indexOf(
                          "/admin/asset/barang-jasa/selesai"
                        ) !== -1
                          ? " text-lightBlue-500 hover:text-lightBlue-600"
                          : " text-blueGray-700 hover:text-blueGray-500")
                      }
                    >
                      {sidebarOpen ? "Selesai" : "I"}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
              {sidebarOpen ? "Account" : ""}
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link
                  href="/auth/login"
                  className="block items-center py-3 text-xs font-bold uppercase"
                >
                  <i
                    className={
                      `fas fa-fingerprint text-blueGray-400 mr-2 text-sm` +
                      (sidebarOpen ? "" : " ml-3 flex-1")
                    }
                  ></i>{" "}
                  {sidebarOpen ? "Login" : ""}
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/auth/register"
                  className="block items-center py-3 text-xs font-bold uppercase"
                >
                  <i
                    className={
                      `fas fa-clipboard-list text-blueGray-300 mr-2 text-sm` +
                      (sidebarOpen ? "" : " ml-3 flex-1")
                    }
                  ></i>{" "}
                  {sidebarOpen ? "Register" : ""}
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="text-blueGray-500 block pb-4 pt-1 text-xs font-bold uppercase no-underline md:min-w-full">
              {sidebarOpen ? "Settings" : ""}
            </h6>
            {/* Navigation */}

            <ul className="flex list-none flex-col md:mb-4 md:min-w-full md:flex-col">
              <li className="items-center">
                <Link
                  href="/admin/settings/settings"
                  className={
                    "block items-center py-3 text-xs font-bold uppercase" +
                    (router.pathname.indexOf("/admin/settings/settings") !== -1
                      ? " text-lightBlue-500 hover:text-lightBlue-600"
                      : " text-blueGray-700 hover:text-blueGray-500")
                  }
                >
                  <i
                    className={
                      `fas fa-cog text-blueGray-400 mr-2 text-sm` +
                      (sidebarOpen ? "" : " ml-3 flex-1") +
                      (router.pathname.indexOf("/admin/settings/settings") !==
                      -1
                        ? " text-lightBlue-500 hover:text-lightBlue-600"
                        : " text-blueGray-700 hover:text-blueGray-500")
                    }
                  ></i>{" "}
                  {sidebarOpen ? "SETTINGS" : ""}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
