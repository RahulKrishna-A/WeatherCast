(()=>{"use strict";var r={524:(r,n,e)=>{e.d(n,{Z:()=>l});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(461),c=e(984),d=i()(o());d.i(s.Z),d.i(c.Z),d.push([r.id,"*{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n",""]);const l=d},984:(r,n,e)=>{e.d(n,{Z:()=>f});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),d=new URL(e(525),e.b),l=i()(o()),m=c()(d);l.push([r.id,"#main_container {\r\n    height: 100vh;\r\n    width: 100vw;\r\n    height: 100dvh;\r\n    width: 100dvw;\r\n    background-image: url("+m+");\r\n    background-size: cover;\r\n}\r\n\r\n#main_nav {\r\n    height: 5vh;\r\n    /*background-color: red;*/\r\n    z-index: 5;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    font-family: 'Oswald', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    padding: 2rem;\r\n}\r\n\r\n#main_content {\r\n    display: flex;\r\n    color: white;\r\n    font-family: 'Montserrat', sans-serif;\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n/*------------------------left----------------------------------------------------*/\r\n#main_container-left {\r\n    margin-top: 11vh;\r\n}\r\n\r\n#content_climate_status {\r\n    margin-bottom: 0.2rem;\r\n    margin-left: 2rem;\r\n    height: 4rem;\r\n    /*background-color: red;*/\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 2.5rem;\r\n    font-weight: 500;\r\n\r\n}\r\n\r\n#main_content-left {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 40vw;\r\n    height: 6rem;\r\n    margin-left: 2rem;\r\n\r\n\r\n    /*background-color: red;*/\r\n}\r\n\r\n#content_temp {\r\n    width: 12rem;\r\n    font-size: 6rem;\r\n    font-weight: 800;\r\n}\r\n\r\n#content_city_date {\r\n    margin-top: auto;\r\n    padding-left: 0.2rem;\r\n}\r\n\r\n#content_city {\r\n    font-size: 2.5rem;\r\n    font-weight: 550;\r\n}\r\n\r\n\r\n#content_imgstatus {\r\n    padding-left: 0.2rem;\r\n    margin-left: 1rem;\r\n    margin-top: auto;\r\n}\r\n\r\nsvg {\r\n    height: 50px;\r\n    width: 60px;\r\n}\r\n\r\n/*-------------------search----------*/\r\n#main_input-container {\r\n    margin-left: 2rem;\r\n    margin-top: 2rem;\r\n    position: relative;\r\n    /*background-color: #3bfaf8;*/\r\n    height: 4rem;\r\n\r\n}\r\n\r\n#main_input {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 3px solid white;\r\n    height: 1.8rem;\r\n    color: white;\r\n    width: 15rem;\r\n    outline: none;\r\n    font-size: 1rem;\r\n    padding-right: 35px;\r\n}\r\n\r\n#main_input::placeholder {\r\n    color: rgba(255, 255, 255, 0.96);\r\n}\r\n\r\n#main_search-svg-container {\r\n    position: absolute;\r\n    left: 13rem;\r\n    /*background-color: red;*/\r\n    top: 0;\r\n}\r\n\r\n#main_search-svg {\r\n    height: 20px;\r\n    width: auto;\r\n    fill: white;\r\n}\r\n\r\n#main_search-svg-container:hover #main_search-svg {\r\n    scale: 1.1;\r\n    cursor: pointer;\r\n}\r\n\r\n#main_error-container {\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n/*--------------------------------------Right---------------------------------------------------------*/\r\n#main_container-right {\r\n    margin-left: auto;\r\n    margin-top: 17vh;\r\n    margin-right: 2rem;\r\n    /*background-color: red;*/\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.main_right_svg svg {\r\n    fill: white;\r\n}\r\n\r\n.main_right-block {\r\n    display: flex;\r\n    gap: 1rem;\r\n    /*background-color: #3bfaf8;*/\r\n}\r\n\r\n.main_right_header {\r\n    font-size: 1rem;\r\n    margin-bottom: 0.3rem;\r\n}\r\n\r\n.main-right_text p:nth-child(2) {\r\n    font-weight: 600;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/*--------------------footer--------------------------*/\r\n\r\n#main_footer {\r\n    font-family: 'Montserrat', sans-serif;\r\n    color: white;\r\n    margin-top: 8vh;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#main_foot-content {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.foot_containers {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n#foot_head {\r\n    margin-left: 2rem;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 3vh;\r\n    font-weight: bolder;\r\n    display: flex;\r\n    padding: 0.5rem;\r\n    /*border-bottom: 2px rgba(255, 255, 255, 0.26) solid;*/\r\n    margin-right: 2rem;\r\n}\r\n\r\n.foot_days-data{\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n",""]);const f=l},461:(r,n,e)=>{e.d(n,{Z:()=>f});var t=e(81),o=e.n(t),a=e(645),i=e.n(a),s=e(667),c=e.n(s),d=new URL(e(527),e.b),l=i()(o()),m=c()(d);l.push([r.id,"#start_container{\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    background-image: url("+m+");\r\n    background-size: cover;\r\n}\r\n\r\n#start_sidetext{\r\n    position: absolute;\r\n    color: rgba(255, 255, 255, 0.25);\r\n    font-family: 'Oswald', sans-serif;\r\n    top:12rem;\r\n    width: 35vh;\r\n    left: -12vh;\r\n    font-size: 1.5rem;\r\n    transform: rotate(-90deg);\r\n}\r\n\r\n\r\n/*--------Nav----------*/\r\n\r\n#start_nav{\r\n    height: 5vh;\r\n    /*background-color: red;*/\r\n    z-index: 5;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    font-family: 'Oswald', sans-serif;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.5rem;\r\n    padding: 2rem;\r\n}\r\n\r\n#start_hero{\r\n    margin-left:6rem;\r\n    margin-top: 2rem;\r\n    width: 25vw;\r\n    /*background-color: red;*/\r\n}\r\n\r\n#start_hero__h1{\r\n    color: rgba(255, 255, 255, 0.95);\r\n    font-size: 2rem;\r\n    font-family: 'Oswald', sans-serif;\r\n}\r\n\r\n#start_hero__h2{\r\n    margin-top: 1rem;\r\n    color: rgba(255, 255, 255, 0.65);\r\n    font-family: 'Mukta', sans-serif;\r\n}\r\n/*---------------search----------*/\r\n\r\n#start_search{\r\n    /*background-color: red;*/\r\n    margin-top: 5rem;\r\n    margin-left: 1.5rem;\r\n    display: flex;\r\n    cursor: pointer;\r\n\r\n}\r\n#start_search_svg{\r\n    fill: rgba(255, 255, 255, 0.85);\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n\r\n#start_search_container:hover #start_search_svg{\r\n    fill: #3bfaf8;\r\n\r\n}\r\n\r\n#start_form{\r\n    margin-left: 1rem;\r\n}\r\n\r\n#start_form_input{\r\n    background-color: transparent;\r\n    outline: none;\r\n    height: 2rem;\r\n    color: white;\r\n    padding-left: 10px;\r\n    border: none;\r\n    width: 15rem;\r\n    border-bottom: 2px solid teal;\r\n    animation: border_appear 0.8s linear;\r\n}\r\n\r\n\r\n\r\n\r\n@keyframes border_appear {\r\n    0%{\r\n        width: 1rem;\r\n    }\r\n    100%{\r\n        width: 15rem;\r\n    }\r\n}\r\n\r\n#start_form_submit{\r\n    width: 4rem;\r\n    height: 2rem;\r\n    color: teal;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    border: none;\r\n    border-radius: 5px;\r\n    animation: appear 0.8s linear;\r\n}\r\n\r\n@keyframes appear {\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    80%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 100%;\r\n    }\r\n\r\n}\r\n\r\n#start_about{\r\n    margin-left: auto;\r\n}\r\n\r\n.hide{\r\n    display: none;\r\n}\r\n\r\n/*--------------------Mobile------------------------*/\r\n@media screen and (max-width: 670px){\r\n\r\n    #start_sidetext{\r\n        position: absolute;\r\n        color: rgba(255, 255, 255, 0.25);\r\n        font-family: 'Oswald', sans-serif;\r\n        top:10rem;\r\n        width: 14rem;\r\n        left: -5rem;\r\n        font-size: 1.2rem;\r\n        transform: rotate(-90deg);\r\n    }\r\n\r\n\r\n    /*--------Nav----------*/\r\n\r\n    #start_nav{\r\n        height: 3rem;\r\n        /*background-color: red;*/\r\n        z-index: 5;\r\n        color: rgba(255, 255, 255, 0.9);\r\n        font-family: 'Oswald', sans-serif;\r\n        display: flex;\r\n        align-items: center;\r\n        font-size: 1.2rem;\r\n        padding: 1rem;\r\n    }\r\n\r\n    #start_hero{\r\n        margin-left:4rem;\r\n        margin-top: 3rem;\r\n        width: 50vw;\r\n        /*background-color: red;*/\r\n    }\r\n\r\n    #start_hero__h1{\r\n        color: rgba(255, 255, 255, 0.95);\r\n        font-size: 1.2rem;\r\n        font-family: 'Oswald', sans-serif;\r\n    }\r\n\r\n    #start_hero__h2{\r\n        margin-top: 1rem;\r\n        color: rgba(255, 255, 255, 0.65);\r\n        font-family: 'Mukta', sans-serif;\r\n    }\r\n    /*---------------search----------*/\r\n\r\n    #start_search{\r\n        /*background-color: red;*/\r\n        margin-top: 5rem;\r\n        margin-left: 1rem;\r\n        display: flex;\r\n\r\n    }\r\n    #start_search_svg{\r\n        fill: rgba(255, 255, 255, 0.85);\r\n        width: 1.5rem;\r\n        height: 1.5rem;\r\n    }\r\n\r\n    #start_search_container:hover #start_search_svg{\r\n        fill: #3bfaf8;\r\n\r\n    }\r\n\r\n    #start_form{\r\n        margin-left: 1rem;\r\n    }\r\n\r\n    #start_form_input{\r\n        background-color: transparent;\r\n        outline: none;\r\n        height: 1.5rem;\r\n        color: white;\r\n        padding-left: 10px;\r\n        border: none;\r\n        width: 10rem;\r\n        border-bottom: 2px solid teal;\r\n        animation: border_appear 0.6s linear;\r\n    }\r\n\r\n\r\n\r\n\r\n    @keyframes border_appear {\r\n        0%{\r\n            width: 1rem;\r\n        }\r\n        100%{\r\n            width: 10rem;\r\n        }\r\n    }\r\n\r\n    #start_form_submit{\r\n        width: 4rem;\r\n        height: 1.5rem;\r\n        color: teal;\r\n        background-color: rgba(0, 0, 0, 0.8);\r\n        border: none;\r\n        border-radius: 5px;\r\n        animation: appear 0.6s linear;\r\n    }\r\n\r\n    @keyframes appear {\r\n        0%{\r\n            opacity: 0;\r\n        }\r\n        80%{\r\n            opacity: 0;\r\n        }\r\n        100%{\r\n            opacity: 100%;\r\n        }\r\n\r\n    }\r\n\r\n    .hide{\r\n        display: none;\r\n    }\r\n\r\n}",""]);const f=l},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],s=0;s<r.length;s++){var c=r[s],d=t.base?c[0]+t.base:c[0],l=a[d]||0,m="".concat(d," ").concat(l);a[d]=l+1;var f=e(m),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(u);else{var p=o(u,t);t.byIndex=s,n.splice(s,0,{identifier:m,updater:p,references:1})}i.push(m)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var s=e(a[i]);n[s].references--}for(var c=t(r,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},525:(r,n,e)=>{r.exports=e.p+"091aa731fce7a703e2dc.jpg"},527:(r,n,e)=>{r.exports=e.p+"3542c35058785a2c8048.jpg"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var n=e.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var t=n.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!r;)r=t[o--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),c=e.n(s),d=e(216),l=e.n(d),m=e(589),f=e.n(m),u=e(524),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=i().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),n()(u.Z,p),u.Z&&u.Z.locals&&u.Z.locals;const g={intro_page:document.getElementById("start_container"),weather_page:document.getElementById("main_container"),climate_status:document.getElementById("content_climate_status"),content_temp:document.getElementById("content_temp"),content_city:document.getElementById("content_city"),content_date:document.getElementById("content_date"),content_svg:document.getElementById("content_img"),main_input:document.getElementById("main_input"),main_search_start:document.getElementById("main_search-svg-container"),main_error_container:document.getElementById("main_error-container"),feels_like:document.getElementById("feels_like-editable"),humidity:document.getElementById("humidity-editable"),windSpeed:document.getElementById("wind-editable"),day_one:document.querySelector(".foot_days-data.one"),day_two:document.querySelector(".foot_days-data.two"),day_three:document.querySelector(".foot_days-data.three"),day_four:document.querySelector(".foot_days-data.four"),day_five:document.querySelector(".foot_days-data.five")};function h(r){if(null===r||!0===r||!1===r)return NaN;var n=Number(r);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function _(r){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},_(r)}function y(r,n){if(n.length<r)throw new TypeError(r+" argument"+(r>1?"s":"")+" required, but only "+n.length+" present")}async function b(r){try{console.log(r);let n=await async function(r){try{const e=`http://api.weatherapi.com/v1/current.json?key=8631408bbd50406cba0131620232505&q=${r}&aqi=no`,t=await fetch(e,{mode:"cors"});var n=await t.json();g.main_error_container.classList.contains("hide")||g.main_error_container.classList.add("hide")}catch(r){}return await n}(r);n.error&&g.main_error_container.classList.contains("hide")&&g.main_error_container.classList.remove("hide")}catch(r){console.log(r)}}const v=(()=>{const r=r=>{const n=document.getElementById("start_form_input");r.preventDefault(),b(n.value),g.intro_page.classList.add("hide"),g.weather_page.classList.remove("hide");let e=new Date;console.log(function(r,n){return y(2,arguments),function(r,n){y(2,arguments);var e=function(r){y(1,arguments);var n=Object.prototype.toString.call(r);return r instanceof Date||"object"===_(r)&&"[object Date]"===n?new Date(r.getTime()):"number"==typeof r||"[object Number]"===n?new Date(r):("string"!=typeof r&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}(r),t=h(n);return isNaN(t)?new Date(NaN):t?(e.setDate(e.getDate()+t),e):e}(r,-h(n))}(e,1))};return{unhide:()=>{const n=document.getElementById("start_form_input"),e=document.getElementById("start_form_submit");e.addEventListener("click",r),n.classList.remove("hide"),e.classList.remove("hide")}}})();document.getElementById("start_search_container").addEventListener("click",v.unhide),g.main_search_start.addEventListener("click",(()=>{b(g.main_input.value)}))})()})();