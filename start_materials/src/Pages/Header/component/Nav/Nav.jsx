import { Link } from "react-router-dom";
import "./Nav.scss";
export default function Nav() {
  return (
    <nav className="nav">
      <Link className="a" to="/dropfile">
        <h3>Drop File</h3>
      </Link>
      <Link className="a" to="/mycar">
        <h3>My car</h3>
      </Link>
      <Link className="a" to="/features">
        <h3>Features</h3>
      </Link>
      <Link className="a" to="/listoferror">
        <h3>List OF Error</h3>
      </Link>
    </nav>
  );
}
