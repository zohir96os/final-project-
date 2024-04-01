import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import {
  Navbar,
  TextInput,
  Button,
  Dropdown,
  Avatar,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { signOutSuccess } from "../redux/user/userSlice";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = useLocation().pathname;
  const [tab, setTab] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
        navigate("/sign-in");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const urlParames = new URLSearchParams(location.search);
    const tabFromUrl = urlParames.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <div>
      <Navbar className="border-b-2">
        <Logo />
        <form onSubmit={handleSubmit}>
          <TextInput
            type="text"
            value={searchTerm}
            placeholder="Search.."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <Button
          className="w-12 h-10  lg:hidden "
          color="gray"
          pill
          href="/search"
        >
          <AiOutlineSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10  sm:inline"
            color="gray"
            pill
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </Button>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="user" img={currentUser.profilePicture} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm ">
                  {currentUser.isAdmin || currentUser.isVerified ? (
                    <span className="flex  items-center gap-.5">
                      @{currentUser.username}
                      <RiVerifiedBadgeFill className="text-blue-500" />
                    </span>
                  ) : (
                    `@${currentUser.username}`
                  )}
                </span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to="/dashboard?tab=profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
              <DropdownDivider />
              <DropdownItem onClick={handleSignOut}>Sign out</DropdownItem>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="cyanToBlue" outline>
                Sign in
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          {currentUser && currentUser.isAdmin ? (
            <Navbar.Link
              active={path === "/dashboard" && tab === "posts"}
              as={"div"}
            >
              <Link to="/dashboard?tab=posts">Posts</Link>
            </Navbar.Link>
          ) : (
            ""
          )}
          {currentUser && currentUser.isAdmin ? (
            <Navbar.Link active={path === "/create-post"} as={"div"}>
              <Link to="/create-post">New Post</Link>
            </Navbar.Link>
          ) : (
            ""
          )}
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
