import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://iznaworld.herokuapp.com/api/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <a href="https://www.instagram.com/h__a__n__i_i_/" className="sidebarIcon fab fa-instagram-square"> Instagram  </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME🏠
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT😝
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE✏
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN🔒
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
