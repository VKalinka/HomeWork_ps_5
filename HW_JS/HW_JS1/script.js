let userName = prompt("Enter your name", '');
let userAge = prompt('Your age please', '');

if (userAge < 18) {
    alert('You are not allowed to visit this website.');
}
if (userAge >= 18 && userAge <= 22) {
    confirm('Are you sure you want to continue?');
    if (confirm('Are you sure you want to continue?')) {
        alert('Welcome ' + userName);
    } else {
        alert('You are not allowed to visit this website');
} 
} if (userAge > 22) {
    alert('Welcome ' + userName);
}