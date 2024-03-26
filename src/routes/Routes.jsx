import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import MainLayout from "../layout/MainLayout";
import BookDetails from "../pages/BookDetails";
import Errorpage from "../pages/Errorpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: () => fetch("/books.json"),
    errorElement: <Errorpage/>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/listedbooks",
        element: <ListedBooks />,
      },
      {
        path: "/pagestoread",
        element: <PagesRead />,
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      }
    ],
  },
]);
