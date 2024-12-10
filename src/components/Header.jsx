import userProfile from "../assets/img/user-profile-icon.svg";
import "./Header.css";

export default function Header({ black }) {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={userProfile} alt="User Profile"></img>
        </a>
      </div>
    </header>
  );
}
