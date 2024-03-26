import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import MainLayout from "../layout/MainLayout";
import BookDetails from "../pages/BookDetails";
import Errorpage from "../pages/Errorpage";
import ReadBooks from "../components/ReadBooks";
import WishBooks from "../components/WishBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
        loader: () => fetch("/books.json"),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path: 'wish',
            element: <WishBooks></WishBooks>
          }
        ]
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
