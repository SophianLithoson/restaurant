(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --dark-color: #f0fdf4;\n    --dark-bg-color: #052e16;\n    --medium-color: #f0fdf4;\n    --medium-bg-color: #14532d;\n    --light-color: #052e16;\n    --light-bg-color: #dcfce7;\n}\n\nbody {\n    background-color: var(--light-bg-color);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 100vh;\n}\n\nfooter {\n    background-color: var(--dark-bg-color);\n    color: var(--dark-color);\n    font-size: 0.8rem;\n    display: flex;\n    flex-wrap: wrap;\n}\n\na {\n    color: inherit;\n}\n\n.header-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center; \n}\n\n.navbar {\n    margin: 0 auto;\n}\n\n.nav-button {\n    padding: 4px 12px;\n    border: 1px solid var(--dark-bg-color);\n    border-radius: 0 0 5px 5px;\n    background-color: var(--medium-bg-color);\n    color: var(--medium-color);\n\n}\n\n.nav-button.active {\n    border: 1px solid var(--medium-bg-color);\n    background-color: var(--dark-bg-color);\n    color: var(--dark-color);\n}\n\n.banner {\n    position: relative;\n    margin: 0 auto;\n}\n\n.banner img {\n    width: 600px;\n    height: 200px;\n    object-fit: cover;\n}\n\n.text-overlay {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: #000000;\n    color: #fff;\n    padding: 10px 20px;\n    font-size: 20px;\n    text-align: center;\n}\n\n#content-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    gap: 2rem;\n}\n\n.content-card {\n    background-color: var(--medium-bg-color);\n    color: var(--medium-color);\n    border-radius: 1rem;\n    padding: 1.5rem;\n    max-width: 600px;\n}\n\n.content-card h1{\n    font-size: 1.3rem;\n    margin-bottom: 0.3rem;\n}\n\n.footer-links {\n    margin: 0 auto;\n}",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const v=function(){const e=document.getElementById("content-container"),n=document.createElement("div"),t=document.createElement("h1"),r=document.createElement("p");e.innerHTML="",n.classList.add("content-card"),t.textContent="Welcome to the Jungle!",r.textContent="Here at Assam Jungle Cafe, we bring you the best cuisine from all across India. Inspired by the the cuisine of my home villiage located near the Dehing Patkai rainforest, Assam Jungle Cafe is your new source for authentic Indian food!",n.appendChild(t),n.appendChild(r),e.appendChild(n);const o=document.createElement("div");o.classList.add("content-card"),o.appendChild(Object.assign(document.createElement("h1"),{innerHTML:"Operating Hours"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Sunday: 8am - 2pm"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Monday: 10am - 9pm"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Tuesday: 10am - 9pm"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Wednesday: 10am - 9pm"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Thursday: 10am - 9pm"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Friday: 10am - 11pm"})),o.appendChild(Object.assign(document.createElement("p"),{innerHTML:"Saturday: 8am - 11pm"})),e.appendChild(o)},g=document.getElementById("home-button"),h=document.getElementById("menu-button"),b=document.getElementById("contact-button");v(),document.getElementById("nav-buttons").addEventListener("click",(e=>{switch(e.target.textContent){case"Home":g.classList.add("active"),h.classList.remove("active"),b.classList.remove("active"),v();break;case"Menu":g.classList.remove("active"),h.classList.add("active"),b.classList.remove("active"),console.log("function menuContent() triggered"),document.getElementById("content-container").innerHTML="";break;case"Contact":g.classList.remove("active"),h.classList.remove("active"),b.classList.add("active"),console.log("function contactContent() triggered"),document.getElementById("content-container").innerHTML=""}})),console.log("Things seem to be in order here")})()})();