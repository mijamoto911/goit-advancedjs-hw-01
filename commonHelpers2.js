import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".js-form");let r={};const n=t=>{const e=JSON.parse(localStorage.getItem("form-data"));if(e!==null){r=e;for(const o in e)e.hasOwnProperty(o)&&(t.elements[o].value=e[o])}};n(a);const m=t=>{const e=t.target.name,o=t.target.value;r[e]=o,localStorage.setItem("form-data",JSON.stringify(r))},s=t=>{t.preventDefault();const e=t.target.elements;let o=!0;for(const l of e)if(l.name&&l.value===""){o=!1;break}if(!o){alert("Fill please all fields");return}console.log(r),t.target.reset(),localStorage.removeItem("form-data"),r={}};a.addEventListener("input",m);a.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map