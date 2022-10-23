// document.body.textContent = 'hello';
// let name = window.prompt("How old are you?");
// console.log(name);
// let Myname;
// document.getElementById("my-button").onclick = function(){
//   Myname = document.getElementById("mytext").value;
//   document.getElementById("myLabel").textContent += "Hello! "+ Myname;
// }

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log("Happy Bday! You are",age,"Yrs old!");


// let a;
// let b;
// let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b = window.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
// console.log("Side C:", c);


//
document.getElementById("submit-btn").onclick = function(){

  a = document.getElementById("Atextbox").value;
  // a = Number(a);

  b = document.getElementById("Btextbox").value;
  // b = Number(b);

  c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

  document.getElementById("Clabel").textContent += c;
}
//

//
const Alabel = document.getElementById("Alabel").value;
const Total = document.getElementById("Total");

let cm = 30.48;
function submitBtn(){
  let ttl = Alabel * cm;
  Total.textContent += ttl +" | ";
} 
//

//

