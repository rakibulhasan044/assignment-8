import { useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getItemFromRead, getItemFromWish } from "../utils";

const ListedBooks = () => {
  const [read, setRead] = useState([]);
  const [wish, setWish] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const books = useLoaderData();

  useEffect(() => {
    const storedReadBooksId = getItemFromRead();
    if (books.length > 0) {
      const readBooks = books.filter((book) =>
        storedReadBooksId.includes(book.bookId)
      );
      console.log(readBooks);
      setRead(readBooks);
    }

    const storedWishBooksId = getItemFromWish();
    if (books.length > 0) {
      const wishBooks = books.filter((books) =>
        storedWishBooksId.includes(books.bookId)
      );
      console.log(wishBooks);
      setWish(wishBooks);
    }
  }, [books]);
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
          className={`flex items-center px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Architecto</span>
        </Link>
        <Link
        to={'wish'}
        onClick={() => setTabIndex(1)}
          className={`flex items-center px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Corrupti</span>
        </Link>
      </div>
      <Outlet/>
      <div>
        
      </div>
    </div>
  );
};

export default ListedBooks;
