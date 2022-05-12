
"use strict";

let input1 = document.getElementById("inp1");
let input2 = document.getElementById("inp2");
let calculateButton = document.getElementById("calcbtn");
let resultInput = document.getElementById("resultInp");

calculateButton.addEventListener('click', function() {
    let sum = "";
    if(input1.value == "" && input2.value == "") {
        sum = 0;
        resultInput.value = sum;
    }
    else if(input1.value != "" && input2.value == "") {
        sum = `${input1.value}0`;
        resultInput.value = sum;
    }
    else if(input1.value == "" && input2.value != "") {
        sum = `0${input2.value}`;
        resultInput.value = sum;
    }
    else {
        sum = `${input1.value}${input2.value}`;
        resultInput.value = sum;
    }
})
