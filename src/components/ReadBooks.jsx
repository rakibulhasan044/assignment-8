import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromRead } from "../utils";
import SingleReadBook from "./SingleReadBook";

const ReadBooks = () => {
  const [read, setRead] = useState([]);

  const books = useLoaderData();

  useEffect(() => {
    const storedReadBooksId = getItemFromRead();
    if (books.length > 0) {
      const readBooks = books.filter((books) =>
        storedReadBooksId.includes(books.bookId)
      );
      console.log(readBooks);
      setRead(readBooks);
    }
  }, [books]);
  console.log(read, books);
  return (
    <div className="space-y-8 mt-14">
      {read.map((book) => (
        <SingleReadBook key={book.bookId} book={book}></SingleReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
