import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import SingleBook from "../components/SingleBook";
import { useEffect, useState } from "react";

const TopRatedBooks = () => {
const books = useLoaderData();
    const [top, setTop] = useState([]);

    useEffect(() => {
      let sortedProducts = books.sort((a, b) => {
        return b.rating - a.rating;
      });
      setTop(sortedProducts);
    }, [books]);

  console.log(top)
  return (
    <div>
      <h1 className="text-center text-3xl font-semibold my-8"> Our 10 top rated manga</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {top.slice(0,10).map((p) => (
          <SingleBook key={p.bookId} books={p}></SingleBook>
        ))}

      </div>
    </div>
  );
};

TopRatedBooks.propTypes = {
  books: PropTypes.object,
};

export default TopRatedBooks;