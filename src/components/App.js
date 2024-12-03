import Nav from "./Nav";
import ContentWrap from "./ContentWrap";

function App({ children }) {
  return (
    <>
      <Nav />
      <ContentWrap>{children}</ContentWrap>
    </>
  );
}

export default App;
