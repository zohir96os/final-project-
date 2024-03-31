import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
export default function Logo() {
  return (
    <div>
      <Link
        to="/"
        className=" flex items-center self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className=" font-semibold  px-2 py-1 flex items-center text-green-600 rounded-lg">
          <FaBookOpen className="text-blue-500 text-3xl mr-1 " /> Blog
          <span>OS</span>
        </span>
      </Link>
    </div>
  );
}
