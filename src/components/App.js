import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import ContentWrap from "./ContentWrap";

function App() {
  return (
    <>
      <Nav />
      <ContentWrap>
        <Outlet />
      </ContentWrap>
    </>
  );
}

export default App;
