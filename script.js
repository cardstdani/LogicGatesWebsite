var a = 0
var b = 0

window.onload = function () {
  setDropdownName("<strong>Conjunción ∧</strong>");
};

function setDropdownName(a){
  document.getElementById("dropdown").innerHTML = a;
  document.getElementById("toHide").style.visibility = "visible";
  if(document.getElementById("dropdown").innerHTML == "<strong>Negación ¬</strong>"){
    document.getElementById("toHide").style.visibility = "hidden";
  }
}

function calculate(){

  if(document.getElementById("dropdown").innerHTML == "<strong>Negación ¬</strong>"){
    document.getElementById("outputLabel").innerHTML = "<strong>" + not(parseInt(document.getElementById("inputVal2").value)) + "</strong>";
  }else if(document.getElementById("dropdown").innerHTML == "<strong>Conjunción ∧</strong>"){
    document.getElementById("outputLabel").innerHTML = "<strong>" + and(parseInt(document.getElementById("inputVal1").value), parseInt(document.getElementById("inputVal2").value)) + "</strong>";
  }else if(document.getElementById("dropdown").innerHTML == "<strong>Disyunción ∨</strong>"){
    document.getElementById("outputLabel").innerHTML = "<strong>" + or(parseInt(document.getElementById("inputVal1").value), parseInt(document.getElementById("inputVal2").value)) + "</strong>";
  }else if(document.getElementById("dropdown").innerHTML == "<strong>Implicación →</strong>"){
    document.getElementById("outputLabel").innerHTML = "<strong>" + implication(parseInt(document.getElementById("inputVal1").value), parseInt(document.getElementById("inputVal2").value)) + "</strong>";
  }else if(document.getElementById("dropdown").innerHTML == "<strong>Bicondicional ↔</strong>"){
    document.getElementById("outputLabel").innerHTML = "<strong>" + xnor(parseInt(document.getElementById("inputVal1").value), parseInt(document.getElementById("inputVal2").value)) + "</strong>";
  }
}

function not(x) {
  return (x + 1) + (x + 1) * -x;
}

function and(x, y) {
  return x * y;
}

function or(x, y) {
  return (x + y) - (x * y)
}

function xnor(x, y) {
  return (x*y) + 0**(x+y);
}

function implication(x, y) {
  return y**x;
}