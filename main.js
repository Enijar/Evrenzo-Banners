!function(){const e=document.querySelector("#container");e.addEventListener("click",(t=>{"A"!==t.target.nodeName&&window.open(e.dataset.href,"_blank")})),window.addEventListener("load",(()=>{const e=document.querySelector("#carousel"),t=e.querySelectorAll("section"),n=window.state||{},o={autoPlay:"production"===window.mode,loop:(window.mode,!1),slideIndex:"production"===window.mode?-1:1,...n};function d(){if(o.slideIndex++,!t[o.slideIndex]){if(!o.loop)return;o.slideIndex=0}e.dataset.slideIndex=o.slideIndex,t.forEach((e=>{e.style.opacity="0",e.style.pointerEvents="none"})),t[o.slideIndex].style.opacity="1",t[o.slideIndex].style.pointerEvents="auto",o.autoPlay&&setTimeout(d,parseInt(t[o.slideIndex].dataset.timeout))}window.nextSlide=d,d()}))}();