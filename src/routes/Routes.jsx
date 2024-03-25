import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home'
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
  