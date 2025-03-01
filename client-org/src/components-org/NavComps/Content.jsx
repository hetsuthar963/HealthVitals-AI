import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Content/Sidebar";
const Content = () => {
  return (
    <div className="w-full flex-col lg:flex-row flex overflow-y-auto h-[calc(100vh-120px)]">
      {/* h-[calc(100vh-120px)] */}
      <Sidebar />
      <div className="p-4 border-[1px] w-[95%] m-2 overflow-y-auto flex    ">
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
