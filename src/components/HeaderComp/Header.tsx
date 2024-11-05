import "./Header.scss";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleSidebar: () => void;
}

function Header({ toggleSidebar }: HeaderProps) {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="toggle" onClick={toggleSidebar}>
              <div className="tog"></div>
              <div className="tog"></div>
              <div className="tog"></div>
            </div>
            <Link to="/">
              <img className="logo-img" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <form className="search-bar">
            <input type="search" placeholder="Search for anything!" required />
            <button type="submit">
              <img src="/search.png" alt="" />
            </button>
          </form>
          <div className="profile-cont">
            <a href="">Docs</a>
            <img
              className="np_notification"
              src="/np_notification.png"
              alt=""
            />
            <div className="pro-user">
              <img className="user_pro" src="/user.png" alt="" />
              <p>
                Adedeji <img className="np_dropdown" src="/np_dropdown.png" />
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
