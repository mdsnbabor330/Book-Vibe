import { createBrowserRouter } from "react-router";

import MainLayout from './Layout/MainLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import BookPage from './Pages/BookPage.jsx';


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
        Component : BookPage
      }
    ]
  },
]);

export default router;