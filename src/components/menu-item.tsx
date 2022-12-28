import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export interface Menu {
  icon: (props: { className: string }) => JSX.Element;
  title: string;
  href: string;
  isOpen?: boolean;
  submenu?: boolean;
  submenuItem?: any;
}

function MenuItem(props: Menu) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={props.href}
        className={`relative flex rounded py-3 px-4 ${
          router.route == props.href ? "button-text bg-primary " : "opacity-75 hover:bg-primary"
        }`}
      >
        {router.route == props.href && (
          <span className="absolute left-0 top-1/2 h-9 w-[6px] -translate-y-1/2 rounded bg-white"></span>
        )}
        <props.icon className={`${props.isOpen ? "mr-3" : "flex-1"}`} />
        {props.isOpen ? props.title : ""}
      </Link>
    </li>
  );
}

export default MenuItem;
