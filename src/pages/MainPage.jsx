import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import { Link } from "react-router-dom";
// import Footer from '../components/Footer';

function MainPage() {
  return (
    <div>
      <Header />
      <Link to="/info">
        <img
          src="https://avatars.githubusercontent.com/u/133255052?s=400&u=8b1171b391def38ed4f92fc3d483afbda4e36ae5&v=4"
          alt=""
          className="myImg"
        />
      </Link>

      <hr />
      <AboutMe />
      {/* <Footer/> */}
    </div>
  );
}

export default MainPage;
