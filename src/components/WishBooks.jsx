import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromWish } from "../utils";
import SingleWiseBook from "./SingleWiseBook";

const WishBooks = () => {
  const [wish, setWish] = useState([]);

  const books = useLoaderData();

  useEffect(() => {
    const storedWishBooksId = getItemFromWish();
    if (books.length > 0) {
      const wishBooks = books.filter((books) =>
        storedWishBooksId.includes(books.bookId)
      );
      setWish(wishBooks);
    }
  }, [books]);
  
  return (
    <div className="space-y-8 mt-14">
      {wish.map((book) => (
        <SingleWiseBook key={book.bookId} book={book}></SingleWiseBook>
      ))}
    </div>
  );
};

export default WishBooks;
