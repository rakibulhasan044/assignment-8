import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import SingleBook from "../components/SingleBook";
import { useEffect, useState } from "react";

const TopRatedBooks = () => {
const books = useLoaderData();
    const [top, setTop] = useState([]);

    useEffect(() => {
        console.log(books)
        const topBooks = books.filter(book => book.rating > 4.5);
        setTop(topBooks);
        console.log(topBooks)
    },[books]); 

  console.log(top)
  return (
    <div>
      <h1 className="text-center text-5xl font-bold my-8"> Our Top Books Which Rating are Above 4.5</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {top.map((p) => (
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