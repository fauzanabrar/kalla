import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Head from "next/head";
import Router from "next/router";

import PageChange from "../components/PageChange/PageChange";

import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/tailwind.css";
import "../styles/custom.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { ToastContainer } from "react-toastify";

let root: any = null;
let container: any = null;

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");

  if (!root && !container) {
    container = document.getElementById("page-transition") as HTMLElement;
    root = createRoot(container);
    root.render(<PageChange path={url} />);
    // console.log("routeChangeStart1");
  } else {
    root = createRoot(container);
    root.render(<PageChange path={url} />);
    // console.log("routeChangeStart2");
  }
});

Router.events.on("routeChangeComplete", () => {
  if (!root) {
    container = document.getElementById("page-transition") as HTMLElement;
    root = createRoot(container);
    root.unmount();
    // console.log("routeChangeComplete1");
  } else {
    root.unmount();
    // console.log("routeChangeComplete2");
  }
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  if (!root) {
    container = document.getElementById("page-transition") as HTMLElement;
    root = createRoot(container);
    root.unmount();
    // console.log("routeChangeError1");
  } else {
    root.unmount();
    // console.log("routeChangeError2");
  }
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Custom NextJS</title>
        {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </React.Fragment>
  );
}
