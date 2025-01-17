(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[9662],{59839:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"notes/maths/Linear Algebra/Matrices I/Determinant Computation","title":"Determinant: Computation","description":"Previously, we discussed the concept of the determinant of a matrix and its geometric interpretation.","source":"@site/docs/notes/maths/Linear Algebra/Matrices I/Determinant Computation.mdx","sourceDirName":"notes/maths/Linear Algebra/Matrices I","slug":"/notes/maths/Linear Algebra/Matrices I/Determinant Computation","permalink":"/notes/maths/Linear Algebra/Matrices I/Determinant Computation","draft":false,"unlisted":false,"editUrl":"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/maths/Linear Algebra/Matrices I/Determinant Computation.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"sidebarNotes","previous":{"title":"Determinant: Intuition","permalink":"/notes/maths/Linear Algebra/Matrices I/Determinant Intuition"},"next":{"title":"Formalizing Linear Transformations","permalink":"/notes/maths/Linear Algebra/Matrices I/Formalizing Linear Transformations"}}');var r=n(86070),i=n(85248),o=(n(78303),n(30758),n(3550),n(80993),n(58868));n(75123),n(3029),n(36396),n(84401);const s={sidebar_position:6},l="Determinant: Computation",u={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"2D Determinant",id:"2d-determinant",level:2}];function d(e){const t={defs:"defs",g:"g",h1:"h1",h2:"h2",header:"header","mjx-container":"mjx-container",p:"p",path:"path",style:"style",svg:"svg",use:"use",...(0,i.R)(),...e.components},n=t["mjx-container"];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"determinant-computation",children:"Determinant: Computation"})}),"\n",(0,r.jsx)(t.p,{children:"Previously, we discussed the concept of the determinant of a matrix and its geometric interpretation.\nIn this section, we will learn how to compute the determinant of a matrix, which is a crucial skill in linear algebra."}),"\n",(0,r.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsx)(o.A,{toc:c}),"\n",(0,r.jsx)(t.h2,{id:"2d-determinant",children:"2D Determinant"}),"\n",(0,r.jsxs)(t.p,{children:["Let's start by computing the determinant of a ",(0,r.jsx)(n,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,r.jsxs)(t.svg,{style:{verticalAlign:"0"},xmlns:"http://www.w3.org/2000/svg",width:"5.028ex",height:"1.507ex",role:"img",focusable:"false",viewBox:"0 -666 2222.4 666",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,r.jsxs)(t.defs,{children:[(0,r.jsx)(t.path,{id:"MJX-1-TEX-N-32",d:"M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"}),(0,r.jsx)(t.path,{id:"MJX-1-TEX-N-D7",d:"M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z"})]}),(0,r.jsx)(t.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,r.jsxs)(t.g,{"data-mml-node":"math",children:[(0,r.jsx)(t.g,{"data-mml-node":"mn",children:(0,r.jsx)(t.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})}),(0,r.jsx)(t.g,{"data-mml-node":"mo",transform:"translate(722.2,0)",children:(0,r.jsx)(t.use,{"data-c":"D7",xlinkHref:"#MJX-1-TEX-N-D7"})}),(0,r.jsx)(t.g,{"data-mml-node":"mn",transform:"translate(1722.4,0)",children:(0,r.jsx)(t.use,{"data-c":"32",xlinkHref:"#MJX-1-TEX-N-32"})})]})})]})})," matrix.\nRecall that the determinant represents how much the matrix scales the area of a parallelogram spanned by its columns.\nIn this case we can just perform simple geometric calculations to find the determinant."]}),"\n",(0,r.jsx)(t.style,{children:'\nmjx-container[jax="SVG"] {\n  direction: ltr;\n}\n\nmjx-container[jax="SVG"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax="SVG"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-container[jax="SVG"][display="true"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax="SVG"][display="true"][width="full"] {\n  display: flex;\n}\n\nmjx-container[jax="SVG"][justify="left"] {\n  text-align: left;\n}\n\nmjx-container[jax="SVG"][justify="right"] {\n  text-align: right;\n}\n\ng[data-mml-node="merror"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node="merror"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node="mtable"] > g > svg {\n  overflow: visible;\n}\n\n[jax="SVG"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax="SVG"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node="maction"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {\n  stroke-width: 3;\n}\n'})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},84401:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});n(30758);var a=n(13526);const r={tabItem:"tabItem_mFpO"};var i=n(86070);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},36396:(e,t,n)=>{"use strict";n.d(t,{A:()=>w});var a=n(30758),r=n(13526),i=n(14607),o=n(25557),s=n(53567),l=n(1968),u=n(8129),c=n(58355);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:n,groupId:r}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),x=(()=>{const e=u??p;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=n(94941);const x={tabList:"tabList_uQGp",tabItem:"tabItem_q3zy"};var g=n(86070);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},98159:e=>{var t=Math.ceil,n=Math.max;e.exports=function(e,a,r,i){for(var o=-1,s=n(t((a-e)/(r||1)),0),l=Array(s);s--;)l[i?s:++o]=e,e+=r;return l}},23480:(e,t,n)=>{var a=n(98976),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},60396:(e,t,n)=>{var a=n(98159),r=n(58408),i=n(87456);e.exports=function(e){return function(t,n,o){return o&&"number"!=typeof o&&r(t,n,o)&&(n=o=void 0),t=i(t),void 0===n?(n=t,t=0):n=i(n),o=void 0===o?t<n?1:-1:i(o),a(t,n,o,e)}}},58408:(e,t,n)=>{var a=n(52864),r=n(48710),i=n(32753),o=n(57717);e.exports=function(e,t,n){if(!o(n))return!1;var s=typeof t;return!!("number"==s?r(n)&&i(t,n.length):"string"==s&&t in n)&&a(n[t],e)}},98976:e=>{var t=/\s/;e.exports=function(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}},56770:(e,t,n)=>{var a=n(76624),r=n(2050);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},3029:(e,t,n)=>{var a=n(60396)();e.exports=a},87456:(e,t,n)=>{var a=n(66086),r=1/0;e.exports=function(e){return e?(e=a(e))===r||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},66086:(e,t,n)=>{var a=n(23480),r=n(57717),i=n(56770),o=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=s.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}}}]);