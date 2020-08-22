import React from "react";
import Head from "next/head";
import { Footer } from "../components/organisms/Footer";
import { Header } from "../components/organisms/Header";

export class DefaultLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}
