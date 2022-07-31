import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

interface Props {
  locale: 'en-US' | 'ja-JP';
}

class CustomDocument extends Document<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <link rel="shortcut icon" type="image/x-icon" href="/pc/favicon.ico" />
          <meta name="theme-color" content="#087da1" key="themeColor" />
        </Head>å
        <body>åå
          <Main />
          <NextScript />
        </body>
        <style>
          {`
            html {
              height: 100%;
              margin: 0;
            }
            body {
              height: 100%;
              margin: 0;
            }
          `}
        </style>
      </Html>
    );
  }
}

export default CustomDocument;