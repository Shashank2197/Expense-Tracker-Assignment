import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Expense Tracker</div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Transactions
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
