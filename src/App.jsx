import { Route } from "react-router";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Venues from "./routes/Venues";
import Profile from "./routes/Profile";
import { Login } from "./routes/Login";
import Register from "./routes/Register";
import "./App.css";
import Avatar from "./routes/Avatar";
import Add from "./routes/Add";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/venues" element={<Venues />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/add" element={<Add />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
