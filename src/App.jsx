import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/GlobalHeader";
import Home from "./pages/home/Home";
import FreeBoard from "./pages/FreeBoard/FreeBoard";
import UsedMarket from "./pages/UsedMarket/UsedMarket"
import ProductForm from "./pages/ProductForm/ProductForm"
import ItemPage from "./pages/ItemPage/ItemPage";
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
                <Route path="/additem" element={<ProductForm />}></Route>
                <Route path="/items/:productId" element={<ItemPage />} />
            </Routes>
        </BrowserRouter>
    );
    // <Routes>컴포넌트는 여러 Route를 감싸서 그 중 규칙이 일치하는 라우트 단 하나만을 렌더링 시켜주는 역할을 한다.
    // <Route>는 path속성에 경로, element속성에는 컴포넌트를 넣어 준다. 여러 라우팅을 매칭하고 싶은 경우 URL 뒤에 *을 사용하면 된다.
    // 출처: https://goddaehee.tistory.com/305 (12/1)
}

export default App;


/*
코드잇 강의에서 계속 app.js를 만들길래 그 이유가 뭐지?? 했는데
`App.js`는 일반적으로 애플리케이션의 루트 컴포넌트를 정의하는 파일입니다.
`App` 컴포넌트는 애플리케이션의 주요 구조와 로직을 포함하며, 다른 컴포넌트들을 포함하거나 조합하는 역할을 합니다.
라고 하더라고요.
또, 일반적인 리액트 폴더 구성이 아래처럼 app.js가 index.js랑 같은 위치에 있다고 해서 이렇게 만들어봤어요! (11/24)
```
src/
  ├── components/
  ├── App.js
  ├── index.js
  └── ...
```

*/
// app.js를 app.jsx로 바꾸어보았어요! 그런데 index.js로 index.jsx로 바꾸려니까 오류가 나더라고요.
// index 에도 html과 비슷한 문법을 return에 사용해서 index.jsx로 바꿔도 되는 줄 알았는데 왜 바꾸면 오류가 나는지 궁금해용 (12/1)