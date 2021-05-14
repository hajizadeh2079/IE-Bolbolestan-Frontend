import { React, Component } from "react";
import Header from "../common/Header";
import Cover from "./Cover";
import Profile from "./Profile";
import Report from "./Report";
import Footer from "../common/Footer";
import { ToastContainer, toast } from "react-toastify";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          page1="انتخاب واحد"
          page1URL="/courses"
          page2="برنامه هفتگی"
          page2URL="/schedule"
        />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Cover />
        <div className="my-container">
          <Profile />
          <Report />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
