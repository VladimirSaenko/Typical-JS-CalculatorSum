
"use strict";

let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let calculateButton = document.getElementById("calcbtn");
let resultInput = document.getElementById("resultInp");
let title = document.getElementById("title");

calculateButton.addEventListener('click', function() {
    let sum = "";
    sum = `${input1.value}${input2.value}`;
    resultInput.value = sum;
    if(input1.value == "" && input2.value == "") {
        sum = 0;
        resultInput.value = sum;
    }
    if(resultInput.value == 66) {
        title.style.color = 'blue';
        title.style.textTransform = 'uppercase';
        title.innerText = 'Execute order 66';
    }
    if(resultInput.value == 300) {
        title.style.color = 'yellow';
        title.style.textTransform = 'uppercase';
        title.innerText = 'This is Sparta!';
    }
    else {
        title.style.color = 'white';
        title.style.textTransform = 'capitalize';
        title.innerText = 'Typical JS Calculator';
    }
});
