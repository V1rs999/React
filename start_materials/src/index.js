import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Pages/Header/Header";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Welcome from "./Pages/Welcome/Welcome";
import About from "./Pages/About/About";
import Community from "./Pages/Community/Community";
import Resources from "./Pages/Resources/Resources";
import StateHook from "./Pages/StateHookPage/StateHook";
import ErrorPage from "./Pages/Error/Error";
import Users from "./Pages/User/User";
import UserPage from "./Pages/User/UserPage";
import "./global.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const url = "https://jsonplaceholder.typicode.com/users";

const Root = () => {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Welcome />} />
      <Route path="/statehooks" element={<StateHook />} />
      <Route path="/community" element={<Community />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/users" element={<Users fetchUsers={fetchUsers} />} />
      <Route
        path="/users/:userId"
        loader={loader}
        element={<UserPage />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

function fetchUsers() {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
function loader({ params }) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const user = data.filter((e) => e.id === +params.userId);
      return user[0];
    });
}
