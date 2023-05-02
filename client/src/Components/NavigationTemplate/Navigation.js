import Nav from "../NavIconTemplate/Nav";
import "./Navigation.css";
import adminphoto from './adminphoto.jpg'
import { FiChevronLeft, FiMessageSquare } from "react-icons/fi";
import { TbDashboard, TbFileUpload } from "react-icons/tb";
import { VscGraphLine } from "react-icons/vsc";
import {
  AiOutlineUsergroupAdd,
  AiOutlineDollarCircle,
  AiOutlineUserSwitch,
} from "react-icons/ai";
import { MdOutlineNotificationsActive, MdSwapHoriz } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiMessageAltAdd, BiDotsHorizontalRounded } from "react-icons/bi";
import { useContext, useState } from "react";
import { ThemeContext } from "../../ThemeContext";

const Navigation = () => {
  const [nav, setnav] = useState(false);

  const { DarkTheme, setDarkTheme } = useContext(ThemeContext);

  function changeTheme() {
    setDarkTheme(!DarkTheme);
  }

  return (
    <div className={`navigation ${nav && "active"} ${DarkTheme && "dark"}`}>
      <div
        className={`menu ${nav && "active"}`}
        onClick={() => {
          setnav((prevState) => !prevState);
        }}
      >
        <FiChevronLeft className="menu-icon" />
      </div>

      <header>
        <div className="profile">
          <img
            src={adminphoto}
            alt="user-img"
            className="profile-img"
          />
        </div>
        <span>sai teja</span>
      </header>

      <Nav Icon={TbDashboard} title={"Dashboard"} />
      <Nav Icon={VscGraphLine} title={"Analytics"} />
      <Nav Icon={FiMessageSquare} title={"Messages"} />
      <Nav Icon={AiOutlineUsergroupAdd} title={"Followers"} />

      <div className="divider"></div>

      <Nav
        Icon={MdSwapHoriz}
        title={`${
          DarkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"
        }`}
        onClick={changeTheme}
      />
      <Nav Icon={BiDotsHorizontalRounded} title={"More details"} />
    </div>
  );
};

export default Navigation;
