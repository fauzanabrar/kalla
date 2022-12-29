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

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
  const root = createRoot(
    document.getElementById("page-transition") as HTMLElement
  );
  root.render(<PageChange path={url} />);
});
Router.events.on("routeChangeComplete", () => {
  const root = createRoot(
    document.getElementById("page-transition") as HTMLElement
  );
  root.unmount();
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  const root = createRoot(
    document.getElementById("page-transition") as HTMLElement
  );
  root.unmount();
  document.body.classList.remove("body-page-transition");
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
