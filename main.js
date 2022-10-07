(()=>{"use strict";var n={238:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const d=a},772:(n,e,t)=>{t.d(e,{Z:()=>d});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"\n:root {\n  --h1-size: 3rem;\n  --h2-size: 2rem;\n  --button-size: 2.5rem;\n  --section-border-top: 5px solid var(--font-color);\n  --section-border-dotted: 5px dotted var(--font-color);\n\n\n  --font-color: #C4C4D4;\n  --background-color: black;\n}\n\nh1, h2, h3, p, button, address {\n  color: var(--font-color);\n}\n\nbody {\n  background-color: var(--background-color);\n}\n\n#content {\n  max-width: 500px;\n}\n\nhtml { \n\n}\n\n\nbody {\n  font-family: 'AvaraBold', sans-serif;\n}\n\nbutton:hover {\n  border-left: var(--section-border-dotted);\n\n  border-right: var(--section-border-dotted);\n}\n\nbutton:active {\n  border: 1px solid white;\n}\n\n\n\n#root {\n  /*\n  background: url('../pexels-pixabay-262047.jpg') no-repeat center center fixed; \n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover;\n  */\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1 {\n  font-size: var(--h1-size);\n}\nh2 {\n  font-size: var(--h2-size);\n}\n#content {\n\n  padding: 10px;\n  margin-top: 20px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n}\n\n\n\n/*\nHEADER CSS START\n*/\n\nheader {\n  width: 500px;\n  padding: 10px;\n  border-bottom: var(--section-border-top);\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n}\n\nbutton {\n  font-size: var(--button-size);\n  border: none;\n  font-family: inherit;\n  background-color: inherit;\n}\n\nbutton:hover {\n}\n\n/*\nHEADER CSS END\n*/\n\n/*\nHOME CSS START\n*/\n#restaurant-name {\n  margin-top: 20px;\n}\n\n#about-div, #hours-div, #location-div {\n  width: 500px;\n  margin: 0 auto;\n  padding-top: 20px;\n  border-top: var(--section-border-top);\n}\n\n#about-div p {\n  margin: 0 auto;\n  width: 500px;\n  text-align: left;\n}\n\n#about-div h2, #hours-div h2, #location-div h2 {\n  margin-bottom: 20px;\n}\n\n#hours-div {\n}\n\n#hours-div p {\n  margin: 0 auto;\n  width: 300px;\n}\n\n/*\nHOME CSS END\n*/\n\n/*\nMENU CSS START\n*/\n#chef-div, #cocktail-div, #desert-div {\n  margin: 0 auto;\n  width: 500px;\n  text-align: left;\n  padding-top: 20px;\n  border-top: var(--section-border-top);\n}\n\n\n#chef-div h2, #cocktail-div h2, #desert-div h2 {\n  text-align: center;  \n}\n\nh1 {\n  margin-top: 20px;\n}\n\n.menu-item-name {\n  font-size: 1.2rem;\n  margin-top: 10px;\n}\n\n.menu-item-price {\n  font-size: .9rem;\n}\n\n.menu-item-description {\n  font-size: .8rem;\n}\n\n.menu-item {\n  border-bottom: var(--section-border-dotted);\n}\n\n.menu-item-name, .menu-item-price, .menu-item-description {\n  margin-bottom: 10px;\n}\n\n#chef-div .menu-item:last-child {\n  border: none;\n}\n\n/*\nMENU CSS END\n*/\n\n/*\nCONTACT CSS START\n*/\n#contact-header {\n}\n\n\n.contact-div {\n  text-align: left;  \n  margin-top: 10px;\n  border-bottom: var(--section-border-top);\n\n}\n\n.contact-div p {\n  font-size: 1.5rem;\n}\n\n/*\nCONTACT CSS END\n*/",""]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var c=[].concat(n[l]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],d=0;d<n.length;d++){var s=n[d],l=o.base?s[0]+o.base:s[0],c=r[l]||0,u="".concat(l," ").concat(c);r[l]=c+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=i(m,o);o.byIndex=d,e.splice(d,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var d=t(r[a]);e[d].references--}for(var s=o(n,i),l=0;l<r.length;l++){var c=t(r[l]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=s}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=(n,e)=>{const t=document.createElement(n);for(let n in e)t[n]=e[n];return t},e=()=>{const e=document.querySelector("#root"),t=(()=>{const e=n("header"),t=n("nav",{id:"top-nav"}),o=n("button",{id:"home",textContent:"Home"}),i=n("button",{id:"menu",textContent:"Menu"}),r=n("button",{id:"contact",textContent:"Contact"});return t.appendChild(o),t.appendChild(i),t.appendChild(r),e.appendChild(t),{getHeader:()=>e}})(),o=(()=>{const e=n("div",{id:"content"}),t=(e,t,o)=>n("p",{class:"hours-row",textContent:`${e}: ${t} A.M - ${o} P.M`});return{getHome:()=>(e.appendChild(n("h1",{id:"restaurant-name",textContent:"Parallel 37"})),e.appendChild((()=>{const e=n("div",{id:"about-div"}),t=n("h2",{textContent:"About"}),o=n("p",{textContent:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."});return e.appendChild(t),e.appendChild(o),e})()),e.appendChild((()=>{const e=n("div",{id:"hours-div"}),o=n("h2",{textContent:"Hours"});return e.appendChild(o),e.appendChild(t("Sunday","08:00","09:00")),e.appendChild(t("Monday","08:00","09:00")),e.appendChild(t("Tuesday","08:00","09:00")),e.appendChild(t("Wednesday","08:00","09:00")),e.appendChild(t("Thursday","08:00","09:00")),e.appendChild(t("Friday","08:00","09:00")),e.appendChild(t("Saturday","08:00","09:00")),e})()),e.appendChild((()=>{const e=n("div",{id:"location-div"}),t=n("h2",{textContent:"Location"}),o=n("address",{textContent:"123 Fake St. Fake Illinois 12345"});return e.appendChild(t),e.appendChild(o),e})()),e)}})(),i=(()=>{const e=n("div",{id:"content"}),t=(e,t,o)=>{const i=n("div");i.classList.add("menu-item");const r=n("h3",{textContent:e});r.classList.add("menu-item-name");const a=n("p",{textContent:t});a.classList.add("menu-item-price");const d=n("p",{textContent:o});return d.classList.add("menu-item-description"),i.appendChild(r),i.appendChild(a),i.appendChild(d),i};return{getMenu:()=>(e.appendChild(n("h1",{id:"menu-top",textContent:"Menu"})),e.appendChild((()=>{const e=n("div",{id:"chef-div"}),o=n("h2",{textContent:"Chef's Choice"});return e.appendChild(o),e.appendChild(t("Dish Name 1","$100","Tempus egestas sed sed risus. Duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Cursus turpis massa tincidunt dui. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.")),e.appendChild(t("Dish Name 2","$100","Tempus egestas sed sed risus. Duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Cursus turpis massa tincidunt dui. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.")),e.appendChild(t("Dish Name 3","$100","Tempus egestas sed sed risus. Duis convallis convallis tellus id. Ultricies tristique nulla aliquet enim tortor at. Cursus turpis massa tincidunt dui. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.")),e})()),e.appendChild((()=>{const e=n("div",{id:"cocktail-div"}),o=n("h2",{textContent:"Chef's Cocktails"});return e.appendChild(o),e.appendChild(t("Cocktail Name 1","$30","Tempus egestas sed sed risus. Duis convallis convallis tellus id.")),e.appendChild(t("Cocktail Name 2","$50","Tempus egestas sed sed risus. Duis convallis convallis tellus id.")),e.appendChild(t("Cocktail Name 3","$25","Tempus egestas sed sed risus. Duis convallis convallis tellus id.")),e})()),e.appendChild((()=>{const e=n("div",{id:"desert-div"}),o=n("h2",{textContent:"Chef's Deserts"});return e.appendChild(o),e.appendChild(t("Desert Name 1","$30","Duis convallis convallis tellus id.")),e.appendChild(t("Desert Name 2","$50","Tempus egestas sed sed risus. Duis convallis convallis tellus id. Tempus egestas sed sed risus.")),e.appendChild(t("Desert Name 3","$25","Tempus egestas sed sed risus. Duis convallis convallis tellus id.")),e})()),e)}})(),r=(()=>{const e=n("div",{id:"content"}),t=(e,t)=>{const o=n("div");o.classList.add("contact-div");const i=n("h2",{textContent:e}),r=n("p",{textContent:t});return o.appendChild(i),o.appendChild(r),o};return{getContact:()=>(e.appendChild(n("h1",{id:"contact-header",textContent:"Contact us"})),e.appendChild(t("Phone","123-456-7890")),e.appendChild(t("Email","contact@parallel37.com")),e.appendChild(t("Socials","Twitter | Instagram | Facebook | Others")),e)}})(),a=()=>{for(;e.childNodes.length>1;)e.removeChild(e.lastChild)},d=n=>getComputedStyle(document.documentElement).getPropertyValue(`--${n}`),s=()=>{a(),e.appendChild(o.getHome())},l=()=>{a(),e.appendChild(i.getMenu())},c=()=>{a(),e.appendChild(r.getContact())};return{initialLoad:()=>{e.appendChild(t.getHeader()),e.appendChild(o.getHome())},renderHome:s,renderMenu:l,renderContact:c,render:n=>{switch(console.log("hello from render"),console.log("button",n),(n=>{document.querySelectorAll("button").forEach((n=>n.style.border="none")),console.log(d("section-border-dotted")),n.style.borderLeft=d("section-border-dotted"),n.style.borderRight=d("section-border-dotted")})(n),n.id){case"home":s();break;case"menu":l();break;case"contact":c()}}}};var o=t(379),i=t.n(o),r=t(795),a=t.n(r),d=t(569),s=t.n(d),l=t(565),c=t.n(l),u=t(216),p=t.n(u),m=t(589),h=t.n(m),v=t(238),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),i()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals;var b=t(772),C={};function g(){e().render(this)}C.styleTagTransform=h(),C.setAttributes=c(),C.insert=s().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=p(),i()(b.Z,C),b.Z&&b.Z.locals&&b.Z.locals,e().initialLoad();const x=document.querySelectorAll("button");console.log(x),x.forEach((n=>n.addEventListener("click",g)))})()})();