
import "./App.scss";
import Home  from "./Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePost from "./SinlePost";

function App() {

  const router = createBrowserRouter([
    {
      path: "/posts",
      element: <Home></Home>,
    },
    {
      path:"/post/:id",
      element: <SinglePost></SinglePost>
    }
  ]);

  return (
    <>
      <div className="banner">
        <div className="site-name"><a href="/posts">Site Name</a></div>
        <div className="tabs">
          <div>Tab 1</div>
          <div>Tab 2</div>
          <div>Tab 3</div>
        </div>
        <button className="search-button">Button</button>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

