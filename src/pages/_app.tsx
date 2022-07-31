import * as React from "react";
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import type { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { Provider } from 'react-redux';
import { store } from '~/modules/states';
import ScrollToTop from "~/helpers/scroll_to_top_helper";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #efede8;
    color: #252525;
    font-family: "-apple-system", BlinkMacSystemFont, "Helvetica Neue", "ヒラギノ角ゴ ProN", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  }
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  React.useEffect(() => {
    //accessLogUseCase.accessLog({ path: location.pathname });
    // NOTE: パス変更をフックにアクセスログを送信する
    // 送信するパスは/pc以下のフルパスである必要があるためlocation.pathnameを使用している
    // ただし、locationをフックには使用できないのでrouterをフックに使用している
  }, [router.basePath, router.pathname, router.query]);

  return (
    <>
      <ScrollToTop />
      <Head>
        <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
        <title>NextExample</title>
      </Head>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;