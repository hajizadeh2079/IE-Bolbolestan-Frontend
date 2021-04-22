import { React, Component } from "react";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4 profile">
        <img src="Photos/user%20photo.jpg" alt="" className="user-photo" />
        <ul>
          <li>
            <span>نام: </span>علی حاجی زاده
          </li>
          <li>
            <span>شماره دانشجویی: </span>۸۱۰۱۹۷۴۸۸
          </li>
          <li>
            <span>تاریخ تولد: </span>۱۳۷۹/۰۶/۱۸
          </li>
          <li>
            <span>معدل کل: </span>۱۶.۳۹
          </li>
          <li>
            <span>واحد گذرانده: </span>۹۰.۰۰
          </li>
          <li>
            <span>دانشکده: </span>پردیس دانشکده‌های فنی
          </li>
          <li>
            <span>رشته: </span>مهندسی کامپیوتر
          </li>
          <li>
            <span>مقطع: </span>کارشناسی
          </li>
          <li className="borders studying-status">مشغول به تحصیل</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
