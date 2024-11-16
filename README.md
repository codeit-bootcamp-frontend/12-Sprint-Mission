# ❓ Troubleshooting

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
