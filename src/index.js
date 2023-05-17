import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 引入重置文件
import "normalize.css"
import "@/assets/css/reset.css"
// 引入样式
import "@/assets/css/index.less"

// 引入路由
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// 引入store

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <HashRouter>
        <App></App>
      </HashRouter>
    </Provider>

  </Suspense>


)