import { NavLink } from "react-router-dom";
import "./Header.scss";
import { stringConstant } from "../../utils/stringFile";

const Header = () => {
  const { appName, dashboardLabel, transactionLabel } = stringConstant;
  return (
    <header className="header">
      <div className="logo">{appName}</div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          {dashboardLabel}
        </NavLink>

        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          {transactionLabel}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
