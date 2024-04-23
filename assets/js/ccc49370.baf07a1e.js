"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[6103],{8090:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});t(959);var i=t(6259),r=t(7098),a=t(6891),s=t(5349),o=t(7571),l=t(7719),c=t(4926),d=t(2984),u=t(1527);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.Z,{...t,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.Z,{...n,subLabel:(0,u.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,s.C)(),{title:t,description:i,date:a,tags:o,authors:l,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(r.d,{title:t,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:a}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")})]})}var h=t(7006),x=t(496);function f(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:r}=(0,s.C)(),{nextItem:a,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:f,toc_min_heading_level:v,toc_max_heading_level:p}=d;return(0,u.jsxs)(o.Z,{sidebar:n,toc:!f&&r.length>0?(0,u.jsx)(h.Z,{toc:r,minHeadingLevel:v,maxHeadingLevel:p}):void 0,children:[g&&(0,u.jsx)(x.Z,{}),(0,u.jsx)(l.Z,{children:t}),(a||c)&&(0,u.jsx)(m,{nextItem:a,prevItem:c})]})}function v(e){const n=e.content;return(0,u.jsx)(s.n,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(r.FG,{className:(0,i.Z)(a.k.wrapper.blogPages,a.k.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(f,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},7006:(e,n,t)=>{t.d(n,{Z:()=>c});t(959);var i=t(6259),r=t(4669);const a={tableOfContents:"tableOfContents_SzYL",docItemContainer:"docItemContainer_a0S9"};var s=t(1527);const o="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,s.jsx)("div",{className:(0,i.Z)(a.tableOfContents,"thin-scrollbar",n),children:(0,s.jsx)(r.Z,{...t,linkClassName:o,linkActiveClassName:l})})}},4669:(e,n,t)=>{t.d(n,{Z:()=>x});var i=t(959),r=t(9101);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...r}=e;t>=0?n[t].children.push(r):i.push(r)})),i}function s(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function l(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>o(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,i.useRef)(void 0),t=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:a,maxHeadingLevel:s}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let r=n;r<=t;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:a,maxHeadingLevel:s}),c=l(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(1717),m=t(1527);function g(e){let{toc:n,className:t,linkClassName:i,isChild:r}=e;return n.length?(0,m.jsx)("ul",{className:r?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(g,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(g);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...g}=e;const x=(0,r.L)(),f=c??x.tableOfContents.minHeadingLevel,v=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>s({toc:a(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:f,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(o&&l)return{linkClassName:o,linkActiveClassName:l,minHeadingLevel:f,maxHeadingLevel:v}}),[o,l,f,v])),(0,m.jsx)(h,{toc:p,className:t,linkClassName:o,...g})}},496:(e,n,t)=>{t.d(n,{Z:()=>g});t(959);var i=t(6259),r=t(4926),a=t(1465),s=t(1527);function o(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(r.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(a.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(6891),u=t(7278);function m(e){let{className:n}=e;return(0,s.jsx)(u.Z,{type:"caution",title:(0,s.jsx)(o,{}),className:(0,i.Z)(n,d.k.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function g(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},9645:(e,n,t)=>{t.d(n,{Z:()=>l});var i=t(3640),r=t(959),a=t(1527);const s={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function o(e){let{children:n,triggerText:t,color:i="var(--ifm-color-primary)",href:o}=e;const[l,c]=(0,r.useState)(!1);return(0,a.jsxs)("span",{className:`${s["hoverable-box"]}`,children:[(0,a.jsx)("div",{className:`${s.trigger}`,style:{color:i,borderColor:i},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:o?(0,a.jsxs)("a",{href:o,className:`${s["trigger-link"]}`,style:{color:i},children:[(0,a.jsx)("span",{children:t}),(0,a.jsx)("span",{className:`${s["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,a.jsx)("span",{className:`${s["trigger-text"]}`,children:t})}),n&&l&&(0,a.jsx)("div",{className:`${s.content}`,children:n})]})}const l={...i.Z,Citation:function(e){let{id:n,url:t,children:i}=e;return t?(0,a.jsx)("a",{href:t,id:n,target:"_blank",children:i}):(0,a.jsx)("p",{id:n,children:i})},Cite:function(e){const n=(0,a.jsxs)(a.Fragment,{children:["Cite: ",e.id,e.page&&(0,a.jsxs)(a.Fragment,{children:[", ",Array.isArray(e.page)?e.page[0]+"-"+e.page[1]:e.page]})]}),t="#"+e.id;return(0,a.jsx)(o,{triggerText:n,href:t})},HoverableBox:o}}}]);