function eventListeners(){document.querySelector(".mobile-menu").addEventListener("click",navegacionResponsive)}function navegacionResponsive(){document.querySelector(".navegacion").classList.toggle("mostrar")}document.addEventListener("DOMContentLoaded",(function(){eventListeners()})),function(){const e=[...document.querySelectorAll(".slider__body")],t=document.querySelector("#next"),n=document.querySelector("#before");let o;function c(t){const n=Number(document.querySelector(".slider__body--show").dataset.id);o=n,o+=t,console.log(e.length),0!==o&&o!=e.length+1||(o=0===o?e.length:1),e[n-1].classList.toggle("slider__body--show"),e[o-1].classList.toggle("slider__body--show")}t.addEventListener("click",()=>c(1)),n.addEventListener("click",()=>c(-1))}();