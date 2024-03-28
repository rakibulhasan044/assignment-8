import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleBook = ({ books }) => {
  const { bookId, image, bookName, author, rating, tags, category } = books;
  return (
    <Link
      to={`/bookdetails/${bookId}`}
      className=" shadow-xl p-5 space-y-4 border-2 rounded-xl"
    >
      <figure className="flex items-center justify-center bg-slate-100 rounded-xl">
        <img className="h-[180px] w-[140px] my-5 " src={image} />
      </figure>
      <ul className="flex gap-4">
        {tags.map((tag, idx) => (
          <li
            key={idx}
            className="bg-green-100 text-[#23BE0A] py-1 px-3 rounded-2xl font-medium"
          >
            {tag}
          </li>
        ))}
      </ul>
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{bookName}</h3>
      <p className="font-medium">By: {author}</p>
      <hr className="bg-slate-100 border-dotted" />
      <div className="flex justify-between items-center">
        <p>{category}</p>
        <p className="flex gap-5 items-center">
          <span>{rating}</span> <FaRegStar size={20} />
        </p>
      </div>
    </Link>
  );
};

SingleBook.propTypes = {
  books: PropTypes.object,
};
export default SingleBook;
