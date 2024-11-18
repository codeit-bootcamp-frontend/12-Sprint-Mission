// 헤더 스크롤 시 그림자
const hdScroll = function(){
    const header = document.querySelector('.header');
    if (window.scrollY > 5) {
        header.classList.add('scr');
    } else {
        header.classList.remove('scr');
    }
};
window.addEventListener('scroll', hdScroll);

// 로그인 회원가입 페이지 비밀번호 토글버튼
const pwViewToggle = function(e){
    e.classList.toggle('active');
    const inp = e.closest('li').querySelector('input');
    if (inp.getAttribute('type') === 'password') {
        inp.setAttribute('type', 'text');
    } else {
        inp.setAttribute('type', 'password');
    }
};
const pwViewBtn = document.querySelectorAll('.form_inp_list > li > .desc > .btn');
pwViewBtn.forEach(function(e) {
    e.addEventListener('click', function() {
        pwViewToggle(e);
    });
});


// 이메일 유효성 체크 함수
function emailCheck(email_address){     
	email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	if(!email_regex.test(email_address)){ 
		return false; 
	}else{
		return true;
	}
}

const formInputList = document.querySelector('.form_inp_list');

// 실패 함수
const errFn = (el, msg) => {
    el.target.closest('li').classList.remove('suc');
    el.target.closest('li').classList.add('err');
    el.target.closest('.desc').nextElementSibling.innerHTML = msg;
}

// 성공 함수
const sucFn = (el) => {
    el.target.closest('li').classList.remove('err');
    el.target.closest('li').classList.add('suc');
    el.target.closest('.desc').nextElementSibling.innerHTML = '';
}

const inputCkFn = (e) => {
    const targetId = e.target.getAttribute('id');

    // 이메일 체크
    if(targetId === 'panda_email'){
        if(e.target.value !== ''){
            if (!emailCheck(e.target.value)) {
                errFn(e, '잘못된 이메일 형식입니다.');
            }else{
                sucFn(e);
            }
        }else{
            errFn(e, '이메일을 입력해주세요.');
        }
    }

    // 비밀번호 체크    
    if(targetId === 'panda_password'){

        // 회원가입페이지에서 비밀번호 더블체크 작성 후 비밀번호 다시 수정 할 경우 비밀번호 더블체크 초기화
        const pwDbCk = document.querySelector('#panda_password_ck');
        if(pwDbCk){
            pwDbCk.value = '';
        }

        if(e.target.value !== ''){
            if (e.target.value.length < 8) {
                errFn(e, '비밀번호를 8자 이상 입력해주세요.');
            }else{
                sucFn(e);
            }
        }else{
            errFn(e, '비밀번호를 입력해주세요.');
        }
    }

    // 비밀번호 더블체크
    if(targetId === 'panda_password_ck'){
        if(e.target.value !== ''){
            if (e.target.value !== document.querySelector('#panda_password').value) {
                errFn(e, '비밀번호가 일치하지 않습니다.');
            }else{
                sucFn(e);
            }
        }else{
            errFn(e, '비밀번호를 입력해주세요.');
        }
    }

    // 닉네임 체크
    if(targetId === 'panda_nick'){
        if(e.target.value !== ''){
            sucFn(e);
        }else{
            errFn(e, '닉네임을 입력해주세요.');
        }
    }

    //버튼 활성화
    const submitBtn = document.querySelector('.form_btn > button[type="submit"]')
    if(e.target.tagName === 'INPUT'){
        let btnCk1 = true;
        let btnCk2 = true;
        document.querySelectorAll('.form_inp_list input').forEach(function(el){
            if(el.value === ''){
                btnCk1 = false;
            }
        });
        document.querySelectorAll('.form_inp_list li').forEach(function(el){
            if(el.classList.contains('err')){
                btnCk2 = false;
            }
        });
        if(btnCk1 && btnCk2){
            submitBtn.removeAttribute('disabled');
        }else{
            submitBtn.setAttribute('disabled',true);
        }
    }

}

formInputList.addEventListener('focusout',inputCkFn);

// 버튼 클릭 시 페이지 이동
document.querySelector('.form_btn > button[type="submit"]').addEventListener('click',function(e){
    e.preventDefault();
    let link = e.target.dataset.link;
    location.href = link;
});
