import { Outlet } from "react-router-dom";
import Drawe from "./Drawe";
import { useEffect } from "react";

const Dashboard = () => {
    
useEffect(() => {
    document.title= "Task Zone | Dashboard";
  }, []);
    return (

        <div className="flex  gap-10  min-h-screen">
            <Drawe></Drawe>
            <Outlet></Outlet>

        </div>
    );
};

export default Dashboard;