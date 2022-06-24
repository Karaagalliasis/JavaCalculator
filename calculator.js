//program for a simple calculator

let numb1 = parseInt(prompt("Enter first number"));

let numb2 = parseInt(prompt("Enter second number"));

let operator = prompt("Enter operator from list: +,-,*,/");

if (operator === "+") {

    alert(numb1 + numb2);
}

else if (operator ==="-"){
    alert(numb1 - numb2);
}

else if (operator ==="*"){
    alert(numb1 * numb2);
}

else {
    alert(numb1 / numb2);
}



