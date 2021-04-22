const Footer = () => {
  return (
    <div className="footer">
      <ul className="nav">
        <li className="nav-item col-md-4">
          <i className="flaticon-copyright"></i>
          <span>دانشگاه تهران - سامانه جامع بلبل‌ستان</span>
        </li>
        <li className="nav-item col-md-5"></li>
        <li className="nav-item col-md-3 all-icons">
          <a href="#">
            <i className="flaticon-twitter-logo-on-black-background footer-icons"></i>
          </a>
          <a href="#">
            <i className="flaticon-instagram footer-icons"></i>
          </a>
          <a href="#">
            <i className="flaticon-linkedin-logo footer-icons"></i>
          </a>
          <a href="#">
            <i className="flaticon-facebook footer-icons"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
