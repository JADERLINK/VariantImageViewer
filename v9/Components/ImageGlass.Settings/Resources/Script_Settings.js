!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ig-ui",[],t):"object"==typeof exports?exports["ig-ui"]=t():e["ig-ui"]=t()}(this,(()=>(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var o=function(e){document.querySelectorAll(".tab-page").forEach((function(e){return e.classList.remove("active")}));var t=document.querySelector('.tab-page[tab="'.concat(e,'"]'));null==t||t.classList.add("active"),document.querySelectorAll('input[type="radio"]').forEach((function(e){return e.checked=!1}));var o=document.querySelector('input[type="radio"][value="'.concat(e,'"]'));o&&(o.checked=!0)},n=function(){for(var e in window._pageSettings.lang)if(Object.prototype.hasOwnProperty.call(window._pageSettings.lang,e))for(var t=window._pageSettings.lang[e],o=0,n=Array.from(document.querySelectorAll('[data-lang="'.concat(e,'"]')));o<n.length;o++){n[o].innerText=t}},a=function(){for(var e in window._pageSettings.config)if(Object.prototype.hasOwnProperty.call(window._pageSettings.config,e)){var t=window._pageSettings.config[e];if("string"==typeof t||"number"==typeof t||"boolean"==typeof t){var o=document.querySelector('[name="'.concat(e,'"]'));if(o){var n=o.tagName.toLowerCase();if("select"===n)o.value=t.toString();else if("input"===n){var a=o.getAttribute("type").toLowerCase(),i=o;if("radio"===a||"checkbox"===a)i.checked=Boolean(t);else if("color"===a){var r=t.toString()||"#00000000";i.value=r.substring(0,r.length-2)}else i.value=t.toString()}}}}};window._pageSettings||(window._pageSettings={config:{},lang:{}}),window._pageSettings.setActiveTab=o,window._pageSettings.loadLanguage=n,window._pageSettings.loadSettings=a;for(var i=Array.from(document.querySelectorAll('input[name="nav"]')),r=0;r<i.length;r++){i[r].addEventListener("change",(function(e){var t=e.target.value;o(t)}),!1)}return o("image"),n(),a(),t})()));