import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Best from "../components/Best";

const BestSellingBooks = () => {
  const books = useLoaderData();
  const [top, setTop] = useState([]);

  useEffect(() => {
    let sortedProducts = books.sort((a, b) => {
      return b.sellCount - a.sellCount;
    });
    setTop(sortedProducts);
  }, [books]);

  return (
    <div className="mb-5 px-3">
      <h1 className="text-center text-3xl font-bold my-8">
        Here are our top 10 best selling mangas.
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {top.slice(0, 10).map((p) => (
          <Best key={p.bookId} books={p}></Best>
        ))}
      </div>
    </div>
  );
};

BestSellingBooks.propTypes = {
  books: PropTypes.object,
};

export default BestSellingBooks;
