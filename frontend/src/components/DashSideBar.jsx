import { Sidebar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";

const DashSideBar = () => {
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
    <div>
      <Sidebar className="w-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item
                active={tab === "profile"}
                icon={HiUser}
                label={"User"}
                labelColor="dark"
              >
                Profile
              </Sidebar.Item>
            </Link>
            <Sidebar.Item
              active
              icon={HiArrowSmRight}
              className="cursor-pointer"
            >
              Sign out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DashSideBar;
