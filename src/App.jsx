import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import Home from "./routes/Home";
import ErrorPage from "./routes/ErrorPage";
import Venues from "./routes/Venues";
import { Venue } from "./routes/Venue";
import { Booking } from "./routes/Booking";
import { UpdateBooking } from "./routes/UpdateBooking";
import Profile from "./routes/Profile";
import { Admin } from "./routes/Admin";
import { Login } from "./routes/Login";
import Register from "./routes/Register";
import Avatar from "./routes/Avatar";
import Add from "./routes/Add";
import { Manage } from "./routes/Manage";
import { UpdateVenue } from "./routes/UpdateVenue";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<Layout />} errorElement={<ErrorPage />}> */}
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/venue/:venueId" element={<Venue />} />
        <Route path="/booking/:venueId" element={<Booking />} />
        <Route path="/reservation/:bookingId" element={<UpdateBooking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/add" element={<Add />} />
        <Route path="/manage/:venueId" element={<Manage />} />
        <Route path="/update/:venueId" element={<UpdateVenue />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
