"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[3298],{11201:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(11527),r=a(7463);const i={sidebar_position:1},l="Linear Search & Kata Setup",o={id:"notes/programming/DSA/Searching/Linear Search/index",title:"Linear Search & Kata Setup",description:"The simplest search algorithm is the linear search.",source:"@site/docs/notes/programming/DSA/Searching/Linear Search/index.md",sourceDirName:"notes/programming/DSA/Searching/Linear Search",slug:"/notes/programming/DSA/Searching/Linear Search/",permalink:"/notes/programming/DSA/Searching/Linear Search/",draft:!1,unlisted:!1,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/programming/DSA/Searching/Linear Search/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarNotes",previous:{title:"Linked List",permalink:"/notes/programming/DSA/Lists/Linked List/"},next:{title:"Binary Search",permalink:"/notes/programming/DSA/Searching/Binary Search/"}},s={},d=[{value:"Time Complexity",id:"time-complexity",level:2},{value:"Implementation",id:"implementation",level:2}];function c(n){const e={code:"code",defs:"defs",g:"g",h1:"h1",h2:"h2",li:"li","mjx-container":"mjx-container",ol:"ol",p:"p",path:"path",pre:"pre",style:"style",svg:"svg",use:"use",...(0,r.a)(),...n.components},a=e["mjx-container"];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"linear-search--kata-setup",children:"Linear Search & Kata Setup"}),"\n",(0,t.jsx)(e.p,{children:"The simplest search algorithm is the linear search."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:"array [                           ]\n      |                           |\n      0                           n\n\nsearch(array, value)\n"})}),"\n",(0,t.jsx)(e.p,{children:"We want a way to search through an array for a value."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:"array [ array[0] = value?         ]\n      |    ^                      |\n      0    |                      n\n           |\n"})}),"\n",(0,t.jsx)(e.p,{children:"We traverse the array, checking each value."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-plaintext",children:"array [ array[0] array[1] = value?]\n      |    ^      ^               |\n      0    |      |               n\n           |      |\n"})}),"\n",(0,t.jsx)(e.p,{children:"(and so on)"}),"\n",(0,t.jsx)(e.h2,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,t.jsx)(e.p,{children:"Recall the three principles of time complexity:"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Growth is with respect to the input."}),"\n",(0,t.jsx)(e.li,{children:"Constants are dropped."}),"\n",(0,t.jsx)(e.li,{children:"Consider the worst case."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Assuming the worst case, we would have to go from 0 to n, checking each value."}),"\n",(0,t.jsxs)(e.p,{children:["So, the time complexity is ",(0,t.jsx)(a,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,t.jsxs)(e.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,t.jsxs)(e.defs,{children:[(0,t.jsx)(e.path,{id:"MJX-1-TEX-I-1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}),(0,t.jsx)(e.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),(0,t.jsx)(e.path,{id:"MJX-1-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}),(0,t.jsx)(e.path,{id:"MJX-1-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),(0,t.jsx)(e.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,t.jsxs)(e.g,{"data-mml-node":"math",children:[(0,t.jsx)(e.g,{"data-mml-node":"mi",children:(0,t.jsx)(e.use,{"data-c":"1D442",xlinkHref:"#MJX-1-TEX-I-1D442"})}),(0,t.jsx)(e.g,{"data-mml-node":"mo",transform:"translate(763,0)",children:(0,t.jsx)(e.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),(0,t.jsx)(e.g,{"data-mml-node":"mi",transform:"translate(1152,0)",children:(0,t.jsx)(e.use,{"data-c":"1D45B",xlinkHref:"#MJX-1-TEX-I-1D45B"})}),(0,t.jsx)(e.g,{"data-mml-node":"mo",transform:"translate(1752,0)",children:(0,t.jsx)(e.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29"})})]})})]})}),"."]}),"\n",(0,t.jsx)(e.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-rust",children:"fn linear_search<T: PartialEq>(arr: &[T], value: T) -> Option<usize> {\n    for (i, v) in arr.iter().enumerate() {\n        if v == &value {\n            return Some(i);\n        }\n    }\n    None\n}\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function linearSearch<T>(arr: T[], value: T): number | null {\n    for (let i = 0; i < arr.length; i++) {\n        if (arr[i] === value) {\n            return i;\n        }\n    }\n    return null;\n}\n"})}),"\n",(0,t.jsx)(e.style,{children:'\nmjx-container[jax="SVG"] {\n  direction: ltr;\n}\n\nmjx-container[jax="SVG"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax="SVG"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-container[jax="SVG"][display="true"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax="SVG"][display="true"][width="full"] {\n  display: flex;\n}\n\nmjx-container[jax="SVG"][justify="left"] {\n  text-align: left;\n}\n\nmjx-container[jax="SVG"][justify="right"] {\n  text-align: right;\n}\n\ng[data-mml-node="merror"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node="merror"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node="mtable"] > g > svg {\n  overflow: visible;\n}\n\n[jax="SVG"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax="SVG"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node="maction"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {\n  stroke-width: 3;\n}\n'})]})}function m(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},7463:(n,e,a)=>{a.d(e,{Z:()=>o,a:()=>l});var t=a(50959);const r={},i=t.createContext(r);function l(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);