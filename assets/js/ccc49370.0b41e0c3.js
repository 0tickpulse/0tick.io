(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[3249],{47329:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>j});n(30758);var i=n(13526),o=n(24905),r=n(68677),s=n(26381),a=n(81476),l=n(46049),c=n(30476),d=n(78472),u=n(86070);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function p(){const{assets:e,metadata:t}=(0,s.e)(),{title:n,description:i,date:r,tags:a,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(o.be,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:r}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),a.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:a.map((e=>e.label)).join(",")})]})}var h=n(10307),g=n(4615);function x(){const e=(0,g.J)();return(0,u.jsx)(h.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var f=n(52685),v=n(34792);function b(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:o}=(0,s.e)(),{nextItem:r,prevItem:c,frontMatter:d,unlisted:p}=i,{hide_table_of_contents:h,toc_min_heading_level:g,toc_max_heading_level:x}=d;return(0,u.jsxs)(a.A,{sidebar:t,toc:!h&&o.length>0?(0,u.jsx)(f.A,{toc:o,minHeadingLevel:g,maxHeadingLevel:x}):void 0,children:[p&&(0,u.jsx)(v.A,{}),(0,u.jsx)(l.A,{children:n}),(r||c)&&(0,u.jsx)(m,{nextItem:r,prevItem:c})]})}function j(e){const t=e.content;return(0,u.jsx)(s.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(o.e3,{className:(0,i.A)(r.G.wrapper.blogPages,r.G.page.blogPostPage),children:[(0,u.jsx)(p,{}),(0,u.jsx)(x,{}),(0,u.jsx)(b,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},52685:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(30758);var i=n(13526),o=n(22910);const r={tableOfContents:"tableOfContents_pqxj",docItemContainer:"docItemContainer_s_e5"};var s=n(86070);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.A)(r.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(o.A,{...n,linkClassName:a,linkActiveClassName:l})})}},22910:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var i=n(30758),o=n(37092);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...o}=e;n>=0?t[n].children.push(o):i.push(o)})),i}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>a(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let o=t;o<=n;o+=1)i.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:r,maxHeadingLevel:s}),c=l(a,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(o),e.classList.add(o),t.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])}var u=n(92285),m=n(86070);function p(e){let{toc:t,className:n,linkClassName:i,isChild:o}=e;return t.length?(0,m.jsx)("ul",{className:o?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(p,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const h=i.memo(p);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...p}=e;const g=(0,o.p)(),x=c??g.tableOfContents.minHeadingLevel,f=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return(0,i.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:o})),[t,n,o])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return d((0,i.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:x,maxHeadingLevel:f}}),[a,l,x,f])),(0,m.jsx)(h,{toc:v,className:n,linkClassName:a,...p})}},34792:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});n(30758);var i=n(13526),o=n(30476),r=n(10307),s=n(86070);function a(){return(0,s.jsx)(o.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(o.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(68677),u=n(90149);function m(e){let{className:t}=e;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(m,{...e})]})}},92856:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var i=n(63961),o=n(88380),r=n(63477),s=n(9279),a=n(34787);const l=r.Zj.vsLight,c=r.Zj.vsDark,d={title:"0tick.io",tagline:"My personal website",favicon:"img/favicon.ico",customFields:{mathJaxOptions:{loader:{load:["[tex]/mathtools","[tex]/cancel"]},tex:{tags:"ams",macros:{ihat:"\\hat{\\mathbf{i}}",jhat:"\\hat{\\mathbf{j}}",khat:"\\hat{\\mathbf{k}}",rhat:"\\hat{\\mathbf{r}}",thetahat:"\\hat{\\mathbf{\\theta}}",unitvec:["\\hat{\\mathbf{#1}}",1],arrowedvec:["\\overrightarrow{#1}",1],bvec:["\\mathbf{\\vec{#1}}",1],arcsec:"\\operatorname{arcsec}",arccsc:"\\operatorname{arccsc}",arccot:"\\operatorname{arccot}"},packages:{"[+]":["autoload","gensymb","ams","cancel","mathtools","html","configmacros","physics"]}},svg:{scale:1.2}}},url:"https://0tick.io",baseUrl:"/",trailingSlash:!1,organizationName:"0tickpulse",projectName:"0tick.io",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},stylesheets:[{href:"https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",type:"text/css",integrity:"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",crossorigin:"anonymous"}],plugins:["docusaurus-plugin-sass"],themes:["@docusaurus/theme-mermaid"],presets:[["classic",{docs:{sidebarPath:"./sidebars.ts",editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/",routeBasePath:"/",remarkPlugins:[s.A],rehypePlugins:[e=>(d.customFields.mathJaxOptions={...e,...d.customFields.mathJaxOptions},(0,a.A)(d.customFields.mathJaxOptions))]},blog:{showReadingTime:!0,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/"},theme:{customCss:96213}}]],themeConfig:{navbar:{title:"0tick.io",logo:{alt:"Logo",src:"img/logo.png"},items:[{type:"docSidebar",sidebarId:"sidebarPortfolio",position:"left",label:"Portfolio"},{type:"docSidebar",sidebarId:"sidebarNotes",position:"left",label:"Notes"},{type:"docSidebar",sidebarId:"sidebarTools",position:"left",label:"Tools"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/0tickpulse/0tick.io",position:"right",className:"header-github-link","aria-label":"GitHub repository"}]},footer:{style:"dark",links:[],copyright:`Copyright \xa9 ${(new Date).getFullYear()} 0TickPulse. Built with Docusaurus.`},prism:{theme:l,darkTheme:c}}},u=d;var m=n(61017),p=n(33131),h=n(9764),g=n(92935),x=n(86070);function f(e){let{children:t,...n}=e;const r=(0,i.A)().siteConfig,s={...r.customFields.mathJaxOptions,...n},a=new o.TeX({packages:m.B,...s.tex}),l=new h.SVG(s.svg||void 0);try{const e=p.mathjax.document("",{InputJax:a,OutputJax:l}).convert(t.toString(),{});return(0,x.jsx)("div",{dangerouslySetInnerHTML:{__html:e.outerHTML}})}catch(c){console.log(`Error in MathJax: ${c}`,{newOptions:s,siteConfig:r.customFields.mathJaxOptions,config:u.customFields.mathJaxOptions,eq:(0,g.isEqual)(r.customFields.mathJaxOptions,u.customFields.mathJaxOptions)})}return(0,x.jsx)("div",{})}},60419:(e,t,n)=>{"use strict";n.d(t,{i:()=>s});var i=n(78303),o=n(92856),r=n(86070);function s(e){let{yvar:t="y",xvar:n="x"}=void 0===e?{}:e;const s=e=>.2*Math.pow(e,2),a=(0,i.ET)([3,s(3)],{constrain:e=>{let[t,n]=e;return[t,s(t)]}}),l=(0,i.ET)([4,s(4)],{constrain:e=>{let[t,n]=e;return[t,s(t)]}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Ez,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,r.jsx)(i.E$.Cartesian,{}),(0,r.jsx)(i.Kl.OfX,{y:e=>.2*Math.pow(e,2)}),(0,r.jsx)(i.Kl.OfX,{y:e=>s(a.point[0])+(e-a.point[0])*(s(l.point[0])-s(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,r.jsxs)(i.dL,{translate:[-.75,.75],children:[(0,r.jsx)(i.PC,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,r.jsx)(i.PC,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,r.jsx)(i.N1.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,r.jsx)(i.N1.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,r.jsx)(i.N1.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,r.jsx)(i.N1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,r.jsx)(i.Mi,{tail:[a.point[0],0],tip:[l.point[0],0],color:i.Sx.green}),(0,r.jsx)(i.PC,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,r.jsx)(i.Mi,{tail:[l.point[0],a.point[1]],tip:l.point,color:i.Sx.yellow}),(0,r.jsx)(i.PC,{tex:String.raw`\Delta ${t} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,r.jsx)(o.A,{children:String.raw`
                \begin{align}
                    \text{Slope} &= \frac{\Delta ${t}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{align}
            `})]})}},1601:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var i=n(86070);var o=n(30758);const r={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function s(e){let{children:t,triggerText:n,color:s="var(--ifm-color-primary)",href:a}=e;const[l,c]=(0,o.useState)(!1);return(0,i.jsxs)("span",{className:`${r["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${r.trigger}`,style:{color:s,borderColor:s},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:a?(0,i.jsxs)("a",{href:a,className:`${r["trigger-link"]}`,style:{color:s},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${r["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${r["trigger-text"]}`,children:n})}),t&&l&&(0,i.jsx)("div",{className:`${r.content}`,children:t})]})}var a=n(22453),l=n(60419),c=n(78303),d=n(3029),u=n.n(d);var m=n(38098);function p(e){let{domain:t,minDepth:n,maxDepth:i,threshold:o,fn:r,error:s,onPoint:a,lerp:l}=e;const[c,d]=t;a(c,r(c)),function e(t,c,d,u,m){const p=function(e,t){const n=43758.5453*Math.sin(12.9898*e+78.233*t);return.4+.2*(n-Math.floor(n))}(t,c),h=t+(c-t)*p,g=r(h);function x(){e(t,h,d+1,u,g),a(h,g),e(h,c,d+1,g,m)}if(d<n)x();else if(d<i){const e=l(u,m,p);s(g,e)>o&&x()}}(c,d,0,r(c),r(d)),a(d,r(d))}function h(e,t,n){const i=[];for(let o=e;o<=t;o+=n)i.push(o);return i}function g(e,t){const n=t[0],i=t[1],o=t[2],r=(s=n,m.UPj([[1,0,0],[0,m.gnS(s),-m.F8e(s)],[0,m.F8e(s),m.gnS(s)]]));var s;const a=function(e){return m.UPj([[m.gnS(e),0,m.F8e(e)],[0,1,0],[-m.F8e(e),0,m.gnS(e)]])}(i),l=function(e){return m.UPj([[m.gnS(e),-m.F8e(e),0],[m.F8e(e),m.gnS(e),0],[0,0,1]])}(o),c=m.lwT(l,a,r);return m.lwT(c,m.UPj(e)).toArray()}var x=n(66683);const f={...a.A,Angle:function(e){let{at:t,fromRad:n,toRad:o,radius:r=.4,color:s,straightRightAngle:a=!0,forceStraightAngle:l=!1,label:d,labelColor:u=s,labelOffsetMultiplier:m=1.4}=e;const{userTransform:p}=(0,c.Bn)();if(a&&Math.abs(o-n)===Math.PI/2||l){n>o&&([n,o]=[o,n]),o-n>Math.PI&&([n,o]=[o,n]);const e=r/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.dL,{rotate:n,translate:t,children:[(0,i.jsx)(c.N1.Segment,{point1:[e,0],point2:[e,e]}),(0,i.jsx)(c.N1.Segment,{point1:[0,e],point2:[e,e]})]})})}function h(e){return[Math.cos(e)*r+t[0],Math.sin(e)*r+t[1]]}const g=h((n+o)/2);return g[0]=(g[0]-t[0])*m+t[0],g[1]=(g[1]-t[1])*m+t[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.Parametric,{xy:e=>c.t6.transform(h(e),p),t:[n,o],color:s}),d&&(0,i.jsx)(c.PC,{tex:d,at:g,color:u})]})},Boxed:function(e){let{color:t="var(--ifm-font-color-base)",fillOpacity:n=.1,children:o,...r}=e;return(0,i.jsx)("div",{style:{border:`1px solid ${t}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${t}, ${n})`},...r,children:o})},Citation:function(e){let{id:t,url:n,children:o}=e;return n?(0,i.jsx)("a",{href:n,id:t,target:"_blank",children:o}):(0,i.jsx)("p",{id:t,children:o})},Cite:function(e){const t=(0,i.jsxs)(i.Fragment,{children:["Cite: ",e.id,e.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(e.page)?e.page[0]+"-"+e.page[1]:e.page]})]}),n="#"+e.id;return(0,i.jsx)(s,{triggerText:t,href:n})},DerivativeFromLimits:l.i,LinearTransformationVisualizer:function(e){let{ihat:t=[1,0],jhat:n=[0,1]}=e;const o=[t[0],-t[1],n[0],-n[1],0,0],r=(0,i.jsx)(c.E$.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("g",{transform:`matrix(${o.join(" ")})`,style:{"--mafs-line-color":"white"},children:r}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:t,color:(0,x.y)("blue")}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:n,color:(0,x.y)("yellow")})]})},HoverableBox:s,RiemannApproximation:function(e){let{f:t=(e=>e),lb:n=0,ub:o=5,n:r=5,type:s="left",color:a}=e;const l=(o-n)/r,d=u()(n,o,l).map((e=>{let n,i;switch(s){case"left":n=t(e);break;case"right":n=t(e+l);break;case"middle":n=t(e+l/2);break;case"trapezoidal":n=(t(e)+t(e+l))/2}let o=[[e,0],[e+l,0],[e+l,n],[e,n]];return i=l*n,"trapezoidal"===s&&(o=[[e,0],[e+l,0],[e+l,t(e+l)],[e,t(e)]],i=l*(t(e)+t(e+l))/2),{polygon:o,area:l*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.OfX,{y:t,color:a}),d.map(((e,t)=>{let{polygon:n}=e;return(0,i.jsx)(c.tS,{points:n,color:a},t)}))]})},ThreeDTest:function(){const e=[1,2,3],[t,n]=(0,o.useState)([0,Math.PI/4,Math.PI/4]);function r(e,n){void 0===n&&(n=t);const i=g(e,n);return[i[0],i[1]]}const s=(e,t)=>Math.sin(e)+Math.cos(t),a=(0,i.jsxs)(c.Ez,{pan:!1,children:[(0,i.jsx)(c.N1.Segment,{point1:r([-10,0,0]),point2:r([10,0,0]),color:c.Sx.red}),(0,i.jsx)(c.N1.Segment,{point1:r([0,-10,0]),point2:r([0,10,0]),color:c.Sx.green}),(0,i.jsx)(c.N1.Segment,{point1:r([0,0,-10]),point2:r([0,0,10]),color:c.Sx.blue}),(0,i.jsx)(c.Mi,{tail:r([0,0,0]),tip:r(e)}),(0,i.jsx)(c.Mi,{tail:r([0,0,0]),tip:r([e[0],0,0])}),(0,i.jsx)(c.Mi,{tail:r([e[0],0,0]),tip:r([e[0],e[1],0])}),(0,i.jsx)(c.Mi,{tail:r([e[0],e[1],0]),tip:r(e)}),h(-10,10,.25).map((e=>{const n=o.useMemo((()=>function(e,t,n,i,o){let r="M ";return p({fn:e,error:(e,t)=>c.t6.squareDist(e,t),onPoint:(e,t)=>{let[n,i]=t;Number.isFinite(n)&&Number.isFinite(i)&&(r+=`${n} ${i} L `)},lerp:(e,t,n)=>c.t6.lerp(e,t,n),domain:t,minDepth:n,maxDepth:i,threshold:o}),r.substring(0,r.length-2)}((t=>r([t,e,s(t,e)])),[-10,10],4,10,.01)),[e,s,t]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:e=>{const i=[e.clientX,e.clientY],o=t,r=e=>{const t=[e.clientX-i[0],e.clientY-i[1]];n([o[0]+.01*t[1],o[1]+.01*t[0],o[2]])},s=()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},children:a})}}},66683:(e,t,n)=>{"use strict";n.d(t,{y:()=>o});const i={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};function o(e){return i[e]}},85222:()=>{}}]);