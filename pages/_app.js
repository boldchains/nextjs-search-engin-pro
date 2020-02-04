import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Router from "next/router";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { makeStore } from "services/store.js";

import PageChange from "components/PageChange/PageChange.js";

import "assets/scss/nextjs-material-kit.scss?v=1.0.0";

Router.events.on("routeChangeStart", url => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(
    <PageChange path={url} />,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

class VavelSearchApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // can despatch common props
    // ctx.store.dispatch({ type: ACTION, payload: {}}); // example

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
