import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import HomePage from "../Pages/HomePage.jsx";
import NotFound from "../Pages/NotFound.jsx";
import BookDetails from "../Pages/BookDetails.jsx";
import Books from "../components/books/Books.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index : true,
        Component : HomePage
      },
      {
        path : '/books',
        Component : Books
      },
      {
        path : '/bookdetails/:bookId',
        Component : BookDetails,
        loader : ()=>fetch('/booksData.json')
      },
    ],
    errorElement : <NotFound></NotFound>

  },
]);

export default router;