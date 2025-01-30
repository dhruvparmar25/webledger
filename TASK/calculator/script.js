function myFunction(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}
function calculate() {
  var displayValue = document.getElementById("display").value;
  try {
    var result = eval(displayValue?.trim()||0);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Invalid";
  }
}
function pi() {
  document.getElementById("display").value += Math.PI.toFixed(2);
}
function backspace() {
  let display = document.getElementById("display");
  display.value = display.value?.trim()?.slice(0, -1)||'0';
}
function squre(){
  var x = document.getElementById("display").value;
  document.getElementById("display").value=Math.pow(x,2);
}

 
