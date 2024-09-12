(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[7643,8401,3249],{92856:(t,e,n)=>{"use strict";n.d(e,{D:()=>f});var s=n(45885),o=n(88380),i=n(63477),r=n(9279),a=n(34787);const l=i.Zj.vsLight,c=i.Zj.vsDark,d={title:"0tick.io",tagline:"My personal website",favicon:"img/favicon.ico",customFields:{mathJaxOptions:{loader:{load:["[tex]/mathtools","[tex]/cancel"]},tex:{tags:"ams",macros:{ihat:"\\hat{\\mathbf{i}}",jhat:"\\hat{\\mathbf{j}}",khat:"\\hat{\\mathbf{k}}",rhat:"\\hat{\\mathbf{r}}",thetahat:"\\hat{\\mathbf{\\theta}}",unitvec:["\\hat{\\mathbf{#1}}",1],arrowedvec:["\\overrightarrow{#1}",1],bvec:["\\mathbf{\\vec{#1}}",1],arcsec:"\\operatorname{arcsec}",arccsc:"\\operatorname{arccsc}",arccot:"\\operatorname{arccot}"},packages:{"[+]":["autoload","mhchem","gensymb","ams","cancel","mathtools","html","configmacros","physics"]}},svg:{scale:1.2}}},url:"https://0tick.io",baseUrl:"/",trailingSlash:!1,organizationName:"0tickpulse",projectName:"0tick.io",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},stylesheets:[{href:"https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",type:"text/css",integrity:"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",crossorigin:"anonymous"}],plugins:["docusaurus-plugin-sass"],themes:["@docusaurus/theme-mermaid"],presets:[["classic",{docs:{sidebarPath:"./sidebars.ts",editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/",routeBasePath:"/",remarkPlugins:[r.A],rehypePlugins:[t=>(d.customFields.mathJaxOptions={...t,...d.customFields.mathJaxOptions},(0,a.A)(d.customFields.mathJaxOptions))]},blog:{showReadingTime:!0,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/"},theme:{customCss:96213}}]],themeConfig:{navbar:{title:"0tick.io",logo:{alt:"Logo",src:"img/logo.png"},items:[{type:"docSidebar",sidebarId:"sidebarPortfolio",position:"left",label:"Portfolio"},{type:"docSidebar",sidebarId:"sidebarNotes",position:"left",label:"Notes"},{type:"docSidebar",sidebarId:"sidebarTools",position:"left",label:"Tools"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/0tickpulse/0tick.io",position:"right",className:"header-github-link","aria-label":"GitHub repository"}]},footer:{style:"dark",links:[],copyright:`Copyright \xa9 ${(new Date).getFullYear()} 0TickPulse. Built with Docusaurus.`},prism:{theme:l,darkTheme:c},mermaid:{options:{fontFamily:"var(--ifm-font-family-base)"}}}},u=d;var p=n(61017),h=n(33131),x=n(9764),m=n(92935),g=n(86070);function f(t){let{children:e,inline:n=!1,...i}=t;const r=(0,s.A)().siteConfig,a={...r.customFields.mathJaxOptions,...i},l=new o.TeX({packages:p.B,...a.tex}),c=new x.SVG(a.svg||void 0);try{const t=h.mathjax.document("",{InputJax:l,OutputJax:c}).convert(e.toString(),{display:!n});return(0,g.jsx)("span",{dangerouslySetInnerHTML:{__html:t.outerHTML}})}catch(d){console.log(`Error in MathJax: ${d}`,{newOptions:a,siteConfig:r.customFields.mathJaxOptions,config:u.customFields.mathJaxOptions,eq:(0,m.isEqual)(r.customFields.mathJaxOptions,u.customFields.mathJaxOptions)})}return(0,g.jsx)("div",{})}},60419:(t,e,n)=>{"use strict";n.d(e,{i:()=>r});var s=n(78303),o=n(92856),i=n(86070);function r(t){let{yvar:e="y",xvar:n="x"}=void 0===t?{}:t;const r=t=>.2*Math.pow(t,2),a=(0,s.ET)([3,r(3)],{constrain:t=>{let[e,n]=t;return[e,r(e)]}}),l=(0,s.ET)([4,r(4)],{constrain:t=>{let[e,n]=t;return[e,r(e)]}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Ez,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,i.jsx)(s.E$.Cartesian,{}),(0,i.jsx)(s.Kl.OfX,{y:t=>.2*Math.pow(t,2)}),(0,i.jsx)(s.Kl.OfX,{y:t=>r(a.point[0])+(t-a.point[0])*(r(l.point[0])-r(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,i.jsxs)(s.dL,{translate:[-.75,.75],children:[(0,i.jsx)(s.PC,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,i.jsx)(s.PC,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,i.jsx)(s.N1.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,i.jsx)(s.N1.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,i.jsx)(s.N1.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,i.jsx)(s.N1.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,i.jsx)(s.Mi,{tail:[a.point[0],0],tip:[l.point[0],0],color:s.Sx.green}),(0,i.jsx)(s.PC,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,i.jsx)(s.Mi,{tail:[l.point[0],a.point[1]],tip:l.point,color:s.Sx.yellow}),(0,i.jsx)(s.PC,{tex:String.raw`\Delta ${e} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,i.jsx)(o.D,{children:String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${e}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{split}
            `})]})}},17921:(t,e,n)=>{"use strict";n.d(e,{A:()=>L});var s=n(92856),o=n(78303),i=n(86070);var r=n(30758);const a={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function l(t){let{children:e,triggerText:n,color:s="var(--ifm-color-primary)",href:o}=t;const[l,c]=(0,r.useState)(!1);return(0,i.jsxs)("span",{className:`${a["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${a.trigger}`,style:{color:s,borderColor:s},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:o?(0,i.jsxs)("a",{href:o,className:`${a["trigger-link"]}`,style:{color:s},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${a["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${a["trigger-text"]}`,children:n})}),e&&l&&(0,i.jsx)("div",{className:`${a.content}`,children:e})]})}var c=n(75123),d=n(35365),u=n(95154);const p={options:{plugins:["core","controls","cursor"],controls:{klass:d.N}},containerStyle:{height:"500px"}},h=t=>{const{children:e,containerId:n,containerClass:s,containerStyle:o,...a}={...p,...t},[l,d]=(0,r.useState)(null),h=(0,r.useCallback)((t=>{t&&(console.log("Setting selection"),t.three.renderer.setClearColor(new u.Q1f(0),1))}),[]);return(0,i.jsx)("div",{ref:d,id:n,className:s,style:o,children:l&&(0,i.jsx)(c.Mathbox,{ref:h,container:l,...a,children:e})})};var x=n(60419),m=n(92935),g=n(66683);var f=n(4710);const j={ihat:[1,0],jhat:[0,1]};var b=n(3029),y=n.n(b);var v=n(38098);function k(t){let{domain:e,minDepth:n,maxDepth:s,threshold:o,fn:i,error:r,onPoint:a,lerp:l}=t;const[c,d]=e;a(c,i(c)),function t(e,c,d,u,p){const h=function(t,e){const n=43758.5453*Math.sin(12.9898*t+78.233*e);return.4+.2*(n-Math.floor(n))}(e,c),x=e+(c-e)*h,m=i(x);function g(){t(e,x,d+1,u,m),a(x,m),t(x,c,d+1,m,p)}if(d<n)g();else if(d<s){const t=l(u,p,h);r(m,t)>o&&g()}}(c,d,0,i(c),i(d)),a(d,i(d))}function S(t,e,n){const s=[];for(let o=t;o<=e;o+=n)s.push(o);return s}function w(t,e){const n=e[0],s=e[1],o=e[2],i=(r=n,v.UPj([[1,0,0],[0,v.gnS(r),-v.F8e(r)],[0,v.F8e(r),v.gnS(r)]]));var r;const a=function(t){return v.UPj([[v.gnS(t),0,v.F8e(t)],[0,1,0],[-v.F8e(t),0,v.gnS(t)]])}(s),l=function(t){return v.UPj([[v.gnS(t),-v.F8e(t),0],[v.F8e(t),v.gnS(t),0],[0,0,1]])}(o),c=v.lwT(l,a,i);return v.lwT(c,v.UPj(t)).toArray()}var F=n(8384);const N=(t,e)=>[t,e];function M(t){let{style:e,value:n,onSubmit:s,width:o}=t;const a=(0,r.useRef)(null);return(0,r.useEffect)((()=>{a.current?.focus()}),[]),(0,i.jsx)("input",{ref:a,style:{...e,...M.style,width:o},type:"text",value:n,onKeyDown:t=>{"Enter"===t.key&&s(a.current?.value??""),"Escape"===t.key&&s(n??"")},onChange:t=>s(t.target.value)})}(M||(M={})).style={display:"inline-block"};const C=(0,r.createContext)({});function $(t){let{label:e,latex:n,latexOptions:o}=t;return(0,i.jsx)("div",{style:$.bodyStyle,children:(0,i.jsx)("span",{style:$.textStyle,children:n?(0,i.jsx)(s.D,{inline:!0,...o,children:e}):e})})}var _,A;function P(t){let{label:e,latex:n,latexOptions:s,LabelComponent:o,children:r}=t;return(0,i.jsxs)("div",{className:"row row--no-gutters",style:P.styles,children:[(0,i.jsx)("div",{className:"col col--2",children:(0,i.jsx)($,{label:o?(0,i.jsx)(o,{label:e}):e||"",latex:n,latexOptions:s})}),(0,i.jsx)("div",{className:"col col--10",children:r})]})}(_=$||($={})).textStyle={verticalAlign:"sub"},_.bodyStyle={},(A=P||(P={})).Memo=(0,r.memo)(P),A.styles={};const E=(D=function(t){let{latexOptions:e,value:n,min:s,max:o,step:a,onChange:l}=t;const c=(0,r.createRef)(),[d,u]=(0,r.useState)((n??s+(o-s)/2)||0),p=t=>{const e="string"==typeof t?t:t.target.value,n=parseFloat(e);isNaN(n)||(u(n),l&&l(n))};return(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"},children:[(0,i.jsx)("input",{type:"range",value:d,min:s,max:o,step:a,onChange:p,ref:c,style:{width:"100%"}}),(0,i.jsx)(M,{value:(Math.round(100*d)/100).toString(),onSubmit:p,width:"15%"})]})},(0,r.memo)((t=>(0,i.jsx)(C.Consumer,{children:e=>(0,i.jsx)(P.Memo,{...t,children:(0,i.jsx)(D,{...t,...e})})}))));var D;function T(t){let{children:e,style:n,title:s="Options"}=t;return(0,i.jsxs)("div",{style:{...n,...T.style},id:"control-panel",className:"control-panel container",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("h3",{children:s})}),e]})}(T||(T={})).style={};const L={...F.A,Angle:function(t){let{at:e,fromRad:n,toRad:s,radius:r=.4,color:a,straightRightAngle:l=!0,forceStraightAngle:c=!1,label:d,labelColor:u=a,labelOffsetMultiplier:p=1.4}=t;const{userTransform:h}=(0,o.Bn)();if(l&&Math.abs(s-n)===Math.PI/2||c){n>s&&([n,s]=[s,n]),s-n>Math.PI&&([n,s]=[s,n]);const t=r/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.dL,{rotate:n,translate:e,children:[(0,i.jsx)(o.N1.Segment,{point1:[t,0],point2:[t,t]}),(0,i.jsx)(o.N1.Segment,{point1:[0,t],point2:[t,t]})]})})}function x(t){return[Math.cos(t)*r+e[0],Math.sin(t)*r+e[1]]}const m=x((n+s)/2);return m[0]=(m[0]-e[0])*p+e[0],m[1]=(m[1]-e[1])*p+e[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Kl.Parametric,{xy:t=>o.t6.transform(x(t),h),t:[n,s],color:a}),d&&(0,i.jsx)(o.PC,{tex:d,at:m,color:u})]})},Boxed:function(t){let{color:e="var(--ifm-font-color-base)",fillOpacity:n=.1,children:s,...o}=t;return(0,i.jsx)("div",{style:{border:`1px solid ${e}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${e}, ${n})`},...o,children:s})},Citation:function(t){let{id:e,url:n,children:s}=t;return n?(0,i.jsx)("a",{href:n,id:e,target:"_blank",children:s}):(0,i.jsx)("p",{id:e,children:s})},Cite:function(t){const e=(0,i.jsxs)(i.Fragment,{children:["Cite: ",t.id,t.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(t.page)?t.page[0]+"-"+t.page[1]:t.page]})]}),n="#"+t.id;return(0,i.jsx)(l,{triggerText:e,href:n})},DerivativeFromLimits:x.i,DivergenceVisualization:function(t){let{f:e=(t=>{let[e,n]=t;return[1,Math.sin(e)]}),mafsNodes:n,mafsProps:s,vectorFieldProps:a,sources:l=[],xRange:c=[-20,20,1],yRange:d=[-20,20,1]}=t;const u=(0,m.range)(...c).map((t=>(0,m.range)(...d).map((e=>[t,e])))).flat(),[p,h]=(0,r.useState)(u),{time:x,start:f,stop:j}=(0,o.XA)(),[b,y]=(0,r.useState)(!1),v=1/60,k=Math.floor(x/v);return(0,r.useEffect)((()=>{b?(h((t=>t.map((t=>{let[n,s]=t;return[n+e([n,s])[0]*v,s+e([n,s])[1]*v]})))),k%30==0&&h((t=>[...t,...l]))):h(u)}),[k]),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Ez,{...s,children:[(0,i.jsx)(o.E$.Cartesian,{}),(0,i.jsx)(o.Kl.VectorField,{xy:e,step:1,...a}),p.map(((t,e)=>{let[n,s]=t;return(0,i.jsx)(o.bR,{x:n,y:s,color:(0,g.yW)("blue")},e)})),n]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(b?"button--danger":"button--success"),onClick:function(){b?j():f(),y(!b),b||h(u)},children:b?"Stop":"Start"})})]})},LinearTransformationVisualizer:function(t){let{from:e=j,to:n,mafsProps:s,transformedItems:a,children:l,onTChange:c}=t;const{time:d,start:u,stop:p}=(0,o.XA)({endTime:2}),h=(0,f.ME)(d,0,1,2),x=o.t6.lerp(e.ihat,n.ihat,h),m=o.t6.lerp(e.jhat,n.jhat,h),[b,y]=(0,r.useState)(!1),[v,k]=(0,r.useState)(!1);function S(){k(!0),b?p():u(),y(!b)}(0,r.useEffect)((()=>{setTimeout((()=>{v&&!b&&S()}),1e3)}),[]),(0,r.useEffect)((()=>{c&&c(h)}),[h]);const w=[x[0],m[0],0,x[1],m[1],0],F=`matrix(${x[0]} ${-x[1]} ${m[0]} ${-m[1]} 0 0)`;return console.log({ihat:x,jhat:m,mafsMatrix:w,svgMatrix:F,evaluatedIHat:o.t6.transform([1,0],w)}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Ez,{...s,children:[(0,i.jsx)(o.E$.Cartesian,{}),(0,i.jsx)("g",{transform:F,children:(0,i.jsx)("g",{style:{"--mafs-line-color":"#A0A0A0"},children:(0,i.jsx)(o.E$.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}})})}),(0,i.jsx)(o.dL,{matrix:w,children:a}),(0,i.jsx)(o.Mi,{tail:[0,0],tip:x,color:(0,g.yW)("blue")}),(0,i.jsx)(o.Mi,{tail:[0,0],tip:m,color:(0,g.yW)("yellow")}),l]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(b?"button--danger":"button--success"),onClick:S,children:b?"Reset":"Start"})})]})},NonlinearTransformationVisualizer:function(t){let{fn:e=N,mafsProps:n,plotProps:s,children:a,xGridRange:l=(0,m.range)(-10,11,1),yGridRange:c=(0,m.range)(-10,11,1),lerpedItems:d,onTChange:u}=t;const{time:p,start:h,stop:x}=(0,o.XA)({endTime:2}),j=(0,f.ME)(p,0,1,2),b=(t,e,n)=>(1-n)*t+n*e,y=(t,n)=>{const s=t,o=n,[i,r]=[t,n],[a,l]=e(s,o);return[b(i,a,j),b(r,l,j)]},[v,k]=(0,r.useState)(!1),[S,w]=(0,r.useState)(!1);function F(){w(!0),v?x():h(),k(!v)}return(0,r.useEffect)((()=>{setTimeout((()=>{S&&!v&&F()}),1e3)}),[]),(0,r.useEffect)((()=>{u&&u(j)}),[j]),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Ez,{...n,children:[(0,i.jsx)(o.E$.Cartesian,{}),l.map((t=>(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(o.Kl.Parametric,{t:[-10,10],xy:e=>y(t,e),color:(0,g.yW)("blue"),..."function"==typeof s?s([t,0]):s})},t))),c.map((t=>(0,i.jsx)(r.Fragment,{children:(0,i.jsx)(o.Kl.Parametric,{t:[-10,10],xy:e=>y(e,t),color:(0,g.yW)("blue"),..."function"==typeof s?s([0,t]):s})},t))),a,d&&d(y)]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(v?"button--danger":"button--success"),onClick:F,children:v?"Reset":"Start"})})]})},HoverableBox:l,RiemannApproximation:function(t){let{f:e=(t=>t),lb:n=0,ub:s=5,n:r=5,type:a="left",color:l}=t;const c=(s-n)/r,d=y()(n,s,c).map((t=>{let n,s;switch(a){case"left":n=e(t);break;case"right":n=e(t+c);break;case"middle":n=e(t+c/2);break;case"trapezoidal":n=(e(t)+e(t+c))/2}let o=[[t,0],[t+c,0],[t+c,n],[t,n]];return s=c*n,"trapezoidal"===a&&(o=[[t,0],[t+c,0],[t+c,e(t+c)],[t,e(t)]],s=c*(e(t)+e(t+c))/2),{polygon:o,area:c*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Kl.OfX,{y:e,color:l}),d.map(((t,e)=>{let{polygon:n}=t;return(0,i.jsx)(o.tS,{points:n,color:l},e)}))]})},ThreeDTest:function(){const t=[1,2,3],[e,n]=(0,r.useState)([0,Math.PI/4,Math.PI/4]);function s(t,n){void 0===n&&(n=e);const s=w(t,n);return[s[0],s[1]]}const a=(t,e)=>Math.sin(t)+Math.cos(e),l=(0,i.jsxs)(o.Ez,{pan:!1,children:[(0,i.jsx)(o.N1.Segment,{point1:s([-10,0,0]),point2:s([10,0,0]),color:o.Sx.red}),(0,i.jsx)(o.N1.Segment,{point1:s([0,-10,0]),point2:s([0,10,0]),color:o.Sx.green}),(0,i.jsx)(o.N1.Segment,{point1:s([0,0,-10]),point2:s([0,0,10]),color:o.Sx.blue}),(0,i.jsx)(o.Mi,{tail:s([0,0,0]),tip:s(t)}),(0,i.jsx)(o.Mi,{tail:s([0,0,0]),tip:s([t[0],0,0])}),(0,i.jsx)(o.Mi,{tail:s([t[0],0,0]),tip:s([t[0],t[1],0])}),(0,i.jsx)(o.Mi,{tail:s([t[0],t[1],0]),tip:s(t)}),S(-10,10,.25).map((t=>{const n=r.useMemo((()=>function(t,e,n,s,i){let r="M ";return k({fn:t,error:(t,e)=>o.t6.squareDist(t,e),onPoint:(t,e)=>{let[n,s]=e;Number.isFinite(n)&&Number.isFinite(s)&&(r+=`${n} ${s} L `)},lerp:(t,e,n)=>o.t6.lerp(t,e,n),domain:e,minDepth:n,maxDepth:s,threshold:i}),r.substring(0,r.length-2)}((e=>s([e,t,a(e,t)])),[-10,10],4,10,.01)),[t,a,e]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:t=>{const s=[t.clientX,t.clientY],o=e,i=t=>{const e=[t.clientX-s[0],t.clientY-s[1]];n([o[0]+.01*e[1],o[1]+.01*e[0],o[2]])},r=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},children:l})},ControlPanel:T,SliderInput:function(t){return(0,i.jsx)(E,{...t})},BetterMafsVectorField:function(){const t=(0,r.useCallback)((t=>{console.log({canvas:t,constructor:t.constructor.name})}),[]);return(0,i.jsx)("canvas",{ref:t,height:100,width:100})},ParametricSurfaceTransformVisualizer:function(t){let{showPoint:e=null,showLines:n=[],showNudge:s=!1,fn:a=((t,e)=>[t**2-e**2,e*t,t*e**2-e*t**2])}=t;const{time:l,start:d,stop:u}=(0,o.XA)({endTime:2}),p=(0,f.ME)(l,0,1,2),[x,m]=(0,r.useState)(!1),[j,b]=(0,r.useState)(!1),y=(t,e,n)=>(1-n)*t+n*e,v=(t,e)=>{const n=t,s=e,[o,i,r]=[t,e,0],[l,c,d]=a(n,s);return[y(o,l,p),y(r,d,p),y(i,c,p)]},k=e?v(...e):null;return(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsx)(h,{children:(0,i.jsxs)(c.Cartesian,{scale:[.1,.1,.1],children:[(0,i.jsx)(c.Axis,{axis:"x",range:[-10,10],color:(0,g.yW)("blue")}),(0,i.jsx)(c.Axis,{axis:"y",range:[-10,10],color:(0,g.yW)("green")}),(0,i.jsx)(c.Axis,{axis:"z",range:[-10,10],color:(0,g.yW)("yellow")}),(0,i.jsx)(c.Area,{id:"graph",axes:"xz",expr:(t,e,n)=>{const[s,o,i]=v(e,n);t(s,o,i)},width:64,height:64,channels:3,rangeX:[0,10],rangeY:[0,10]}),(0,i.jsx)(c.Surface,{points:"#graph",color:"#808080",lineX:!0,lineY:!0,opacity:.75,zBias:-1}),k&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Array,{items:1,id:"point",data:[k],channels:3}),(0,i.jsx)(c.Point,{points:"#point",color:(0,g.yW)("blue"),size:10}),(0,i.jsx)(c.Array,{items:2,id:"point_vec",data:[[0,0,0],k],channels:3}),(0,i.jsx)(c.Vector,{end:!0,points:"#point_vec",color:(0,g.yW)("blue")}),n.map((t=>(0,i.jsxs)(c.Group,{children:[(0,i.jsx)(c.Interval,{id:`line_${t}`,expr:(n,s,o,i)=>{const r="x"===t?s:e[0],a="y"===t?s:e[1],[l,c,d]=v(r,a);n(l,c,d)},width:512,range:[-10,10],channels:3}),(0,i.jsx)(c.Line,{points:`#line_${t}`,color:"x"===t?(0,g.yW)("blue"):(0,g.yW)("yellow"),width:5}),s&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Array,{items:2,id:`line_vec_${t}`,data:[v(e[0],e[1]),"x"===t?v(e[0]+1,e[1]):v(e[0],e[1]+1)],channels:3}),(0,i.jsx)(c.Vector,{end:!0,points:`#line_vec_${t}`,color:(0,g.yW)("green"),width:5,zBias:2})]})]},t)))]})]})})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(x?"button--danger":"button--success"),onClick:function(){b(!0),x?u():d(),m(!x)},children:x?"Reset":"Start"})})]})},MathEquation:s.D,CustomMathbox:h}},66683:(t,e,n)=>{"use strict";n.d(e,{yW:()=>i,QV:()=>r,D7:()=>a});const s={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};var o=n(51359);function i(t){return s[t]}function r(t,e,n){void 0===e&&(e=0),void 0===n&&(n=20);const s=(t-e)/(n-e),o=Math.max(0,241/360*(1-s)),[i,r,a]=function(t,e,n){let s,o,i,r,a,l,c,d;if(0===e)return s=o=i=n,[s,o,i];switch(r=Math.floor(6*t),a=6*t-r,l=n*(1-e),c=n*(1-a*e),d=n*(1-(1-a)*e),r%6){case 0:s=n,o=d,i=l;break;case 1:s=c,o=n,i=l;break;case 2:s=l,o=n,i=d;break;case 3:s=l,o=c,i=n;break;case 4:s=d,o=l,i=n;break;case 5:s=n,o=l,i=c}return[s,o,i]}(o,1,1);return[i,r,a]}function a(t,e,n){const s=(0,o.A)(t),i=(0,o.A)(e);return`rgb(${s[0]+(i[0]-s[0])*n}, ${s[1]+(i[1]-s[1])*n}, ${s[2]+(i[2]-s[2])*n})`}},85222:()=>{}}]);