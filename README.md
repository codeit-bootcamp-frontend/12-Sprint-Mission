# ❓ Troubleshooting

**코드잇 12기 스프린트 내용입니다.**

## 디렉토리 구조(8주차)

```
📂src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┗ 📂styles
 ┃   ┣ 📜Global.css
 ┃   ┗ 📜Index.scss
 ┣ 📂components
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂AddItemPageLayout
 ┃ ┃ ┣ 📂HomePageLayout
 ┃ ┃ ┣ 📂ItemsDetailPageLayout
 ┃ ┃ ┣ 📂ItemsPageLayout
 ┃ ┃ ┣ 📂UI
 ┃ ┗ 📜App.jsx
 ┣ 📂pages
 ┣ 📂routes
 ┣ 📂utils
 ┗ 📜index.jsx
```

## 8주차 스프린트

### CRA를 써야하나?

- 타입스크립트 템플릿 있는 CRA로 프로젝트를 하려고 했지만, 리액트 18버전과 19버전이 충돌이 일어나서 tsconfig나 기타 다른 파일들을 충돌 이후부턴 수작업해야 하는 번거로움이 있었다.
- Vite를 안써보기도 했기에 CRA에서 Vite로 넘어왔다.

### Vite에서 tailwind 설정

- CRA에서 썼던 것처럼 tailwind를 적용했더니 스타일이 하나도 입혀지지가 않았다.
- 원인을 찾아보니 postcss를 사용하지 않아서 tailwind가 적용되지 않았던 것이었다.
- CRA에선 이러한 과정 + css 속성에 접두사를 추가해주는 autoprefixer 설정이 알아서 되었다는 걸 이번에 처음 알게 되었다.
- 해결하기 위해 다음과 같이 진행했다.

1. npm install -D tailwindcss postcss autoprefixer 를 통해 tailwind, postcss, autoprefixer를 설치한다.
2. npx tailwindcss init
3. tailwind config에 다음과 같이 적는다.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. postcss.config.js에 다음과 같이 적는다.

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### svg 리액트 컴포넌트화

- 기존 CRA에선 as로 svg 이미지를 컴포넌트화 시켜서 속성을 변경시켰는데, vite에서 하려고 하니, import 관련 에러가 떴다.
- 이를 해결하기 위해 다음과 같이 진행했다.

1. vite.config.ts 파일에 다음과 같이 사용하고, vite-plugin-svgr 패키지를 설치한다.

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
```

2. import 구문을 다음과 같이 수정한다.

```tsx
// 수정 전
import { ReactComponent as HeartIcon } from '@/assets/images/heart_empty.svg';
// 수정 후
import HeartIcon from '@/assets/images/heart_empty.svg?react';
```

3. vite-env.d.ts 파일을 다음과 같이 수정한다.

```ts
declare module '*.svg?react' {
  import { SVGProps } from 'react';
  const content: React.FC<SVGProps<SVGSVGElement>>;
  export default content;
}
```

### 왜 Vite로 바꾼 후 main.tsx가 불러지지 않지?

- 기존 CRA에서 프로젝트를 할 때는 스크립트 태그를 굳이 추가하지 않아도 알아서 추가가 되었기에 신경을 안쓰고 있었다.
- 모든 타입을 수정 후 개발 서버를 열어서 확인하려고 하는데, main.tsx가 불러와지지 않았다.
- 알고 보니, Vite에선 CRA와 달리 스크립트 태그를 명시적으로 작성해야 한다고 해서, 수정하였더니 잘 불러와졌다.

## 디렉토리 구조(7주차)

```
📂src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┗ 📂styles
 ┃   ┣ 📜Global.css
 ┃   ┗ 📜Index.scss
 ┣ 📂components
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂AddItemPageLayout
 ┃ ┃ ┣ 📂HomePageLayout
 ┃ ┃ ┣ 📂ItemsDetailPageLayout
 ┃ ┃ ┣ 📂ItemsPageLayout
 ┃ ┃ ┣ 📂UI
 ┃ ┗ 📜App.jsx
 ┣ 📂pages
 ┣ 📂routes
 ┣ 📂utils
 ┗ 📜index.jsx
