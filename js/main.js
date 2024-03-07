
let nums = document.querySelectorAll(".number-cont .num");
let section = document.querySelector(".numbers");
let started = false;
window.onscroll = function () {
     if (window.scrollY >= section.offsetTop){
          if(!started) {
               nums.forEach((num) => startCount(num));
          }
          started = true;
     }
}
function startCount(el) {
     let goal = el.dataset.goal;
     let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal){
               clearInterval(count)
          }
     }, 2000 / goal);
    
}
//startCount(document.querySelectorAll(".number-cont .num")[0]);
// Number Section

//section problem 
let tabs = document.querySelectorAll(".tabs li");
let tabArr = Array.from(tabs);

let divs = document.querySelectorAll(".content > p");
let divArr = Array.from(divs);

tabArr.forEach((ele) => {
     ele.addEventListener("click", function (e){
      //console.log(ele)
          tabArr.forEach((ele) => {
               ele.classList.remove("active");
          });
          e.currentTarget.classList.add("active");
          divArr.forEach((p) => {
              p.style.display = "none";
          });
          // console.log(e.currentTarget.dataset.cont);
          document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
     });
});