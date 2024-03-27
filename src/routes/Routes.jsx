import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import MainLayout from "../layout/MainLayout";
import BookDetails from "../pages/BookDetails";
import Errorpage from "../pages/Errorpage";
import ReadBooks from "../components/ReadBooks";
import WishBooks from "../components/WishBooks";
import BestSellingBooks from "../pages/BestSellingBooks";
import TopRatedBooks from "../pages/TopRatedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
        loader: () => fetch("/books.json"),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
            loader: () => fetch("/books.json"),
          },
          {
            path: "wish",
            element: <WishBooks></WishBooks>,
            loader: () => fetch("/books.json"),
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesRead />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/bestselling",
        element: <BestSellingBooks/>,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/toprated",
        element: <TopRatedBooks/>,
        loader: () => fetch("/books.json"),
      }
    ],
  },
]);
