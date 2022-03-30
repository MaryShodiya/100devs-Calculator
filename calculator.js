let btns = document.querySelectorAll(".num-button");
let everyBtn = document.querySelectorAll(".button");
let outputDisplay = document.querySelector("#result-box");
let clearBtn = document.querySelector('#clear');

let total = document.querySelector("#total");

let btnSpread = [...btns];
let allBtnSpread = [...everyBtn];

// For Number Inputs
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    // Inner Values for calculator

    if (outputDisplay.innerHTML == "0") {
      outputDisplay.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    outputDisplay.innerHTML += value;
  });
});


// Function to evalute Strings
function evaluate(fn) {
    return new Function('return ' + fn)();
}

// To calculate All Input
total.addEventListener('click', ()=> {
let allInputs = outputDisplay.innerHTML;

outputDisplay.innerHTML = evaluate(allInputs);

console.log(evaluate(allInputs));
})

// Clear all Inputs
clearBtn.addEventListener('click', ()=> {
    outputDisplay.innerHTML = "0";
})

