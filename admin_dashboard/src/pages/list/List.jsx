import "./List.scss";
import DataTable from "../../component/dataTable/DataTable";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list-container">
        <Header />
        <DataTable />
      </div>
    </div>
  );
};
export default List;
