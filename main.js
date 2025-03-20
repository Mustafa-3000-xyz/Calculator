let allButtons = document.querySelectorAll("button");

let btnDelete = document.querySelector(".btn-delete");
let btnReset = document.querySelector(".btn-reset");
let btnEqual = document.querySelector(".btn-equal");

let inp = document.querySelector("input");
// ================ Function ================ //
(function(){
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener("click" , function(){
            if (allButtons[i].innerHTML != "DEL" && allButtons[i].innerHTML != "Reset" && allButtons[i].innerHTML != "=") {
                if (inp.value == "Error") {
                    inp.value = "";
                }
                inp.value += allButtons[i].innerHTML;
            }            
        })
    }
})();

btnDelete.addEventListener("click" , Delete_number);
function Delete_number(){
    let value = inp.value;
    inp.value = value.slice(0 , value.length - 1);
}

btnReset.addEventListener("click" , Reset_in_input);
function Reset_in_input(){
    inp.value = "";
}

btnEqual.addEventListener("click" , Same_value);
function Same_value(){
    if (inp.value != "") {
        try {
            let REGEX = inp.value.replace(/x/g, "*").replace(/÷/g, "/");
            let theSameValue = eval(REGEX);
            inp.value = theSameValue;
        } catch {
            inp.value = "Error";
        }
    }

    if (inp.value == "NaN") {
        inp.value = "Error";
    }
}