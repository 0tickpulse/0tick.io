(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[3085],{25461:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>p});n(50959);var i=n(86259),o=n(8701),r=n(74692),s=n(80314),a=n(73362),l=n(44376),c=n(45549),d=n(27824);const m={mdxPageWrapper:"mdxPageWrapper_r432"};var u=n(11527);function p(e){const{content:t}=e,{metadata:{title:n,editUrl:p,description:x,frontMatter:h,unlisted:g,lastUpdatedBy:f,lastUpdatedAt:v},assets:j}=t,{keywords:k,wrapperClassName:b,hide_table_of_contents:y}=h,L=j.image??h.image,C=!!(p||v||f);return(0,u.jsx)(o.FG,{className:(0,i.Z)(b??r.k.wrapper.mdxPages,r.k.page.mdxPage),children:(0,u.jsxs)(s.Z,{children:[(0,u.jsx)(o.d,{title:n,description:x,keywords:k,image:L}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,i.Z)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,i.Z)("col",!y&&"col--8"),children:[g&&(0,u.jsx)(c.Z,{}),(0,u.jsx)("article",{children:(0,u.jsx)(a.Z,{children:(0,u.jsx)(t,{})})}),C&&(0,u.jsx)(d.Z,{className:(0,i.Z)("margin-top--sm",r.k.pages.pageFooterEditMetaRow),editUrl:p,lastUpdatedAt:v,lastUpdatedBy:f})]}),!y&&t.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(l.Z,{toc:t.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},44376:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(50959);var i=n(86259),o=n(18530);const r={tableOfContents:"tableOfContents_DY4m",docItemContainer:"docItemContainer_YEP_"};var s=n(11527);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.Z)(r.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(o.Z,{...n,linkClassName:a,linkActiveClassName:l})})}},18530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(50959),o=n(53627);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):i.push(o)})),i}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>a(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let o=t;o<=n;o+=1)i.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=l(a,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])}var m=n(62381),u=n(11527);function p(e){let{toc:t,className:n,linkClassName:i,isChild:o}=e;return t.length?(0,u.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.Z,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(p,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const x=i.memo(p);function h(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:m,...p}=e;const h=(0,o.L)(),g=c??h.tableOfContents.minHeadingLevel,f=m??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,i.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:g,maxHeadingLevel:f});return d((0,i.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:g,maxHeadingLevel:f}}),[a,l,g,f])),(0,u.jsx)(x,{toc:v,className:n,linkClassName:a,...p})}},45549:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});n(50959);var i=n(86259),o=n(12054),r=n(72548),s=n(11527);function a(){return(0,s.jsx)(o.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(o.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(74692),m=n(91218);function u(e){let{className:t}=e;return(0,s.jsx)(m.Z,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,i.Z)(t,d.k.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(u,{...e})]})}},3861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var i=n(2425),o=n(73878),r=n(8409);const s=i.np.vsLight,a=i.np.vsDark,l={title:"0tick.io",tagline:"My personal website",favicon:"img/favicon.ico",customFields:{mathJaxOptions:{}},url:"https://0tick.io",baseUrl:"/",trailingSlash:!1,organizationName:"0tickpulse",projectName:"0tick.io",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},stylesheets:[{href:"https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",type:"text/css",integrity:"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",crossorigin:"anonymous"}],plugins:["docusaurus-plugin-sass"],themes:["@docusaurus/theme-mermaid"],presets:[["classic",{docs:{sidebarPath:"./sidebars.ts",editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/",routeBasePath:"/",remarkPlugins:[o.Z],rehypePlugins:[e=>(l.customFields.mathJaxOptions={...e,tex:{tags:"ams"}},(0,r.Z)(l.customFields.mathJaxOptions))]},blog:{showReadingTime:!0,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/"},theme:{customCss:61557}}]],themeConfig:{navbar:{title:"0tick.io",logo:{alt:"Logo",src:"img/logo.png"},items:[{type:"docSidebar",sidebarId:"sidebarPortfolio",position:"left",label:"Portfolio"},{type:"docSidebar",sidebarId:"sidebarNotes",position:"left",label:"Notes"},{type:"docSidebar",sidebarId:"sidebarTools",position:"left",label:"Tools"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/0tickpulse/0tick.io",position:"right",className:"header-github-link","aria-label":"GitHub repository"}]},footer:{style:"dark",links:[],copyright:`Copyright \xa9 ${(new Date).getFullYear()} 0TickPulse. Built with Docusaurus.`},prism:{theme:s,darkTheme:a}}},c=l;var d=n(60597),m=n(63333),u=n(80665),p=n(82546),x=n(11527);function h(e){let{children:t,...n}=e;const i={...c.customFields.mathJaxOptions,...n},o=new d.TeX({packages:m.b,...n.tex}),r=new p.SVG(i.svg||void 0),s=u.mathjax.document("",{InputJax:o,OutputJax:r}).convert(t.toString(),i);return(0,x.jsx)("div",{dangerouslySetInnerHTML:{__html:s.outerHTML}})}},4570:(e,t,n)=>{"use strict";n.d(t,{V:()=>s});var i=n(40050),o=n(3861),r=n(11527);function s(e){let{yvar:t="y",xvar:n="x"}=void 0===e?{}:e;const s=e=>.2*Math.pow(e,2),a=(0,i.HC)([3,s(3)],{constrain:e=>{let[t,n]=e;return[t,s(t)]}}),l=(0,i.HC)([4,s(4)],{constrain:e=>{let[t,n]=e;return[t,s(t)]}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.V6,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,r.jsx)(i.rT.Cartesian,{}),(0,r.jsx)(i.XN.OfX,{y:e=>.2*Math.pow(e,2)}),(0,r.jsx)(i.XN.OfX,{y:e=>s(a.point[0])+(e-a.point[0])*(s(l.point[0])-s(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,r.jsxs)(i.wx,{translate:[-.75,.75],children:[(0,r.jsx)(i.UQ,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,r.jsx)(i.UQ,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,r.jsx)(i.x1.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,r.jsx)(i.x1.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,r.jsx)(i.x1.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,r.jsx)(i.x1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,r.jsx)(i.OW,{tail:[a.point[0],0],tip:[l.point[0],0],color:i.Q2.green}),(0,r.jsx)(i.UQ,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,r.jsx)(i.OW,{tail:[l.point[0],a.point[1]],tip:l.point,color:i.Q2.yellow}),(0,r.jsx)(i.UQ,{tex:String.raw`\Delta ${t} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,r.jsx)(o.Z,{displayMode:!0,children:String.raw`
                \begin{align}
                    \text{Slope} &= \frac{\Delta ${t}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{align}
            `})]})}},31867:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var i=n(11527);var o=n(50959);const r={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function s(e){let{children:t,triggerText:n,color:s="var(--ifm-color-primary)",href:a}=e;const[l,c]=(0,o.useState)(!1);return(0,i.jsxs)("span",{className:`${r["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${r.trigger}`,style:{color:s,borderColor:s},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:a?(0,i.jsxs)("a",{href:a,className:`${r["trigger-link"]}`,style:{color:s},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${r["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${r["trigger-text"]}`,children:n})}),t&&l&&(0,i.jsx)("div",{className:`${r.content}`,children:t})]})}var a=n(18066),l=n(4570),c=n(40050),d=n(61178),m=n.n(d);var u=n(83271);function p(e){let{domain:t,minDepth:n,maxDepth:i,threshold:o,fn:r,error:s,onPoint:a,lerp:l}=e;const[c,d]=t;a(c,r(c)),function e(t,c,d,m,u){const p=function(e,t){const n=43758.5453*Math.sin(12.9898*e+78.233*t);return.4+.2*(n-Math.floor(n))}(t,c),x=t+(c-t)*p,h=r(x);function g(){e(t,x,d+1,m,h),a(x,h),e(x,c,d+1,h,u)}if(d<n)g();else if(d<i){const e=l(m,u,p);s(h,e)>o&&g()}}(c,d,0,r(c),r(d)),a(d,r(d))}function x(e,t,n){const i=[];for(let o=e;o<=t;o+=n)i.push(o);return i}function h(e,t){const n=t[0],i=t[1],o=t[2],r=(s=n,u.pIu([[1,0,0],[0,u.mCk(s),-u.O$l(s)],[0,u.O$l(s),u.mCk(s)]]));var s;const a=function(e){return u.pIu([[u.mCk(e),0,u.O$l(e)],[0,1,0],[-u.O$l(e),0,u.mCk(e)]])}(i),l=function(e){return u.pIu([[u.mCk(e),-u.O$l(e),0],[u.O$l(e),u.mCk(e),0],[0,0,1]])}(o),c=u.JpY(l,a,r);return u.JpY(c,u.pIu(e)).toArray()}const g={...a.Z,Boxed:function(e){let{color:t="var(--ifm-font-color-base)",fillOpacity:n=.1,children:o,...r}=e;return(0,i.jsx)("div",{style:{border:`1px solid ${t}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${t}, ${n})`},...r,children:o})},Citation:function(e){let{id:t,url:n,children:o}=e;return n?(0,i.jsx)("a",{href:n,id:t,target:"_blank",children:o}):(0,i.jsx)("p",{id:t,children:o})},Cite:function(e){const t=(0,i.jsxs)(i.Fragment,{children:["Cite: ",e.id,e.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(e.page)?e.page[0]+"-"+e.page[1]:e.page]})]}),n="#"+e.id;return(0,i.jsx)(s,{triggerText:t,href:n})},DerivativeFromLimits:l.V,HoverableBox:s,RiemannApproximation:function(e){let{f:t=(e=>e),lb:n=0,ub:o=5,n:r=5,type:s="left",color:a}=e;const l=(o-n)/r,d=m()(n,o,l).map((e=>{let n,i;switch(s){case"left":n=t(e);break;case"right":n=t(e+l);break;case"middle":n=t(e+l/2);break;case"trapezoidal":n=(t(e)+t(e+l))/2}let o=[[e,0],[e+l,0],[e+l,n],[e,n]];return i=l*n,"trapezoidal"===s&&(o=[[e,0],[e+l,0],[e+l,t(e+l)],[e,t(e)]],i=l*(t(e)+t(e+l))/2),{polygon:o,area:l*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.XN.OfX,{y:t,color:a}),d.map(((e,t)=>{let{polygon:n}=e;return(0,i.jsx)(c.mg,{points:n,color:a},t)}))]})},ThreeDTest:function(){const e=[1,2,3],[t,n]=(0,o.useState)([0,Math.PI/4,Math.PI/4]);function r(e,n){void 0===n&&(n=t);const i=h(e,n);return[i[0],i[1]]}const s=(e,t)=>Math.sin(e)+Math.cos(t),a=(0,i.jsxs)(c.V6,{pan:!1,children:[(0,i.jsx)(c.x1.Segment,{point1:r([-10,0,0]),point2:r([10,0,0]),color:c.Q2.red}),(0,i.jsx)(c.x1.Segment,{point1:r([0,-10,0]),point2:r([0,10,0]),color:c.Q2.green}),(0,i.jsx)(c.x1.Segment,{point1:r([0,0,-10]),point2:r([0,0,10]),color:c.Q2.blue}),(0,i.jsx)(c.OW,{tail:r([0,0,0]),tip:r(e)}),(0,i.jsx)(c.OW,{tail:r([0,0,0]),tip:r([e[0],0,0])}),(0,i.jsx)(c.OW,{tail:r([e[0],0,0]),tip:r([e[0],e[1],0])}),(0,i.jsx)(c.OW,{tail:r([e[0],e[1],0]),tip:r(e)}),x(-10,10,.25).map((e=>{const n=o.useMemo((()=>function(e,t,n,i,o){let r="M ";return p({fn:e,error:(e,t)=>c.Bh.squareDist(e,t),onPoint:(e,t)=>{let[n,i]=t;Number.isFinite(n)&&Number.isFinite(i)&&(r+=`${n} ${i} L `)},lerp:(e,t,n)=>c.Bh.lerp(e,t,n),domain:t,minDepth:n,maxDepth:i,threshold:o}),r.substring(0,r.length-2)}((t=>r([t,e,s(t,e)])),[-10,10],4,10,.01)),[e,s,t]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:e=>{const i=[e.clientX,e.clientY],o=t,r=e=>{const t=[e.clientX-i[0],e.clientY-i[1]];n([o[0]+.01*t[1],o[1]+.01*t[0],o[2]])},s=()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},children:a})}}},21440:()=>{}}]);