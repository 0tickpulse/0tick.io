"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[5409],{71490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"notes/Arguments for God\'s Existence/Traditional Arguments/index","title":"Traditional Arguments","description":"Traditional arguments are arguments that have been around for a long time and have been discussed by many philosophers and theologians.","source":"@site/docs/notes/Arguments for God\'s Existence/Traditional Arguments/index.mdx","sourceDirName":"notes/Arguments for God\'s Existence/Traditional Arguments","slug":"/notes/Arguments for God\'s Existence/Traditional Arguments/","permalink":"/notes/Arguments for God\'s Existence/Traditional Arguments/","draft":false,"unlisted":false,"editUrl":"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/Arguments for God\'s Existence/Traditional Arguments/index.mdx","tags":[],"version":"current","frontMatter":{},"sidebar":"sidebarNotes","previous":{"title":"Arguments for God\'s Existence","permalink":"/notes/Arguments for God\'s Existence/"},"next":{"title":"Cosmological Arguments","permalink":"/notes/Arguments for God\'s Existence/Traditional Arguments/Cosmological Arguments/"}}');var s=n(86070),o=n(85248),i=n(5622);const a={},c="Traditional Arguments",l={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"traditional-arguments",children:"Traditional Arguments"})}),"\n",(0,s.jsx)(t.p,{children:'Traditional arguments are arguments that have been around for a long time and have been discussed by many philosophers and theologians.\nThey are often considered "classical" or "standard" arguments for God\'s existence.'}),"\n","\n",(0,s.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5622:(e,t,n)=>{n.d(t,{A:()=>A});n(30758);var r=n(13526),s=n(30970),o=n(18684),i=n(39066),a=n(54548),c=n(66830),l=n(93651);const u={cardContainer:"cardContainer_KKmP",cardTitle:"cardTitle_B_Vm",cardDescription:"cardDescription_WrhJ"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:o}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),o&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function g(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function p(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(A,{items:n.items,className:t})}function A(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(p,{item:e})},t)))})}},39066:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(30758),s=n(16820);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}}}]);