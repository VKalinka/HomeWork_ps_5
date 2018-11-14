let num = +prompt("Enter your number for factorial");

function factorial(n){
    return (n != 1) ? n * factorial(n - 1) : 1;
}

document.write("Factorial is " + (factorial(num)));


 
