import logo from "../common/photos/logo.png";

const Header = () => {
  return (
    <div className="header fixed-top">
      <ul className="nav">
        <li className="nav-item col-md-1">
          <a href="/">
            <img src={logo} alt="" className="bird-logo" />
          </a>
        </li>
        <li className="nav-item col-md-1">
          <a href="/">خانه</a>
        </li>
        <li className="nav-item col-md-2">
          <a href="/schedule">برنامه هفتگی</a>
        </li>
        <li className="nav-item col-md-6"></li>
        <li className="nav-item col-md-2">
          <a href="#" className="exit">
            <span>خروج</span>
            <i className="flaticon-log-out"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
