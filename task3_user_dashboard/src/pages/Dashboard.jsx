import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import TopReport from "../components/dashboard/TopReport";
import Table from "../components/dashboard/Table";
import "../Index.css";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen flex flex-col Poppins bg-[#FAFBFF]">
      <div className="w-full md:flex">
        <Sidebar />
        <div className="flex-1 px-4 mr-12">
          <TopReport />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
