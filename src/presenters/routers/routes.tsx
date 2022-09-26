import MobileDetect from "mobile-detect";
import Device from "../../entities/device";
import DesktopRoutes from "./DesktopRoutes";
import MobileRoutes from "./MobileRoutes";

export default function AppRoutes() {
  var deviceType = Device.Desktop;
  const md = new MobileDetect(window.navigator.userAgent);

  if (md.phone() !== null) {
    deviceType = Device.Mobile;
  }
  if (md.tablet() !== null) {
    deviceType = Device.Tablet;
  }

  if (deviceType === Device.Desktop) {
    return <DesktopRoutes />;
  } else {
    return <MobileRoutes />;
  }
}
