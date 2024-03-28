import PropTypes from "prop-types";
import { IoLocationOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { IoPeopleSharp } from "react-icons/io5";
const SingleReadBook = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    totalPages,
    publisher,
    rating,
    category,
    yearOfPublishing,
  } = book;
  return (
    <div className="card flex flex-col md:flex-row items-center card-side bg-base-100 shadow-xl border-2 gap-5 p-5">
      <figure className="h-[230px] w-[230px] bg-slate-200 rounded-lg">
        <img className="h-[172px] w-[130px]" src={image} />
      </figure>
      <div className="card-body text-lg">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex flex-col md:flex-row  gap-2  md:gap-10">
          <ul className="flex items-center gap-4">
            {tags.map((tag, idx) => (
              <li key={idx}>#{tag}</li>
            ))}
          </ul>
          <p className="flex gap-3 items-center">
            <IoLocationOutline size={20} />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex items-center ">
          <p className="flex gap-3 items-center">
            <IoPeopleSharp size={25} /> Publisher: {publisher}
          </p>
          <p className="flex gap-3 items-center">
            <RiPagesLine size={25} />
            Pages: {totalPages}
          </p>
        </div>
        <hr className="border-b-2 border-dotted bg-slate-100" />
        <div className="flex gap-6 lg:w-4/6 py-3">
          <p className="px-3 py-2 text-semibold bg-blue-100 text-blue-500 rounded-3xl text-center">
            Category: {category}
          </p>
          <p className="px-3 py-2 text-semibold bg-orange-100 text-orange-500 rounded-3xl text-center">
            Rating: {rating}
          </p>
          <p className="px-3 py-2 text-semibold bg-green-400 text-white rounded-3xl text-center">
            View Details
          </p>
        </div>
      </div>
    </div>
  );
};

SingleReadBook.propTypes = {
  book: PropTypes.object,
};

export default SingleReadBook;
