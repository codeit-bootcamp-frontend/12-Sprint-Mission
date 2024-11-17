const passwordInput= document.getElementById('password');

function onEyecliked(){
    if(passwordInput.type === 'password'){
        passwordInput.type='text';
    }else{
        passwordInput.type='password';
    }
}

function emailChange(){
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const submitBtn=document.querySelector('.button');
    const email=emailInput.value;
    
    if(email.includes("@")&&email.includes(".")){
        emailInput.classList.remove('error');
        emailError.innerText = ''; // 에러 메시지 제거
        emailError.classList.remove('error_msg');
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = 'var(--blue100)'; // 원

    }else if(!email){
        emailError.innerText='이메일을 입력해주세요'
        emailInput.classList.add('error');
        emailError.classList.add('error_msg');
        submitBtn.disabled=true;
    }else{
        emailError.innerText='유효한 이메일 형식이 아닙니다.'
        emailInput.classList.add('error');
        submitBtn.disabled=true;
    }
    
}


function passwordChange(){
    const pwInput = document.getElementById('password');
    const pwError = document.getElementById('passwordError');
    const submitBtn=document.querySelector('.button');
    const password=pwInput.value;

    if(!password){
        pwError.innerText='비밀번호를 입력해주세요'
        pwInput.classList.add('error');
        pwError.classList.add('error_msg');
        submitBtn.disabled=true;
    }
    else if(password.length<=8){
        pwError.innerText='비밀번호를 8자 이상 입력해주세요';
        pwInput.classList.add('error');
        pwError.classList.add('error_msg');
        submitBtn.disabled=true;
    }
    else{
        pwInput.classList.remove('error');
        pwError.innerText = ''; // 에러 메시지 제거
        pwError.classList.remove('error_msg');
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = 'var(--blue100)'; // 원

    }
}