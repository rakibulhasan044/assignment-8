import { useLoaderData, useParams } from "react-router-dom";
import { getItemFromRead, saveItemToRead, saveItemToWish } from "../utils";
import toast from "react-hot-toast";

const BookDetails = () => {
  const { bookId } = useParams();
  const books = useLoaderData();
  const idInt = parseInt(bookId);

  const book = books.find((book) => book.bookId === idInt);
  console.log(book);
  const {
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    bookName,
  } = book;

  const handleAddList = () => {
    saveItemToRead(idInt);

    console.log("add");
  };

  const handleWishList = () => {
    const readItem = getItemFromRead();
    const isExist = readItem.find((item) => item === idInt);
    if (!isExist) {
      saveItemToWish(idInt);
      console.log("wish");
    } else {
      return toast.error("Book already read");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-3">
      <div className="flex justify-center items-center bg-slate-100 p-10 sm:p-20 md:py-16 flex-1 rounded-xl ">
        <img
          className="w-[280px] h-[394px] sm:w-[380px] sm:h-[420px] lg:w-[400px] lg:h-[534px] "
          src={image}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-3">
        <h3 className="text-3xl font-semibold">{bookName}</h3>
        <p className="font-semibold">By: {author}</p>
        <hr className="border-b-2 border-dotted bg-slate-100" />
        <p className="font-semibold">{category}</p>
        <hr className="border-b-2 border-dotted bg-slate-100" />
        <p>
          <span className="font-bold">Review: </span>
          {review}
        </p>
        <div className="flex items-center gap-5">
          <h1 className="font-bold inline-block">Tag</h1>
          <ul className="flex gap-4">
            {tags.map((p, idx) => (
              <li
                className="bg-green-100 text-green-500 px-2 py-1 rounded-2xl"
                key={idx}
              >
                #{p}
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-b-2 border-dotted bg-slate-100" />
        <div className="flex justify-between">
          <h1>Number of Pages: </h1>
          <h1 className="font-bold mr-16">{totalPages}</h1>
        </div>
        <div className="flex justify-between gap-5">
          <h1>Publisher: </h1>
          <h1 className="font-bold mr-16">{publisher}</h1>
        </div>
        <div className="flex justify-between gap-5">
          <h1>Year of Publishing: </h1>
          <h1 className="font-bold mr-16">{yearOfPublishing}</h1>
        </div>
        <div className="flex justify-between">
          <h1>Rating: </h1>
          <h1 className="font-bold mr-16">{rating}</h1>
        </div>
        <div className="flex gap-8">
          <button
            onClick={handleAddList}
            className="text-white bg-[#50B1C9] px-4 py-2 rounded-2xl hover:bg-slate-300 hover:text-black"
          >
            Read
          </button>
          <button
            onClick={handleWishList}
            className="text-white bg-[#50B1C9] px-4 py-2 rounded-2xl hover:bg-slate-300 hover:text-black"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
