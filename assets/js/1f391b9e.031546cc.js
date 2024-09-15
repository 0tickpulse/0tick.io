(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[6061,8401,7643,3249],{35141:(e,t,n)=>{"use strict";n.d(t,{A:()=>g});n(30758);var s=n(13526),o=n(57680),i=n(37287),r=n(86070);function a(){return(0,r.jsx)(o.A,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(o.A,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,r.jsx)(o.A,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,r.jsx)(o.A,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var p=n(24660),h=n(37797);function x(e){let{className:t}=e;return(0,r.jsx)(h.A,{type:"caution",title:(0,r.jsx)(d,{}),className:(0,s.A)(t,p.G.common.draftBanner),children:(0,r.jsx)(u,{})})}function m(e){let{className:t}=e;return(0,r.jsx)(h.A,{type:"caution",title:(0,r.jsx)(a,{}),className:(0,s.A)(t,p.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function f(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}function g(e){let{metadata:t}=e;const{unlisted:n,frontMatter:s}=t;return(0,r.jsxs)(r.Fragment,{children:[(n||s.unlisted)&&(0,r.jsx)(f,{}),s.draft&&(0,r.jsx)(x,{})]})}},34532:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});n(30758);var s=n(13526),o=n(32178),i=n(24660),r=n(13993),a=n(499),l=n(56378),c=n(35141),d=n(15574);const u={mdxPageWrapper:"mdxPageWrapper_SuqD"};var p=n(86070);function h(e){const{content:t}=e,{metadata:n,assets:h}=t,{title:x,editUrl:m,description:f,frontMatter:g,lastUpdatedBy:j,lastUpdatedAt:b}=n,{keywords:y,wrapperClassName:v,hide_table_of_contents:k}=g,w=h.image??g.image,S=!!(m||b||j);return(0,p.jsx)(o.e3,{className:(0,s.A)(v??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,p.jsxs)(r.A,{children:[(0,p.jsx)(o.be,{title:x,description:f,keywords:y,image:w}),(0,p.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,p.jsxs)("div",{className:(0,s.A)("row",u.mdxPageWrapper),children:[(0,p.jsxs)("div",{className:(0,s.A)("col",!k&&"col--8"),children:[(0,p.jsx)(c.A,{metadata:n}),(0,p.jsx)("article",{children:(0,p.jsx)(a.A,{children:(0,p.jsx)(t,{})})}),S&&(0,p.jsx)(d.A,{className:(0,s.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:m,lastUpdatedAt:b,lastUpdatedBy:j})]}),!k&&t.toc.length>0&&(0,p.jsx)("div",{className:"col col--2",children:(0,p.jsx)(l.A,{toc:t.toc,minHeadingLevel:g.toc_min_heading_level,maxHeadingLevel:g.toc_max_heading_level})})]})})]})})}},56378:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(30758);var s=n(13526),o=n(48392);const i={tableOfContents:"tableOfContents_BQ91",docItemContainer:"docItemContainer_Fs1k"};var r=n(86070);const a="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(o.A,{...n,linkClassName:a,linkActiveClassName:l})})}},92856:(e,t,n)=>{"use strict";n.d(t,{D:()=>g});var s=n(45885),o=n(88380),i=n(63477),r=n(9279),a=n(34787);const l=i.Zj.vsLight,c=i.Zj.vsDark,d={title:"0tick.io",tagline:"My personal website",favicon:"img/favicon.ico",customFields:{mathJaxOptions:{loader:{load:["[tex]/mathtools","[tex]/cancel"]},tex:{tags:"ams",macros:{unitvec:["\\hat{\\mathbf{#1}}",1],arrowedvec:["\\overrightarrow{#1}",1],bvec:["\\mathbf{\\vec{#1}}",1],arcsec:"\\operatorname{arcsec}",arccsc:"\\operatorname{arccsc}",arccot:"\\operatorname{arccot}",posX:"\\class{blue}{x}",posY:"\\class{yellow}{y}",posZ:"\\class{green}{z}",posR:"\\class{red}{r}",posT:"\\class{purple}{\\theta}",ihatc:"\\class{blue}{\\vu{i}}",jhatc:"\\class{yellow}{\\vu{j}}",khatc:"\\class{green}{\\vu{k}}",rhatc:"\\class{red}{\\vu{r}}",thhatc:"\\class{purple}{\\vu{\\theta}}"},packages:{"[+]":["autoload","mhchem","newcommand","gensymb","ams","cancel","mathtools","html","configmacros","physics"]}},svg:{scale:1.2}}},url:"https://0tick.io",baseUrl:"/",trailingSlash:!1,organizationName:"0tickpulse",projectName:"0tick.io",onBrokenLinks:"throw",onBrokenMarkdownLinks:"warn",i18n:{defaultLocale:"en",locales:["en"]},markdown:{mermaid:!0},stylesheets:[{href:"https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",type:"text/css",integrity:"sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",crossorigin:"anonymous"}],plugins:["docusaurus-plugin-sass"],themes:["@docusaurus/theme-mermaid"],presets:[["classic",{docs:{sidebarPath:"./sidebars.ts",editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/",routeBasePath:"/",remarkPlugins:[r.A],rehypePlugins:[e=>(d.customFields.mathJaxOptions={...e,...d.customFields.mathJaxOptions},(0,a.A)(d.customFields.mathJaxOptions))]},blog:{showReadingTime:!0,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/"},theme:{customCss:96213}}]],themeConfig:{navbar:{title:"0tick.io",logo:{alt:"Logo",src:"img/logo.png"},items:[{type:"docSidebar",sidebarId:"sidebarPortfolio",position:"left",label:"Portfolio"},{type:"docSidebar",sidebarId:"sidebarNotes",position:"left",label:"Notes"},{type:"docSidebar",sidebarId:"sidebarTools",position:"left",label:"Tools"},{to:"/blog",label:"Blog",position:"left"},{href:"https://github.com/0tickpulse/0tick.io",position:"right",className:"header-github-link","aria-label":"GitHub repository"}]},footer:{style:"dark",links:[],copyright:`Copyright \xa9 ${(new Date).getFullYear()} 0TickPulse. Built with Docusaurus.`},prism:{theme:l,darkTheme:c},mermaid:{options:{fontFamily:"var(--ifm-font-family-base)"}}}},u=d;var p=n(61017),h=n(33131),x=n(9764),m=n(92935),f=n(86070);function g(e){let{children:t,inline:n=!1,...i}=e;const r=(0,s.A)().siteConfig,a={...r.customFields.mathJaxOptions,...i},l=new o.TeX({packages:p.B,...a.tex}),c=new x.SVG(a.svg||void 0);try{const e=h.mathjax.document("",{InputJax:l,OutputJax:c}).convert(t.toString(),{display:!n});return(0,f.jsx)("span",{dangerouslySetInnerHTML:{__html:e.outerHTML}})}catch(d){console.log(`Error in MathJax: ${d}`,{newOptions:a,siteConfig:r.customFields.mathJaxOptions,config:u.customFields.mathJaxOptions,eq:(0,m.isEqual)(r.customFields.mathJaxOptions,u.customFields.mathJaxOptions)})}return(0,f.jsx)("div",{})}},60419:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});var s=n(78303),o=n(92856),i=n(86070);function r(e){let{yvar:t="y",xvar:n="x"}=void 0===e?{}:e;const r=e=>.2*Math.pow(e,2),a=(0,s.useMovablePoint)([3,r(3)],{constrain:e=>{let[t,n]=e;return[t,r(t)]}}),l=(0,s.useMovablePoint)([4,r(4)],{constrain:e=>{let[t,n]=e;return[t,r(t)]}});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.Mafs,{viewBox:{x:[0,8],y:[-1,6]},children:[(0,i.jsx)(s.Coordinates.Cartesian,{}),(0,i.jsx)(s.Plot.OfX,{y:e=>.2*Math.pow(e,2)}),(0,i.jsx)(s.Plot.OfX,{y:e=>r(a.point[0])+(e-a.point[0])*(r(l.point[0])-r(a.point[0]))/(l.point[0]-a.point[0])}),a.element,l.element,(0,i.jsxs)(s.Transform,{translate:[-.75,.75],children:[(0,i.jsx)(s.LaTeX,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,i.jsx)(s.LaTeX,{at:l.point,tex:`p_2 = (${l.point[0].toFixed(2)}, ${l.point[1].toFixed(2)})`})]}),(0,i.jsx)(s.Line.Segment,{point1:a.point,point2:[l.point[0],a.point[1]]}),(0,i.jsx)(s.Line.Segment,{point1:[l.point[0],a.point[1]],point2:l.point}),(0,i.jsx)(s.Line.Segment,{point1:[a.point[0],0],point2:a.point,style:"dashed"}),(0,i.jsx)(s.Line.Segment,{point1:[l.point[0],0],point2:l.point,style:"dashed"}),(0,i.jsx)(s.Vector,{tail:[a.point[0],0],tip:[l.point[0],0],color:s.Theme.green}),(0,i.jsx)(s.LaTeX,{tex:String.raw`\Delta ${n} = ${(l.point[0]-a.point[0]).toFixed(2)}`,at:[a.point[0]+(l.point[0]-a.point[0])/2,-.5]}),(0,i.jsx)(s.Vector,{tail:[l.point[0],a.point[1]],tip:l.point,color:s.Theme.yellow}),(0,i.jsx)(s.LaTeX,{tex:String.raw`\Delta ${t} = ${(l.point[1]-a.point[1]).toFixed(2)}`,at:[l.point[0]+1,a.point[1]+(l.point[1]-a.point[1])/2]})]}),(0,i.jsx)(o.D,{children:String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${t}}{\Delta ${n}} \\
                    &= \frac{${l.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${l.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(l.point[1]-a.point[1]).toFixed(2)}}{${(l.point[0]-a.point[0]).toFixed(2)}} \\
                    &= ${((l.point[1]-a.point[1])/(l.point[0]-a.point[0])).toFixed(2)}
                \end{split}
            `})]})}},99905:(e,t,n)=>{"use strict";n.d(t,{A:()=>J});var s=n(92856),o=n(78303),i=n(86070);function r(e){let{at:t,fromRad:n,toRad:s,radius:r=.4,color:a,straightRightAngle:l=!0,forceStraightAngle:c=!1,label:d,labelColor:u=a,labelOffsetMultiplier:p=1.4}=e;const{userTransform:h}=(0,o.useTransformContext)();if(l&&Math.abs(s-n)===Math.PI/2||c){n>s&&([n,s]=[s,n]),s-n>Math.PI&&([n,s]=[s,n]);const e=r/Math.sqrt(2);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(o.Transform,{rotate:n,translate:t,children:[(0,i.jsx)(o.Line.Segment,{point1:[e,0],point2:[e,e]}),(0,i.jsx)(o.Line.Segment,{point1:[0,e],point2:[e,e]})]})})}function x(e){return[Math.cos(e)*r+t[0],Math.sin(e)*r+t[1]]}const m=x((n+s)/2);return m[0]=(m[0]-t[0])*p+t[0],m[1]=(m[1]-t[1])*p+t[1],(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Plot.Parametric,{xy:e=>o.vec.transform(x(e),h),t:[n,s],color:a}),d&&(0,i.jsx)(o.LaTeX,{tex:d,at:m,color:u})]})}var a=n(30758);const l={"hoverable-box":"hoverable-box_DOJy",trigger:"trigger_AWv3","trigger-link":"trigger-link_f_4d","link-icon":"link-icon_hXAY","trigger-text":"trigger-text_kc3i",content:"content_dAnI"};function c(e){let{children:t,triggerText:n,color:s="var(--ifm-color-primary)",href:o}=e;const[r,c]=(0,a.useState)(!1);return(0,i.jsxs)("span",{className:`${l["hoverable-box"]}`,children:[(0,i.jsx)("div",{className:`${l.trigger}`,style:{color:s,borderColor:s},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:o?(0,i.jsxs)("a",{href:o,className:`${l["trigger-link"]}`,style:{color:s},children:[(0,i.jsx)("span",{children:n}),(0,i.jsx)("span",{className:`${l["link-icon"]}`,children:"\ud83d\udd17"})]}):(0,i.jsx)("span",{className:`${l["trigger-text"]}`,children:n})}),t&&r&&(0,i.jsx)("div",{className:`${l.content}`,children:t})]})}var d=n(75123),u=n(35365),p=n(95154);const h={options:{plugins:["core","controls","cursor"],controls:{klass:u.N}},containerStyle:{height:"500px"}},x=e=>{const{children:t,containerId:n,containerClass:s,containerStyle:o,...r}={...h,...e},[l,c]=(0,a.useState)(null),u=(0,a.useCallback)((e=>{e&&(console.log("Setting selection"),e.three.renderer.setClearColor(new p.Q1f(0),1))}),[]);return(0,i.jsx)("div",{ref:c,id:n,className:s,style:o,children:l&&(0,i.jsx)(d.Mathbox,{ref:u,container:l,...r,children:t})})};var m=n(60419),f=n(92935),g=n(66683);var j=n(4710);const b={ihat:[1,0],jhat:[0,1]};var y=n(3029),v=n.n(y);var k=n(38098);function w(e){let{domain:t,minDepth:n,maxDepth:s,threshold:o,fn:i,error:r,onPoint:a,lerp:l}=e;const[c,d]=t;a(c,i(c)),function e(t,c,d,u,p){const h=function(e,t){const n=43758.5453*Math.sin(12.9898*e+78.233*t);return.4+.2*(n-Math.floor(n))}(t,c),x=t+(c-t)*h,m=i(x);function f(){e(t,x,d+1,u,m),a(x,m),e(x,c,d+1,m,p)}if(d<n)f();else if(d<s){const e=l(u,p,h);r(m,e)>o&&f()}}(c,d,0,i(c),i(d)),a(d,i(d))}function S(e,t,n){const s=[];for(let o=e;o<=t;o+=n)s.push(o);return s}function _(e,t){const n=t[0],s=t[1],o=t[2],i=(r=n,k.UPj([[1,0,0],[0,k.gnS(r),-k.F8e(r)],[0,k.F8e(r),k.gnS(r)]]));var r;const a=function(e){return k.UPj([[k.gnS(e),0,k.F8e(e)],[0,1,0],[-k.F8e(e),0,k.gnS(e)]])}(s),l=function(e){return k.UPj([[k.gnS(e),-k.F8e(e),0],[k.F8e(e),k.gnS(e),0],[0,0,1]])}(o),c=k.lwT(l,a,i);return k.lwT(c,k.UPj(e)).toArray()}var C=n(8384);const A=(e,t)=>[e,t];const N=(0,a.createContext)({});function M(e){let{label:t,latex:n,latexOptions:o}=e;return(0,i.jsx)("div",{style:M.bodyStyle,children:(0,i.jsx)("span",{style:M.textStyle,children:n?(0,i.jsx)(s.D,{inline:!0,...o,children:t}):t})})}var F,P;function T(e){let{label:t,latex:n,latexOptions:s,LabelComponent:o,children:r}=e;return(0,i.jsxs)("tr",{style:T.styles,children:[(0,i.jsx)("td",{children:(0,i.jsx)(M,{label:o?(0,i.jsx)(o,{label:t}):t||"",latex:n,latexOptions:s})}),(0,i.jsx)("td",{children:r})]})}function L(e){return(0,a.memo)((t=>(0,i.jsx)(N.Consumer,{children:n=>(0,i.jsx)(T.Memo,{...t,children:(0,i.jsx)(e,{...t,...n})})})))}(F=M||(M={})).textStyle={verticalAlign:"sub"},F.bodyStyle={},(P=T||(T={})).Memo=(0,a.memo)(T),P.styles={};const $=L((function(e){let{value:t,onChange:n}=e;const[s,o]=(0,a.useState)(t??!1);return(0,i.jsx)("input",{type:"checkbox",checked:s,onChange:e=>{o(e.target.checked),n?.(e.target.checked)}})}));const O={"control-panel":"control-panel_o5ul","panel-pills":"panel-pills_OwUa"};function W(e){let{children:t,style:n,title:s="Options"}=e;return(0,i.jsx)("table",{style:{...n,...W.style},id:"control-panel",className:O["control-panel"],children:(0,i.jsxs)("tbody",{children:[(0,i.jsx)("tr",{children:(0,i.jsx)("th",{children:(0,i.jsx)("h3",{children:s})})}),t]})})}function D(e){return Array.isArray(e)?e[0]instanceof Array?e:e.map((e=>[e,e])):Object.entries(e)}(W||(W={})).style={};const V=L((function(e){let{value:t,options:n,onChange:s}=e;const[o,r]=(0,a.useState)(t??"Select");return(0,i.jsxs)("div",{className:"dropdown dropdown--hoverable",style:I.style,children:[(0,i.jsx)("button",{className:"button button--primary button--block",children:o}),(0,i.jsx)("ul",{className:"dropdown__menu",style:{zIndex:1},children:D(n).map(((e,n)=>{let[o,a]=e;return(0,i.jsx)("li",{value:a,onClick:()=>function(e){r(e),s?.(e)}(o),className:t===o?"dropdown__link dropdown__link--active":"dropdown__link",style:{zIndex:1},children:o},n)}))})]})}));function I(e){return(0,i.jsx)(V,{...e})}function B(e){return Array.isArray(e)?e.map((e=>[e,e])):Object.entries(e)}(I||(I={})).style={};const E=L((function(e){let{value:t,options:n,onChange:s}=e;const[o,r]=(0,a.useState)(t??"Select");return(0,i.jsx)("ul",{className:"pills pills--block "+O["panel-pills"],style:{zIndex:1},children:B(n).map(((e,t)=>{let[n,a]=e;return(0,i.jsx)("li",{onClick:()=>function(e){r(e),s?.(e)}(n),className:"pills__item "+(o===n?"pills__item--active":""),style:{zIndex:1,marginTop:"0"},children:a},t)}))})}));function X(e){return(0,i.jsx)(E,{...e})}function z(e){let{style:t,value:n,onSubmit:s,width:o}=e;const r=(0,a.useRef)(null);return(0,i.jsx)("input",{ref:r,style:{...t,...z.style,width:o},type:"text",value:n,onKeyDown:e=>{"Enter"===e.key&&s(r.current?.value??""),"Escape"===e.key&&s(n??"")},onChange:e=>s(e.target.value)})}(X||(X={})).style={},(z||(z={})).style={display:"inline-block"};const R=L((function(e){let{latexOptions:t,value:n,min:s,max:o,step:r,onChange:l}=e;const c=(0,a.createRef)(),[d,u]=(0,a.useState)((n??s+(o-s)/2)||0),p=e=>{const t="string"==typeof e?e:e.target.value,n=parseFloat(t);isNaN(n)||(u(n),l&&l(n))};return(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"},children:[(0,i.jsx)("input",{type:"range",value:d,min:s,max:o,step:r,onChange:p,ref:c,style:{width:"100%"}}),(0,i.jsx)(z,{value:(Math.round(100*d)/100).toString(),onSubmit:p,width:"15%"})]})}));var U=n(9834);const J={...C.A,Angle:r,Boxed:function(e){let{color:t="var(--ifm-font-color-base)",fillOpacity:n=.1,children:s,...o}=e;return(0,i.jsx)("div",{style:{border:`1px solid ${t}`,padding:"1em",margin:"1em 0",backgroundColor:`rgba(${t}, ${n})`},...o,children:s})},Citation:function(e){let{id:t,url:n,children:s}=e;return n?(0,i.jsx)("a",{href:n,id:t,target:"_blank",children:s}):(0,i.jsx)("p",{id:t,children:s})},Cite:function(e){const t=(0,i.jsxs)(i.Fragment,{children:["Cite: ",e.id,e.page&&(0,i.jsxs)(i.Fragment,{children:[", ",Array.isArray(e.page)?e.page[0]+"-"+e.page[1]:e.page]})]}),n="#"+e.id;return(0,i.jsx)(c,{triggerText:t,href:n})},DerivativeFromLimits:m.i,DivergenceVisualization:function(e){let{f:t=(e=>{let[t,n]=e;return[1,Math.sin(t)]}),mafsNodes:n,mafsProps:s,vectorFieldProps:r,sources:l=[],xRange:c=[-20,20,1],yRange:d=[-20,20,1]}=e;const u=(0,f.range)(...c).map((e=>(0,f.range)(...d).map((t=>[e,t])))).flat(),[p,h]=(0,a.useState)(u),{time:x,start:m,stop:j}=(0,o.useStopwatch)(),[b,y]=(0,a.useState)(!1),v=1/60,k=Math.floor(x/v);return(0,a.useEffect)((()=>{b?(h((e=>e.map((e=>{let[n,s]=e;return[n+t([n,s])[0]*v,s+t([n,s])[1]*v]})))),k%30==0&&h((e=>[...e,...l]))):h(u)}),[k]),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Mafs,{...s,children:[(0,i.jsx)(o.Coordinates.Cartesian,{}),(0,i.jsx)(o.Plot.VectorField,{xy:t,step:1,...r}),p.map(((e,t)=>{let[n,s]=e;return(0,i.jsx)(o.Point,{x:n,y:s,color:(0,g.yW)("blue")},t)})),n]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(b?"button--danger":"button--success"),onClick:function(){b?j():m(),y(!b),b||h(u)},children:b?"Stop":"Start"})})]})},LinearTransformationVisualizer:function(e){let{from:t=b,to:n,mafsProps:s,transformedItems:r,children:l,onTChange:c}=e;const{time:d,start:u,stop:p}=(0,o.useStopwatch)({endTime:2}),h=(0,j.ME)(d,0,1,2),x=o.vec.lerp(t.ihat,n.ihat,h),m=o.vec.lerp(t.jhat,n.jhat,h),[f,y]=(0,a.useState)(!1),[v,k]=(0,a.useState)(!1);function w(){k(!0),f?p():u(),y(!f)}(0,a.useEffect)((()=>{setTimeout((()=>{v&&!f&&w()}),1e3)}),[]),(0,a.useEffect)((()=>{c&&c(h)}),[h]);const S=[x[0],m[0],0,x[1],m[1],0],_=`matrix(${x[0]} ${-x[1]} ${m[0]} ${-m[1]} 0 0)`;return console.log({ihat:x,jhat:m,mafsMatrix:S,svgMatrix:_,evaluatedIHat:o.vec.transform([1,0],S)}),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Mafs,{...s,children:[(0,i.jsx)(o.Coordinates.Cartesian,{}),(0,i.jsx)("g",{transform:_,children:(0,i.jsx)("g",{style:{"--mafs-line-color":"#A0A0A0"},children:(0,i.jsx)(o.Coordinates.Cartesian,{xAxis:{labels:!1},yAxis:{labels:!1}})})}),(0,i.jsx)(o.Transform,{matrix:S,children:r}),(0,i.jsx)(o.Vector,{tail:[0,0],tip:x,color:(0,g.yW)("blue")}),(0,i.jsx)(o.Vector,{tail:[0,0],tip:m,color:(0,g.yW)("yellow")}),l]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(f?"button--danger":"button--success"),onClick:w,children:f?"Reset":"Start"})})]})},NonlinearTransformationVisualizer:function(e){let{fn:t=A,mafsProps:n,plotProps:s,children:r,xGridRange:l=(0,f.range)(-10,11,1),yGridRange:c=(0,f.range)(-10,11,1),lerpedItems:d,onTChange:u}=e;const{time:p,start:h,stop:x}=(0,o.useStopwatch)({endTime:2}),m=(0,j.ME)(p,0,1,2),b=(e,t,n)=>(1-n)*e+n*t,y=(e,n)=>{const s=e,o=n,[i,r]=[e,n],[a,l]=t(s,o);return[b(i,a,m),b(r,l,m)]},[v,k]=(0,a.useState)(!1),[w,S]=(0,a.useState)(!1);function _(){S(!0),v?x():h(),k(!v)}return(0,a.useEffect)((()=>{setTimeout((()=>{w&&!v&&_()}),1e3)}),[]),(0,a.useEffect)((()=>{u&&u(m)}),[m]),(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Mafs,{...n,children:[(0,i.jsx)(o.Coordinates.Cartesian,{}),l.map((e=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)(o.Plot.Parametric,{t:[-10,10],xy:t=>y(e,t),color:(0,g.yW)("blue"),..."function"==typeof s?s([e,0]):s})},e))),c.map((e=>(0,i.jsx)(a.Fragment,{children:(0,i.jsx)(o.Plot.Parametric,{t:[-10,10],xy:t=>y(t,e),color:(0,g.yW)("blue"),..."function"==typeof s?s([0,e]):s})},e))),r,d&&d(y)]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(v?"button--danger":"button--success"),onClick:_,children:v?"Reset":"Start"})})]})},HoverableBox:c,RiemannApproximation:function(e){let{f:t=(e=>e),lb:n=0,ub:s=5,n:r=5,type:a="left",color:l}=e;const c=(s-n)/r,d=v()(n,s,c).map((e=>{let n,s;switch(a){case"left":n=t(e);break;case"right":n=t(e+c);break;case"middle":n=t(e+c/2);break;case"trapezoidal":n=(t(e)+t(e+c))/2}let o=[[e,0],[e+c,0],[e+c,n],[e,n]];return s=c*n,"trapezoidal"===a&&(o=[[e,0],[e+c,0],[e+c,t(e+c)],[e,t(e)]],s=c*(t(e)+t(e+c))/2),{polygon:o,area:c*n}}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Plot.OfX,{y:t,color:l}),d.map(((e,t)=>{let{polygon:n}=e;return(0,i.jsx)(o.Polygon,{points:n,color:l},t)}))]})},ThreeDTest:function(){const e=[1,2,3],[t,n]=(0,a.useState)([0,Math.PI/4,Math.PI/4]);function s(e,n){void 0===n&&(n=t);const s=_(e,n);return[s[0],s[1]]}const r=(e,t)=>Math.sin(e)+Math.cos(t),l=(0,i.jsxs)(o.Mafs,{pan:!1,children:[(0,i.jsx)(o.Line.Segment,{point1:s([-10,0,0]),point2:s([10,0,0]),color:o.Theme.red}),(0,i.jsx)(o.Line.Segment,{point1:s([0,-10,0]),point2:s([0,10,0]),color:o.Theme.green}),(0,i.jsx)(o.Line.Segment,{point1:s([0,0,-10]),point2:s([0,0,10]),color:o.Theme.blue}),(0,i.jsx)(o.Vector,{tail:s([0,0,0]),tip:s(e)}),(0,i.jsx)(o.Vector,{tail:s([0,0,0]),tip:s([e[0],0,0])}),(0,i.jsx)(o.Vector,{tail:s([e[0],0,0]),tip:s([e[0],e[1],0])}),(0,i.jsx)(o.Vector,{tail:s([e[0],e[1],0]),tip:s(e)}),S(-10,10,.25).map((e=>{const n=a.useMemo((()=>function(e,t,n,s,i){let r="M ";return w({fn:e,error:(e,t)=>o.vec.squareDist(e,t),onPoint:(e,t)=>{let[n,s]=t;Number.isFinite(n)&&Number.isFinite(s)&&(r+=`${n} ${s} L `)},lerp:(e,t,n)=>o.vec.lerp(e,t,n),domain:t,minDepth:n,maxDepth:s,threshold:i}),r.substring(0,r.length-2)}((t=>s([t,e,r(t,e)])),[-10,10],4,10,.01)),[e,r,t]);return(0,i.jsx)("path",{d:n,strokeWidth:2,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",style:{stroke:"var(--mafs-fg)",strokeOpacity:1,vectorEffect:"non-scaling-stroke",transform:"var(--mafs-view-transform)"}})}))]});return(0,i.jsx)("div",{style:{cursor:"grab"},onMouseDown:e=>{const s=[e.clientX,e.clientY],o=t,i=e=>{const t=[e.clientX-s[0],e.clientY-s[1]];n([o[0]+.01*t[1],o[1]+.01*t[0],o[2]])},r=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},children:l})},PolarCoordinateVisualizer:function(e){let{}=e;const t=(0,o.useMovablePoint)([Math.sqrt(2),Math.sqrt(2)],{constrain:e=>o.vec.withMag(e,2)}),[n,s]=(0,a.useState)(!0),[l,c]=(0,a.useState)(!0);let d=Math.atan2(t.point[1],t.point[0]);d<0&&(d+=2*Math.PI);const u=o.vec.normalize(t.point),p=o.vec.rotate(u,Math.PI/2),h=[1,0],x=[0,1];return(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsxs)(o.Mafs,{viewBox:{x:[-3,3],y:[-3,3]},children:[(0,i.jsx)(o.Coordinates.Cartesian,{xAxis:{lines:!1,labels:()=>""},yAxis:{lines:!1,labels:()=>""}}),(0,i.jsx)(o.Circle,{center:[0,0],radius:2,fillOpacity:0}),(0,i.jsx)(r,{at:[0,0],fromRad:0,toRad:d,radius:.4,label:"\\theta",labelColor:(0,g.yW)("purple")}),(0,i.jsx)(o.Vector,{tip:t.point}),(0,i.jsx)(o.LaTeX,{tex:"r",at:(0,U.b)([0,0],t.point,"left",{sideOffset:.15}),color:(0,g.yW)("red")}),(0,i.jsx)(o.Polyline,{points:[[0,0],[t.point[0],0],t.point],strokeStyle:"dashed"}),(0,i.jsx)(o.LaTeX,{tex:"x",at:(0,U.b)([0,0],[t.point[0],0],"right",{sideOffset:.15}),color:(0,g.yW)("blue")}),(0,i.jsx)(o.LaTeX,{tex:"y",at:(0,U.b)([t.point[0],0],[t.point[0],t.point[1]],"right",{sideOffset:.15}),color:(0,g.yW)("yellow")}),t.element,(0,i.jsxs)(o.Transform,{translate:t.point,children:[n&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Vector,{tip:u,color:(0,g.yW)("red")}),(0,i.jsx)(o.LaTeX,{tex:"\\hat{\\mathbf{r}}",at:o.vec.scale(u,1.2),color:(0,g.yW)("red")}),(0,i.jsx)(o.Vector,{tip:p,color:(0,g.yW)("purple")}),(0,i.jsx)(o.LaTeX,{tex:"\\hat{\\mathbf{\\theta}}",at:o.vec.scale(p,1.2),color:(0,g.yW)("purple")})]}),l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Vector,{tip:h,color:(0,g.yW)("blue")}),(0,i.jsx)(o.LaTeX,{tex:"\\hat{\\mathbf{i}}",at:o.vec.scale(h,1.2),color:(0,g.yW)("blue")}),(0,i.jsx)(o.Vector,{tip:x,color:(0,g.yW)("yellow")}),(0,i.jsx)(o.LaTeX,{tex:"\\hat{\\mathbf{j}}",at:o.vec.scale(x,1.2),color:(0,g.yW)("yellow")})]})]})]})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsxs)(W,{children:[(0,i.jsx)(X,{label:"Polar basis vectors",value:"Show",options:["Show","Hide"],onChange:e=>s("Show"===e)}),(0,i.jsx)(X,{label:"Cartesian basis vectors",value:"Show",options:["Show","Hide"],onChange:e=>c("Show"===e)})]})})]})},ControlPanel:W,SliderInput:function(e){return(0,i.jsx)(R,{...e})},Dropdown:I,Pills:X,Checkbox:function(e){return(0,i.jsx)($,{...e})},...o,BetterMafsVectorField:function(){const e=(0,a.useCallback)((e=>{console.log({canvas:e,constructor:e.constructor.name})}),[]);return(0,i.jsx)("canvas",{ref:e,height:100,width:100})},ParametricSurfaceTransformVisualizer:function(e){let{showPoint:t=null,showLines:n=[],showNudge:s=!1,fn:r=((e,t)=>[e**2-t**2,t*e,e*t**2-t*e**2])}=e;const{time:l,start:c,stop:u}=(0,o.useStopwatch)({endTime:2}),p=(0,j.ME)(l,0,1,2),[h,m]=(0,a.useState)(!1),[f,b]=(0,a.useState)(!1),y=(e,t,n)=>(1-n)*e+n*t,v=(e,t)=>{const n=e,s=t,[o,i,a]=[e,t,0],[l,c,d]=r(n,s);return[y(o,l,p),y(a,d,p),y(i,c,p)]},k=t?v(...t):null;return(0,i.jsxs)("div",{className:"card",children:[(0,i.jsx)("div",{className:"card__body",children:(0,i.jsx)(x,{children:(0,i.jsxs)(d.Cartesian,{scale:[.1,.1,.1],children:[(0,i.jsx)(d.Axis,{axis:"x",range:[-10,10],color:(0,g.yW)("blue")}),(0,i.jsx)(d.Axis,{axis:"y",range:[-10,10],color:(0,g.yW)("green")}),(0,i.jsx)(d.Axis,{axis:"z",range:[-10,10],color:(0,g.yW)("yellow")}),(0,i.jsx)(d.Area,{id:"graph",axes:"xz",expr:(e,t,n)=>{const[s,o,i]=v(t,n);e(s,o,i)},width:64,height:64,channels:3,rangeX:[0,10],rangeY:[0,10]}),(0,i.jsx)(d.Surface,{points:"#graph",color:"#808080",lineX:!0,lineY:!0,opacity:.75,zBias:-1}),k&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Array,{items:1,id:"point",data:[k],channels:3}),(0,i.jsx)(d.Point,{points:"#point",color:(0,g.yW)("blue"),size:10}),(0,i.jsx)(d.Array,{items:2,id:"point_vec",data:[[0,0,0],k],channels:3}),(0,i.jsx)(d.Vector,{end:!0,points:"#point_vec",color:(0,g.yW)("blue")}),n.map((e=>(0,i.jsxs)(d.Group,{children:[(0,i.jsx)(d.Interval,{id:`line_${e}`,expr:(n,s,o,i)=>{const r="x"===e?s:t[0],a="y"===e?s:t[1],[l,c,d]=v(r,a);n(l,c,d)},width:512,range:[-10,10],channels:3}),(0,i.jsx)(d.Line,{points:`#line_${e}`,color:"x"===e?(0,g.yW)("blue"):(0,g.yW)("yellow"),width:5}),s&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Array,{items:2,id:`line_vec_${e}`,data:[v(t[0],t[1]),"x"===e?v(t[0]+1,t[1]):v(t[0],t[1]+1)],channels:3}),(0,i.jsx)(d.Vector,{end:!0,points:`#line_vec_${e}`,color:(0,g.yW)("green"),width:5,zBias:2})]})]},e)))]})]})})}),(0,i.jsx)("div",{className:"card__footer",children:(0,i.jsx)("button",{className:"button button--secondary button--block "+(h?"button--danger":"button--success"),onClick:function(){b(!0),h?u():c(),m(!h)},children:h?"Reset":"Start"})})]})},MathEquation:s.D,CustomMathbox:x}},66683:(e,t,n)=>{"use strict";n.d(t,{yW:()=>i,QV:()=>r,D7:()=>a});const s={gray:"#44546A",blue:"#00c5ff",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};var o=n(51359);function i(e){return s[e]}function r(e,t,n){void 0===t&&(t=0),void 0===n&&(n=20);const s=(e-t)/(n-t),o=Math.max(0,241/360*(1-s)),[i,r,a]=function(e,t,n){let s,o,i,r,a,l,c,d;if(0===t)return s=o=i=n,[s,o,i];switch(r=Math.floor(6*e),a=6*e-r,l=n*(1-t),c=n*(1-a*t),d=n*(1-(1-a)*t),r%6){case 0:s=n,o=d,i=l;break;case 1:s=c,o=n,i=l;break;case 2:s=l,o=n,i=d;break;case 3:s=l,o=c,i=n;break;case 4:s=d,o=l,i=n;break;case 5:s=n,o=l,i=c}return[s,o,i]}(o,1,1);return[i,r,a]}function a(e,t,n){const s=(0,o.A)(e),i=(0,o.A)(t);return`rgb(${s[0]+(i[0]-s[0])*n}, ${s[1]+(i[1]-s[1])*n}, ${s[2]+(i[2]-s[2])*n})`}},9834:(e,t,n)=>{"use strict";n.d(t,{b:()=>o});var s=n(78303);function o(e,t,n,o){let{sideOffset:i=.3,forwardOffset:r=0}=void 0===o?{}:o;const a=s.vec.sub(t,e),l=s.vec.normalize([a[1],-a[0]]),c=s.vec.scale(l,("left"===n?-1:1)*i),d=s.vec.add(s.vec.scale(a,.5),s.vec.scale(s.vec.withMag(a,1),r));return s.vec.add(s.vec.add(e,d),c)}},85222:()=>{}}]);