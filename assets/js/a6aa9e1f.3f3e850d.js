(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[7643],{21095:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>F});n(30758);var i=n(13526),o=n(63961),r=n(24905),s=n(68677),a=n(81476),l=n(30476),c=n(78472),p=n(86070);function d(t){const{metadata:e}=t,{previousPage:n,nextPage:i}=e;return(0,p.jsxs)("nav",{className:"pagination-nav","aria-label":(0,l.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,p.jsx)(c.A,{permalink:n,title:(0,p.jsx)(l.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,p.jsx)(c.A,{permalink:i,title:(0,p.jsx)(l.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}var x=n(11349),g=n(26381),u=n(46049);function h(t){let{items:e,component:n=u.A}=t;return(0,p.jsx)(p.Fragment,{children:e.map((t=>{let{content:e}=t;return(0,p.jsx)(g.i,{content:e,children:(0,p.jsx)(n,{children:(0,p.jsx)(e,{})})},e.metadata.permalink)}))})}var m=n(10307),j=n(4615);function f(t){const e=(0,j.k)(t);return(0,p.jsx)(m.A,{children:(0,p.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}function b(t){const{metadata:e}=t,{siteConfig:{title:n}}=(0,o.A)(),{blogDescription:i,blogTitle:s,permalink:a}=e,l="/"===a?n:s;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.be,{title:l,description:i}),(0,p.jsx)(x.A,{tag:"blog_posts_list"})]})}function v(t){const{metadata:e,items:n,sidebar:i}=t;return(0,p.jsxs)(a.A,{sidebar:i,children:[(0,p.jsx)(h,{items:n}),(0,p.jsx)(d,{metadata:e})]})}function F(t){return(0,p.jsxs)(r.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogListPage),children:[(0,p.jsx)(b,{...t}),(0,p.jsx)(f,{...t}),(0,p.jsx)(v,{...t})]})}},60419:(t,e,n)=>{"use strict";n.d(e,{i:()=>s});var i=n(78303),o=n(93338),r=n(86070);function s(t){let{yvar:e="y",xvar:n="x"}=void 0===t?{}:t;const s=t=>.2*Math.pow(t,2),a=(0,i.ET)([3,s(3)],{constrain:t=>{let[e,n]=t;return[e,s(e)]}}),l=(0,i.ET)([4,s(4)],{constrain:t=>{let[e,n]=t;return[e,s(e)]}});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Ez,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,r.jsx)(i.E$.Cartesian,{}),(0,r.jsx)(i.Kl.OfX,{y:t=>.2*Math.pow(t,2)}),(0,r.jsx)(i.Kl.OfX,{y:t=>s(a.point[0])+(t-a.point[0])*(s(l.point[0])-s(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,r.jsxs)(i.dL,{translate:[-.75,.75],children:[(0,r.jsx)(i.PC,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,r.jsx)(i.PC,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,r.jsx)(i.N1.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,r.jsx)(i.N1.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,r.jsx)(i.N1.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,r.jsx)(i.N1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,r.jsx)(i.Mi,{tail:[a.point[0],0],tip:[l.point[0],0],color:i.Sx.green}),(0,r.jsx)(i.PC,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,r.jsx)(i.Mi,{tail:[l.point[0],a.point[1]],tip:l.point,color:i.Sx.yellow}),(0,r.jsx)(i.PC,{tex:String.raw`\Delta ${e} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,r.jsx)(o.A,{children:String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${e}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{split}
            `})]})}},1601:(t,e,n)=>{"use strict";n.d(e,{A:()=>j});var i=n(86070);var o=n(30758);const r={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function s(t){let{children:e,triggerText:n,color:s="var(--ifm-color-primary)",href:a}=t;const[l,c]=(0,o.useState)(!1);return(0,i.jsxs)("span",{className:`${r["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${r.trigger}`,style:{color:s,borderColor:s},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:a?(0,i.jsxs)("a",{href:a,className:`${r["trigger-link"]}`,style:{color:s},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${r["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${r["trigger-text"]}`,children:n})}),e&&l&&(0,i.jsx)("div",{className:`${r.content}`,children:e})]})}var a=n(22453),l=n(60419),c=n(78303),p=n(3029),d=n.n(p);var x=n(38098);function g(t){let{domain:e,minDepth:n,maxDepth:i,threshold:o,fn:r,error:s,onPoint:a,lerp:l}=t;const[c,p]=e;a(c,r(c)),function t(e,c,p,d,x){const g=function(t,e){const n=43758.5453*Math.sin(12.9898*t+78.233*e);return.4+.2*(n-Math.floor(n))}(e,c),u=e+(c-e)*g,h=r(u);function m(){t(e,u,p+1,d,h),a(u,h),t(u,c,p+1,h,x)}if(p<n)m();else if(p<i){const t=l(d,x,g);s(h,t)>o&&m()}}(c,p,0,r(c),r(p)),a(p,r(p))}function u(t,e,n){const i=[];for(let o=t;o<=e;o+=n)i.push(o);return i}function h(t,e){const n=e[0],i=e[1],o=e[2],r=(s=n,x.UPj([[1,0,0],[0,x.gnS(s),-x.F8e(s)],[0,x.F8e(s),x.gnS(s)]]));var s;const a=function(t){return x.UPj([[x.gnS(t),0,x.F8e(t)],[0,1,0],[-x.F8e(t),0,x.gnS(t)]])}(i),l=function(t){return x.UPj([[x.gnS(t),-x.F8e(t),0],[x.F8e(t),x.gnS(t),0],[0,0,1]])}(o),c=x.lwT(l,a,r);return x.lwT(c,x.UPj(t)).toArray()}var m=n(66683);const j={...a.A,Angle:function(t){let{at:e,fromRad:n,toRad:o,radius:r=.4,color:s,straightRightAngle:a=!0,forceStraightAngle:l=!1,label:p,labelColor:d=s,labelOffsetMultiplier:x=1.4}=t;const{userTransform:g}=(0,c.Bn)();if(a&&Math.abs(o-n)===Math.PI/2||l){n>o&&([n,o]=[o,n]),o-n>Math.PI&&([n,o]=[o,n]);const t=r/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(c.dL,{rotate:n,translate:e,children:[(0,i.jsx)(c.N1.Segment,{point1:[t,0],point2:[t,t]}),(0,i.jsx)(c.N1.Segment,{point1:[0,t],point2:[t,t]})]})})}function u(t){return[Math.cos(t)*r+e[0],Math.sin(t)*r+e[1]]}const h=u((n+o)/2);return h[0]=(h[0]-e[0])*x+e[0],h[1]=(h[1]-e[1])*x+e[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.Parametric,{xy:t=>c.t6.transform(u(t),g),t:[n,o],color:s}),p&&(0,i.jsx)(c.PC,{tex:p,at:h,color:d})]})},Boxed:function(t){let{color:e="var(--ifm-font-color-base)",fillOpacity:n=.1,children:o,...r}=t;return(0,i.jsx)("div",{style:{border:`1px solid ${e}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${e}, ${n})`},...r,children:o})},Citation:function(t){let{id:e,url:n,children:o}=t;return n?(0,i.jsx)("a",{href:n,id:e,target:"_blank",children:o}):(0,i.jsx)("p",{id:e,children:o})},Cite:function(t){const e=(0,i.jsxs)(i.Fragment,{children:["Cite: ",t.id,t.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(t.page)?t.page[0]+"-"+t.page[1]:t.page]})]}),n="#"+t.id;return(0,i.jsx)(s,{triggerText:e,href:n})},DerivativeFromLimits:l.i,LinearTransformationVisualizer:function(t){let{ihat:e=[1,0],jhat:n=[0,1]}=t;const o=[e[0],-e[1],n[0],-n[1],0,0],r=(0,i.jsx)(c.E$.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("g",{transform:`matrix(${o.join(" ")})`,style:{"--mafs-line-color":"white"},children:r}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:e,color:(0,m.y)("blue")}),(0,i.jsx)(c.Mi,{tail:[0,0],tip:n,color:(0,m.y)("yellow")})]})},HoverableBox:s,RiemannApproximation:function(t){let{f:e=(t=>t),lb:n=0,ub:o=5,n:r=5,type:s="left",color:a}=t;const l=(o-n)/r,p=d()(n,o,l).map((t=>{let n,i;switch(s){case"left":n=e(t);break;case"right":n=e(t+l);break;case"middle":n=e(t+l/2);break;case"trapezoidal":n=(e(t)+e(t+l))/2}let o=[[t,0],[t+l,0],[t+l,n],[t,n]];return i=l*n,"trapezoidal"===s&&(o=[[t,0],[t+l,0],[t+l,e(t+l)],[t,e(t)]],i=l*(e(t)+e(t+l))/2),{polygon:o,area:l*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Kl.OfX,{y:e,color:a}),p.map(((t,e)=>{let{polygon:n}=t;return(0,i.jsx)(c.tS,{points:n,color:a},e)}))]})},ThreeDTest:function(){const t=[1,2,3],[e,n]=(0,o.useState)([0,Math.PI/4,Math.PI/4]);function r(t,n){void 0===n&&(n=e);const i=h(t,n);return[i[0],i[1]]}const s=(t,e)=>Math.sin(t)+Math.cos(e),a=(0,i.jsxs)(c.Ez,{pan:!1,children:[(0,i.jsx)(c.N1.Segment,{point1:r([-10,0,0]),point2:r([10,0,0]),color:c.Sx.red}),(0,i.jsx)(c.N1.Segment,{point1:r([0,-10,0]),point2:r([0,10,0]),color:c.Sx.green}),(0,i.jsx)(c.N1.Segment,{point1:r([0,0,-10]),point2:r([0,0,10]),color:c.Sx.blue}),(0,i.jsx)(c.Mi,{tail:r([0,0,0]),tip:r(t)}),(0,i.jsx)(c.Mi,{tail:r([0,0,0]),tip:r([t[0],0,0])}),(0,i.jsx)(c.Mi,{tail:r([t[0],0,0]),tip:r([t[0],t[1],0])}),(0,i.jsx)(c.Mi,{tail:r([t[0],t[1],0]),tip:r(t)}),u(-10,10,.25).map((t=>{const n=o.useMemo((()=>function(t,e,n,i,o){let r="M ";return g({fn:t,error:(t,e)=>c.t6.squareDist(t,e),onPoint:(t,e)=>{let[n,i]=e;Number.isFinite(n)&&Number.isFinite(i)&&(r+=`${n} ${i} L `)},lerp:(t,e,n)=>c.t6.lerp(t,e,n),domain:e,minDepth:n,maxDepth:i,threshold:o}),r.substring(0,r.length-2)}((e=>r([e,t,s(e,t)])),[-10,10],4,10,.01)),[t,s,e]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:t=>{const i=[t.clientX,t.clientY],o=e,r=t=>{const e=[t.clientX-i[0],t.clientY-i[1]];n([o[0]+.01*e[1],o[1]+.01*e[0],o[2]])},s=()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},children:a})}}},66683:(t,e,n)=>{"use strict";n.d(e,{y:()=>o});const i={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};function o(t){return i[t]}},85222:()=>{}}]);