
let nums = document.querySelectorAll(".number-cont .num");
let section = document.querySelector(".numbers");
let started = false; // Function Started ? No


window.onscroll = function () {
     if (window.scrollY >= section.offsetTop){
          if (!started) {
               number-cont552.forEach((num) => startCount(num));
          }
          started = true;
     }
}

function startCount(el) {
     let goal = el.dataset.goal;
     let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
               clearInterval(count)
          }
     }, 2000 / goal);
}

