import { useContext } from "react";
import "./Header.css";
import { BiSearch } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { HiOutlineMoon, HiOutlineLogout } from "react-icons/hi";
import { ThemeContext } from "../../ThemeContext";
import adminphoto from '../NavigationTemplate/adminphoto.jpg'
import { Link } from "react-router-dom";
const Header = () => {
  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }
  return (
    <header className={`${DarkTheme && "dark"}`}>
      <div className="search-bar">
        <input type="text" placeholder="search..." />
        <BiSearch className="icon" />
      </div>

      <div className="tools">
        <AiOutlineUser className="icon" />
        <TbMessages className="icon" />
        <IoAnalytics className="icon" />

        <div className="divider"></div>

        <HiOutlineMoon className="icon" onClick={changeTheme} />
        <RiSettingsLine className="icon" />
        <Link to="/"> <HiOutlineLogout className="icon"/></Link>

        <div className="divider"></div>

        <div className="user">
          <img
            src={adminphoto}
            alt=""
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
