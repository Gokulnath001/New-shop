!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(self,(function(){return(()=>{var t={99213:()=>{!function(){if(!document.documentElement.classList.contains("mobile")){var t=document.querySelector(".bb-desktop-nav"),e=document.querySelectorAll(".bb-hide-init");if(t){var n=t.offsetWidth,o=function(){var o=t.parentElement.offsetWidth,i=!1;n+100>=o&&(i=!0),!i&&window.innerWidth<768&&(i=!0),i?document.body.classList.add("bb-show-mobile-nav"):document.body.classList.remove("bb-show-mobile-nav");var r=i?0:1;return t.style.opacity=r,e.forEach((function(t){return t.style.opacity=r})),i};window.addEventListener("resize",function(t){var e,n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];clearTimeout(e),e=setTimeout((function(){t.apply(n,r)}),o)}}(o),{passive:!0}),setTimeout((function(){n=t.offsetWidth,o()}),100)}else e.forEach((function(t){return t.style.opacity=1}))}}()},16132:()=>{var t,e,n,o,i;e=document.querySelector(".nav-toggle"),n=document.querySelector(".nav-menu"),o=document.querySelectorAll(".nav-panel ul.sublinks"),t=!1,i=function(){if(!t){t=!0;var e=document.querySelector(".nav-overlay"),i=n&&n.querySelector(".nav-close"),r=function(){n&&n.classList.remove("show")};e&&e.addEventListener("click",r,!1),i&&i.addEventListener("click",r,!1),document.querySelectorAll(".nav-panel .hasSublinks").forEach((function(t){t.addEventListener("click",(function(t){t.currentTarget.nextElementSibling.classList.add("show")}),!1)})),o.forEach((function(t){var e=t.querySelector(".back-btn");e&&e.addEventListener("click",(function(){t.classList.remove("show")}),!1)}));var a=n&&n.querySelector(".bb-store-cart");a&&a.addEventListener("click",(function(){r(),n.classList.add("disable-transition"),setTimeout((function(){n.classList.remove("disable-transition")}),5)}),!1),document.querySelectorAll(".nav-panel nav a").forEach((function(t){t.classList.contains("back-btn")||t.classList.contains("hasSublinks")||t.addEventListener("click",(function(){r()}))}))}},e&&e.addEventListener("click",(function(){n&&n.classList.add("show"),o.forEach((function(t){t.style.transition="none",t.classList.remove("show"),t.offsetHeight,t.style.transition=""})),i()}),!1)},77090:t=>{!function(e,n){var o=function(t,e,n){"use strict";var o,i;if(function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in i=t.lazySizesConfig||t.lazysizesConfig||{},n)e in i||(i[e]=n[e])}(),!e||!e.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r,a,s,l,c,d,u,f,m,v,g,p,b,y,h,w,A,z,E,S,L,C,x,k,_,T,q,O,B,N,j,M,P,F,W,D,I,R,H,$,J,Q,U,V,G=e.documentElement,K=t.HTMLPictureElement,X="addEventListener",Y=t.addEventListener.bind(t),Z=t.setTimeout,tt=t.requestAnimationFrame||Z,et=t.requestIdleCallback,nt=/^picture$/i,ot=["load","error","lazyincluded","_lazyloaded"],it={},rt=Array.prototype.forEach,at=function(t,e){return it[e]||(it[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),it[e].test(t.getAttribute("class")||"")&&it[e]},st=function(t,e){at(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},lt=function(t,e){var n;(n=at(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(n," "))},ct=function(t,e,n){var o=n?X:"removeEventListener";n&&ct(t,e),ot.forEach((function(n){t[o](n,e)}))},dt=function(t,n,i,r,a){var s=e.createEvent("Event");return i||(i={}),i.instance=o,s.initEvent(n,!r,!a),s.detail=i,t.dispatchEvent(s),s},ut=function(e,n){var o;!K&&(o=t.picturefill||i.pf)?(n&&n.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",n.src),o({reevaluate:!0,elements:[e]})):n&&n.src&&(e.src=n.src)},ft=function(t,e){return(getComputedStyle(t,null)||{})[e]},mt=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},vt=(J=[],Q=$=[],V=function(t,n){R&&!n?t.apply(this,arguments):(Q.push(t),H||(H=!0,(e.hidden?Z:tt)(U)))},V._lsFlush=U=function(){var t=Q;for(Q=$.length?J:$,R=!0,H=!1;t.length;)t.shift()();R=!1},V),gt=function(t,e){return e?function(){vt(t)}:function(){var e=this,n=arguments;vt((function(){t.apply(e,n)}))}},pt=function(t){var e,o,i=function(){e=null,t()},r=function(){var t=n.now()-o;t<99?Z(r,99-t):(et||i)(i)};return function(){o=n.now(),e||(e=Z(r,99))}},bt=(A=/^img$/i,z=/^iframe$/i,E="onscroll"in t&&!/(gle|ing)bot/.test(navigator.userAgent),0,S=0,L=0,C=-1,x=function(t){L--,(!t||L<0||!t.target)&&(L=0)},k=function(t){return null==w&&(w="hidden"==ft(e.body,"visibility")),w||!("hidden"==ft(t.parentNode,"visibility")&&"hidden"==ft(t,"visibility"))},_=function(t,n){var o,i=t,r=k(t);for(p-=n,h+=n,b-=n,y+=n;r&&(i=i.offsetParent)&&i!=e.body&&i!=G;)(r=(ft(i,"opacity")||1)>0)&&"visible"!=ft(i,"overflow")&&(o=i.getBoundingClientRect(),r=y>o.left&&b<o.right&&h>o.top-1&&p<o.bottom+1);return r},q=function(t){var e,o=0,r=i.throttleDelay,a=i.ricTimeout,s=function(){e=!1,o=n.now(),t()},l=et&&a>49?function(){et(s,{timeout:a}),a!==i.ricTimeout&&(a=i.ricTimeout)}:gt((function(){Z(s)}),!0);return function(t){var i;(t=!0===t)&&(a=33),e||(e=!0,(i=r-(n.now()-o))<0&&(i=0),t||i<9?l():Z(l,i))}}(T=function(){var t,n,r,a,s,l,u,m,A,z,x,T,q=o.elements;if((f=i.loadMode)&&L<8&&(t=q.length)){for(n=0,C++;n<t;n++)if(q[n]&&!q[n]._lazyRace)if(!E||o.prematureUnveil&&o.prematureUnveil(q[n]))F(q[n]);else if((m=q[n].getAttribute("data-expand"))&&(l=1*m)||(l=S),z||(z=!i.expand||i.expand<1?G.clientHeight>500&&G.clientWidth>500?500:370:i.expand,o._defEx=z,x=z*i.expFactor,T=i.hFac,w=null,S<x&&L<1&&C>2&&f>2&&!e.hidden?(S=x,C=0):S=f>1&&C>1&&L<6?z:0),A!==l&&(v=innerWidth+l*T,g=innerHeight+l,u=-1*l,A=l),r=q[n].getBoundingClientRect(),(h=r.bottom)>=u&&(p=r.top)<=g&&(y=r.right)>=u*T&&(b=r.left)<=v&&(h||y||b||p)&&(i.loadHidden||k(q[n]))&&(d&&L<3&&!m&&(f<3||C<4)||_(q[n],l))){if(F(q[n]),s=!0,L>9)break}else!s&&d&&!a&&L<4&&C<4&&f>2&&(c[0]||i.preloadAfterLoad)&&(c[0]||!m&&(h||y||b||p||"auto"!=q[n].getAttribute(i.sizesAttr)))&&(a=c[0]||q[n]);a&&!s&&F(a)}}),B=gt(O=function(t){var e=t.target;e._lazyCache?delete e._lazyCache:(x(t),st(e,i.loadedClass),lt(e,i.loadingClass),ct(e,N),dt(e,"lazyloaded"))}),N=function(t){B({target:t.target})},j=function(t,e){var n=t.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?t.contentWindow.location.replace(e):1==n&&(t.src=e)},M=function(t){var e,n=t.getAttribute(i.srcsetAttr);(e=i.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},P=gt((function(t,e,n,o,r){var a,s,l,c,d,f;(d=dt(t,"lazybeforeunveil",e)).defaultPrevented||(o&&(n?st(t,i.autosizesClass):t.setAttribute("sizes",o)),s=t.getAttribute(i.srcsetAttr),a=t.getAttribute(i.srcAttr),r&&(c=(l=t.parentNode)&&nt.test(l.nodeName||"")),f=e.firesLoad||"src"in t&&(s||a||c),d={target:t},st(t,i.loadingClass),f&&(clearTimeout(u),u=Z(x,2500),ct(t,N,!0)),c&&rt.call(l.getElementsByTagName("source"),M),s?t.setAttribute("srcset",s):a&&!c&&(z.test(t.nodeName)?j(t,a):t.src=a),r&&(s||c)&&ut(t,{src:a})),t._lazyRace&&delete t._lazyRace,lt(t,i.lazyClass),vt((function(){var e=t.complete&&t.naturalWidth>1;f&&!e||(e&&st(t,i.fastLoadedClass),O(d),t._lazyCache=!0,Z((function(){"_lazyCache"in t&&delete t._lazyCache}),9)),"lazy"==t.loading&&L--}),!0)})),F=function(t){if(!t._lazyRace){var e,n=A.test(t.nodeName),o=n&&(t.getAttribute(i.sizesAttr)||t.getAttribute("sizes")),r="auto"==o;(!r&&d||!n||!t.getAttribute("src")&&!t.srcset||t.complete||at(t,i.errorClass)||!at(t,i.lazyClass))&&(e=dt(t,"lazyunveilread").detail,r&&yt.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,L++,P(t,e,r,o,n))}},W=pt((function(){i.loadMode=3,q()})),I=function(){d||(n.now()-m<999?Z(I,999):(d=!0,i.loadMode=3,q(),Y("scroll",D,!0)))},{_:function(){m=n.now(),o.elements=e.getElementsByClassName(i.lazyClass),c=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),Y("scroll",q,!0),Y("resize",q,!0),Y("pageshow",(function(t){if(t.persisted){var n=e.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&tt((function(){n.forEach((function(t){t.complete&&F(t)}))}))}})),t.MutationObserver?new MutationObserver(q).observe(G,{childList:!0,subtree:!0,attributes:!0}):(G.addEventListener("DOMNodeInserted",q,!0),G.addEventListener("DOMAttrModified",q,!0),setInterval(q,999)),Y("hashchange",q,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(t){e.addEventListener(t,q,!0)})),/d$|^c/.test(e.readyState)?I():(Y("load",I),e.addEventListener("DOMContentLoaded",q),Z(I,2e4)),o.elements.length?(T(),vt._lsFlush()):q()},checkElems:q,unveil:F,_aLSL:D=function(){3==i.loadMode&&(i.loadMode=2),W()}}),yt=(a=gt((function(t,e,n,o){var i,r,a;if(t._lazysizesWidth=o,o+="px",t.setAttribute("sizes",o),nt.test(e.nodeName||""))for(r=0,a=(i=e.getElementsByTagName("source")).length;r<a;r++)i[r].setAttribute("sizes",o);n.detail.dataAttr||ut(t,n.detail)})),s=function(t,e,n){var o,i=t.parentNode;i&&(n=mt(t,i,n),(o=dt(t,"lazybeforesizes",{width:n,dataAttr:!!e})).defaultPrevented||(n=o.detail.width)&&n!==t._lazysizesWidth&&a(t,i,o,n))},{_:function(){r=e.getElementsByClassName(i.autosizesClass),Y("resize",l)},checkElems:l=pt((function(){var t,e=r.length;if(e)for(t=0;t<e;t++)s(r[t])})),updateElem:s}),ht=function(){!ht.i&&e.getElementsByClassName&&(ht.i=!0,yt._(),bt._())};return Z((function(){i.init&&ht()})),o={cfg:i,autoSizer:yt,loader:bt,init:ht,uP:ut,aC:st,rC:lt,hC:at,fire:dt,gW:mt,rAF:vt}}(e,e.document,Date);e.lazySizes=o,t.exports&&(t.exports=o)}("undefined"!=typeof window?window:{})},31770:(t,e,n)=>{var o,i,r;!function(a,s){a&&(s=s.bind(null,a,a.document),t.exports?s(n(77090)):(i=[n(77090)],void 0===(r="function"==typeof(o=s)?o.apply(e,i):o)||(t.exports=r)))}("undefined"!=typeof window?window:0,(function(t,e,n){"use strict";if(t.addEventListener){var o=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,i=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,r=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,a=/^picture$/i,s=n.cfg,l={getParent:function(e,n){var o=e,i=e.parentNode;return n&&"prev"!=n||!i||!a.test(i.nodeName||"")||(i=i.parentNode),"self"!=n&&(o="prev"==n?e.previousElementSibling:n&&(i.closest||t.jQuery)&&(i.closest?i.closest(n):jQuery(i).closest(n)[0])||i),o},getFit:function(t){var e,n,o=getComputedStyle(t,null)||{},a=o.content||o.fontFamily,s={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!s.fit&&a&&(e=a.match(i))&&(s.fit=e[1]),s.fit?(!(n=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&a&&(e=a.match(r))&&(n=e[1]),s.parent=l.getParent(t,n)):s.fit=o.objectFit,s},getImageRatio:function(e){var n,i,r,l,c,d,u,f=e.parentNode,m=f&&a.test(f.nodeName||"")?f.querySelectorAll("source, img"):[e];for(n=0;n<m.length;n++)if(i=(e=m[n]).getAttribute(s.srcsetAttr)||e.getAttribute("srcset")||e.getAttribute("data-pfsrcset")||e.getAttribute("data-risrcset")||"",r=e._lsMedia||e.getAttribute("media"),r=s.customMedia[e.getAttribute("data-media")||r]||r,i&&(!r||(t.matchMedia&&matchMedia(r)||{}).matches)){(l=parseFloat(e.getAttribute("data-aspectratio")))||((c=i.match(o))?"w"==c[2]?(d=c[1],u=c[3]):(d=c[3],u=c[1]):(d=e.getAttribute("width"),u=e.getAttribute("height")),l=d/u);break}return l},calculateSize:function(t,e){var n,o,i,r=this.getFit(t),a=r.fit,s=r.parent;return"width"==a||("contain"==a||"cover"==a)&&(o=this.getImageRatio(t))?(s?e=s.clientWidth:s=t,i=e,"width"==a?i=e:(n=e/s.clientHeight)&&("cover"==a&&n<o||"contain"==a&&n>o)&&(i=e*(o/n)),i):e}};n.parentFit=l,e.addEventListener("lazybeforesizes",(function(t){if(!t.defaultPrevented&&t.detail.instance==n){var e=t.target;t.detail.width=l.calculateSize(e,t.detail.width)}}))}}))},90082:(t,e,n)=>{var o,i,r;!function(a,s){s=s.bind(null,a,a.document),t.exports?s(n(77090)):(i=[n(77090)],void 0===(r="function"==typeof(o=s)?o.apply(e,i):o)||(t.exports=r))}(window,(function(t,e,n){"use strict";var o,i,r={};function a(t,n,o){if(!r[t]){var i=e.createElement(n?"link":"script"),a=e.getElementsByTagName("script")[0];n?(i.rel="stylesheet",i.href=t):(i.onload=function(){i.onerror=null,i.onload=null,o()},i.onerror=i.onload,i.src=t),r[t]=!0,r[i.src||i.href]=!0,a.parentNode.insertBefore(i,a)}}e.addEventListener&&(i=/\(|\)|\s|'/,o=function(t,n){var o=e.createElement("img");o.onload=function(){o.onload=null,o.onerror=null,o=null,n()},o.onerror=o.onload,o.src=t,o&&o.complete&&o.onload&&o.onload()},addEventListener("lazybeforeunveil",(function(t){var e,r,s;if(t.detail.instance==n&&!t.defaultPrevented){var l=t.target;if("none"==l.preload&&(l.preload=l.getAttribute("data-preload")||"auto"),null!=l.getAttribute("data-autoplay"))if(l.getAttribute("data-expand")&&!l.autoplay)try{l.play()}catch(t){}else requestAnimationFrame((function(){l.setAttribute("data-expand","-10"),n.aC(l,n.cfg.lazyClass)}));(e=l.getAttribute("data-link"))&&a(e,!0),(e=l.getAttribute("data-script"))&&(t.detail.firesLoad=!0,a(e,null,(function(){t.detail.firesLoad=!1,n.fire(l,"_lazyloaded",{},!0,!0)}))),(e=l.getAttribute("data-require"))&&(n.cfg.requireJs?n.cfg.requireJs([e]):a(e)),(r=l.getAttribute("data-bg"))&&(t.detail.firesLoad=!0,o(r,(function(){l.style.backgroundImage="url("+(i.test(r)?JSON.stringify(r):r)+")",t.detail.firesLoad=!1,n.fire(l,"_lazyloaded",{},!0,!0)}))),(s=l.getAttribute("data-poster"))&&(t.detail.firesLoad=!0,o(s,(function(){l.poster=s,t.detail.firesLoad=!1,n.fire(l,"_lazyloaded",{},!0,!0)})))}}),!1))}))}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return(()=>{"use strict";n.r(o),n(77090),n(90082),n(31770);var t=n(16132),e=n.n(t),i=n(99213),r=n.n(i);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(t){"undefined"!=typeof gtag&&(gtag("event","exception",{description:t,send_to:"builder"}),gtag("event","exceptionDomain",{location:location.origin+location.pathname,send_to:"builder"}))};window.BentoBox={loadedScripts:{},logError:l},window.onerror=function(t,e,n,o){l(JSON.stringify({message:t,source:e,lineno:n,colno:o}))},r(),e(),window.isScrollToSection=!1,window.scrollToSectionTimeout=null;var c=function(t,e){if(e=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({animate:!0},e),t){if(window.scrollToSectionTimeout&&clearTimeout(window.scrollToSectionTimeout),window.isScrollToSection=!0,"bottom"==t||"top"==t)window.scrollTo({top:"bottom"==t?document.body.scrollHeight:0,behavior:e.animate?"smooth":"auto"});else{var n=document.querySelector("#bb-section-"+t);n&&n.scrollIntoView({behavior:e.animate?"smooth":"auto"})}var o=document.querySelector(".bb-desktop-nav");o||(o=document.querySelector(".nav-menu nav")),o.querySelector("a.active")&&o.querySelector("a.active").classList.remove("active"),o.querySelector('a[data-anchor="'+t+'"]')&&o.querySelector('a[data-anchor="'+t+'"]').classList.add("active"),window.scrollToSectionTimeout=setTimeout((function(){window.isScrollToSection=!1}),1e3)}};!function(){var t=document.querySelector("#bb-site-settings");t=JSON.parse(t.textContent),window.BentoBox.siteSettings=t;var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(n,o){if(BentoBox.loadedScripts[t])n();else{BentoBox.loadedScripts[t]=1,e.loadingContainer&&e.loadingContainer.insertAdjacentHTML("beforeend",'\n                        <div id="script-loading" style="display:none;position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: rgb(0 0 0 / 60%);align-items:center;justify-content:center;">\n                            <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#FFF" style="width: 40px;">\n                                <g fill="none" fill-rule="evenodd">\n                                    <g transform="translate(1 1)" stroke-width="2">\n                                        <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>\n                                        <path d="M36 18c0-9.94-8.06-18-18-18">\n                                            <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/>\n                                        </path>\n                                    </g>\n                                </g>\n                            </svg>\n                        </div>\n                    ');var i=document.createElement("script");if(i.async=!0,e.className&&i.setAttribute("class",e.className),e.attr)for(var r in e.attr)i.setAttribute(r,e.attr[r]);i.onload=function(){var e=document.getElementById("script-loading");e&&e.remove(),BentoBox.loadedScripts[t]=1,n()},i.onerror=function(){o()},i.src=t+"?".concat(BentoBox.siteSettings.revision),document.head.appendChild(i)}}))};window.BentoBox.loadScript=e;var n=document.querySelectorAll(".bb-lightbox"),o=function(t){t.preventDefault(),e("/js/dist/lightbox.bundle.js",{loadingContainer:document.body}).then((function(){window.BentoBox.showLightBox(t)}))};n.forEach((function(t){t.addEventListener("click",o,!1)}));var i=document.querySelectorAll(".bb-contact-form");if(i){var r=function t(){e("/js/dist/form.bundle.js"),i.forEach((function(e){e.removeEventListener("click",t,!1)}))};i.forEach((function(t){t.addEventListener("click",r,!1)}))}document.querySelectorAll("a:not(.bb-lightbox,.skip-tracking)").forEach((function(e){e.addEventListener("click",(function(e){var n=e.currentTarget;if(n){var o=n.getAttribute("href")||"/",i=n.getAttribute("data-anchor");e.preventDefault();var r=!1,a=function(){r||("#"==o?c(i):i&&localStorage.setItem("bb-anchor",i),"#"!=o&&("_blank"==n.getAttribute("target")?window.open(o,"_blank"):document.location=o),r=!0)};"undefined"==typeof gtag||t.disableLinkAnalytics?a():(gtag("event","Click Link",{link_href:o,link_title:e.currentTarget.innerText,link_anchor:i||"top",page_title:document.title,page_url:location.origin+location.pathname,event_callback:function(){a()}}),setTimeout(a,1e3))}}),!1)})),document.documentElement.classList.contains("mobile")&&document.addEventListener("touchstart",(function t(){document.querySelectorAll("[data-lazy-src]").forEach((function(t){t.setAttribute("src",t.getAttribute("data-lazy-src"))})),document.removeEventListener("touchstart",t)}),!1),setTimeout((function(){c(localStorage.getItem("bb-anchor"),{animate:!1}),localStorage.removeItem("bb-anchor")}),400)}()})(),o})()}));