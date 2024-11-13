import { focus, pwToggle } from "./register.js"; 
import { btnVisible, input } from "./source.js";

// input keyup event
for(let i of input){
    i.addEventListener('keyup', focus);
};

// password 비활성화/활성화 
for(let btn of btnVisible){
    btn.addEventListener('click', pwToggle);
};
