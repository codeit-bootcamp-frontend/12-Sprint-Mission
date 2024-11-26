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
