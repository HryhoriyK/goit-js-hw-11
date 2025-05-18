import{a as u,S as d,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="50356760-297b4a10951e523a88448dbdf",p="https://pixabay.com/api/";async function y(t){try{return(await u.get(p,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(o){return console.error("Помилка при отриманні зображень:",o),[]}}const l=document.querySelector(".gallery");let g=new d(".gallery a");function h(t){const o=t.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:i,comments:c,downloads:f})=>`
      <li class="gallery-item">
        <div class="image-container">
        <a href="${a}">
          <img src="${s}" alt="${e}">
        </a>
        </div>
        <div class="info">
          <div class="info-items">
          <p class="info-item">Likes</p>
          <p class="info-value">${r}</p>
          </div class="info-items">
          <div>
          <p class="info-item">Views</p>
          <p class="info-value">${i}</p>
          </div>
          <div class="info-items">
          <p class="info-item">Comments</p>
          <p class="info-value">${c}</p>
          </div>
          <div class="info-items">
          <p class="info-item">Downloads</p>
          <p class="info-value">${f}</p>
          </div>
        </div>
      </li>
    `).join("");l.innerHTML=o,g.refresh()}function v(){l.innerHTML=""}function L(){const t=document.querySelector(".loader");t&&(t.style.display="block")}function b(){const t=document.querySelector(".loader");t&&(t.style.display="none")}const S=document.querySelector(".form");S.addEventListener("submit",async t=>{t.preventDefault();const o=t.target.elements["search-text"].value.trim();if(!o){n.error({message:"Please enter a search term!"});return}L(),v();const s=await y(o);b(),s.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,backgroundColor:"#f70303",color:"#fafafb",titleSize:"18px",messageSize:"16px",titleColor:"#ffffff",messageColor:"#ffffff",width:"322px"}):h(s)});
//# sourceMappingURL=index.js.map
