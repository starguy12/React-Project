import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <h1> Filter and API project Module4</h1>
      <input type="search" id="search" placeholder="Search for a movie..." />
      <div id="search-input"></div>{" "}
      {/*  <!-- this element is used to insert the HTML into the DOM--> */}
      <label for="sort">Sort by:</label>
      <select id="sort">
        <option value="title">Title</option>
        <option value="year">Year</option>
      </select>
      <div class="container"></div>
      <div class="card">
        <div class="Title">Title</div>
        <div class="Year">Year</div>
        <div class="ImdbID">ImdbID</div>
        <div class="Type">Type</div>
        <div class="Poster">Poster</div>
      </div>
      <footer>
        <div class="container">
          <div class="row row__column">
            <div class="footer__list"></div>
            <a href="#" class="footer__link">
              Home
            </a>
            <a href="#" class="footer__link">
              Find your movie
            </a>
            <a href="#" class="footer__link">
              Contact
            </a>
          </div>
          <div class="footer__copyright">
            © 2026 Blinker.com.au. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
