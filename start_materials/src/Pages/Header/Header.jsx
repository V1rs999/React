import "./Header.scss";
import Logo from "./component/Logo/Logo.jsx";
import Nav from "./component/Nav/Nav.jsx";
import Search from "./component/Search/Search.jsx";
import Profile from "./component/Profile/Profile.jsx";
import VW from "../../../public/line VW.png";
function Header() {
  return (
    <div className="Header">
      <div className="header-content">
        <Logo />
        <Nav />
        <Search />
        <Profile />
      </div>
      <img className="VW" src={VW} alt="" />
    </div>
  );
}

export default Header;
