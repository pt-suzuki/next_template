import * as React from "react";
import NextApp, { AppContext, Container } from "next/app";

export default class App extends NextApp {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const componentGetInitialProps =
      Component.getInitialProps || (() => Promise.resolve());

    const [session, pageProps] = await Promise.all([
      componentGetInitialProps(ctx),
    ]);

    return {
      session,
      pageProps,
    };
  }
}
