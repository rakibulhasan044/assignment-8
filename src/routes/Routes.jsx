import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import MainLayout from "../layout/MainLayout";
import BooksCard from "../components/BooksCard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/books.json'),
                children: [
                    {
                        index: true,
                        element: <BooksCard></BooksCard>,
                        //loader: () => fetch('/books.json'),
                    }
                ]
              },
              {
                  path: "/listedbooks",
                  element: <ListedBooks></ListedBooks>
              },
              {
                  path: "pagestoread",
                  element: <PagesRead></PagesRead>
              }
        ]
    }

  ]);
  