const hourEl = document.getElementById ('hour');
const minuteEl = document.getElementById ('minute');
const secondEl = document.getElementById ('second');
const ampm = document.getElementById ('ampm');

function clock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let amPM = "AM";


  h = h < 10 ? "0" + h : h ;
  m = m < 10 ? "0" + m : m ;
  s = s < 10 ? "0" + s : s ;

  if (h > 12){
    h = h - 12;
    amPM = "PM";
  }

  hourEl.textContent = h;
  minuteEl.textContent = m;
  secondEl.textContent = s;
  ampm.textContent = amPM;

  setTimeout (()=>{
    clock();
  }, 1000)

}

clock();