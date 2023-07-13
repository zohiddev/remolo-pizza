import { Link } from "react-router-dom";
import notFoundImg from "/src/assets/images/not-found.png";

export const NotFound = () => {
  return (
    <main className="not-found main">
      <img src={notFoundImg} alt="not found" />
      <Link to="/">
        <span className="link-to-home link">
          <i className="bi bi-arrow-left-short"></i>
          back to home
        </span>
      </Link>
    </main>
  );
};
