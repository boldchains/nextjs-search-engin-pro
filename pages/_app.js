import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { makeStore } from "services/store.js";

import "assets/scss/nextjs-material-kit.scss?v=1.0.0";

class VavelSearchApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(VavelSearchApp);