```

## 7주차 스프린트

### 어떻게 스타일링 할 것인가?

- 지난 주차때는 styled components를 사용했기 때문에 이번 주차도 새롭게 배운 css 스타일링을 하는 것이 좋겠다고 생각했다.
- tailwind를 사용하여 스타일링하였고, 기존 스타일은 유지하되, 이번에 새롭게 구현한 페이지만 우선 tailwind를 적용했다.

### 댓글의 개수를 정확히 알 수 없는데, 어떻게 화면에 렌더링 할 것인가?

- 댓글이 아예 없을 경우에는 아직 댓글이 달리지 않은 상품이라는 걸 알려주기 위해 조건부 렌더링하였다.
- 초기 params에 limit를 3개로 주었고, 스웨거를 확인해보니 cursor방식으로 페이지가 구현되어 있어서, nextCursor가 값이 있을 때 더 보기 버튼을 생성하도록 구현하였다.
- 더 보기 버튼을 클릭하면 nextCursor의 값을 반영한 params로 GET 리퀘스트를 받아서 기존에 있던 리스트 뒤에 추가하도록 구현했다.

### 상품의 수정 삭제, 댓글의 수정, 삭제 기능을 구현해야 하는 것인가?

- Figma 시안에는 수정하기 삭제하기 기능이 있는 것처럼 보였지만, 아직 로그인 기능을 개발하지 않았는데, 해당 기능이 수행된다는 것이 문제라고 생각했다.
  - 다른 사람이 내 댓글이나 상품을 변경시키는게 말이 안된다고 생각했다.
- 때문에, Dropdown 레이아웃을 잡되, 클릭에 따른 api 요청 및 기능 구현은 아직 완성하지 않았다.

### Heart 아이콘의 Hover 효과는?

- 요구사항에 모든 버튼에 대해 자유롭게 Hover 효과를 적용하라고 되어있었다.
- Heart 아이콘에 Hover 효과를 부여해서 배경색을 변화시키고 싶었는데, 찾아보니깐 svg 파일을 리액트 컴포넌트로 변환시킬 수 있는 걸 알게 되었다.
- 리액트 컴포넌트로 변환시킨 svg 컴포넌트가 hover 됐을 때 fill속성에 값을 줌으로써 배경색을 채웠다.

## 디렉토리 구조(6주차)

```
📂src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂images
 ┃ ┗ 📂styles
 ┣ 📂components
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂AddItemPageLayout
 ┃ ┃ ┣ 📂HomePageLayout
 ┃ ┃ ┣ 📂ItemsPageLayout
 ┃ ┃ ┣ 📂UI
 ┃ ┗ 📜App.jsx
 ┣ 📂pages
 ┣ 📂routes
 ┣ 📂utils
 ┗ 📜index.jsx
```

## 6주차 스프린트

### Additem 컴포넌트에서 사용한 상태

```js
const [imgPreview, setImgPreview] = useState(null);
const [isValid, setIsValid] = useState(false);
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [isImg, setIsImg] = useState(false);
const [tags, setTags] = useState([]);
```

- `imgPreview` URL 객체를 담기 위한 상태이다.
  - 이미지 미리보기에 활용한다.
- `isValid` 폼 유효성 검사 통과 유무를 관리하는 상태이다.
  - true상태일 때 제출 버튼이 활성화된다.
- `name` 상품 설명의 값을 관리하기 위한 상태이다.
- `price` 상품 가격의 값을 관리하기 위한 상태이다.
- `isImg` 이미지가 이미 등록되었으면 경고 메시지를 출력하기 위해 사용한 상태이다.
- `tags` 추가한 태그들을 관리하는 상태이다.

### 어떤 스타일링 방식을 채택할 것인가?

- `styled components`를 이번 주에 처음 학습하여 연습도 할 겸 addItems 페이지에는 css 모듈이 아닌 `styled components`로 적용하였다.

### File input을 어떻게 스타일링 할 것인가?

- label과 input을 연결시키면 label를 클릭해도 파일을 첨부할 수 있기 때문에 file타입의 input을 hidden 처리하고, label를 스타일링했다.

### 이미지 등록을 1개만 받으려면 어떻게 할 것인가?

```js
const changeImg = ({ target }) => {
  const file = target.files[0];
  if (!file) return;
  if (imgPreview) {
    setIsImg(true);
    return;
  }

  const preview = URL.createObjectURL(file);

  setImgPreview(preview);
};

