"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[3298],{7166:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=a(1527),i=a(7463);const s={sidebar_position:1},t="Linear Search & Kata Setup",c={id:"notes/programming/DSA/Searching/Linear Search/index",title:"Linear Search & Kata Setup",description:"The simplest search algorithm is the linear search.",source:"@site/docs/notes/programming/DSA/Searching/Linear Search/index.md",sourceDirName:"notes/programming/DSA/Searching/Linear Search",slug:"/notes/programming/DSA/Searching/Linear Search/",permalink:"/notes/programming/DSA/Searching/Linear Search/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/notes/programming/DSA/Searching/Linear Search/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarNotes",previous:{title:"Linked List",permalink:"/notes/programming/DSA/Lists/Linked List/"},next:{title:"Binary Search",permalink:"/notes/programming/DSA/Searching/Binary Search/"}},l={},o=[{value:"Time Complexity",id:"time-complexity",level:2},{value:"Implementation",id:"implementation",level:2}];function h(e){const n={annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"linear-search--kata-setup",children:"Linear Search & Kata Setup"}),"\n",(0,r.jsx)(n.p,{children:"The simplest search algorithm is the linear search."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"array [                           ]\n      |                           |\n      0                           n\n\nsearch(array, value)\n"})}),"\n",(0,r.jsx)(n.p,{children:"We want a way to search through an array for a value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"array [ array[0] = value?         ]\n      |    ^                      |\n      0    |                      n\n           |\n"})}),"\n",(0,r.jsx)(n.p,{children:"We traverse the array, checking each value."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"array [ array[0] array[1] = value?]\n      |    ^      ^               |\n      0    |      |               n\n           |      |\n"})}),"\n",(0,r.jsx)(n.p,{children:"(and so on)"}),"\n",(0,r.jsx)(n.h2,{id:"time-complexity",children:"Time Complexity"}),"\n",(0,r.jsx)(n.p,{children:"Recall the three principles of time complexity:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Growth is with respect to the input."}),"\n",(0,r.jsx)(n.li,{children:"Constants are dropped."}),"\n",(0,r.jsx)(n.li,{children:"Consider the worst case."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Assuming the worst case, we would have to go from 0 to n, checking each value."}),"\n",(0,r.jsxs)(n.p,{children:["So, the time complexity is ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mi,{children:"n"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(n)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord mathnormal",children:"n"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn linear_search<T: PartialEq>(arr: &[T], value: T) -> Option<usize> {\n    for (i, v) in arr.iter().enumerate() {\n        if v == &value {\n            return Some(i);\n        }\n    }\n    None\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"function linearSearch<T>(arr: T[], value: T): number | null {\n    for (let i = 0; i < arr.length; i++) {\n        if (arr[i] === value) {\n            return i;\n        }\n    }\n    return null;\n}\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7463:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>t});var r=a(959);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);