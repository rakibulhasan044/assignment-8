import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromRead } from "../utils";
import SingleReadBook from "./SingleReadBook";
import { AssetContext } from "../pages/ListedBooks";

const ReadBooks = () => {
  const filterValue = useContext(AssetContext);
  const [allRead, setAllRead] = useState([]);
  const books = useLoaderData();

  useEffect(() => {
    const storedReadBooksId = getItemFromRead();
    if (books.length > 0) {
      const readBooks = books.filter((books) =>
        storedReadBooksId.includes(books.bookId)
      );
      setAllRead(readBooks);
      if (filterValue === "rating") {
        const sortRating = readBooks.sort((a, b) => {
          return b.rating - a.rating;
        });
        setAllRead(sortRating);
      } else if (filterValue === "year") {
        const sortYear = readBooks.sort((a, b) => {
          return b.yearOfPublishing - a.yearOfPublishing;
        });
        setAllRead(sortYear);
      } else {
        setAllRead(readBooks);
      }
    }
  }, [books, filterValue]);

  return (
    <div className="space-y-8 mt-14">
      {allRead.map((book) => (
        <SingleReadBook key={book.bookId} book={book}></SingleReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
