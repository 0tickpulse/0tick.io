"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[1818],{72420:(a,t,s)=>{s.r(t),s.d(t,{DifferenceInArea:()=>H,DifferentiationSum:()=>X,PointSlopeFormDerivation:()=>h,SimpleProducts:()=>f,SimpleSlope:()=>j,assets:()=>c,contentTitle:()=>i,default:()=>E,frontMatter:()=>x,metadata:()=>o,toc:()=>g});var e=s(86070),T=s(25710),r=s(78303),n=s(92856),Q=s(30758),d=s(60419),l=s(66683),m=s(5665);const x={sidebar_position:3},i="Differentiation",o={id:"notes/maths/Calculus 1 and 2/differentiation",title:"Differentiation",description:"Differentiation is the process of finding the derivative of a function.",source:"@site/docs/notes/maths/Calculus 1 and 2/differentiation.mdx",sourceDirName:"notes/maths/Calculus 1 and 2",slug:"/notes/maths/Calculus 1 and 2/differentiation",permalink:"/notes/maths/Calculus 1 and 2/differentiation",draft:!1,unlisted:!1,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/maths/Calculus 1 and 2/differentiation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarNotes",previous:{title:"Limits",permalink:"/notes/maths/Calculus 1 and 2/limits"},next:{title:"Applications of Differentiation",permalink:"/notes/maths/Calculus 1 and 2/Applications of Differentiation"}},c={};function j(){const a=(0,r.ET)([4,2],{constrain:([a,t])=>[a,.5*a]}),t=(0,r.ET)([10,5],{constrain:([a,t])=>[a,.5*a]});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(r.Ez,{viewBox:{x:[0,10],y:[0,10]},children:[(0,e.jsx)(r.E$.Cartesian,{}),(0,e.jsx)(r.Kl.OfX,{y:a=>.5*a}),a.element,t.element,(0,e.jsxs)(r.dL,{translate:[-.75,.75],children:[(0,e.jsx)(r.PC,{at:a.point,tex:`p_1 = (${a.point[0].toFixed(2)}, ${a.point[1].toFixed(2)})`}),(0,e.jsx)(r.PC,{at:t.point,tex:`p_2 = (${t.point[0].toFixed(2)}, ${t.point[1].toFixed(2)})`})]}),(0,e.jsx)(r.N1.Segment,{point1:a.point,point2:[t.point[0],a.point[1]]}),(0,e.jsx)(r.N1.Segment,{point1:[t.point[0],a.point[1]],point2:t.point})]}),(0,e.jsx)(n.A,{children:String.raw`
                \begin{split}
                    \text{Slope} &= \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1} \\
                    &= \frac{${t.point[1].toFixed(2)} - ${a.point[1].toFixed(2)}}{${t.point[0].toFixed(2)} - ${a.point[0].toFixed(2)}} \\
                    &= \frac{${(t.point[1]-a.point[1]).toFixed(2)}}{${(t.point[0]-a.point[0]).toFixed(2)}} \\
                    &= \frac{1}{2}
                \end{split}
                \begin{split}
                    \text{Slope} &= \frac{\Delta ${t}}{\Delta ${s}} \\
                    &= \frac{${d.point[1].toFixed(2)} - ${Q.point[1].toFixed(2)}}{${d.point[0].toFixed(2)} - ${Q.point[0].toFixed(2)}} \\
                    &= \frac{${(d.point[1]-Q.point[1]).toFixed(2)}}{${(d.point[0]-Q.point[0]).toFixed(2)}} \\
                    &= ${((d.point[1]-Q.point[1])/(d.point[0]-Q.point[0])).toFixed(2)}
                \end{split}
            `})]})}},66683:(a,t,s)=>{s.d(t,{yW:()=>r,QV:()=>n,D7:()=>Q});const e={gray:"#44546A",blue:"#0194FE",red:"#FE2E46",yellow:"#FFC51D",green:"#7EF84A",aqua:"#00D39D",purple:"#B467F5"};var T=s(51359);function r(a){return e[a]}function n(a,t,s){void 0===t&&(t=0),void 0===s&&(s=20);const e=(a-t)/(s-t),T=Math.max(0,241/360*(1-e)),[r,n,Q]=function(a,t,s){let e,T,r,n,Q,d,l,m;if(0===t)return e=T=r=s,[e,T,r];switch(n=Math.floor(6*a),Q=6*a-n,d=s*(1-t),l=s*(1-Q*t),m=s*(1-(1-Q)*t),n%6){case 0:e=s,T=m,r=d;break;case 1:e=l,T=s,r=d;break;case 2:e=d,T=s,r=m;break;case 3:e=d,T=l,r=s;break;case 4:e=m,T=d,r=s;break;case 5:e=s,T=d,r=l}return[e,T,r]}(T,1,1);return[r,n,Q]}function Q(a,t,s){const e=(0,T.A)(a),r=(0,T.A)(t);return`rgb(${e[0]+(r[0]-e[0])*s}, ${e[1]+(r[1]-e[1])*s}, ${e[2]+(r[2]-e[2])*s})`}}}]);