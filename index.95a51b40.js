!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var c=o("bpxeT"),a=o("2TvXO"),l=o("eWrZJ"),s=document.querySelector(".breed-select"),i=document.querySelector(".loader"),u=document.querySelector(".error"),d=document.querySelector(".cat-info"),p=document.querySelector(".cat-image"),y=document.querySelector(".breed-name"),f=document.querySelector(".description"),m=document.querySelector(".temperament");function b(){return(b=e(c)(e(a).mark((function t(){return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.fetchBreeds)();case 3:e.sent.forEach((function(e){var t=document.createElement("option");t.value=e.id,t.textContent=e.name,s.appendChild(t)})),i.style.display="none",s.style.display="block",e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),i.style.display="none",u.style.display="block";case 13:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=e(c)(e(a).mark((function t(n){var r;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i.style.display="block",d.style.display="none",e.next=5,(0,l.fetchCatByBreed)(n);case 5:r=e.sent,p.setAttribute("src",r.url),y.textContent=r.breeds[0].name,f.textContent=r.breeds[0].description,m.textContent="Temperament: ".concat(r.breeds[0].temperament),d.style.display="block",i.style.display="none",e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),i.style.display="none",u.style.display="block";case 18:case"end":return e.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}s.addEventListener("change",(function(){var e=s.value;e&&function(e){v.apply(this,arguments)}(e)})),function(){b.apply(this,arguments)}()}();
//# sourceMappingURL=index.95a51b40.js.map
