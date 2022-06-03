import "./NewPage.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Header from "../../component/header/Header";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewPage = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="newPage">
      <Sidebar />

      <div className="newPage_container">
        <Header />

        <div className="newPage_top">
          <h1>{title}</h1>
        </div>

        <div className="newPage_bottom">
          <div className="newPage_left">
            <img
              //URL.createObjectURL(file). This is how we create URL using local url
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>

          <div className="newPage_right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Choose Image:
                  <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(event) => setFile(event.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((eachInput) => (
                <div className="formInput" key={eachInput.id}>
                  <label htmlFor="">{eachInput.label}: </label>
                  <input
                    className="addNewInput"
                    type={eachInput.type}
                    placeholder={eachInput.placeholder}
                  />
                </div>
              ))}

              <button>SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPage;
