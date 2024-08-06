import { type Component } from "solid-js";
import { RouteProps, Router } from "@solidjs/router";

import Navbar from "./component/Navbar";
import path from "path";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    component: () => <Home />,
  },
  // {
  //   path: "/projects",
  //   component: () => <div>About</div>,
  // },
];

const App: Component = () => {
  return (
    <>
      <Router root={MainLayout}>{routes}</Router>
    </>
  );
};

export default App;
