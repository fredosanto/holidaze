import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
