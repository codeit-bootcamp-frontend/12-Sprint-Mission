export default function ProductInquiry() {

  return (
    <div className="inquiryBox">
      <span className="text">
        문의하기
      </span>

      <form>
        <label htmlFor="inquiry" className="blind">
          문의하기
        </label>
        <textarea
          id="inquiry"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.
" />

        <div className="btnBox">
          <button
            class="addBtn">
            등록
          </button>
        </div>

      </form>
    </div>
  )

}