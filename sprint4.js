
console.log("sprint4.js");

function EmailCheck(){
    // 1. 이메일에 대한 값을 받아오기
    const email = document.getElementById("email").value;
    console.log("이메일에 입력된 값:", email);

    // 2. 이메일이 유효한지 확인하기
    if (email.includes("@") && email.includes(".")){
        // 3.1 이메일이 유효하면 이메일 관련된 에러 메시지를 지우기
        console.log("이메일이 유효합니다.");

        const errorMessage = document.getElementsByClassName("email-error-message")[0];
        errorMessage.innerHTML = "";
    
    }
    else if(email ===""){
        console.log("이메일을 입력해야 합니다.");

        const errorMessage = document.getElementsByClassName("email-error-message")[0];
        errorMessage.innerHTML = "이메일을 입력해 주세요.";
        
    }
    else {
        // 3-2 이메일이 유효하지 않으면 이메일 관련 에러 메시지를 보여주기
        console.log("잘못된 이메일 형식입니다.");

        const errorMessage = document.getElementsByClassName("email-error-message")[0];
        errorMessage.innerHTML = "이메일 형식이 올바르지 않습니다."
        
    }   

    function PasswordCheck(){
        const password = document.getElementById("pwd").value;
        console.log("비밀번호에 입력된 값:", password);
    
        if (password.length>=8){
            console.log("비밀번호가 유효합니다.");
    
            const errorMessage = document.getElementsByClassName("password-error-message")[0];
            errorMessage.innerHTML = "";
        }else {
            console.log("비밀번호가 8자리 미만입니다.");
    
            const errorMessage = document.getElementsByClassName("password-error-message")[0];
            errorMessage.innerHTML = "비밀번호를 8자리 이상 입력해주세요."
        }
    }
    // 닉네임 함수
    function NicknameCheck(){
        const nickname = document.getElementById("nickname").value;
        console.log("닉네임에 입력된 값:", nickname);
    
        if (nickname === ""){
            console.log("닉네임이 미입력 되었습니다..");
    
            const errorMessage = document.getElementsByClassName("nickname-error-message")[0];
            errorMessage.innerHTML = "닉네임을 입력해 주세요.";
        }else {
            console.log("닉네임이 입력되었습니다.");
    
            const errorMessage = document.getElementsByClassName("nickname-error-message")[0];
            errorMessage.innerHTML = ""
        }
    }

}
