import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {
  isOpen: boolean;
}

const items = [
  {
    id: 1,
    link: "/userfilter",
    name: "User",
    img: "/users 1.png",
  },
  { id: 2, link: "/", name: "Guarantors", img: "/user-friends 1.png" },
  { id: 3, link: "/", name: "Loans", img: "/Group 104.png" },
  {
    id: 4,
    link: "/",
    name: "Decision Models",
    img: "/handshake-regular 1.png",
  },
  { id: 5, link: "/", name: "Savings", img: "/piggy-bank 1.png" },
  { id: 6, link: "/", name: "Loan Requests", img: "/user-friends 1.png" },
  { id: 7, link: "/", name: "Whitelist", img: "/user-check 1.png" },
  { id: 8, link: "/", name: "Karma", img: "/user-times 1.png" },
];

const items1 = [
  { id: 1, link: "/", name: "Organisation", img: "/briefcase 1.png" },
  { id: 2, link: "/", name: "Loan Products", img: "/Group 104.png" },
  {
    id: 3,
    link: "/",
    name: "Savings Products",
    img: "np_bank_148501_000000 1.png",
  },
  { id: 4, link: "/", name: "Fees and Charges", img: "/coins-solid 1.png" },
  { id: 5, link: "/", name: "Transactions", img: "/icon.png" },
  { id: 6, link: "/", name: "Services", img: "/galaxy 1.png" },
  { id: 7, link: "/", name: "Service Account", img: "/user-cog 1.png" },
  { id: 8, link: "/", name: "Settlement", img: "/scroll 1.png" },
  { id: 9, link: "/", name: "Reports", img: "/chart-bar 2.png" },
];

const items2 = [
  { id: 1, link: "/", name: "Preferences", img: "/sliders-h 1.png" },
  { id: 2, link: "/", name: "Fees and Pricing", img: "/badge-percent 1.png" },
  { id: 3, link: "/", name: "Audit Logs", img: "/clipboard-list 1.png" },
  { id: 4, link: "/", name: "Systems Messages", img: "/tire 1.png" },
  { id: 5, link: "/", name: "Logout", img: "/sign-out 1.png" },
];

function Sidebar({ isOpen }: SidebarProps) {
  return (
    <>
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
        <div className="new-bar" style={{ padding: "0 10px" }}>
          <form className="search-bar">
            <input type="search" placeholder="Search for anything!" required />
            <button type="submit">
              <img src="/search.png" alt="" />
            </button>
          </form>
        </div>

        <p className="p-text">
          <img className="p-text-img" src="/briefcase 1.png" alt="" />
          Switch Organisations
        </p>

        <div className="contt">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "link-text active" : "link-text"
            }>
            <img className="link-text-img" src="/home 1.png" alt="" />
            Dashboard
          </NavLink>
        </div>

        <div className="contt">
          <p className="psmall">Customer</p>
          {items.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                isActive ? "link-text active" : "link-text"
              }>
              <img className="link-text-img" src={item.img} alt={item.name} />
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="contt">
          <p className="psmall">Businesses</p>
          {items1.map((item1) => (
            <NavLink
              key={item1.id}
              to={item1.link}
              className={({ isActive }) =>
                isActive ? "link-text active" : "link-text"
              }>
              <img className="link-text-img" src={item1.img} alt={item1.name} />
              {item1.name}
            </NavLink>
          ))}
        </div>
        <div className="contt">
          <p className="psmall">Settings</p>
          {items2.map((item2) => (
            <NavLink
              key={item2.id}
              to={item2.link}
              className={({ isActive }) =>
                isActive ? "link-text active" : "link-text"
              }>
              <img className="link-text-img" src={item2.img} alt={item2.name} />
              {item2.name}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
