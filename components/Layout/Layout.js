import React, { Component } from "react";
import Head from "next/head";

import Navbar from "../Navbar/Navbar";

class Layout extends Component {
  render(props) {
    return (
      <div style={{ marginTop: "90px" }}>
        <Head {...props}>
          <title>Search Vavel</title>
        </Head>
        <Navbar {...props} />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
