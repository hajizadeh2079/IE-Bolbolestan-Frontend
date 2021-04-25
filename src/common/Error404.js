import React from "react";
import "./Error404.css";
import logo from "../common/photos/logo.png";

const Error404 = () => {
  return (
    <div className="my-container error-container error-container-cover">
      <div className="error-card borders">
        <img src={logo} alt="" className="error-form-logo" />
        <h2>صفحه‌ی مورد نظر وجود ندارد!</h2>
        <h3>
          <a href="/">بازگشت به خانه</a>
        </h3>
      </div>
    </div>
  );
};

export default Error404;
