window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 5) {
        header.classList.add('scr');
    } else {
        header.classList.remove('scr');
    }
});

const pwViewBtn = document.querySelectorAll('.form_inp_list > li > .desc > .btn');
pwViewBtn.forEach(function(e) {
    e.addEventListener('click', function() {
        e.classList.toggle('active');
        const inp = e.closest('li').querySelector('input');
        if (inp.getAttribute('type') === 'password') {
            inp.setAttribute('type', 'text');
        } else {
            inp.setAttribute('type', 'password');
        }
    });
});
