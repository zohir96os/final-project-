import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashComments from "../components/DashComments";
import Dashbaord from "../components/Dashbaord";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParames = new URLSearchParams(location.search);
    const tabFromUrl = urlParames.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="md-w-56">
        <DashSideBar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* Posts */}
      {tab === "posts" && <DashPosts />}
      {/* Users */}
      {tab === "users" && <DashUsers />}
      {/* Comments */}
      {tab === "comments" && <DashComments />}
      {/* Comments */}
      {tab === "dash" && <Dashbaord />}
    </div>
  );
};

export default Dashboard;
