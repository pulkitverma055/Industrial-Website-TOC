import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Capabilities } from "./components/pages/Capabilities";
import { Products } from "./components/pages/Products";
import { Quality } from "./components/pages/Quality";
import { Contact } from "./components/pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "capabilities", Component: Capabilities },
      { path: "products", Component: Products },
      { path: "quality", Component: Quality },
      { path: "contact", Component: Contact },
    ],
  },
]);
