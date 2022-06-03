import "./Home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import Widget from "../../component/widget/Widget";
import Chart from "../../component/chart/Chart";
import Featured from "../../component/featured/Featured";
import TableList from "../../component/tableList/TableList";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />

      <div className="home_container">
        <Header />

        <section className="widget_sections">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </section>

        <section className="chart_sections">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </section>

        <section className="list_container_section">
          <div className="list-title">Latest Transactions</div>
          <TableList />
        </section>
      </div>
    </div>
  );
};
export default Home;
