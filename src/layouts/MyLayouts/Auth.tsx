import React from "react";
import Navbar from "../../components/Notus/Navbars/AdminNavbar";

// components

interface AuthProps {
  children: JSX.Element | JSX.Element[];
}

export default function Auth(props: AuthProps) {
  const { children } = props;
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-full min-h-screen w-full py-40">
          <div
            className="bg-blueGray-800 bg-full absolute top-0 h-full w-full bg-no-repeat"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          {children}
        </section>
      </main>
    </>
  );
}
