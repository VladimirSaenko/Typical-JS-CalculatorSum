
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
    title.style.color = 'white';
    title.style.textTransform = 'capitalize';
    title.innerText = 'Typical JS Calculator';
    if(input1.value == "" && input2.value == "") {
        sum = 0;
        resultInput.value = sum;
    }
});
