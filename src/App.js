import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ForgetPassword from "./components/forgetpass";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import Carousel from "./components/Carousel";
import FreeListingForm from "./components/form";
import SubCategories from "./components/SubcategoryPage";
import {
  Navbar,
  NavItem,
  NavLink,
  Logo,
  LogoImg,
  Container,
  IconWrapper
} from "./components/StyledComponents";
import logoImage from "./logo.png";
import CompaniesPage from "./components/CompaniesPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function CustomNavbar() {
  const location = useLocation();

  // Determine if the current route is the home page, login page, signup page, or form page
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";
  const isSignUpPage = location.pathname === "/signup";
  const isFormPage = location.pathname === "/free-listing";

  return (
    <Navbar>
      <Logo>
        <LogoImg src={logoImage} alt="Logo" />
      </Logo>
      <NavItem>
        {isHomePage && (
          <>
            <NavLink as={Link} to="/login">
              Login
            </NavLink>
            <NavLink as={Link} to="/signup">
              Sign Up
            </NavLink>
            <NavLink as={Link} to="/free-listing" >
              Free Listing
            </NavLink>
            <NavLink as={Link} to="/advertise" >
              Advertise
            </NavLink>
            <IconWrapper>
              <FontAwesomeIcon icon={faBell} />
            </IconWrapper>
          </>
        )}
        {!isHomePage && !isLoginPage && !isSignUpPage && !isFormPage && (
          <>
            <NavLink as={Link} to="/free-listing" >
              Free Listing
            </NavLink>
            <NavLink as={Link} to="/advertise" >
              Advertise
            </NavLink>
            <IconWrapper>
              <FontAwesomeIcon icon={faBell} />
            </IconWrapper>
          </>
        )}
      </NavItem>
    </Navbar>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route
            path="/main"
            element={
              <Container>
                <SearchBar />
                <Carousel />
                <Categories />
              </Container>
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/free-listing" element={<FreeListingForm />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/categories/:catid" element={<SubCategories />} />
          <Route path="/categories/:catid/:subcatid" element={<CompaniesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
