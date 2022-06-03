import "./SinglePage.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import Chart from "../../component/chart/Chart";
import TableList from "../../component/tableList/TableList";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <Sidebar />

      <div className="singlePage_container">
        <Header />

        <div className="single_page_top">
          <div className="single_page_left">
            <button className="editButton">Edit</button>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.unsplash.com/photo-1653565081620-0684dcb036df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt=""
                className="itemImg"
              />

              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">janedoe@gmial.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 3456789</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Boston Boston MA</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="single_page_right">
            <Chart aspect={3 / 1.2} title="User Expensing (Last 6 Months)" />
          </div>
        </div>

        <div className="single_page_bottom">
          <h1 className="title">Last Transactions</h1>
          <TableList />
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
