import "./Logout.css";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
  let history = useHistory();

  const handleConfirmLogout = () => {
    props.handleConfirmationBox()
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div className="container-logout">
      <div className="confirmation-text">
        آیا می خواهید از حساب کاربری خود خارج شوید؟
      </div>
      <div className="button-container">
        <button className="cancel-button" onClick={props.handleConfirmationBox}>
          انصراف
        </button>
        <button className="confirmation-button" onClick={handleConfirmLogout}>
          خروج
        </button>
      </div>
    </div>
  );
};

export default Logout;
