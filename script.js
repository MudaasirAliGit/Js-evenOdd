// Odd or Even number Checker
// Prepared by Mudassir Ali

let num = prompt("Please enter any number:");
if(num % 2 == 0){
    alert("The number " + num + " is Even.\n\nAfter incrementing, the number is" + ++num);
}
else{
    alert("The number " + num + " is Odd.\n\nAfter incrementing, the number is " + ++num);
}