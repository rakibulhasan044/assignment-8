import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemFromLS } from "../utils";


const ListedBooks = () => {

    const books = useLoaderData();

    useEffect(() => {
        const storedBooksId = getItemFromLS();
        if( books.length > 0) {
            const addedbooks = books.filter(book => storedBooksId.includes(book.bookId))
            console.log(addedbooks)
        }
    },[books])
    return (
        <div>
            this is listed books
        </div>
    );
};

export default ListedBooks;