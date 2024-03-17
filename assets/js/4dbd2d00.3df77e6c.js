"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[991],{1445:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=s(1527),t=s(4735);const a={},i="Arrays",o={id:"notes/programming/DSA/Arrays/index",title:"Arrays",description:"They're secretly objects with the number index as properties to act like arrays.",source:"@site/docs/notes/programming/DSA/Arrays/index.md",sourceDirName:"notes/programming/DSA/Arrays",slug:"/notes/programming/DSA/Arrays/",permalink:"/notes/programming/DSA/Arrays/",draft:!1,unlisted:!1,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/programming/DSA/Arrays/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebarNotes",previous:{title:"Limits",permalink:"/notes/maths/limits"},next:{title:"Big-O Notation",permalink:"/notes/programming/DSA/Big-O Notation/"}},c={},l=[{value:"Indexing",id:"indexing",level:2},{value:"ArrayBuffers in JavaScript",id:"arraybuffers-in-javascript",level:2},{value:"Arrays are not lists",id:"arrays-are-not-lists",level:2},{value:"Insertion",id:"insertion",level:2},{value:"Deletion",id:"deletion",level:2},{value:"Lists",id:"lists",level:2}];function d(e){const n={admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"arrays",children:"Arrays"}),"\n",(0,r.jsx)(n.admonition,{title:"JavaScript arrays aren't arrays",type:"info",children:(0,r.jsx)(n.p,{children:"They're secretly objects with the number index as properties to act like arrays."})}),"\n",(0,r.jsx)(n.p,{children:"An array is a contiguous memory space that contains a certain number of bytes."}),"\n",(0,r.jsxs)(n.p,{children:["For example, ",(0,r.jsx)(n.code,{children:"int[3]"})," means three integers in contiguous space (12 bytes)."]}),"\n",(0,r.jsx)(n.h2,{id:"indexing",children:"Indexing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"let arr = [1, 2, 3]; // int[3]\r\narr[0]; // 1\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In memory, this array looks like ",(0,r.jsx)(n.code,{children:"00 00 00 01 00 00 00 02 00 00 00 03"}),".\r\nWhen we index into an array, we're getting the address of the first element and adding the index multiplied by the size of the type to it.\r\nIf it was ",(0,r.jsx)(n.code,{children:"arr[2]"}),", we'd get the address of the first element and add ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mn,{children:"2"}),(0,r.jsx)(n.mo,{children:"\u2217"}),(0,r.jsx)(n.mn,{children:"4"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"2 * 4"})]})})}),(0,r.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(n.span,{className:"mord",children:"2"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(n.span,{className:"mbin",children:"\u2217"}),(0,r.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,r.jsx)(n.span,{className:"mord",children:"4"})]})]})]})," to it.\r\nThis has ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsxs)(n.mrow,{children:[(0,r.jsx)(n.mi,{children:"O"}),(0,r.jsx)(n.mo,{stretchy:"false",children:"("}),(0,r.jsx)(n.mn,{children:"1"}),(0,r.jsx)(n.mo,{stretchy:"false",children:")"})]}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"O(1)"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsx)(n.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,r.jsx)(n.span,{className:"mopen",children:"("}),(0,r.jsx)(n.span,{className:"mord",children:"1"}),(0,r.jsx)(n.span,{className:"mclose",children:")"})]})})]})," time complexity."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"00 00 00 01 00 00 00 02 00 00 00 03\r\n^           ^           ^\r\n|           |           |\r\n|           |           +--- arr[2] (2 * 4)\r\n|           +--- arr[1] (1 * 4)\r\n+--- arr[0] (0 * 4)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is a function that indexes an array, to demonstrate the above in code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"fn index<T: Copy>(arr: &[T], index: usize) -> T {\r\n    let address = arr.as_ptr() as usize;\r\n    let size = std::mem::size_of::<T>();\r\n    let offset = index * size;\r\n    let new_address = address + offset;\r\n    unsafe { *(new_address as *const T) }\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is why array indexes start at 0; it's closer to how the array is stored in memory."}),"\n",(0,r.jsx)(n.h2,{id:"arraybuffers-in-javascript",children:"ArrayBuffers in JavaScript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"> const buffer = new ArrayBuffer(12)\r\nundefined\r\n> buffer\r\nArrayBuffer {\r\n  [Uint8Contents]: <00 00 00 00 00 00 00 00 00 00 00 00>,\r\n  byteLength: 12\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"It's just a series of 12 bytes. If we want to interpret it as something else, we can use a typed array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"> const v8 = new Uint8Array(buffer)\r\nundefined\r\n> v8\r\nUint8Array(12) [\r\n  0, 0, 0, 0, 0,\r\n  0, 0, 0, 0, 0,\r\n  0, 0\r\n]\r\n> v8[0] = 42\r\n42\r\n> v8[2] = 60\r\n60\r\n> v8\r\nUint8Array(12) [\r\n  42, 0, 60, 0, 0,\r\n   0, 0,  0, 0, 0,\r\n   0, 0\r\n]\r\nArrayBuffer {\r\n  [Uint8Contents]: <2a 00 3c 00 00 00 00 00 00 00 00 00>,\r\n  byteLength: 12\r\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"Notice how one byte was skipped because of the size of the type."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"> const v16 = new Uint16Array(buffer)\r\nundefined\r\n> view16[4] = 0x5050\r\n20560\r\n> buffer\r\nArrayBuffer {\r\n  [Uint8Contents]: <2a 00 3c 00 00 00 00 00 50 50 00 00>,\r\n  byteLength: 12\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is interesting because we set position 4, yet it sets it on the 8th and 9th bytes.\r\nAgain, this is because of the size of the type, and how that affects the interpretation of the buffer.\r\nAdditionally, a concept called ",(0,r.jsx)(n.strong,{children:"endianness"}),", i.e. the order of bytes, comes into play here."]}),"\n",(0,r.jsxs)(n.p,{children:["When we used ",(0,r.jsx)(n.code,{children:"Uint8Array"}),", we interpreted it as 8-bit units, while ",(0,r.jsx)(n.code,{children:"Uint16Array"})," interprets it as 16-bit units.\r\nThis is what an array fundamentally is; a contiguous memory space interpreted as a certain type."]}),"\n",(0,r.jsxs)(n.p,{children:["These are called ",(0,r.jsx)(n.strong,{children:"views"})," because they're a different way of looking at the same data."]}),"\n",(0,r.jsx)(n.h2,{id:"arrays-are-not-lists",children:"Arrays are not lists"}),"\n",(0,r.jsx)(n.p,{children:"Arrays are not lists, and lists are not arrays."}),"\n",(0,r.jsx)(n.h2,{id:"insertion",children:"Insertion"}),"\n",(0,r.jsx)(n.p,{children:"With arrays, there's no magic behind the scenes.\r\nThere's no \"insertion,\" it just sets the value at the index.\r\nYou do not get to grow your array, because it can overwrite other data."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"01 02 03 04 05 06 07 08 09 10 11 12 13 14 15\r\n----------------------------+ -------------+\r\n                            |              |\r\n                            |              +--- some other data\r\n                            +--- our array\n"})}),"\n",(0,r.jsx)(n.p,{children:"It would be problematic if we wanted to grow our array, because it's going to overlap with other data."}),"\n",(0,r.jsx)(n.p,{children:"This is why data structures exist; to abstract away the details of how data is stored, so you don't have to constantly reallocate memory and move data around."}),"\n",(0,r.jsxs)(n.p,{children:["Some languages have things like ",(0,r.jsx)(n.code,{children:"capacity"})," that optimizes the use of memory without reallocations."]}),"\n",(0,r.jsx)(n.h2,{id:"deletion",children:"Deletion"}),"\n",(0,r.jsx)(n.p,{children:'Deletion is a bit confusing; you don\'t "delete" contiguous memory.\r\nPrograms delete things differently, but the most common way is to mark it as "deleted" and ignore it.'}),"\n",(0,r.jsx)(n.p,{children:"For raw arrays in, for instance, C, you will have to mark it yourself."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"null"}),' also comes into play here as a named way of saying "deleted."']}),"\n",(0,r.jsx)(n.h2,{id:"lists",children:"Lists"}),"\n",(0,r.jsxs)(n.p,{children:["As previously mentioned, arrays are just contiguous memory interpreted as a certain type.\r\nYou can't \"insert at a certain index\" because you can't grow the array. There's no ",(0,r.jsx)(n.code,{children:"push"}),", ",(0,r.jsx)(n.code,{children:"pop"}),", etc.\r\nTo get around this, data structures are used, many of which actually use arrays under the hood."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4735:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>i});var r=s(959);const t={},a=r.createContext(t);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);