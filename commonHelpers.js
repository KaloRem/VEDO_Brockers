(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const s=document.querySelector(".mob_menu_btn"),d=document.querySelector(".header_nav_list");s.addEventListener("click",m);function m(){s.classList.toggle("active"),d.classList.toggle("active")}const f=document.querySelectorAll(".header_nav_list_item_link");f.forEach(t=>t.addEventListener("click",y));function y(){s.classList.remove("active"),d.classList.remove("active")}window.onscroll=function(){p()};function p(){var t=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.scrollHeight-document.documentElement.clientHeight,l=t/n*100;document.getElementById("myBar").style.width=l+"%"}const c=document.getElementById("modalBuy"),v=document.getElementById("openBtnBuy"),h=document.getElementById("closeBtnBuy"),a=document.querySelectorAll('input[name="option"]'),b=document.querySelector('button[type="submit"]');var i;function g(){for(const t of a)if(t.checked)return!0;return!1}v.onclick=function(){c.style.display="block",i=document.body.style.overflow,document.body.style.overflow="hidden"};h.onclick=function(){c.style.display="none",document.body.style.overflow=i};window.onclick=function(t){t.target==c&&(c.style.display="none",document.body.style.overflow=i)};a.forEach(t=>{t.addEventListener("change",()=>{b.disabled=!g();const n=t.parentElement;t.checked?(n.style.outline="4px solid var(--main-font-color)",n.style.transition="outline 100ms cubic-bezier(0.4, 0, 0.2, 1)"):(n.style.outline="",n.style.transition="")})});
//# sourceMappingURL=commonHelpers.js.map
