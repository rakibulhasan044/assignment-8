
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook';

const BooksCard = () => {

    const books = useLoaderData();
    return (
        <div>
            <h1 className="text-center text-5xl font-bold my-8">Books</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(p => <SingleBook key={p.bookId}
                    books={p}></SingleBook>)
                }
            </div>
        </div>
    );
};

BooksCard.propTypes = {
    books: PropTypes.object
}

export default BooksCard;