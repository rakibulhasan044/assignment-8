import { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export const AssetContext = createContext("all");

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [value, setValue] = useState('all')

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10 bg-slate-100 rounded-xl py-10">
        Manga
      </h1>
      <div className="flex items-center justify-center my-5">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-10 bg-green-400 text-white"
          >
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 gap-3"
          >
            <li>
              <Link
                onClick={() => setValue("all")}
                className="bg-green-400 text-white"
              >
                all
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setValue("rating")}
                className="bg-green-400 text-white"
              >
                By rating
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setValue("year")}
                className="bg-green-400 text-white"
              >
                By published year
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read List Manga</span>
        </Link>
        <Link
          to={"wish"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Wish List Manga</span>
        </Link>
      </div>
      <AssetContext.Provider value={value}>
        <Outlet />
      </AssetContext.Provider>
      <div></div>
    </div>
  );
};

export default ListedBooks;
