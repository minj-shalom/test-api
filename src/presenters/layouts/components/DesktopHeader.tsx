import { Layout } from "antd";
import "./DesktopHeader.scss";
import logo from "../../../assets/logos/Logo.png";

export default function DesktopHeader() {
  const { Header } = Layout;

  return (
    <Header className="desktop-header">
      <img className="desktop-header__logo" src={logo} alt="TEST API" />
      <div className="desktop-header__menu">TEST</div>
      {/* <div className="desktop-header__menu">LOGS</div> */}
      {/* <div className="desktop-header__menu">DATA</div> */}
      <div className="desktop-header__menu">DOCS</div>
    </Header>
  );
}
