import { FaCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-medium text-lg"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-extrabold">
            Kazi <span className="text-green-500">Kitchen</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center bg-slate-200 rounded-full p-3">
            <CiSearch className="text-lg" />
            <input
              type="text"
              className="text-sm bg-transparent outline-none border-none"
              placeholder="search here"
            />
          </div>
          <div className="ml-3 bg-green-300 rounded-full p-2">
            <FaCircleUser className="text-3xl text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
