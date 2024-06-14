import "./App.scss";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePost from "./SinlePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      index: true,
    },
    {
      path: "/posts",
      element: <Home></Home>,
    },
    {
      path: "/post/:id",
      element: <SinglePost></SinglePost>,
    },
  ]);

  return (
    <>
      <div className="banner">
        <div className="site-name">
          <a href="/posts">Site Name</a>
        </div>
        <div className="tabs">
          <div>Tab 1</div>
          <div>Tab 2</div>
          <div>Tab 3</div>
        </div>
        <button className="search-button">Button</button>
      </div>
      <RouterProvider router={router} />
      <div className="clear"></div>
      <footer>
        <div className="footer-left">
          <div>Site Name</div>
          <div>
            <span className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </span>
          </div>
        </div>
        <div className="footer-right">
          <div>Topic 1</div>
          <div>Topic 2</div>
          <div>Topic 3</div>
        </div>
      </footer>
    </>
  );
}

export default App;
