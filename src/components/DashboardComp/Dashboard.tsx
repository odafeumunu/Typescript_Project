import { useState } from "react";
import Header from "../HeaderComp/Header";
import Sidebar from "../SidebarComp/Sidebar";
import Content from "../ContentComp/Content";
import { Helmet } from "react-helmet";
import { User } from "../mockData/type.tsx";


function Dashboard() {
  // Use array destructuring to assign the state and updater function
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [filteredUsers] = useState<User[]>([]); // Use the User type

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <title>Landsqr Assessment || Dashboard Page</title>
      </Helmet>
      <div className="dashboard">
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        <Content filteredUsers={filteredUsers} children={undefined} />
      </div>
    </>
  );
}

export default Dashboard;
