"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[7720],{90510:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=i(86070),n=i(25710),a=i(33101);const s={sidebar_position:1},l="Applying Multivariable Derivatives",o={id:"notes/maths/Calculus 3/Applying Multivariable Derivatives/index",title:"Applying Multivariable Derivatives",description:"Previously, we covered a lot of the theory behind multivariable derivatives, starting from the partial derivatives, the gradient, and the directional derivative, and ending with the Jacobian matrix.",source:"@site/docs/notes/maths/Calculus 3/Applying Multivariable Derivatives/index.mdx",sourceDirName:"notes/maths/Calculus 3/Applying Multivariable Derivatives",slug:"/notes/maths/Calculus 3/Applying Multivariable Derivatives/",permalink:"/notes/maths/Calculus 3/Applying Multivariable Derivatives/",draft:!1,unlisted:!1,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/maths/Calculus 3/Applying Multivariable Derivatives/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebarNotes",previous:{title:"Extending the Derivative: Part 2 (Old Notes)",permalink:"/notes/maths/Calculus 3/Extending the Derivative Part 2"},next:{title:"Tangent Planes of Graphs",permalink:"/notes/maths/Calculus 3/Applying Multivariable Derivatives/Tangent Planes of Graphs"}},c={},u=[];function d(e){const t={h1:"h1",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"applying-multivariable-derivatives",children:"Applying Multivariable Derivatives"})}),"\n",(0,r.jsx)(t.p,{children:"Previously, we covered a lot of the theory behind multivariable derivatives, starting from the partial derivatives, the gradient, and the directional derivative, and ending with the Jacobian matrix.\nNow we will look at how to apply these concepts to solve some problems."}),"\n",(0,r.jsx)(a.A,{})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},33101:(e,t,i)=>{i.d(t,{A:()=>x});i(30758);var r=i(13526),n=i(63027),a=i(62305),s=i(66350),l=i(65799),o=i(57680),c=i(55482);const u={cardContainer:"cardContainer_avqR",cardTitle:"cardTitle_tbwO",cardDescription:"cardDescription_auHF"};var d=i(86070);function h(e){let{href:t,children:i}=e;return(0,d.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:n,description:a}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:n,children:[i," ",n]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function m(e){let{item:t}=e;const i=(0,n.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,o.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function v(e){let{item:t}=e;const i=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(v,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const i=(0,n.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(g,{...e});const a=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",i),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},66350:(e,t,i)=>{i.d(t,{W:()=>c});var r=i(30758),n=i(45885);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function c(){const e=o();return{selectMessage:(t,i)=>function(e,t,i){const r=e.split("|");if(1===r.length)return r[0];r.length>i.pluralForms.length&&console.error(`For locale=${i.locale}, a maximum of ${i.pluralForms.length} plural forms are expected (${i.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=i.select(t),a=i.pluralForms.indexOf(n);return r[Math.min(a,r.length-1)]}(i,t,e)}}}}]);