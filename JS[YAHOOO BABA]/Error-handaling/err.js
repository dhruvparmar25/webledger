let a= prompt("Enter First Number");
let b= prompt("Enter Secound Nmuber");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError ("Sorry This is Not allow")   
}
let sum=parseInt(a)+parseInt(b);
try {
    document.getElementById("display").innerText = "Sum: " + sum; 
} catch (error) {
    
    document.getElementById("display").innerText = "Error AA gaya Bhai"

}


