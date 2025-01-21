import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 70px;
`;

function App() {
  return (
    <>
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
