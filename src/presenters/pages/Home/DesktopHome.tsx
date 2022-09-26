import icon from "../../../assets/icons/Icon.png";
import logo from "../../../assets/logos/Logo.png";
import "./DesktopHome.scss";

export default function DesktopHome() {
  return (
    <div className="home">
      <div className="home__contents">
        <img className="home__contents__logo" src={logo} alt="TEST API" />
        <div className="home__contents__subtitle">quickly and easily,</div>
        <div className="home__contents__subtitle">anytime, anywhere!</div>
        <button className="home__contents__button">TEST API</button>
      </div>
      <img className="home__icon" src={icon} alt="icon" />
    </div>
  );
}
