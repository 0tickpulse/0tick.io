"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[463],{68161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"notes/maths/Linear Algebra Advanced/Vectors and Spaces/index","title":"Vectors and Spaces","description":"The fundamental building blocks of linear algebra are vector spaces.","source":"@site/docs/notes/maths/Linear Algebra Advanced/Vectors and Spaces/index.mdx","sourceDirName":"notes/maths/Linear Algebra Advanced/Vectors and Spaces","slug":"/notes/maths/Linear Algebra Advanced/Vectors and Spaces/","permalink":"/notes/maths/Linear Algebra Advanced/Vectors and Spaces/","draft":false,"unlisted":false,"editUrl":"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/maths/Linear Algebra Advanced/Vectors and Spaces/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"sidebarNotes","previous":{"title":"Advanced Linear Algebra","permalink":"/notes/maths/Linear Algebra Advanced/Introduction"},"next":{"title":"Underlying Algebraic Structures","permalink":"/notes/maths/Linear Algebra Advanced/Vectors and Spaces/Underlying Algebraic Structures"}}');var s=n(86070),a=n(85248),c=n(5622);const o={},i="Vectors and Spaces",l={},d=[{value:"Pages",id:"pages",level:2}];function u(e){const t={em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"vectors-and-spaces",children:"Vectors and Spaces"})}),"\n",(0,s.jsxs)(t.p,{children:["The fundamental building blocks of linear algebra are vector spaces.\nThey are defined by a set of objects called ",(0,s.jsx)(t.em,{children:"vectors"})," and operations that can be performed on these vectors.\nWe will take a semi-formal approach to defining vectors and vector spaces, and then explore some of the properties and operations that define them."]}),"\n",(0,s.jsx)(t.h2,{id:"pages",children:"Pages"}),"\n",(0,s.jsx)(c.A,{})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5622:(e,t,n)=>{n.d(t,{A:()=>b});n(30758);var r=n(13526),s=n(30970),a=n(18684),c=n(39066),o=n(54548),i=n(66830),l=n(93651);const d={cardContainer:"cardContainer_KKmP",cardTitle:"cardTitle_B_Vm",cardDescription:"cardDescription_WrhJ"};var u=n(86070);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:a}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),a&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,c.W)();return t=>e(t,(0,i.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const a=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},39066:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(16820);const a=["zero","one","two","few","many","other"];function c(e){return a.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}}}]);