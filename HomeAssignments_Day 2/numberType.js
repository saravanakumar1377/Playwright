
const readline = require("readline");
const r1 = readline.createInterface({
input: process.stdin,
output: process.stdout
})

r1.question("Enter the data: ", (value) =>{
    const n = Number(value)
    function checkNumber(n){

if(Number.isNaN(n)){
    console.log("Entered number is Invalid");
}
else if(n>0){
    console.log("Entered number is Positive");    
}

else if(n<0){
    console.log("Entered number is Negative");
}
else {
    console.log("Entered number is Zero");
    
}
}


    checkNumber(n);
    r1.close();
}
)

