function knop9() {
  document.getElementById("output").innerHTML += 9;
}
function knop8() {
  document.getElementById("output").innerHTML += 8;
}
function knop7() {
  document.getElementById("output").innerHTML += 7;
}

function knop6() {
  document.getElementById("output").innerHTML += 6;
}

function knop5() {
  document.getElementById("output").innerHTML += 5;
}
function knop4() {
  document.getElementById("output").innerHTML += 4;
}

function knop3() {
  document.getElementById("output").innerHTML += 3;
}
function knop2() {
  document.getElementById("output").innerHTML += 2;
}
function knop1() {
  document.getElementById("output").innerHTML += 1;
}

function knop0() {
  document.getElementById("output").innerHTML += 0;
}

function knopClear() {
  document.getElementById("output").innerHTML = "";
}

function knopKeer() {
  document.getElementById("output").innerHTML += "x";
}
function knopPlus() {
  document.getElementById("output").innerHTML += "+";
}

function knopMin() {
  document.getElementById("output").innerHTML += "-";
}
function knopGedeelddoor() {
  document.getElementById("output").innerHTML += "/";
}

function knopIs() {
  let x = 10;
  let y = 20;
  let string = document.getElementById("output").innerHTML;
  string = string.replace("x", "*");
  string = string.replace("÷", "/");
  string = string.replace("plus", "+");
  let result = eval(string);
  document.getElementById("output").innerHTML = result;
}

let string = "8x8";
string = string.replace("x", "*");
string = string.replace("÷", "/");
string = string.replace("plus", "+");


function audio(){
}
