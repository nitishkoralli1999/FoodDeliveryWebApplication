import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnValue, setBtnValue] = useState("login");
  console.log("header Rendeer");
  // if no dependency array useeffect is called on every render
  // if there is a dependency arrat useffect is called on particular dependency
  // if depency array is empty useeffect is called only on the initial render
  useEffect(() => {
    console.log("useEffect called");
  });
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="linkContainer">
          <li>
            {" "}
            <Link to="/" className="linkStyle">Home </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/About" className="linkStyle"> About us </Link>{" "}
          </li>
          <li>
            <Link to="/Contact" className="linkStyle"> Contact us </Link>{" "}
          </li>

          <li>
            {" "}
            <Link to="/Cart" className="linkStyle"> Cart </Link>{" "}
          </li>
          <button
            className="login"
            onClick={() => {
              btnValue === "login"
                ? setBtnValue("logout")
                : setBtnValue("login");
            }}
          >
            {btnValue}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
