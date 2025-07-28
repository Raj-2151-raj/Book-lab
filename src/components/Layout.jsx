// book-lab/src/components/Layout.jsx
// This component serves as a layout wrapper for the application, including the header and footer.

import React from "react";

import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
