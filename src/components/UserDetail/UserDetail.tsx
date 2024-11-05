import { useState } from "react";
import Header from "../HeaderComp/Header";
import Sidebar from "../SidebarComp/Sidebar";
import { Helmet } from "react-helmet";
import ContentDetail from "../ContentDetail/ContentDetail";

function UserDetail () {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Helmet>
        <title>Landsqr Assessment || User Datails Page</title>
      </Helmet>
      <div className="dashboard">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <ContentDetail />
      </div>
    </>
  );
};

export default UserDetail;
