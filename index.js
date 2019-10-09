import React from "react";
import { hydrate, render } from "react-dom";
import Home from "./home";

const App = () => {
  return <Home />;
};

const rootElement = document.getElementById("app");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, document.getElementById("app"));
} else {
  render(<App />, document.getElementById("app"));
}
