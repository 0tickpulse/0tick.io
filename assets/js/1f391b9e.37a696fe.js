(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[6061,8401],{29411:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>u});n(30758);var i=n(13526),r=n(24905),s=n(68677),o=n(41825),a=n(27464),l=n(52685),c=n(34792),d=n(39649);const x={mdxPageWrapper:"mdxPageWrapper_y3q_"};var p=n(86070);function u(t){const{content:e}=t,{metadata:{title:n,editUrl:u,description:h,frontMatter:m,unlisted:g,lastUpdatedBy:j,lastUpdatedAt:f},assets:v}=e,{keywords:b,wrapperClassName:y,hide_table_of_contents:A}=m,_=v.image??m.image,w=!!(u||f||j);return(0,p.jsx)(r.e3,{className:(0,i.A)(y??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,p.jsxs)(o.A,{children:[(0,p.jsx)(r.be,{title:n,description:h,keywords:b,image:_}),(0,p.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,p.jsxs)("div",{className:(0,i.A)("row",x.mdxPageWrapper),children:[(0,p.jsxs)("div",{className:(0,i.A)("col",!A&&"col--8"),children:[g&&(0,p.jsx)(c.A,{}),(0,p.jsx)("article",{children:(0,p.jsx)(a.A,{children:(0,p.jsx)(e,{})})}),w&&(0,p.jsx)(d.A,{className:(0,i.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:u,lastUpdatedAt:f,lastUpdatedBy:j})]}),!A&&e.toc.length>0&&(0,p.jsx)("div",{className:"col col--2",children:(0,p.jsx)(l.A,{toc:e.toc,minHeadingLevel:m.toc_min_heading_level,maxHeadingLevel:m.toc_max_heading_level})})]})})]})})}},52685:(t,e,n)=>{"use strict";n.d(e,{A:()=>c});n(30758);var i=n(13526),r=n(22910);const s={tableOfContents:"tableOfContents_pqxj",docItemContainer:"docItemContainer_s_e5"};var o=n(86070);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(t){let{className:e,...n}=t;return(0,o.jsx)("div",{className:(0,i.A)(s.tableOfContents,"thin-scrollbar",e),children:(0,o.jsx)(r.A,{...n,linkClassName:a,linkActiveClassName:l})})}},34792:(t,e,n)=>{"use strict";n.d(e,{A:()=>u});n(30758);var i=n(13526),r=n(30476),s=n(10307),o=n(86070);function a(){return(0,o.jsx)(r.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,o.jsx)(r.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(s.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(68677),x=n(90149);function p(t){let{className:e}=t;return(0,o.jsx)(x.A,{type:"caution",title:(0,o.jsx)(a,{}),className:(0,i.A)(e,d.G.common.unlistedBanner),children:(0,o.jsx)(l,{})})}function u(t){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(p,{...t})]})}},60419:(t,e,n)=>{"use strict";n.d(e,{i:()=>o});var i=n(78303),r=n(93338),s=n(86070);function o(t){let{yvar:e="y",xvar:n="x"}=void 0===t?{}:t;const o=t=>.2*Math.pow(t,2),a=(0,i.ET)([3,o(3)],{constrain:t=>{let[e,n]=t;return[e,o(e)]}}),l=(0,i.ET)([4,o(4)],{constrain:t=>{let[e,n]=t;return[e,o(e)]}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.Ez,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,s.jsx)(i.E$.Cartesian,{}),(0,s.jsx)(i.Kl.OfX,{y:t=>.2*Math.pow(t,2)}),(0,s.jsx)(i.Kl.OfX,{y:t=>o(a.point[0])+(t-a.point[0])*(o(l.point[0])-o(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,s.jsxs)(i.dL,{translate:[-.75,.75],children:[(0,s.jsx)(i.PC,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,s.jsx)(i.PC,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,s.jsx)(i.N1.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,s.jsx)(i.N1.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,s.jsx)(i.N1.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,s.jsx)(i.N1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,s.jsx)(i.Mi,{tail:[a.point[0],0],tip:[l.point[0],0],color:i.Sx.green}),(0,s.jsx)(i.PC,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,s.jsx)(i.Mi,{tail:[l.point[0],a.point[1]],tip:l.point,color:i.Sx.yellow}),(0,s.jsx)(i.PC,{tex:String.raw`\Delta ${e} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,s.jsx)(r.A,{children:String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${e}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{split}
            `})]})}},13931:(t,e,n)=>{"use strict";n.d(e,{A:()=>k});var i=n(86070);var r=n(30758);const s={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function o(t){let{children:e,triggerText:n,color:o="var(--ifm-color-primary)",href:a}=t;const[l,c]=(0,r.useState)(!1);return(0,i.jsxs)("span",{className:`${s["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${s.trigger}`,style:{color:o,borderColor:o},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:a?(0,i.jsxs)("a",{href:a,className:`${s["trigger-link"]}`,style:{color:o},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${s["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${s["trigger-text"]}`,children:n})}),e&&l&&(0,i.jsx)("div",{className:`${s.content}`,children:e})]})}var a=n(60419),l=n(78303),c=n(3029),d=n.n(c);var x=n(38098);function p(t){let{domain:e,minDepth:n,maxDepth:i,threshold:r,fn:s,error:o,onPoint:a,lerp:l}=t;const[c,d]=e;a(c,s(c)),function t(e,c,d,x,p){const u=function(t,e){const n=43758.5453*Math.sin(12.9898*t+78.233*e);return.4+.2*(n-Math.floor(n))}(e,c),h=e+(c-e)*u,m=s(h);function g(){t(e,h,d+1,x,m),a(h,m),t(h,c,d+1,m,p)}if(d<n)g();else if(d<i){const t=l(x,p,u);o(m,t)>r&&g()}}(c,d,0,s(c),s(d)),a(d,s(d))}function u(t,e,n){const i=[];for(let r=t;r<=e;r+=n)i.push(r);return i}function h(t,e){const n=e[0],i=e[1],r=e[2],s=(o=n,x.UPj([[1,0,0],[0,x.gnS(o),-x.F8e(o)],[0,x.F8e(o),x.gnS(o)]]));var o;const a=function(t){return x.UPj([[x.gnS(t),0,x.F8e(t)],[0,1,0],[-x.F8e(t),0,x.gnS(t)]])}(i),l=function(t){return x.UPj([[x.gnS(t),-x.F8e(t),0],[x.F8e(t),x.gnS(t),0],[0,0,1]])}(r),c=x.lwT(l,a,s);return x.lwT(c,x.UPj(t)).toArray()}var m=n(22453),g=n(93338);var j=n(60151),f=n(86961),v=n(49398);const b={options:{plugins:["core","controls","cursor"],controls:{klass:f.N}},containerStyle:{height:"500px"}},y=t=>{const{children:e,containerId:n,containerClass:s,containerStyle:o,...a}={...b,...t},[l,c]=(0,r.useState)(null),d=(0,r.useCallback)((t=>{t&&(console.log("Setting selection"),t.three.renderer.setClearColor(new v.Q1f(0),1))}),[]);return(0,i.jsx)("div",{ref:c,id:n,className:s,style:o,children:l&&(0,i.jsx)(j.Mathbox,{ref:d,container:l,...a,children:e})})};var A=n(66683),_=n(4710);const w={ihat:[1,0],jhat:[0,1]};const k={...m.A,Angle:function(t){let{at:e,fromRad:n,toRad:r,radius:s=.4,color:o,straightRightAngle:a=!0,forceStraightAngle:c=!1,label:d,labelColor:x=o,labelOffsetMultiplier:p=1.4}=t;const{userTransform:u}=(0,l.Bn)();if(a&&Math.abs(r-n)===Math.PI/2||c){n>r&&([n,r]=[r,n]),r-n>Math.PI&&([n,r]=[r,n]);const t=s/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(l.dL,{rotate:n,translate:e,children:[(0,i.jsx)(l.N1.Segment,{point1:[t,0],point2:[t,t]}),(0,i.jsx)(l.N1.Segment,{point1:[0,t],point2:[t,t]})]})})}function h(t){return[Math.cos(t)*s+e[0],Math.sin(t)*s+e[1]]}const m=h((n+r)/2);return m[0]=(m[0]-e[0])*p+e[0],m[1]=(m[1]-e[1])*p+e[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Kl.Parametric,{xy:t=>l.t6.transform(h(t),u),t:[n,r],color:o}),d&&(0,i.jsx)(l.PC,{tex:d,at:m,color:x})]})},Boxed:function(t){let{color:e="var(--ifm-font-color-base)",fillOpacity:n=.1,children:r,...s}=t;return(0,i.jsx)("div",{style:{border:`1px solid ${e}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${e}, ${n})`},...s,children:r})},Citation:function(t){let{id:e,url:n,children:r}=t;return n?(0,i.jsx)("a",{href:n,id:e,target:"_blank",children:r}):(0,i.jsx)("p",{id:e,children:r})},Cite:function(t){const e=(0,i.jsxs)(i.Fragment,{children:["Cite: ",t.id,t.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(t.page)?t.page[0]+"-"+t.page[1]:t.page]})]}),n="#"+t.id;return(0,i.jsx)(o,{triggerText:e,href:n})},DerivativeFromLimits:a.i,LinearTransformationVisualizer:function(t){let{from:e=w,to:n,mafsProps:s,transformedItems:o,children:a,onTChange:c}=t;const{time:d,start:x,stop:p}=(0,l.XA)({endTime:2}),u=(0,_.ME)(d,0,1,2),h=l.t6.lerp(e.ihat,n.ihat,u),m=l.t6.lerp(e.jhat,n.jhat,u),[g,j]=(0,r.useState)(!1),[f,v]=(0,r.useState)(!1);function b(){v(!0),g?p():x(),j(!g)}(0,r.useEffect)((()=>{setTimeout((()=>{f&&!g&&b()}),1e3)}),[]),(0,r.useEffect)((()=>{c&&c(u)}),[u]);const y=[h[0],m[0],0,h[1],m[1],0],k=`matrix(${h[0]} ${-h[1]} ${m[0]} ${-m[1]} 0 0)`;return console.log({ihat:h,jhat:m,mafsMatrix:y,svgMatrix:k,evaluatedIHat:l.t6.transform([1,0],y)}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(l.Ez,{...s,children:[(0,i.jsx)(l.E$.Cartesian,{}),(0,i.jsx)("g",{transform:k,children:(0,i.jsx)("g",{style:{"--mafs-line-color":"#A0A0A0"},children:(0,i.jsx)(l.E$.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}})})}),(0,i.jsx)(l.dL,{matrix:y,children:o}),(0,i.jsx)(l.Mi,{tail:[0,0],tip:h,color:(0,A.yW)("blue")}),(0,i.jsx)(l.Mi,{tail:[0,0],tip:m,color:(0,A.yW)("yellow")}),a]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(g?"button--danger":"button--success"),onClick:b,children:g?"Reset":"Start"})})]})},HoverableBox:o,RiemannApproximation:function(t){let{f:e=(t=>t),lb:n=0,ub:r=5,n:s=5,type:o="left",color:a}=t;const c=(r-n)/s,x=d()(n,r,c).map((t=>{let n,i;switch(o){case"left":n=e(t);break;case"right":n=e(t+c);break;case"middle":n=e(t+c/2);break;case"trapezoidal":n=(e(t)+e(t+c))/2}let r=[[t,0],[t+c,0],[t+c,n],[t,n]];return i=c*n,"trapezoidal"===o&&(r=[[t,0],[t+c,0],[t+c,e(t+c)],[t,e(t)]],i=c*(e(t)+e(t+c))/2),{polygon:r,area:c*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Kl.OfX,{y:e,color:a}),x.map(((t,e)=>{let{polygon:n}=t;return(0,i.jsx)(l.tS,{points:n,color:a},e)}))]})},ThreeDTest:function(){const t=[1,2,3],[e,n]=(0,r.useState)([0,Math.PI/4,Math.PI/4]);function s(t,n){void 0===n&&(n=e);const i=h(t,n);return[i[0],i[1]]}const o=(t,e)=>Math.sin(t)+Math.cos(e),a=(0,i.jsxs)(l.Ez,{pan:!1,children:[(0,i.jsx)(l.N1.Segment,{point1:s([-10,0,0]),point2:s([10,0,0]),color:l.Sx.red}),(0,i.jsx)(l.N1.Segment,{point1:s([0,-10,0]),point2:s([0,10,0]),color:l.Sx.green}),(0,i.jsx)(l.N1.Segment,{point1:s([0,0,-10]),point2:s([0,0,10]),color:l.Sx.blue}),(0,i.jsx)(l.Mi,{tail:s([0,0,0]),tip:s(t)}),(0,i.jsx)(l.Mi,{tail:s([0,0,0]),tip:s([t[0],0,0])}),(0,i.jsx)(l.Mi,{tail:s([t[0],0,0]),tip:s([t[0],t[1],0])}),(0,i.jsx)(l.Mi,{tail:s([t[0],t[1],0]),tip:s(t)}),u(-10,10,.25).map((t=>{const n=r.useMemo((()=>function(t,e,n,i,r){let s="M ";return p({fn:t,error:(t,e)=>l.t6.squareDist(t,e),onPoint:(t,e)=>{let[n,i]=e;Number.isFinite(n)&&Number.isFinite(i)&&(s+=`${n} ${i} L `)},lerp:(t,e,n)=>l.t6.lerp(t,e,n),domain:e,minDepth:n,maxDepth:i,threshold:r}),s.substring(0,s.length-2)}((e=>s([e,t,o(e,t)])),[-10,10],4,10,.01)),[t,o,e]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:t=>{const i=[t.clientX,t.clientY],r=e,s=t=>{const e=[t.clientX-i[0],t.clientY-i[1]];n([r[0]+.01*e[1],r[1]+.01*e[0],r[2]])},o=()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",s),window.addEventListener("mouseup",o)},children:a})},BetterMafsVectorField:function(){const t=(0,r.useCallback)((t=>{console.log({canvas:t,constructor:t.constructor.name})}),[]);return(0,i.jsx)("canvas",{ref:t,height:100,width:100})},ParametricSurfaceTransformVisualizer:function(t){let{showPoint:e=null,showLines:n=[],showNudge:s=!1,fn:o=((t,e)=>[t**2-e**2,e*t,t*e**2-e*t**2])}=t;const{time:a,start:c,stop:d}=(0,l.XA)({endTime:2}),x=(0,_.ME)(a,0,1,2),[p,u]=(0,r.useState)(!1),[h,m]=(0,r.useState)(!1),g=(t,e,n)=>(1-n)*t+n*e,f=(t,e)=>{const n=t,i=e,[r,s,a]=[t,e,0],[l,c,d]=o(n,i);return[g(r,l,x),g(a,d,x),g(s,c,x)]},v=e?f(...e):null;return(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsx)(y,{children:(0,i.jsxs)(j.Cartesian,{scale:[.1,.1,.1],children:[(0,i.jsx)(j.Axis,{axis:"x",range:[-10,10],color:(0,A.yW)("blue")}),(0,i.jsx)(j.Axis,{axis:"y",range:[-10,10],color:(0,A.yW)("green")}),(0,i.jsx)(j.Axis,{axis:"z",range:[-10,10],color:(0,A.yW)("yellow")}),(0,i.jsx)(j.Area,{id:"graph",axes:"xz",expr:(t,e,n)=>{const[i,r,s]=f(e,n);t(i,r,s)},width:64,height:64,channels:3,rangeX:[0,10],rangeY:[0,10]}),(0,i.jsx)(j.Surface,{points:"#graph",color:"#808080",lineX:!0,lineY:!0,opacity:.75,zBias:-1}),v&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Array,{items:1,id:"point",data:[v],channels:3}),(0,i.jsx)(j.Point,{points:"#point",color:(0,A.yW)("blue"),size:10}),(0,i.jsx)(j.Array,{items:2,id:"point_vec",data:[[0,0,0],v],channels:3}),(0,i.jsx)(j.Vector,{end:!0,points:"#point_vec",color:(0,A.yW)("blue")}),n.map((t=>(0,i.jsxs)(j.Group,{children:[(0,i.jsx)(j.Interval,{id:`line_${t}`,expr:(n,i,r,s)=>{const o="x"===t?i:e[0],a="y"===t?i:e[1],[l,c,d]=f(o,a);n(l,c,d)},width:512,range:[-10,10],channels:3}),(0,i.jsx)(j.Line,{points:`#line_${t}`,color:"x"===t?(0,A.yW)("blue"):(0,A.yW)("yellow"),width:5}),s&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.Array,{items:2,id:`line_vec_${t}`,data:[f(e[0],e[1]),"x"===t?f(e[0]+1,e[1]):f(e[0],e[1]+1)],channels:3}),(0,i.jsx)(j.Vector,{end:!0,points:`#line_vec_${t}`,color:(0,A.yW)("green"),width:5,zBias:2})]})]},t)))]})]})})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(p?"button--danger":"button--success"),onClick:function(){m(!0),p?d():c(),u(!p)},children:p?"Reset":"Start"})})]})},MathEquation:g.A,CustomMathbox:y}},66683:(t,e,n)=>{"use strict";n.d(e,{yW:()=>s,QV:()=>o,D7:()=>a});const i={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};var r=n(51359);function s(t){return i[t]}function o(t,e,n){void 0===e&&(e=0),void 0===n&&(n=20);const i=(t-e)/(n-e),r=Math.max(0,241/360*(1-i)),[s,o,a]=function(t,e,n){let i,r,s,o,a,l,c,d;if(0===e)return i=r=s=n,[i,r,s];switch(o=Math.floor(6*t),a=6*t-o,l=n*(1-e),c=n*(1-a*e),d=n*(1-(1-a)*e),o%6){case 0:i=n,r=d,s=l;break;case 1:i=c,r=n,s=l;break;case 2:i=l,r=n,s=d;break;case 3:i=l,r=c,s=n;break;case 4:i=d,r=l,s=n;break;case 5:i=n,r=l,s=c}return[i,r,s]}(r,1,1);return[s,o,a]}function a(t,e,n){const i=(0,r.A)(t),s=(0,r.A)(e);return`rgb(${i[0]+(s[0]-i[0])*n}, ${i[1]+(s[1]-i[1])*n}, ${i[2]+(s[2]-i[2])*n})`}},85222:()=>{}}]);