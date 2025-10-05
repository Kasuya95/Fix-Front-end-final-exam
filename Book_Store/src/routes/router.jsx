import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";

// Books
import Books from "../pages/Books/Books";
import AddBook from "../pages/Books/AddBook";
import UpdateBook from "../pages/Books/UpdateBook";

// Journals
import Journals from "../pages/Journals/Journals";
import AddJournal from "../pages/Journals/AddJournal";
import UpdateJournal from "../pages/Journals/UpdateJournal";

// Comics
import Comics from "../pages/Comics/Comics";
import AddComic from "../pages/Comics/AddComic";
import UpdateComic from "../pages/Comics/UpdateComic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // Books
  {
    path: "/books",
    element: <Books />,
  },
  {
    path: "/addbook",
    element: <AddBook />,
  },
  {
    path: "/updatebook/:itemId",
    element: <UpdateBook />,
  },
  // Journals
  {
    path: "/journals",
    element: <Journals />,
  },
  {
    path: "/addjournal",
    element: <AddJournal />,
  },
  {
    path: "/updatejournal/:itemId",
    element: <UpdateJournal />,
  },
  // Comics
  {
    path: "/comics",
    element: <Comics />,
  },
  {
    path: "/addcomic",
    element: <AddComic />,
  },
  {
    path: "/updatecomic/:itemId",
    element: <UpdateComic />,
  },
]);

export default router;
