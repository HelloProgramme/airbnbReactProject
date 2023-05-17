import React, { memo } from "react";
import HelloWorld from "components/hello-world";
import { useRoutes } from "react-router-dom";
import routes from "@/router";
const App = memo(() => {
  return (
    <div>
      <div className="app">
        <div className="header">header</div>
        <div className="page">{useRoutes(routes)}</div>
        <div className="footer"></div>
      </div>

      <HelloWorld></HelloWorld>
    </div>
  );
});

export default App;
