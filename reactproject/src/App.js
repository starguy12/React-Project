import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=b2cff54a${searchTerm}`,
    );
    const apiEndpoint = "https://www.omdbapi.com/?apikey=b2cff54a";

    const data = await response.json();
    setMovies(data.Search || []); // Adjust based on your API response structure
  };

  return (
    <>
      <Nav />
      <h1> Filter and API project Module4</h1>
      <input
        type="search"
        id="search"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div id="search-input"></div>{" "}
      {/*  <!-- this element is used to insert the HTML into the DOM--> */}
      <label htmlFor="sort">Sort by:</label>
      <select id="sort">
        <option value="title">Title</option>
        <option value="year">Year</option>
      </select>
      <div className="container">
        {movies.map((movie) => (
          <div className="card" key={movie.imdbID}>
            <div className="Title">movie.Title</div>
            <div className="Year">movie.Year</div>
            <div className="ImdbID">movie.ImdbID</div>
            <div className="Type">movie.Type</div>
            <img className="Poster" src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
      <footer>
        <div className="container">
          <div className="row row__column">
            <div className="footer__list"></div>
            <a href="#" class="footer__link">
              Home
            </a>
            <a href="#" className="footer__link">
              Find your movie
            </a>
            <a href="#" class="footer__link">
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
// we can also create a footer file (Footer.jsx) and place it under components, the same way we did with NAV (Nav.jsx).
// import Footer from "./components/Footer";
