import "../CSS/Header.css";

const Header = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Opticron">
          <b>OPTICRON</b>
        </h1>

        <div className="links">
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Products
          </a>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Where to Buy
          </a>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            News & Reviews
          </a>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help and Support
          </a>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Opticron
          </a>
        </div>
        <div className="searchBar">
          <form className="search">
            <input type="text" placeholder="My Opticron.." name="search" />
            <button type="submit">
              <i>🔍</i>
            </button>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;
