export default function ItemComment() {
  return (
    <>
      <div>문의하기</div>
      <input
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        style={{ height: "72px", width: "1152px", marginTop: "8px" }}
      />
      <button>등록</button>
    </>
  );
}
