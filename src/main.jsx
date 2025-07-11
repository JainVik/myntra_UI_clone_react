import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import Bag from "./routes/bag.jsx";
import {RouterProvider , createBrowserRouter} from "react-router-dom";
import Home from "./routes/home.jsx";
import {Provider} from "react-redux";
import myntraStore from "./store/index.js";
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/bag", element: <Bag />, },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider store={myntraStore}>
    <RouterProvider router = {router}/>
    </Provider>
  </React.StrictMode>
);
