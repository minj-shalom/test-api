import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./presenters/routers";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
