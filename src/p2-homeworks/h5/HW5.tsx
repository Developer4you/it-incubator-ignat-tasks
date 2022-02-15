import React from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import Header from "./Header";
import MainRoutes from "./MainRoutes";

function HW5() {
  return (
    <div>
      {/*в gh-pages лучше работает HashRouter*/}
      <HashRouter>

        <Header />

        <MainRoutes />

      </HashRouter>

    </div>
  );
}

export default HW5;
