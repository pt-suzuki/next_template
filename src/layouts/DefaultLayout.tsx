import React from "react";
import Head from "next/head";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

const DefaultLayout = (props) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
