import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-full bg-gray-100 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
