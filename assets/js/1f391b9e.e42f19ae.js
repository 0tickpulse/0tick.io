(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[6061],{29411:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>m});n(30758);var i=n(13526),r=n(24905),o=n(68677),s=n(41825),a=n(27464),l=n(52685),c=n(34792),d=n(39649);const u={mdxPageWrapper:"mdxPageWrapper_y3q_"};var p=n(86070);function m(e){const{content:t}=e,{metadata:{title:n,editUrl:m,description:x,frontMatter:g,unlisted:h,lastUpdatedBy:f,lastUpdatedAt:v},assets:j}=t,{keywords:b,wrapperClassName:y,hide_table_of_contents:A}=g,N=j.image??g.image,L=!!(m||v||f);return(0,p.jsx)(r.e3,{className:(0,i.A)(y??o.G.wrapper.mdxPages,o.G.page.mdxPage),children:(0,p.jsxs)(s.A,{children:[(0,p.jsx)(r.be,{title:n,description:x,keywords:b,image:N}),(0,p.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,p.jsxs)("div",{className:(0,i.A)("row",u.mdxPageWrapper),children:[(0,p.jsxs)("div",{className:(0,i.A)("col",!A&&"col--8"),children:[h&&(0,p.jsx)(c.A,{}),(0,p.jsx)("article",{children:(0,p.jsx)(a.A,{children:(0,p.jsx)(t,{})})}),L&&(0,p.jsx)(d.A,{className:(0,i.A)("margin-top--sm",o.G.pages.pageFooterEditMetaRow),editUrl:m,lastUpdatedAt:v,lastUpdatedBy:f})]}),!A&&t.toc.length>0&&(0,p.jsx)("div",{className:"col col--2",children:(0,p.jsx)(l.A,{toc:t.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},52685:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(30758);var i=n(13526),r=n(22910);const o={tableOfContents:"tableOfContents_pqxj",docItemContainer:"docItemContainer_s_e5"};var s=n(86070);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,s.jsx)(r.A,{...n,linkClassName:a,linkActiveClassName:l})})}},22910:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});var i=n(30758),r=n(37092);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):i.push(r)})),i}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function a(e){const t=e.getBoundingClientRect();return t.top===t.bottom?a(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>a(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(a(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:s}=e;function a(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),a=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let r=t;r<=n;r+=1)i.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:s}),c=l(a,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,n])}var u=n(92285),p=n(86070);function m(e){let{toc:t,className:n,linkClassName:i,isChild:r}=e;return t.length?(0,p.jsx)("ul",{className:r?void 0:n,children:t.map((e=>(0,p.jsxs)("li",{children:[(0,p.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,p.jsx)(m,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const x=i.memo(m);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...m}=e;const g=(0,r.p)(),h=c??g.tableOfContents.minHeadingLevel,f=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,i.useMemo)((()=>s({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:h,maxHeadingLevel:f});return d((0,i.useMemo)((()=>{if(a&&l)return{linkClassName:a,linkActiveClassName:l,minHeadingLevel:h,maxHeadingLevel:f}}),[a,l,h,f])),(0,p.jsx)(x,{toc:v,className:n,linkClassName:a,...m})}},34792:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});n(30758);var i=n(13526),r=n(30476),o=n(10307),s=n(86070);function a(){return(0,s.jsx)(r.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,s.jsx)(r.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(o.A,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(68677),u=n(90149);function p(e){let{className:t}=e;return(0,s.jsx)(u.A,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,s.jsx)(l,{})})}function m(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(p,{...e})]})}},60419:(e,t,n)=>{"use strict";n.d(t,{i:()=>s});var i=n(78303),r=n(93338),o=n(86070);function s(e){let{yvar:t="y",xvar:n="x"}=void 0===e?{}:e;const s=e=>.2*Math.pow(e,2),a=(0,i.ET)([3,s(3)],{constrain:e=>{let[t,n]=e;return[t,s(t)]}}),l=(0,i.ET)([4,s(4)],{constrain:e=>{let[t,n]=e;return[t,s(t)]}});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.Ez,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,o.jsx)(i.E$.Cartesian,{}),(0,o.jsx)(i.Kl.OfX,{y:e=>.2*Math.pow(e,2)}),(0,o.jsx)(i.Kl.OfX,{y:e=>s(a.point[0])+(e-a.point[0])*(s(l.point[0])-s(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,o.jsxs)(i.dL,{translate:[-.75,.75],children:[(0,o.jsx)(i.PC,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,o.jsx)(i.PC,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,o.jsx)(i.N1.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,o.jsx)(i.N1.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,o.jsx)(i.N1.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,o.jsx)(i.N1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,o.jsx)(i.Mi,{tail:[a.point[0],0],tip:[l.point[0],0],color:i.Sx.green}),(0,o.jsx)(i.PC,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,o.jsx)(i.Mi,{tail:[l.point[0],a.point[1]],tip:l.point,color:i.Sx.yellow}),(0,o.jsx)(i.PC,{tex:String.raw`\Delta ${t} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,o.jsx)(r.A,{children:String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${t}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{split}
            `})]})}},1601:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var i=n(86070);var r=n(30758);const o={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function s(e){let{children:t,triggerText:n,color:s="var(--ifm-color-primary)",href:a}=e;const[l,c]=(0,r.useState)(!1);return(0,i.jsxs)("span",{className:`${o["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${o.trigger}`,style:{color:s,borderColor:s},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:a?(0,i.jsxs)("a",{href:a,className:`${o["trigger-link"]}`,style:{color:s},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${o["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${o["trigger-text"]}`,children:n})}),t&&l&&(0,i.jsx)("div",{className:`${o.content}`,children:t})]})}var a=n(22453),l=n(60419),c=n(78303),d=n(3029),u=n.n(d);var p=n(38098);function m(e){let{domain:t,minDepth:n,maxDepth:i,threshold:r,fn:o,error:s,onPoint:a,lerp:l}=e;const[c,d]=t;a(c,o(c)),function e(t,c,d,u,p){const m=function(e,t){const n=43758.5453*Math.sin(12.9898*e+78.233*t);return.4+.2*(n-Math.floor(n))}(t,c),x=t+(c-t)*m,g=o(x);function h(){e(t,x,d+1,u,g),a(x,g),e(x,c,d+1,g,p)}if(d<n)h();else if(d<i){const e=l(u,p,m);s(g,e)>r&&h()}}(c,d,0,o(c),o(d)),a(d,o(d))}function x(e,t,n){const i=[];for(let r=e;r<=t;r+=n)i.push(r);return i}function g(e,t){const n=t[0],i=t[1],r=t[2],o=(s=n,p.UPj([[1,0,0],[0,p.gnS(s),-p.F8e(s)],[0,p.F8e(s),p.gnS(s)]]));var s;const a=function(e){return p.UPj([[p.gnS(e),0,p.F8e(e)],[0,1,0],[-p.F8e(e),0,p.gnS(e)]])}(i),l=function(e){return p.UPj([[p.gnS(e),-p.F8e(e),0],[p.F8e(e),p.gnS(e),0],[0,0,1]])}(r),c=p.lwT(l,a,o);return p.lwT(c,p.UPj(e)).toArray()}var h=n(66683);const f={...a.A,Angle:function(e){let{at:t,fromRad:n,toRad:r,radius:o=.4,color:s,straightRightAngle:a=!0,forceStraightAngle:l=!1,label:d,labelColor:u=s,labelOffsetMultiplier:p=1.4}=e;const{userTransform:m}=(0,c.Bn)();if(a&&Math.abs(r-n)===Math.PI/2||l){n>r&&([n,r]=[r,n]),r-n>Math.PI&&([n,r]=[r,n]);const e=o/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.dL,{rotate:n,translate:t,children:[(0,i.jsx)(c.N1.Segment,{point1:[e,0],point2:[e,e]}),(0,i.jsx)(c.N1.Segment,{point1:[0,e],point2:[e,e]})]})})}function x(e){return[Math.cos(e)*o+t[0],Math.sin(e)*o+t[1]]}const g=x((n+r)/2);return g[0]=(g[0]-t[0])*p+t[0],g[1]=(g[1]-t[1])*p+t[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.Parametric,{xy:e=>c.t6.transform(x(e),m),t:[n,r],color:s}),d&&(0,i.jsx)(c.PC,{tex:d,at:g,color:u})]})},Boxed:function(e){let{color:t="var(--ifm-font-color-base)",fillOpacity:n=.1,children:r,...o}=e;return(0,i.jsx)("div",{style:{border:`1px solid ${t}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${t}, ${n})`},...o,children:r})},Citation:function(e){let{id:t,url:n,children:r}=e;return n?(0,i.jsx)("a",{href:n,id:t,target:"_blank",children:r}):(0,i.jsx)("p",{id:t,children:r})},Cite:function(e){const t=(0,i.jsxs)(i.Fragment,{children:["Cite: ",e.id,e.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(e.page)?e.page[0]+"-"+e.page[1]:e.page]})]}),n="#"+e.id;return(0,i.jsx)(s,{triggerText:t,href:n})},DerivativeFromLimits:l.i,LinearTransformationVisualizer:function(e){let{ihat:t=[1,0],jhat:n=[0,1]}=e;const r=[t[0],-t[1],n[0],-n[1],0,0],o=(0,i.jsx)(c.E$.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("g",{transform:`matrix(${r.join(" ")})`,style:{"--mafs-line-color":"white"},children:o}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:t,color:(0,h.y)("blue")}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:n,color:(0,h.y)("yellow")})]})},HoverableBox:s,RiemannApproximation:function(e){let{f:t=(e=>e),lb:n=0,ub:r=5,n:o=5,type:s="left",color:a}=e;const l=(r-n)/o,d=u()(n,r,l).map((e=>{let n,i;switch(s){case"left":n=t(e);break;case"right":n=t(e+l);break;case"middle":n=t(e+l/2);break;case"trapezoidal":n=(t(e)+t(e+l))/2}let r=[[e,0],[e+l,0],[e+l,n],[e,n]];return i=l*n,"trapezoidal"===s&&(r=[[e,0],[e+l,0],[e+l,t(e+l)],[e,t(e)]],i=l*(t(e)+t(e+l))/2),{polygon:r,area:l*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.OfX,{y:t,color:a}),d.map(((e,t)=>{let{polygon:n}=e;return(0,i.jsx)(c.tS,{points:n,color:a},t)}))]})},ThreeDTest:function(){const e=[1,2,3],[t,n]=(0,r.useState)([0,Math.PI/4,Math.PI/4]);function o(e,n){void 0===n&&(n=t);const i=g(e,n);return[i[0],i[1]]}const s=(e,t)=>Math.sin(e)+Math.cos(t),a=(0,i.jsxs)(c.Ez,{pan:!1,children:[(0,i.jsx)(c.N1.Segment,{point1:o([-10,0,0]),point2:o([10,0,0]),color:c.Sx.red}),(0,i.jsx)(c.N1.Segment,{point1:o([0,-10,0]),point2:o([0,10,0]),color:c.Sx.green}),(0,i.jsx)(c.N1.Segment,{point1:o([0,0,-10]),point2:o([0,0,10]),color:c.Sx.blue}),(0,i.jsx)(c.Mi,{tail:o([0,0,0]),tip:o(e)}),(0,i.jsx)(c.Mi,{tail:o([0,0,0]),tip:o([e[0],0,0])}),(0,i.jsx)(c.Mi,{tail:o([e[0],0,0]),tip:o([e[0],e[1],0])}),(0,i.jsx)(c.Mi,{tail:o([e[0],e[1],0]),tip:o(e)}),x(-10,10,.25).map((e=>{const n=r.useMemo((()=>function(e,t,n,i,r){let o="M ";return m({fn:e,error:(e,t)=>c.t6.squareDist(e,t),onPoint:(e,t)=>{let[n,i]=t;Number.isFinite(n)&&Number.isFinite(i)&&(o+=`${n} ${i} L `)},lerp:(e,t,n)=>c.t6.lerp(e,t,n),domain:t,minDepth:n,maxDepth:i,threshold:r}),o.substring(0,o.length-2)}((t=>o([t,e,s(t,e)])),[-10,10],4,10,.01)),[e,s,t]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:e=>{const i=[e.clientX,e.clientY],r=t,o=e=>{const t=[e.clientX-i[0],e.clientY-i[1]];n([r[0]+.01*t[1],r[1]+.01*t[0],r[2]])},s=()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",o),window.addEventListener("mouseup",s)},children:a})}}},66683:(e,t,n)=>{"use strict";n.d(t,{y:()=>r});const i={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};function r(e){return i[e]}},85222:()=>{}}]);