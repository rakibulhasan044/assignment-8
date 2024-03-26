import { useLoaderData } from "react-router-dom";

const PagesRead = () => {
    const books = useLoaderData();
    console.log(books)
    return (
        <div>
            this is pages to read
        </div>
    );
};

export default PagesRead;