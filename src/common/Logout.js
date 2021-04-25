import "./Logout.css";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

const Logout = (props) => {
  let history = useHistory();

  const handleConfirmLogout = () => {
    props.hideConfirmationBox();
    localStorage.clear();
    history.push("/login");
  };
  return (
    <Modal
      {...props}
      size="lg"
      show={props.show}
      onHide={props.hideConfirmationBox}
    >
      <div className="container-logout">
        <div className="confirmation-text">
          آیا می خواهید از حساب کاربری خود خارج شوید؟
        </div>
        <div className="button-container">
          <button className="cancel-button" onClick={props.hideConfirmationBox}>
            انصراف
          </button>
          <button className="confirmation-button" onClick={handleConfirmLogout}>
            خروج
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Logout;
