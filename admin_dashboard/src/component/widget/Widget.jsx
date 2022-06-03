import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;

  //"user", "order", "earning", "balance" are from the props in the Homepage
  if (type === "user") {
    data = {
      title: "USERS",
      isMoney: false,
      link: "See all users",
      icon: (
        <PersonOutlinedIcon
          className="icon"
          style={{
            color: "crimson",
            backgroundColor: "rgba(255, 0, 0, 0.2)"
          }}
        />
      )
    };
  }

  if (type === "order") {
    data = {
      title: "ORDERS",
      isMoney: false,
      link: "See all order",
      icon: (
        <ShoppingCartOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(218, 165, 32, 0.2)",
            color: "goldenrod"
          }}
        />
      )
    };
  }

  if (type === "earning") {
    data = {
      title: "EARNINGS",
      isMoney: true,
      link: "View net earnings",
      icon: (
        <MonetizationOnOutlinedIcon
          className="icon"
          style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
        />
      )
    };
  }

  if (type === "balance") {
    data = {
      title: "BALANCE",
      isMoney: true,
      link: "See details",
      icon: (
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{
            backgroundColor: "rgba(128, 0, 128, 0.2)",
            color: "purple"
          }}
        />
      )
    };
  }

  return (
    <div className="widget-container">
      <div className="widget-left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.isMoney && "$"}</span>
        <span className="link">Sea all USERS</span>
      </div>

      <div className="widget-right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          20%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
