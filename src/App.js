import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/GlobalHeader";
import Home from "./pages/home/Home";
import FreeBoard from "./pages/FreeBoard/FreeBoard";
import UsedMarket from "./pages/UsedMarket/UsedMarket"
import './components/common.css';
import './components/reset.css';


function App() {

    return (
        <BrowserRouter>
            <GlobalHeader />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/FreeBoard" element={<FreeBoard />}></Route>
                <Route path="/items" element={<UsedMarket />}></Route>
            </Routes>
        </BrowserRouter>
    );
    // 코드잇에서 하나의 페이지에서만 계속 작업하는 걸로 배워서.. https://goddaehee.tistory.com/305의 게시글을 참고해서 리액트 라우터 사용해보았습니당
}

export default App;


/* 
코드잇 강의에서 계속 app.js를 만들길래 그 이유가 뭐지?? 했는데
`App.js`는 일반적으로 애플리케이션의 루트 컴포넌트를 정의하는 파일입니다. `App` 컴포넌트는 애플리케이션의 주요 구조와 로직을 포함하며, 다른 컴포넌트들을 포함하거나 조합하는 역할을 합니다. 
라고 하더라고요.
또, 일반적인 리액트 폴더 구성이 아래처럼 app.js가 index.js랑 같은 위치에 있다고 해서 이렇게 만들어봤어요!
```
src/
  ├── components/
  ├── App.js
  ├── index.js
  └── ...
``` 
*/