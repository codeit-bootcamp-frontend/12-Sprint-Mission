(async function(){
  async function includeHtml() {
      const includeTarget = document.querySelectorAll('.include');
      for (let el of includeTarget) {
        const targetFile = el.dataset.includeFile;
        if (targetFile) {
            try {
                const response = await fetch(targetFile);
                if (!response.ok) { // 성공적인 응답이 아닐 경우 에러 처리
                    throw new Error('include not found.');
                }
                const html = await response.text(); // 응답 본문을 텍스트로 변환
                el.innerHTML = html; // 받은 HTML을 대상 요소에 삽입
            } catch (error) {
                el.innerHTML = error.message; // 에러가 발생하면 메시지를 대상 요소에 삽입
            }
        }
    }
  };

  await includeHtml();
})();