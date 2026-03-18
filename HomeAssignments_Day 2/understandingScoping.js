

var genderType = "female";
function printGender(){
let color = "brown";
if(genderType.startsWith("female")) {
var age = 30
let color = "Pink";
console.log("Inside if-block color: ", color);
}
console.log("Outside block:", color);
console.log("Inside function age:", age);
}
printGender();
console.log("Global genderType:", genderType);

genderType = "male";

printGender();
console.log("Global genderType:", genderType);