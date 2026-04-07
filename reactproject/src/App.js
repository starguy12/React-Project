import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import MovieSearch from "./components/MovieSearch";

function App() {
  return (
    <>
      <Nav />
      <h1>Filter and API project Module4</h1>
      <MovieSearch /> {/* Rendering the MovieSearch component */}
      <footer>
        <div className="container">
          <div className="row row__column">
            <div className="footer__list"></div>
            <a href="#" className="footer__link">
              Home
            </a>
            <a href="#" className="footer__link">
              Find your movie
            </a>
            <a href="#" className="footer__link">
              Contact
            </a>
          </div>
          <div className="footer__copyright">
            © 2026 Blinker.com.au. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;

//we can also create a footer file (Footer.jsx) and place it under components, the same way we did with NAV (Nav.jsx).
// import Footer from "./components/Footer";
