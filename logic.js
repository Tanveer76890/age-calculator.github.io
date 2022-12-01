const change = () => {
  let bd = document.getElementById("date").value;
  let bm = document.getElementById("month").value;
  let by = document.getElementById("year").value;

  let dval = document.getElementById("d-val");
  let mval = document.getElementById("m-val");
  let yval = document.getElementById("y-val");
  dval.innerHTML = bd;
  mval.innerHTML = bm;
  yval.innerHTML = by;
};

setInterval(change, 10);

// calculating age by clicking the button

const age = () => {
  let bd = document.getElementById("date").value;
  let bm = document.getElementById("month").value;
  let by = document.getElementById("year").value;

  // getting today date by get New Date() sa
  let date = new Date();
  let td = 1 + date.getDate();
//   console.log(td);
  let tdm = 1 + date.getMonth();
  let tdy = date.getFullYear();
  // Every month term is their boys
  let Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (bd > td) {
    td = td + Month[tdm - 1];
    tdm = tdm - 1;
  }
  if (bm > tdm) {
    tdm = tdm + 12;
    tdy = tdy - 1;
  }

  // get your  age
  let d = td - bd;
  let m = tdm - bm;
  let y = tdy - by;
  document.getElementById( "age").innerHTML = `Your Age is ${y} Years ${m} Months ${d} Days `;
};


// clear function here
let clr = document.querySelector(".btn2");
clr.addEventListener('click', ()=>{
     document.getElementById('age').innerHTML = "";
     let bd = document.getElementById("date").value = 1;
     let bm = document.getElementById("month").value = 1;
     let by = document.getElementById("year").value = 2000;
      
})