import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10 bg-slate-100 rounded-xl py-10">
        Books
      </h1>
      {/* tab */}

      <div className="flex">
        <Link
          to=""
          onClick={() => setTabIndex(0)}
          className={`flex items-center px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Read List Books</span>
        </Link>
        <Link
          to={"wish"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } dark:border-gray-600 dark:text-gray-600`}
        >
          <span>Wish List Books</span>
        </Link>
      </div>
      <Outlet />
      <div></div>
    </div>
  );
};

export default ListedBooks;
