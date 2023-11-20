import { Link } from "react-router-dom";
import "./Logo.scss";
export default function Logo() {
  return (
    <Link to="/">
      <h1 className="logo">Auto AI doc</h1>
    </Link>
  );
}
