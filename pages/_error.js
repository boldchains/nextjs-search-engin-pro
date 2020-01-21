import React, { Component } from "react";
import Router from "next/router";

class _error extends Component {
  componentDidMount = () => {
    Router.push("/");
  };

  render() {
    return <div />;
  }
};

export default _error;
