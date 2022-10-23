let countOl = document.getElementById("count-ol");
let saveEl = document.getElementById("save-el");


let count = 0;


function increment() {
  count += 1;
  countOl.textContent = count
}

function save() {
  let countStr =  count + " | ";
  saveEl.textContent += countStr;
  countOl.textContent = 0;
  count = 0;
}