import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <HomePage />
      </App>
    </BrowserRouter>
  );
}

export default Main;
