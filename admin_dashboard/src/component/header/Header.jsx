import "./Header.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../contextAPI/darkModeContext";

const Header = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <header className="header_container">
      <div className="header_wrapper">
        <div className="header_search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>

        <div className="header_items">
          <div className="header_item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>

          <div className="header_item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>

          <div className="header_item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>

          <div className="header_item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>

          <div className="header_item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="header_item">
            <ListOutlinedIcon className="icon" />
          </div>

          <div className="header_item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
