// 이메일 유효성 체크
function emailCheck(email:string) {
  let regex =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  if (email === "") return false;
  if (email === "undefined") return false;
  return regex.test(email);
}

export default emailCheck;
