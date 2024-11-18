function nicknameChange(){
    const nickname=document.getElementById('nickname');
    const nameError=document.getElementById('nicknameError');
    const name=nickname.value;

    if(!name){
        nickname.classList.add('error');
        nameError.innerText='닉네임을 입력해주세요.';
        submitBtn.disabled=true;
    }else{
        nickname.classList.remove('error');
        nameError.innerText='';
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = 'var(--blue100)'; // 원

    }

    }

function passwordConfirm(){
    const password=document.getElementById('password').value;
    const confirmPw=document.getElementById('confirm_password');
    const confirmPassword=confirmPw.value;
    const confirmPasswordError=document.getElementById('confirm_password_Error');

    if(password !== confirmPassword){
        confirmPasswordError.innerText='비밀번호가 일치하지 않습니다'
        confirmPw.classList.add('error');
        submitBtn.disabled=true;
    } else{
        confirmPw.classList.remove('error');
        confirmPasswordError.innerText='';
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = 'var(--blue100)'; // 원

    }
}
