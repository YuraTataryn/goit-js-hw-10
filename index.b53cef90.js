var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("9dxg1");const l=document.querySelector(".breed-select"),c=document.querySelector(".loader"),d=document.querySelector(".error"),a=document.querySelector(".cat-info"),s=document.querySelector(".cat-image"),i=document.querySelector(".breed-name"),y=document.querySelector(".description"),u=document.querySelector(".temperament");l.addEventListener("change",(()=>{const e=l.value;e&&async function(e){try{c.style.display="block",a.style.display="none";const t=await(0,r.fetchCatByBreed)(e);s.setAttribute("src",t.url),i.textContent=t.breeds[0].name,y.textContent=t.breeds[0].description,u.textContent=`Temperament: ${t.breeds[0].temperament}`,a.style.display="block",c.style.display="none"}catch(e){c.style.display="none",d.style.display="block"}}(e)})),async function(){try{(await(0,r.fetchBreeds)()).forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,l.appendChild(t)})),c.style.display="none",l.style.display="block"}catch(e){c.style.display="none",d.style.display="block"}}();
//# sourceMappingURL=index.b53cef90.js.map