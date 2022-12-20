let outputState = "start";
let output = document.getElementById("output");

function knopPunt() {
  document.getElementById("output").innerHTML += ".";
  outputState = "sign"
}

function knop9() {
  document.getElementById("output").innerHTML += 9;
  outputState = "number"
}
function knop8() {
  document.getElementById("output").innerHTML += 8;
  outputState = "number"
}
function knop7() {
  document.getElementById("output").innerHTML += 7;
  outputState = "number"
}

function knop6() {
  document.getElementById("output").innerHTML += 6;
  outputState = "number"
}

function knop5() {
  document.getElementById("output").innerHTML += 5;
  outputState = "number"
}
function knop4() {
  document.getElementById("output").innerHTML += 4;
  outputState = "number"
}

function knop3() {
  document.getElementById("output").innerHTML += 3;
  outputState = "number"
}
function knop2() {
  document.getElementById("output").innerHTML += 2;
  outputState = "number"
}
function knop1() {
  document.getElementById("output").innerHTML += 1;
  outputState = "number"
}

function knop0() {
  document.getElementById("output").innerHTML += 0;
  outputState = "number"
}

function knopClear() {
  document.getElementById("output").innerHTML = "";
}
function knopPunt() {
  if(outputState=="number"){
    output.innerHTML += ".";
    outputState = "sign"
  }
}
function knopKeer() {
  if (outputState=="number"){
    output.innerHTML += "x";
    outputState = "sign"
    }
}
function knopPlus() {
  if (outputState=="number"){
    output.innerHTML += "+";
    outputState = "sign"
    }
}
function knopMin() {
  if (outputState=="number"){
    output.innerHTML += "-";
    outputState = "sign"
    }
}
function knopGedeelddoor() {
  if (outputState=="number"){
    output.innerHTML += "/";
    outputState = "sign"
    }
}

function knopIs() {
  let x = 10;
  let y = 20;
  let string = document.getElementById("output").innerHTML;
  string = string.replace(/x/g, "*");
  let result = eval(string);
  document.getElementById("output").innerHTML = result;
}

let string = "8x8";
string = string.replace("x", "*");
string = string.replace("÷", "/");
string = string.replace("plus", "+");


function audio(){
}

document.body.addEventListener("keyup", function(e){
  if (e.code=="Digit1"){
    setTimeout(function(){
      document.getElementById('knop1').style.backgroundColor = "Black"; 
     },50);
     }
  if (e.code=="Digit2"){
    setTimeout(function(){
     document.getElementById('knop2').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit3"){
      setTimeout(function(){
     document.getElementById('knop3').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit4"){
      setTimeout(function(){
     document.getElementById('knop4').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit5"){
      setTimeout(function(){
     document.getElementById('knop5').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit6"){
      setTimeout(function(){
     document.getElementById('knop6').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit7"){
      setTimeout(function(){
     document.getElementById('knop7').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit8"){
      setTimeout(function(){
     document.getElementById('knop8').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Digit9"){
      setTimeout(function(){
     document.getElementById('knop9').style.backgroundColor = "Black";
    },50);
    }
    if (e.code=="Digit0"){
      setTimeout(function(){
     document.getElementById('knop0').style.backgroundColor = "Black";
    },50);
    }
    if (e.code=="KeyX"){
      setTimeout(function(){
     document.getElementById('knopX').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="KeyC"){
      setTimeout(function(){
     document.getElementById('knopC').style.backgroundColor = "Black";
    },50);
    }
    if (e.code=="Enter"){
      setTimeout(function(){
     document.getElementById('knopIs').style.backgroundColor = "Orange"; 
    },50);
    }
    if (e.code=="Slash"){
      setTimeout(function(){
     document.getElementById('knop/').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Minus"){
      setTimeout(function(){
     document.getElementById('knop-').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Equal"){
      setTimeout(function(){
     document.getElementById('knop+').style.backgroundColor = "Black"; 
    },50);
    }
    if (e.code=="Period"){
      setTimeout(function(){
     document.getElementById('knopPunt').style.backgroundColor = "Black"; 
    },50);
    }
})

document.body.addEventListener("keydown", function(e){
  if (e.code=="Digit1"){
   document.getElementById('knop1').style.backgroundColor = "White"; 
  }
  if (e.code=="Digit2"){
    document.getElementById('knop2').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit3"){
    document.getElementById('knop3').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit4"){
    document.getElementById('knop4').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit5"){
    document.getElementById('knop5').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit6"){
    document.getElementById('knop6').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit7"){
    document.getElementById('knop7').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit8"){
    document.getElementById('knop8').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit9"){
    document.getElementById('knop9').style.backgroundColor = "White"; 
   }
   if (e.code=="Digit0"){
    document.getElementById('knop0').style.backgroundColor = "White"; 
   }
   if (e.code=="KeyX"){
    document.getElementById('knopX').style.backgroundColor = "White"; 
   }
   if (e.code=="KeyC"){
    document.getElementById('knopC').style.backgroundColor = "White"; 
   }
   if (e.code=="Enter"){
    document.getElementById('knopIs').style.backgroundColor = "White"; 
   }
   if (e.code=="Slash"){
    document.getElementById('knop/').style.backgroundColor = "White"; 
   }
   if (e.code=="Minus"){
    document.getElementById('knop-').style.backgroundColor = "White"; 
   }
   if (e.code=="Equal"){
    document.getElementById('knop+').style.backgroundColor = "White"; 
   }
   if (e.code=="Period"){
    document.getElementById('knopPunt').style.backgroundColor = "White"; 
   }
})

document.body.addEventListener('keydown',function(e){
  console.log(e.code)
  
  if (e.code=="Digit1"){
    document.getElementById("output").innerHTML += 1;
    outputState = "number"
  }
  if (e.code=="Digit2"){
    document.getElementById("output").innerHTML += 2;
    outputState = "number"
  }
  if (e.code=="Digit3"){
    document.getElementById("output").innerHTML += 3;
    outputState = "number"
  }
  if (e.code=="Digit4"){
    document.getElementById("output").innerHTML += 4;
    outputState = "number"
  }
  if (e.code=="Digit5"){
    document.getElementById("output").innerHTML += 5;
    outputState = "number"
  }
  if (e.code=="Digit6"){
    document.getElementById("output").innerHTML += 6;
    outputState = "number"
  }
  if (e.code=="Digit7"){
    document.getElementById("output").innerHTML += 7;
    outputState = "number"
  }
  if (e.code=="Digit8"){
    document.getElementById("output").innerHTML += 8;
    outputState = "number"
  }
  if (e.code=="Digit9"){
    document.getElementById("output").innerHTML += 9;
    outputState = "number"
  }
  if (e.code=="Digit0"){
    document.getElementById("output").innerHTML += 0;
    outputState = "number"
  }
  if (e.code=="KeyC"){
    document.getElementById("output").innerHTML = "";
  }
  if (e.code=="Enter"){
    knopIs();
  }
  if (e.code=="Period"){
    if (outputState=="number"){
      output.innerHTML += ".";
      outputState = "sign"
      }
  }
  if (e.code=="KeyX"){
    if (outputState=="number"){
      output.innerHTML += "x";
      outputState = "sign"
      }
  }
  if (e.code=="Equal"){
    if (outputState=="number"){
      output.innerHTML += "+";
      outputState = "sign"
      }
  }
  if (e.code=="Slash"){
    if (outputState=="number"){
      output.innerHTML += "/";
      outputState = "sign"
      }
  }
  if (e.code=="Minus"){
    if (outputState=="number"){
      output.innerHTML += "-";
      outputState = "sign"
      }
  }
});