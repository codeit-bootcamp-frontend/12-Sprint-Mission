# Sprint Mission

코드잇 스프린트 미션

## 배포 URL

[판다마켓 : https://sprint-mission-chanki-react.netlify.app/](https://sprint-mission-chanki-react.netlify.app/)

## 폴더구조

```
📦src
 ┣ 📂assets
 ┃ ┣ 📂img
 ┃ ┗ 📂scss
 ┣ 📂components
 ┣ 📂context
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂service
 ┣ 📂util
 ┣ 📜App.jsx
 ┣ 📜index.jsx
 ┗ 📜router.jsx
```

### 과제 진행중 메모

#### fetch abort option 사용 케이스

state 관리하고 있는 params과 usePageSize로 관리하는 pageSize의 변화가 일어날때마다, 데이터를 가져오기 위해서 통신을 하는데, 최대 페이지를 넘긴 케이스에 페이지 번호를 최대 페이지로 다시 보정하는 과정중에 이전 요청건의 응답 결과로 한번씩 데이터가 바뀌는 현상이 있었습니다.

위 현상을 해결하기 위해서 다음 두 가지 방법을 생각했습니다.

1. 페이지 번호를 보정하고 나서 통신을 하도록 코드수정
2. abortController를 이용하여 다음 통신을 할때는 이전 통신을 취소하고 하도록 코드 수정

1번을 위해서는 useList(데이터 통신 훅), usePageSize(반응형 사이즈) 두 훅 안에서 보정 처리를 하면 되긴 하는데, 서로 각자의 할 일 만 할 수 있도록 만들어 주고 싶었습니다.

- useList에서 데이터를 불러오는 콜백함수는 params state (page번호, 검색키워드, orderBy를 관리) 또는 pageSize가 변경될시 재요청하도록 useEffect에 해당 값들을 의존성으로 관리하고 있습니다.
- useList에서 보정을 하려면, pagination 훅에서 관리하는 값을 가져와야했고,
- usePageSize에서 보정을 하려면 List컴포넌트에서 관리하고 있는 params state의 정보와 관리하는 함수들을 가져와야했습니다.
- 최종적으로 내린 결론은, 통신쪽을 수정하여 이전 요청을 취소하고 통신을 하는 방향으로 수정을 했습니다.

#### useList vs useFetch vs useAsync

데이터를 받는 훅을 만들때, 처음에는 리스트에 특화된 훅을 만드려고 했는데 다른곳에서는 재사용하기 힘들어서
범용적인 데이터를 받는 훅을 만드는게 좋을것 같아서 고민을 했습니다.

1. 첫번째 시도(기존코드) (리스트형 데이터 패칭에 특화된 useList)

- 장점

  - useList를 호출할때 넣어야되는 필요로하는 인자가 정해져 있어서 편리(눈에 잘보임)
  - params 객체를 넘겨받아도 인자가 정해져있으니 구조분해하여 useEffect의 의존성배열에 넣기 수월

- 단점
  - 하지만 모든 요청에 동일한 인자를 보내는건 아니므로 범용성이 떨어져보임
  - 좀더 일반적인 함수로 바꿔보려고 두번째 시도인 useFetch를 생각

2. 두번째 시도 (데이터요청함수를 실행만 하고 그 함수에 보낼 인자들을 넘겨주기만 하는 useFetch)

- 장점
  - 훅 자체는 요청함수, 인자들에대해 모르고 있어도 되어서 범용성이 좋은것 같음
- 단점
  - 그대신 넘어가는 인자들을 객체로 보내는데 useMemo로 참조를 보정해줘야함(어떤게 올지 몰라서, 구조분해로 분리못함)
  - 그리고 무슨 인자로 요청하는지는 파악이 안됨 (사용하는 입장에서)

3. 세번째 시도 (둘다 이용해볼까?)

- useList가 useFetch를 이용하면 안될까? 필요한곳에서 useFetch를 재사용도 가능짐
- useList가 받은 객체를 메모지이에션해서 useFetch로 넘겨주는 방식으로 작업했습니다.
- 효과 : useList에서 받아야하는 인자값을 나타낼수 있고, useFetch를 useList 뿐만 아니라 다른곳에서도 사용 가능

4. 네번째 마지막 시도 ㅜㅜ(useFetch와 useAsync를 쓰는 방법, 차이점)

- 생각해보니 useFetch는 '주소'를 받아서 fetch처리하는 훅으로 사용되어야할 것 같음 (구글링의 예제 코드들을 분석해봄)
- url주소 기반으로 처리하는 useFetch를 쓰게되면, 만약에 api url이 변경되거나 요청전 작업이 수정되면 수정하러 이곳저곳을 돌아다녀야 할 것 같음.
- 비동기 요청함수를 받아서 처리하는 훅으로 만들어둔 useAsync를 쓰는게 더 적합해보임
- 주소를 기반으로 fetch만을 처리하는 훅으로 useFetch를 수정하고 남겨두기로 결정

#### axios와 abortcontroller 사용기

- fetch와 axios는 abort될시에 error name이 다르다.
- 기존 fetch에서는 'AbortError'로 예외처리를 했는데, axios에서는 'CanceledError'로 예외처리를 해야했음.

#### react router의 loader를 사용할시 추가로 설정해줘야했던 설정들

- React의 Suspense와 fallback, React router의 loader, hydrateFallback을 조사해보고 정리해보았습니다.
- https://heavy-bear.tistory.com/13

#### react hook form을 적용하면서 알게된 점

- Controlled 필드를 사용할때는 defaultValue 설정을 꼭 해주어야한다. (초기값이 제대로 안잡히면 벨리데이션이 안됨)
- useForm의 모드를 'onBlur'로 설정할때에는 필드에 전달된 props중 onBlur가 실행이 되어야 벨리데이션이 된다.
- 직접 값을 업데이트해줄때는 (특수한 필드의 경우), useForm의 반환값중 setValue를 이용하면 값 업데이트와 벨리데이션이 작동한다.
- react hook form에 컴포넌트를 연결할때에는 한겹의 어뎁터 레이어를 설정하여 컴포넌트 내부에서 react hook form의 의존성이 없도록 작성하는 방법을 사용하자.
- watch를 통해 각 필드에 value값을 전달하면 하나의 필드가 업데이트 될때마다 전체가 리랜더링이 되어버린다. (Controller, useController 등을 통해서 전달해야함)
