import React from "react";
import { Provider } from "react-redux";
import { store } from "services/store.js";
import Home from "./home.js";

const Index = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default Index;
