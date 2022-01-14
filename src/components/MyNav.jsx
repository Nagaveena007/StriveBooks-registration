import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import scifi from "../data/scifi.json";
import { Link, useLocation } from "react-router-dom";

import Search from "./Search";

const MyNav = ({ search }) => {
  const location = useLocation();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="sticky-top"
      style={{ height: "70px", fontSize: "large" }}
    >
      <Navbar.Brand href="/">Strive Library</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/">
          <div
            className={`nav-link${location.pathname === "/" ? " active" : ""}`}
          >
            Home
          </div>
        </Link>
      </Nav>
      <Nav className="mr-sm-2">
        {/*    <Search searchBook={search} /> */}
        <IoCartOutline
          style={{ color: "white", height: "30px", width: "30px" }}
          className="mt-2 mr-3"
        />
        <Nav.Link href="#features">About</Nav.Link>
        <Link to="/registration">
          <div
            className={`nav-link${
              location.pathname === "/registration" ? " active" : ""
            }`}
          >
            Registraion Page
          </div>
        </Link>{" "}
        <Link to="/demo">
          <div
            className={`nav-link${
              location.pathname === "/demo" ? " active" : ""
            }`}
          >
            Demo
          </div>
        </Link>{" "}
      </Nav>
      {/*  <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form> */}
    </Navbar>
  );
};
export default MyNav;
