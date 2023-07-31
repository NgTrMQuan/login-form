import React from "react";
import "./LoggedIn.css";

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <>
      <h1 className="title">Bạn đã đăng nhập thành công !</h1>
      <button className="back_button" onClick={() => setIsLoggedIn(false)}>
        Quay lại
      </button>
    </>
  );
};

export default LoggedIn;
