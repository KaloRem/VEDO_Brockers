(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const i=document.querySelector(".mob_menu_btn"),u=document.querySelector(".mobile_header_nav_list");i.addEventListener("click",p);function p(){i.classList.toggle("active"),u.classList.toggle("active")}const h=document.querySelectorAll(".mobile_header_nav_list_item_link");h.forEach(t=>t.addEventListener("click",g));function g(){i.classList.remove("active"),u.classList.remove("active")}window.onscroll=function(){b()};function b(){var t=document.body.scrollTop||document.documentElement.scrollTop,o=document.documentElement.scrollHeight-document.documentElement.clientHeight,r=t/o*100;document.getElementById("myBar").style.width=r+"%"}const l=document.getElementById("modal"),v=document.getElementById("openBtn"),w=document.getElementById("closeBtn"),m=document.querySelectorAll('input[name="option"]'),d=document.getElementById("checkBtn");var a;d.disabled=!0;function f(){for(const t of m)if(t.checked)return!0;return!1}v.onclick=function(){l.style.display="block",a=document.body.style.overflow,document.body.style.overflow="hidden",d.disabled=!f()};w.onclick=function(){l.style.display="none",document.body.style.overflow=a};window.onclick=function(t){if(t.target.id===l.id)l.style.display="none",document.body.style.overflow=a;else return console.error};m.forEach(t=>{t.addEventListener("change",()=>{d.disabled=!f();const o=t.parentElement;t.checked?(o.style.outline="4px solid var(--main-font-color)",o.style.transition="outline 100ms cubic-bezier(0.4, 0, 0.2, 1)"):(o.style.outline="",o.style.transition="")})});const y=document.querySelectorAll('a[href^="#"]');y.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const r=o.target.getAttribute("href"),c=document.querySelector(r),e={behavior:"smooth",duration:1e3};window.scrollTo({top:c.offsetTop,...e})})});y.forEach(t=>{t.addEventListener("click",o=>{o.preventDefault();const r=o.target.getAttribute("href");let e=document.querySelector(r).offsetTop;window.matchMedia("(min-width: 600px)").matches?e-=83:e-=90,window.scrollTo({top:e,behavior:"smooth"})})});new Swiper(".swiper",{effect:"cube",grabCursor:!0,cubeEffect:{shadow:!0,slideShadows:!0,shadowOffset:20,shadowScale:.6},pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
//# sourceMappingURL=commonHelpers.js.map