const closePreview = () => {
  if (imgPreview) {
    URL.revokeObjectURL(imgPreview);
    setImgPreview(null);
    setIsImg(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  }
};
```

- 이미지 미리보기가 이미 존재하는데, 추가하려고 파일을 선택할 경우 URL객체를 생성하지 못하도록 early return하였다.
- 또한 기존재 시 추가하려고 시도했을 때 경고 메시지를 추가하기 위해 `isImg`의 상태가 true일 때만 보이도록 조건부 렌더링으로 구현했다.
- URL객체의 삭제는 close 아이콘을 누를 시에 이미지 미리보기를 삭제하면서 같이 삭제하였다.

### 판매 가격 란의 타입은 어떤걸 할 것인가?

- number로 처리하면 천단위 구분자를 넣지 못하기에 text로 설정했고, 숫자 외 문자열 입력 시에는 입력 필드가 초기화 되도록 구현했다.

### 판매 가격의 최대 값은?

- 매우 큰 수를 넣으면 처리하기 까다롭기 때문에 10억 정도로 최대 값을 제한했다.

### 폼 유효성 검사는 어떻게 할 것인가?

```js
const checkValid = useCallback(() => {
  const validResult = name.trim() !== '' && price > 0;
    setIsValid(validResult);
}, [name, price]);

//커링 방식으로 handler 구현
const inputChangeHandler = (setter) => (e) => {
    ...
};
//커링을 펼치면 이런 형태
function inputChangeHandler(setter) {
  return function (e) {
    ...
  };
};
/**
 * 랜더링 할 때 함수 호출로 얻은 handler를 등록
 * 아래와 같이 handler가 return 됨
 * (e) => {...};
**/
<Input onChange={inputChangeHandler(setName)}>
  ...
</Input>
```

- 상품 명과 상품 가격은 필수 항목이지만, 나머지는 선택 사항이라고 생각하여 위 2가지만 유효성 검사를 구현했다.
- onChange됐을 때 검사하도록 하였는데, 각각의 핸들러를 등록하는 것보단 하나로 처리하고 싶었다.
- 때문에 커링 방식으로 setter를 파라미터를 받는 핸들러를 작성하여 구현했다.

### 태그 추가는 어떻게 할 것인가?

- 번개장터 웹사이트에선 태그 선택을 스페이스바나 엔터 키를 입력하면 태그가 추가되길래 같은 방식으로 적용했다.

### 태그의 리스트 순서는?

- 최신으로 입력한 태그가 맨 앞에 와야 된다고 생각해서 이전 리스트들 앞에 넣도록 구현했다.

### 태그의 중복 처리는?

- 태그가 중복이 되는게 이상하다고 생각해서 중복을 방지하도록 구현했다.
- some 메서드를 사용하여 하나라도 input field의 값과 일치하는 태그 이름이 있으면 해당 태그는 삽입하지 못하게 구현했다.

### 태그를 어떻게 삭제할 것인가?

- tag의 key로 배열의 index로 줬기 때문에, 삭제하려는 태그의 index와 일치하지 않는 요소들만 필터하는 방식으로 구현했다.

### 입력 필드에서 Enter 입력 시 폼 제출이 되는 문제

- 등록 버튼으로만 눌러야만 폼이 제출되도록 구현하는게 맞다고 생각했다.
- 따라서, input field에서 엔터 키 입력 시 폼 제출이 안되도록 `e.preventDefault()` 메서드를 호출하여 방지하였다.

## 4주차 스프린트

### 이벤트를 input 요소 하나마다 다 등록해야 하는가?

- 처음에는 `email`, `nickname`, `password`, `password confirm`란에 `focusout` 이벤트가 발생하니깐 개별 등록할 생각이었다.
- 전부 등록하는 방식이 비효율적이라고 생각해서 어떻게 할지 고민하다가 이벤트 위임 방식을 채택하였다.
- 현재까지 로그인 및 회원가입 페이지의 이벤트는 `form`요소 안에서만 동작하기 때문에, `form` 요소에 이벤트를 위임하고, 자식 요소의 `target`에 대해 이벤트 핸들러를 동작시켰다.

### 비밀번호 확인을 먼저 작성한 경우 어떻게 되는가?

- 사용자가 회원가입할 때 가입할 비밀번호를 비밀번호 확인 `input field`에 먼저 입력했을 때 동작부분에서 오류가 있었다.
- 먼저 비밀번호 확인란에 사용자가 원하는 비밀번호를 입력한 후, 비밀번호란에 일치하지 않는 비밀번호를 입력했을 경우 정상적으로 에러 요소가 추가되지 않았다.
- 이 부분에 대해서 비밀번호 `field`가 `focusout`될 때 비밀번호를 비교하는 함수를 호출하여 다를 경우 비밀번호 확인란에 에러 요소가 추가되도록 로직을 구성하였다.

### 에러 메시지를 문자열 리터럴로 줘야 하는가?

- 처음에는 에러 메시지에 대해 문자열 리터럴로 직접 타이핑하여 `return`하였지만, 생각해보니 단점이 있을 수 밖에 없다는 생각이 들었다.
- 만약, 에러 메시지를 수정하고 싶을 경우에는 자바스크립트 코드를 다시 찾아서 리터럴을 직접 수정해야 하는데, `account.js` 파일의 로직이 길어질 경우 에러 메시지를 찾기 힘들 수도 있고, 수정할 때 실수도 유발할 것 같았다.
- 때문에 상수로 `enum`처럼 관리하는게 좋겠다고 생각하여 `ACCOUT_CONST.js` 모듈에 상수 변수를 `export`하는 방식으로 수정하였다.
  - 이메일의 정규표현식도 상수 모듈로 관리하였다.

### `input field`가 전부 유효성 검사를 통과했다는 것을 어떻게 표현할 것인가?

- `form`에서 `focusout`이벤트 발생 시 유효성 검사에 관한 함수를 관리하는 객체를 순회하면서 `input field`를 전부 검사하는 방식으로 로직을 구현했다.
- 당장 아이디어로 떠오른 것이 해당 방식이지만, 상태를 관리하는 객체를 활용하면 좋겠다고 생각한다.

### 스크립트 파일을 불러오는 방식을 어떤걸 채택할 것인가?

- 조사한 바로는, `window.onload`, `DOMContentLoaded`, `defer`, `async` 이 4가지 방법이 대표적인 방식이었다.
- `window.onload`, `DOMContentLoaded` 방식은 이벤트 핸들러로 사용하는 방식으로, DOM 요소가 완전히 로드가 되어야 실행되도록 하는 방식이다.
  - 두 방식의 차이는 이미지나 비디오 등 외부 리소스 로딩을 기다리는 방식이다. 첫번째 방식은 외부 리소스 로딩도 기다리기에, 상대적으로 느리지만 안정적이고, 두번째 방식은 외부 리소스가 로드 되기 전에 DOM을 완성하고 싶을 때 사용한다.
- `defer`, `async` 방식은 `script` 태그에 속성을 부여하여, HTML 파싱과 무관하게 비동기로 로드된다.
  - `defer` 방식은 `DOMContentLoaded` 이벤트가 발생한 후에 실행된다. 얼핏 보면 비슷해보이지만, `DOMContentLoaded` 방식은 HTML 파싱 완료 후에 바로 실행되기에 스크립트가 로딩 유무와 상관없이 DOM이 생성되면 바로 실행되는 이벤트이기에 이벤트 처리 순서대로 진행하므로 실행순서가 보장되지 않는다. `defer`는 이와 달리 순서를 보장한다.
  - `async` 방식은 스크립트 로딩이 완료된 순서대로 실행하기에, 순서가 보장되지 않는다.
- 주로 사용되는 경우를 정리하면 다음과 같다.
  - `window.onload` : 모든 리소스가 로드된 후 실행해야 할 작업 (외부 리소스 대기 O)
  - `DOMContentLoaded` : DOM이 준비된 후 빠르게 실행해야 할 작업, 순서 보장 X (외부 리소스 대기 X)
  - `defer` : HTML 로딩을 방해하지 않으면서 스크립트를 순차적으로 실행 (외부 리소스 대기 X)
  - `async` : 페이지의 다른 요소와 상관없이 독립적인 스크립트 실행, 순서 보장 X (외부 리소스 대기 X)
- 4주차 때는 `defer` 방식으로 불러오되, 모듈 순으로 실행하고 싶어서 `type="module"`로 스크립트를 불러옴.

# 💻 Tools

- Text Editor : VS Code
- Formatting : Prettier
