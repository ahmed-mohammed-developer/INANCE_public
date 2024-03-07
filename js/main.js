
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