import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigationBar";
const Layout = () => {
  return (
    <>
      <Navigation /> <Outlet />
    </>
  );
};
export default Layout;
