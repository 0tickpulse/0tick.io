(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[5856],{74314:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});t(30758);var r=t(22910);const o={tableOfContentsInline:"tableOfContentsInline_ymsN"};var i=t(86070);function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.jsx)("div",{className:o.tableOfContentsInline,children:(0,i.jsx)(r.A,{toc:n,minHeadingLevel:t,maxHeadingLevel:a,className:"table-of-contents",linkClassName:null})})}},22910:(e,n,t)=>{"use strict";t.d(n,{A:()=>p});var r=t(30758),o=t(37092);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):r.push(o)})),r}function a(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=a({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>l(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function s(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,r.useRef)(void 0),t=s();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:o,minHeadingLevel:i,maxHeadingLevel:a}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let o=n;o<=t;o+=1)r.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),s=c(l,{anchorTopOffset:t.current}),u=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===u)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var f=t(92285),v=t(86070);function d(e){let{toc:n,className:t,linkClassName:r,isChild:o}=e;return n.length?(0,v.jsx)("ul",{className:o?void 0:t,children:n.map((e=>(0,v.jsxs)("li",{children:[(0,v.jsx)(f.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(d,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const m=r.memo(d);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:s,maxHeadingLevel:f,...d}=e;const p=(0,o.p)(),x=s??p.tableOfContents.minHeadingLevel,g=f??p.tableOfContents.maxHeadingLevel,b=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return(0,r.useMemo)((()=>a({toc:i(n),minHeadingLevel:t,maxHeadingLevel:o})),[n,t,o])}({toc:n,minHeadingLevel:x,maxHeadingLevel:g});return u((0,r.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[l,c,x,g])),(0,v.jsx)(m,{toc:b,className:t,linkClassName:l,...d})}},64073:(e,n,t)=>{var r=t(58453).Symbol;e.exports=r},76624:(e,n,t)=>{var r=t(64073),o=t(7915),i=t(14478),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},98159:e=>{var n=Math.ceil,t=Math.max;e.exports=function(e,r,o,i){for(var a=-1,l=t(n((r-e)/(o||1)),0),c=Array(l);l--;)c[i?l:++a]=e,e+=o;return c}},23480:(e,n,t)=>{var r=t(98976),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},60396:(e,n,t)=>{var r=t(98159),o=t(58408),i=t(87456);e.exports=function(e){return function(n,t,a){return a&&"number"!=typeof a&&o(n,t,a)&&(t=a=void 0),n=i(n),void 0===t?(t=n,n=0):t=i(t),a=void 0===a?n<t?1:-1:i(a),r(n,t,a,e)}}},18928:(e,n,t)=>{var r="object"==typeof t.g&&t.g&&t.g.Object===Object&&t.g;e.exports=r},7915:(e,n,t)=>{var r=t(64073),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var n=i.call(e,l),t=e[l];try{e[l]=void 0;var r=!0}catch(c){}var o=a.call(e);return r&&(n?e[l]=t:delete e[l]),o}},32753:e=>{var n=/^(?:0|[1-9]\d*)$/;e.exports=function(e,t){var r=typeof e;return!!(t=null==t?9007199254740991:t)&&("number"==r||"symbol"!=r&&n.test(e))&&e>-1&&e%1==0&&e<t}},58408:(e,n,t)=>{var r=t(52864),o=t(48710),i=t(32753),a=t(57717);e.exports=function(e,n,t){if(!a(t))return!1;var l=typeof n;return!!("number"==l?o(t)&&i(n,t.length):"string"==l&&n in t)&&r(t[n],e)}},14478:e=>{var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},58453:(e,n,t)=>{var r=t(18928),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},98976:e=>{var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},52864:e=>{e.exports=function(e,n){return e===n||e!=e&&n!=n}},48710:(e,n,t)=>{var r=t(81330),o=t(19358);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},81330:(e,n,t)=>{var r=t(76624),o=t(57717);e.exports=function(e){if(!o(e))return!1;var n=r(e);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},19358:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},57717:e=>{e.exports=function(e){var n=typeof e;return null!=e&&("object"==n||"function"==n)}},2050:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},56770:(e,n,t)=>{var r=t(76624),o=t(2050);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},3029:(e,n,t)=>{var r=t(60396)();e.exports=r},87456:(e,n,t)=>{var r=t(66086),o=1/0;e.exports=function(e){return e?(e=r(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},66086:(e,n,t)=>{var r=t(23480),o=t(57717),i=t(56770),a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(o(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var t=l.test(e);return t||c.test(e)?s(e.slice(2),t?2:8):a.test(e)?NaN:+e}}}]);