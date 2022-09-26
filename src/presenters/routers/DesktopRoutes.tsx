import { Route, Routes } from "react-router-dom";
import { DesktopLayout } from "../layouts";
import { DesktopHome } from "../pages/Home";

/**
 * DesktopRoutes
 * @return Desktop Routes.
 */
export default function DesktopRoutes() {
  return (
    <DesktopLayout>
      <Routes>
        <Route path="/" element={<DesktopHome />} />
      </Routes>
    </DesktopLayout>
  );
}
