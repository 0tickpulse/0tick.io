(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[8401],{64268:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var i=n(30758),s=n(24905),o=n(25742),a=n(86070);const r=i.createContext(null);function l(e){let{children:t,content:n}=e;const s=function(e){return(0,i.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,a.jsx)(r.Provider,{value:s,children:t})}function c(){const e=(0,i.useContext)(r);if(null===e)throw new o.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=c();return(0,a.jsx)(s.be,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(13526),m=n(43695),h=n(30476),p=n(78472);function x(e){const{previous:t,next:n}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.jsx)(p.A,{...t,subLabel:(0,a.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,a.jsx)(p.A,{...n,subLabel:(0,a.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function g(){const{metadata:e}=c();return(0,a.jsx)(x,{previous:e.previous,next:e.next})}var v=n(63961),b=n(92285),f=n(16450),j=n(68677),k=n(29499),A=n(17854);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,a.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,a.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,a.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,a.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const t=C[e.versionMetadata.banner];return(0,a.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:i}=e;return(0,a.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,a.jsx)("b",{children:(0,a.jsx)(b.A,{to:n,onClick:i,children:(0,a.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function _(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:i}}=(0,v.A)(),{pluginId:s}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:o}=(0,k.g1)(s),{latestDocSuggestion:r,latestVersionSuggestion:l}=(0,f.HW)(s),c=r??(d=l).docs.find((e=>e.id===d.mainDocId));var d;return(0,a.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,a.jsx)("div",{children:(0,a.jsx)(N,{siteTitle:i,versionMetadata:n})}),(0,a.jsx)("div",{className:"margin-top--md",children:(0,a.jsx)(L,{versionLabel:l.label,to:c.path,onClick:()=>o(l.name)})})]})}function y(e){let{className:t}=e;const n=(0,A.r)();return n.banner?(0,a.jsx)(_,{className:t,versionMetadata:n}):null}function M(e){let{className:t}=e;const n=(0,A.r)();return n.badge?(0,a.jsx)("span",{className:(0,u.A)(t,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,a.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var T=n(366),w=n(39649);function F(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i,tags:s}=e,o=s.length>0,r=!!(t||n||i);return o||r?(0,a.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[o&&(0,a.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(T.A,{tags:s})})}),r&&(0,a.jsx)(w.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:i})]}):null}var S=n(33056),H=n(22910);const E={tocCollapsibleButton:"tocCollapsibleButton_BnXk",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_aORl"};function P(e){let{collapsed:t,...n}=e;return(0,a.jsx)("button",{type:"button",...n,className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!t&&E.tocCollapsibleButtonExpanded,n.className),children:(0,a.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const $={tocCollapsible:"tocCollapsible_JETg",tocCollapsibleContent:"tocCollapsibleContent_eHcF",tocCollapsibleExpanded:"tocCollapsibleExpanded_LjiS"};function O(e){let{toc:t,className:n,minHeadingLevel:i,maxHeadingLevel:s}=e;const{collapsed:o,toggleCollapsed:r}=(0,S.u)({initialState:!0});return(0,a.jsxs)("div",{className:(0,u.A)($.tocCollapsible,!o&&$.tocCollapsibleExpanded,n),children:[(0,a.jsx)(P,{collapsed:o,onClick:r}),(0,a.jsx)(S.N,{lazy:!0,className:$.tocCollapsibleContent,collapsed:o,children:(0,a.jsx)(H.A,{toc:t,minHeadingLevel:i,maxHeadingLevel:s})})]})}const B={tocMobile:"tocMobile__KVG"};function I(){const{toc:e,frontMatter:t}=c();return(0,a.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,B.tocMobile)})}var D=n(52685);function R(){const{toc:e,frontMatter:t}=c();return(0,a.jsx)(D.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var U=n(36269),V=n(27464);function J(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return(0,a.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[n&&(0,a.jsx)("header",{children:(0,a.jsx)(U.A,{as:"h1",children:n})}),(0,a.jsx)(V.A,{children:t})]})}var G=n(51302),z=n(55451),X=n(25722);function q(e){return(0,a.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,a.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const W={breadcrumbHomeIcon:"breadcrumbHomeIcon_t_Qi"};function K(){const e=(0,X.Ay)("/");return(0,a.jsx)("li",{className:"breadcrumbs__item",children:(0,a.jsx)(b.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,a.jsx)(q,{className:W.breadcrumbHomeIcon})})})}const Y={breadcrumbsContainer:"breadcrumbsContainer_eOiZ"};function Q(e){let{children:t,href:n,isLast:i}=e;const s="breadcrumbs__link";return i?(0,a.jsx)("span",{className:s,itemProp:"name",children:t}):n?(0,a.jsx)(b.A,{className:s,href:n,itemProp:"item",children:(0,a.jsx)("span",{itemProp:"name",children:t})}):(0,a.jsx)("span",{className:s,children:t})}function Z(e){let{children:t,active:n,index:i,addMicrodata:s}=e;return(0,a.jsxs)("li",{...s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,a.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function ee(){const e=(0,G.OF)(),t=(0,z.Dt)();return e?(0,a.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,Y.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,a.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,a.jsx)(K,{}),e.map(((t,n)=>{const i=n===e.length-1,s="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,a.jsx)(Z,{active:i,index:n,addMicrodata:!!s,children:(0,a.jsx)(Q,{href:s,isLast:i,children:t.label})},n)}))]})}):null}var te=n(34792);const ne={docItemContainer:"docItemContainer_uVCO",docItemCol:"docItemCol_EFkd"};function ie(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,m.l)(),i=e.hide_table_of_contents,s=!i&&t.length>0;return{hidden:i,mobile:s?(0,a.jsx)(I,{}):void 0,desktop:!s||"desktop"!==n&&"ssr"!==n?void 0:(0,a.jsx)(R,{})}}(),{metadata:{unlisted:i}}=c();return(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:(0,u.A)("col",!n.hidden&&ne.docItemCol),children:[i&&(0,a.jsx)(te.A,{}),(0,a.jsx)(y,{}),(0,a.jsxs)("div",{className:ne.docItemContainer,children:[(0,a.jsxs)("article",{children:[(0,a.jsx)(ee,{}),(0,a.jsx)(M,{}),n.mobile,(0,a.jsx)(J,{children:t}),(0,a.jsx)(F,{})]}),(0,a.jsx)(g,{})]})]}),n.desktop&&(0,a.jsx)("div",{className:"col col--3",children:n.desktop})]})}function se(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,a.jsx)(l,{content:e.content,children:(0,a.jsxs)(s.e3,{className:t,children:[(0,a.jsx)(d,{}),(0,a.jsx)(ie,{children:(0,a.jsx)(n,{})})]})})}},78472:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});n(30758);var i=n(13526),s=n(92285),o=n(86070);function a(e){const{permalink:t,title:n,subLabel:a,isNext:r}=e;return(0,o.jsxs)(s.A,{className:(0,i.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[a&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:a}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},52685:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(30758);var i=n(13526),s=n(22910);const o={tableOfContents:"tableOfContents_pqxj",docItemContainer:"docItemContainer_s_e5"};var a=n(86070);const r="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,a.jsx)(s.A,{...n,linkClassName:r,linkActiveClassName:l})})}},22910:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var i=n(30758),s=n(37092);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):i.push(s)})),i}function a(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=a({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>r(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:a}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let s=t;s<=n;s+=1)i.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:a}),c=l(r,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var u=n(92285),m=n(86070);function h(e){let{toc:t,className:n,linkClassName:i,isChild:s}=e;return t.length?(0,m.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const p=i.memo(h);function x(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,s.p)(),g=c??x.tableOfContents.minHeadingLevel,v=u??x.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,i.useMemo)((()=>a({toc:o(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:g,maxHeadingLevel:v});return d((0,i.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:v}}),[r,l,g,v])),(0,m.jsx)(p,{toc:b,className:n,linkClassName:r,...h})}},366:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(30758);var i=n(13526),s=n(30476),o=n(92285);const a={tag:"tag_H5iW",tagRegular:"tagRegular_vNk1",tagWithCount:"tagWithCount_Cwhd"};var r=n(86070);function l(e){let{permalink:t,label:n,count:s,description:l}=e;return(0,r.jsxs)(o.A,{href:t,title:l,className:(0,i.A)(a.tag,s?a.tagWithCount:a.tagRegular),children:[n,s&&(0,r.jsx)("span",{children:s})]})}const c={tags:"tags_XjVY",tag:"tag_sfpA"};function d(e){let{tags:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("b",{children:(0,r.jsx)(s.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,r.jsx)("ul",{className:(0,i.A)(c.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,r.jsx)("li",{className:c.tag,children:(0,r.jsx)(l,{...e})},e.permalink)))})]})}},34792:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});n(30758);var i=n(13526),s=n(30476),o=n(10307),a=n(86070);function r(){return(0,a.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,a.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,a.jsx)(o.A,{children:(0,a.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(68677),u=n(90149);function m(e){let{className:t}=e;return(0,a.jsx)(u.A,{type:"caution",title:(0,a.jsx)(r,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,a.jsx)(l,{})})}function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c,{}),(0,a.jsx)(m,{...e})]})}},92856:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var i=n(63961),s=n(88380),o=n(63477),a=n(9279),r=n(34787);const l=o.Zj.vsLight,c=o.Zj.vsDark,d={title:"0tick.io",tagline:"My personal website",favicon:"img/favicon.ico",customFields:{mathJaxOptions:{loader:{load:["[tex]/mathtools","[tex]/cancel"]},tex:{tags:"ams",macros:{ihat:"\\hat{\\mathbf{i}}",jhat:"\\hat{\\mathbf{j}}",khat:"\\hat{\\mathbf{k}}",rhat:"\\hat{\\mathbf{r}}",thetahat:"\\hat{\\mathbf{\\theta}}",unitvec:["\\hat{\\mathbf{#1}}",1],arrowedvec:["\\overrightarrow{#1}",1],bvec:["\\mathbf{\\vec{#1}}",1],arcsec:"\\operatorname{arcsec}",arccsc:"\\operatorname{arccsc}",arccot:"\\operatorname{arccot}"},packages:{"[+]":["autoload","gensymb","ams","cancel","mathtools","html","configmacros","physics"]}},svg:{scale:1.2}}},url:"https://0tick.io",baseUrl:"/",trailingSlash:!1,organizationName:"0tickpulse",projectName:"0tick.io",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},stylesheets:[{href:"https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",type:"text/css",integrity:"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",crossorigin:"anonymous"}],plugins:["docusaurus-plugin-sass"],themes:["@docusaurus/theme-mermaid"],presets:[["classic",{docs:{sidebarPath:"./sidebars.ts",editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/",routeBasePath:"/",remarkPlugins:[a.A],rehypePlugins:[e=>(d.customFields.mathJaxOptions={...e,...d.customFields.mathJaxOptions},(0,r.A)(d.customFields.mathJaxOptions))]},blog:{showReadingTime:!0,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/"},theme:{customCss:96213}}]],themeConfig:{navbar:{title:"0tick.io",logo:{alt:"Logo",src:"img/logo.png"},items:[{type:"docSidebar",sidebarId:"sidebarPortfolio",position:"left",label:"Portfolio"},{type:"docSidebar",sidebarId:"sidebarNotes",position:"left",label:"Notes"},{type:"docSidebar",sidebarId:"sidebarTools",position:"left",label:"Tools"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/0tickpulse/0tick.io",position:"right",className:"header-github-link","aria-label":"GitHub repository"}]},footer:{style:"dark",links:[],copyright:`Copyright \xa9 ${(new Date).getFullYear()} 0TickPulse. Built with Docusaurus.`},prism:{theme:l,darkTheme:c}}},u=d;var m=n(61017),h=n(33131),p=n(9764),x=n(92935),g=n(86070);function v(e){let{children:t,...n}=e;const o=(0,i.A)().siteConfig,a={...o.customFields.mathJaxOptions,...n},r=new s.TeX({packages:m.B,...a.tex}),l=new p.SVG(a.svg||void 0);try{const e=h.mathjax.document("",{InputJax:r,OutputJax:l}).convert(t.toString(),{});return(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}})}catch(c){console.log(`Error in MathJax: ${c}`,{newOptions:a,siteConfig:o.customFields.mathJaxOptions,config:u.customFields.mathJaxOptions,eq:(0,x.isEqual)(o.customFields.mathJaxOptions,u.customFields.mathJaxOptions)})}return(0,g.jsx)("div",{})}},60419:(e,t,n)=>{"use strict";n.d(t,{i:()=>a});var i=n(78303),s=n(92856),o=n(86070);function a(e){let{yvar:t="y",xvar:n="x"}=void 0===e?{}:e;const a=e=>.2*Math.pow(e,2),r=(0,i.ET)([3,a(3)],{constrain:e=>{let[t,n]=e;return[t,a(t)]}}),l=(0,i.ET)([4,a(4)],{constrain:e=>{let[t,n]=e;return[t,a(t)]}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.Ez,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,o.jsx)(i.E$.Cartesian,{}),(0,o.jsx)(i.Kl.OfX,{y:e=>.2*Math.pow(e,2)}),(0,o.jsx)(i.Kl.OfX,{y:e=>a(r.point[0])+(e-r.point[0])*(a(l.point[0])-a(r.point[0]))/(l.point[0]-r.point[0])}),r.element,l.element,(0,o.jsxs)(i.dL,{translate:[-.75,.75],children:[(0,o.jsx)(i.PC,{at:r.point,tex:`p_1 = (${r.point[0].toFixed(2)}, ${r.point[1].toFixed(2)})`}),(0,o.jsx)(i.PC,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,o.jsx)(i.N1.Segment,{point1:r.point,point2:[l.point[0],r.point[1]]}),(0,o.jsx)(i.N1.Segment,{point1:[l.point[0],r.point[1]],point2:l.point}),(0,o.jsx)(i.N1.Segment,{point1:[r.point[0],0],point2:r.point,style:"dashed"}),(0,o.jsx)(i.N1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,o.jsx)(i.Mi,{tail:[r.point[0],0],tip:[l.point[0],0],color:i.Sx.green}),(0,o.jsx)(i.PC,{tex:String.raw`\Delta ${n} = ${(l.point[0]-r.point[0]).toFixed(2)}`,at:[r.point[0]+(l.point[0]-r.point[0])/2,-.5]}),(0,o.jsx)(i.Mi,{tail:[l.point[0],r.point[1]],tip:l.point,color:i.Sx.yellow}),(0,o.jsx)(i.PC,{tex:String.raw`\Delta ${t} = ${(l.point[1]-r.point[1]).toFixed(2)}`,at:[l.point[0]+1,r.point[1]+(l.point[1]-r.point[1])/2]})]}),(0,o.jsx)(s.A,{children:String.raw`
                \begin{align}
                    \text{Slope} &= \frac{\Delta ${t}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${r.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${r.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-r.point[1]).toFixed(2)}}{${(l.point[0]-r.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-r.point[1])/(l.point[0]-r.point[0])).toFixed(2)}
                \end{align}
            `})]})}},1601:(e,t,n)=>{"use strict";n.d(t,{A:()=>v});var i=n(86070);var s=n(30758);const o={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function a(e){let{children:t,triggerText:n,color:a="var(--ifm-color-primary)",href:r}=e;const[l,c]=(0,s.useState)(!1);return(0,i.jsxs)("span",{className:`${o["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${o.trigger}`,style:{color:a,borderColor:a},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:r?(0,i.jsxs)("a",{href:r,className:`${o["trigger-link"]}`,style:{color:a},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${o["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${o["trigger-text"]}`,children:n})}),t&&l&&(0,i.jsx)("div",{className:`${o.content}`,children:t})]})}var r=n(22453),l=n(60419),c=n(78303),d=n(3029),u=n.n(d);var m=n(38098);function h(e){let{domain:t,minDepth:n,maxDepth:i,threshold:s,fn:o,error:a,onPoint:r,lerp:l}=e;const[c,d]=t;r(c,o(c)),function e(t,c,d,u,m){const h=function(e,t){const n=43758.5453*Math.sin(12.9898*e+78.233*t);return.4+.2*(n-Math.floor(n))}(t,c),p=t+(c-t)*h,x=o(p);function g(){e(t,p,d+1,u,x),r(p,x),e(p,c,d+1,x,m)}if(d<n)g();else if(d<i){const e=l(u,m,h);a(x,e)>s&&g()}}(c,d,0,o(c),o(d)),r(d,o(d))}function p(e,t,n){const i=[];for(let s=e;s<=t;s+=n)i.push(s);return i}function x(e,t){const n=t[0],i=t[1],s=t[2],o=(a=n,m.UPj([[1,0,0],[0,m.gnS(a),-m.F8e(a)],[0,m.F8e(a),m.gnS(a)]]));var a;const r=function(e){return m.UPj([[m.gnS(e),0,m.F8e(e)],[0,1,0],[-m.F8e(e),0,m.gnS(e)]])}(i),l=function(e){return m.UPj([[m.gnS(e),-m.F8e(e),0],[m.F8e(e),m.gnS(e),0],[0,0,1]])}(s),c=m.lwT(l,r,o);return m.lwT(c,m.UPj(e)).toArray()}var g=n(66683);const v={...r.A,Angle:function(e){let{at:t,fromRad:n,toRad:s,radius:o=.4,color:a,straightRightAngle:r=!0,forceStraightAngle:l=!1,label:d,labelColor:u=a,labelOffsetMultiplier:m=1.4}=e;const{userTransform:h}=(0,c.Bn)();if(r&&Math.abs(s-n)===Math.PI/2||l){n>s&&([n,s]=[s,n]),s-n>Math.PI&&([n,s]=[s,n]);const e=o/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.dL,{rotate:n,translate:t,children:[(0,i.jsx)(c.N1.Segment,{point1:[e,0],point2:[e,e]}),(0,i.jsx)(c.N1.Segment,{point1:[0,e],point2:[e,e]})]})})}function p(e){return[Math.cos(e)*o+t[0],Math.sin(e)*o+t[1]]}const x=p((n+s)/2);return x[0]=(x[0]-t[0])*m+t[0],x[1]=(x[1]-t[1])*m+t[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.Parametric,{xy:e=>c.t6.transform(p(e),h),t:[n,s],color:a}),d&&(0,i.jsx)(c.PC,{tex:d,at:x,color:u})]})},Boxed:function(e){let{color:t="var(--ifm-font-color-base)",fillOpacity:n=.1,children:s,...o}=e;return(0,i.jsx)("div",{style:{border:`1px solid ${t}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${t}, ${n})`},...o,children:s})},Citation:function(e){let{id:t,url:n,children:s}=e;return n?(0,i.jsx)("a",{href:n,id:t,target:"_blank",children:s}):(0,i.jsx)("p",{id:t,children:s})},Cite:function(e){const t=(0,i.jsxs)(i.Fragment,{children:["Cite: ",e.id,e.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(e.page)?e.page[0]+"-"+e.page[1]:e.page]})]}),n="#"+e.id;return(0,i.jsx)(a,{triggerText:t,href:n})},DerivativeFromLimits:l.i,LinearTransformationVisualizer:function(e){let{ihat:t=[1,0],jhat:n=[0,1]}=e;const s=[t[0],-t[1],n[0],-n[1],0,0],o=(0,i.jsx)(c.E$.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("g",{transform:`matrix(${s.join(" ")})`,style:{"--mafs-line-color":"white"},children:o}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:t,color:(0,g.y)("blue")}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:n,color:(0,g.y)("yellow")})]})},HoverableBox:a,RiemannApproximation:function(e){let{f:t=(e=>e),lb:n=0,ub:s=5,n:o=5,type:a="left",color:r}=e;const l=(s-n)/o,d=u()(n,s,l).map((e=>{let n,i;switch(a){case"left":n=t(e);break;case"right":n=t(e+l);break;case"middle":n=t(e+l/2);break;case"trapezoidal":n=(t(e)+t(e+l))/2}let s=[[e,0],[e+l,0],[e+l,n],[e,n]];return i=l*n,"trapezoidal"===a&&(s=[[e,0],[e+l,0],[e+l,t(e+l)],[e,t(e)]],i=l*(t(e)+t(e+l))/2),{polygon:s,area:l*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.OfX,{y:t,color:r}),d.map(((e,t)=>{let{polygon:n}=e;return(0,i.jsx)(c.tS,{points:n,color:r},t)}))]})},ThreeDTest:function(){const e=[1,2,3],[t,n]=(0,s.useState)([0,Math.PI/4,Math.PI/4]);function o(e,n){void 0===n&&(n=t);const i=x(e,n);return[i[0],i[1]]}const a=(e,t)=>Math.sin(e)+Math.cos(t),r=(0,i.jsxs)(c.Ez,{pan:!1,children:[(0,i.jsx)(c.N1.Segment,{point1:o([-10,0,0]),point2:o([10,0,0]),color:c.Sx.red}),(0,i.jsx)(c.N1.Segment,{point1:o([0,-10,0]),point2:o([0,10,0]),color:c.Sx.green}),(0,i.jsx)(c.N1.Segment,{point1:o([0,0,-10]),point2:o([0,0,10]),color:c.Sx.blue}),(0,i.jsx)(c.Mi,{tail:o([0,0,0]),tip:o(e)}),(0,i.jsx)(c.Mi,{tail:o([0,0,0]),tip:o([e[0],0,0])}),(0,i.jsx)(c.Mi,{tail:o([e[0],0,0]),tip:o([e[0],e[1],0])}),(0,i.jsx)(c.Mi,{tail:o([e[0],e[1],0]),tip:o(e)}),p(-10,10,.25).map((e=>{const n=s.useMemo((()=>function(e,t,n,i,s){let o="M ";return h({fn:e,error:(e,t)=>c.t6.squareDist(e,t),onPoint:(e,t)=>{let[n,i]=t;Number.isFinite(n)&&Number.isFinite(i)&&(o+=`${n} ${i} L `)},lerp:(e,t,n)=>c.t6.lerp(e,t,n),domain:t,minDepth:n,maxDepth:i,threshold:s}),o.substring(0,o.length-2)}((t=>o([t,e,a(t,e)])),[-10,10],4,10,.01)),[e,a,t]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:e=>{const i=[e.clientX,e.clientY],s=t,o=e=>{const t=[e.clientX-i[0],e.clientY-i[1]];n([s[0]+.01*t[1],s[1]+.01*t[0],s[2]])},a=()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)},children:r})}}},66683:(e,t,n)=>{"use strict";n.d(t,{y:()=>s});const i={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};function s(e){return i[e]}},85222:()=>{}}]);