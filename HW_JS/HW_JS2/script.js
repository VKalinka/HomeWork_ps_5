let numIn = +prompt("Enter your number please");

for(let i = 2; i <= numIn; i++){
    let simple = true;
    
    for(let j = 2; j < i; j++) {
        if(!(i % j)) {
            simple = false;
            break;
        }
    }
    if(simple) {
        console.log(i);
    }
}

