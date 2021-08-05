import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-card-heading"
              viewBox="0 0 16 16"
            >
              <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
              <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z" />
            </svg>
            <span className="fs-4">&nbsp; Create Note </span>
          </a>

          <nav className="d-inline-flex mt-3 mt-md-4 ms-md-auto border-bottom">
            <Link className="me-3 py-2 text-dark text-decoration-none" to="/">
              Home
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="/create"
            >
              Create
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to="/note"
            >
              Notes
            </Link>
            <Link className="py-2 text-dark text-decoration-none" to="/about">
              About
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Header;
