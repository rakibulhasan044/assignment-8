import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromWish } from "../utils";
import SingleWiseBook from "./SingleWiseBook";
import { AssetContext } from "../pages/ListedBooks";

const WishBooks = () => {
  const filterValue = useContext(AssetContext);
  const [wish, setWish] = useState([]);

  const books = useLoaderData();

  useEffect(() => {
    const storedWishBooksId = getItemFromWish();
    if (books.length > 0) {
      const wishBooks = books.filter((books) =>
        storedWishBooksId.includes(books.bookId)
      );
      setWish(wishBooks);
      if (filterValue === "rating") {
        const sortWishRating = wishBooks.sort((a, b) => {
          return b.rating - a.rating;
        });
        setWish(sortWishRating);
      } else if (filterValue === "year") {
        const sortWishYear = wishBooks.sort((a, b) => {
          return b.yearOfPublishing - a.yearOfPublishing;
        });
        setWish(sortWishYear);
      } else {
        setWish(wishBooks);
      }
    }
  }, [books, filterValue]);

  return (
    <div className="space-y-8 mt-14">
      {wish.map((book) => (
        <SingleWiseBook key={book.bookId} book={book}></SingleWiseBook>
      ))}
    </div>
  );
};

export default WishBooks;
