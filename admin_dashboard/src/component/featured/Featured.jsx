import "./Featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured-top">
        <h1 className="featured-top-title">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>

      <div className="featured-bottom">
        <div className="featured-bottom-chart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>

        <p className="featured-bottom-title">Total slaes made today</p>
        <p className="featured-bottom-amount">$400</p>
        <p className="featured-bottom-desc">
          Previous transaction processing. Last payments may not be included
        </p>

        <div className="featured-summary">
          <div className="featured-item">
            <div className="featured-item-title ">Target</div>
            <div className="featured-item-result negative">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="featured-amount">K123</div>
            </div>
          </div>

          <div className="featured-item">
            <div className="featured-item-title">Last Week</div>
            <div className="featured-item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="featured-amount">K123</div>
            </div>
          </div>

          <div className="featured-item">
            <div className="featured-item-title">Last Month</div>
            <div className="featured-item-result positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="featured-amount">K123</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
