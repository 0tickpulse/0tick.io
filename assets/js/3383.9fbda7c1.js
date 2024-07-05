"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[3383],{74565:(e,t,n)=>{n.d(t,{M:()=>d});var i=n(60707),r=n(64350),a=n(72185);n(30885);function d(e){var t={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:o(e),edges:l(e)};return i.A(e.graph())||(t.value=r.A(e.graph())),t}function o(e){return a.A(e.nodes(),(function(t){var n=e.node(t),r=e.parent(t),a={v:t};return i.A(n)||(a.value=n),i.A(r)||(a.parent=r),a}))}function l(e){return a.A(e.edges(),(function(t){var n=e.edge(t),r={v:t.v,w:t.w};return i.A(t.name)||(r.name=t.name),i.A(n)||(r.value=n),r}))}},64350:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(29698);const r=function(e){return(0,i.A)(e,4)}},3383:(e,t,n)=>{n.d(t,{r:()=>E});var i=n(69982),r=n(74565),a=n(4807),d=n(62286),o=n(89219),l=n(54149),s=n(74094);let c={},h={},g={};const f=(e,t)=>(d.l.trace("In isDescendant",t," ",e," = ",h[t].includes(e)),!!h[t].includes(e)),u=(e,t,n,i)=>{d.l.warn("Copying children of ",e,"root",i,"data",t.node(e),i);const r=t.children(e)||[];e!==i&&r.push(e),d.l.warn("Copying (nodes) clusterId",e,"nodes",r),r.forEach((r=>{if(t.children(r).length>0)u(r,t,n,i);else{const a=t.node(r);d.l.info("cp ",r," to ",i," with parent ",e),n.setNode(r,a),i!==t.parent(r)&&(d.l.warn("Setting parent",r,t.parent(r)),n.setParent(r,t.parent(r))),e!==i&&r!==e?(d.l.debug("Setting parent",r,e),n.setParent(r,e)):(d.l.info("In copy ",e,"root",i,"data",t.node(e),i),d.l.debug("Not Setting parent for node=",r,"cluster!==rootId",e!==i,"node!==clusterId",r!==e));const o=t.edges(r);d.l.debug("Copying Edges",o),o.forEach((r=>{d.l.info("Edge",r);const a=t.edge(r.v,r.w,r.name);d.l.info("Edge data",a,i);try{((e,t)=>(d.l.info("Descendants of ",t," is ",h[t]),d.l.info("Edge is ",e),e.v!==t&&e.w!==t&&(h[t]?h[t].includes(e.v)||f(e.v,t)||f(e.w,t)||h[t].includes(e.w):(d.l.debug("Tilt, ",t,",not in descendants"),!1))))(r,i)?(d.l.info("Copying as ",r.v,r.w,a,r.name),n.setEdge(r.v,r.w,a,r.name),d.l.info("newGraph edges ",n.edges(),n.edge(n.edges()[0]))):d.l.info("Skipping copy of edge ",r.v,"--\x3e",r.w," rootId: ",i," clusterId:",e)}catch(o){d.l.error(o)}}))}d.l.debug("Removing node",r),t.removeNode(r)}))},w=(e,t)=>{const n=t.children(e);let i=[...n];for(const r of n)g[r]=e,i=[...i,...w(r,t)];return i},p=(e,t)=>{d.l.trace("Searching",e);const n=t.children(e);if(d.l.trace("Searching children of id ",e,n),n.length<1)return d.l.trace("This is a valid node",e),e;for(const i of n){const n=p(i,t);if(n)return d.l.trace("Found replacement for",e," => ",n),n}},v=e=>c[e]&&c[e].externalConnections&&c[e]?c[e].id:e,y=(e,t)=>{if(d.l.warn("extractor - ",t,r.M(e),e.children("D")),t>10)return void d.l.error("Bailing out");let n=e.nodes(),i=!1;for(const r of n){const t=e.children(r);i=i||t.length>0}if(i){d.l.debug("Nodes = ",n,t);for(const i of n)if(d.l.debug("Extracting node",i,c,c[i]&&!c[i].externalConnections,!e.parent(i),e.node(i),e.children("D")," Depth ",t),c[i])if(!c[i].externalConnections&&e.children(i)&&e.children(i).length>0){d.l.warn("Cluster without external connections, without a parent and with children",i,t);let n="TB"===e.graph().rankdir?"LR":"TB";c[i]&&c[i].clusterData&&c[i].clusterData.dir&&(n=c[i].clusterData.dir,d.l.warn("Fixing dir",c[i].clusterData.dir,n));const a=new o.T({multigraph:!0,compound:!0}).setGraph({rankdir:n,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));d.l.warn("Old graph before copy",r.M(e)),u(i,e,a,i),e.setNode(i,{clusterNode:!0,id:i,clusterData:c[i].clusterData,labelText:c[i].labelText,graph:a}),d.l.warn("New graph after copy node: (",i,")",r.M(a)),d.l.debug("Old graph after copy",r.M(e))}else d.l.warn("Cluster ** ",i," **not meeting the criteria !externalConnections:",!c[i].externalConnections," no parent: ",!e.parent(i)," children ",e.children(i)&&e.children(i).length>0,e.children("D"),t),d.l.debug(c);else d.l.debug("Not a cluster",i,t);n=e.nodes(),d.l.warn("New list of nodes",n);for(const i of n){const n=e.node(i);d.l.warn(" Now next level",i,n),n.clusterNode&&y(n.graph,t+1)}}else d.l.debug("Done, no node has children",e.nodes())},x=(e,t)=>{if(0===t.length)return[];let n=Object.assign(t);return t.forEach((t=>{const i=e.children(t),r=x(e,i);n=[...n,...r]})),n},m={rect:(e,t)=>{d.l.info("Creating subgraph rect for ",t.id,t);const n=(0,d.c)(),i=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),r=i.insert("rect",":first-child"),o=(0,d.m)(n.flowchart.htmlLabels),c=i.insert("g").attr("class","cluster-label"),h="markdown"===t.labelType?(0,l.a)(c,t.labelText,{style:t.labelStyle,useHtmlLabels:o}):c.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let g=h.getBBox();if((0,d.m)(n.flowchart.htmlLabels)){const e=h.children[0],t=(0,s.Ltv)(h);g=e.getBoundingClientRect(),t.attr("width",g.width),t.attr("height",g.height)}const f=0*t.padding,u=f/2,w=t.width<=g.width+f?g.width+f:t.width;t.width<=g.width+f?t.diff=(g.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,d.l.trace("Data ",t,JSON.stringify(t)),r.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-w/2).attr("y",t.y-t.height/2-u).attr("width",w).attr("height",t.height+f);const{subGraphTitleTopMargin:p}=(0,a.g)(n);o?c.attr("transform",`translate(${t.x-g.width/2}, ${t.y-t.height/2+p})`):c.attr("transform",`translate(${t.x}, ${t.y-t.height/2+p})`);const v=r.node().getBBox();return t.width=v.width,t.height=v.height,t.intersect=function(e){return(0,a.i)(t,e)},i},roundedWithTitle:(e,t)=>{const n=(0,d.c)(),i=e.insert("g").attr("class",t.classes).attr("id",t.id),r=i.insert("rect",":first-child"),o=i.insert("g").attr("class","cluster-label"),l=i.append("rect"),c=o.node().appendChild((0,a.c)(t.labelText,t.labelStyle,void 0,!0));let h=c.getBBox();if((0,d.m)(n.flowchart.htmlLabels)){const e=c.children[0],t=(0,s.Ltv)(c);h=e.getBoundingClientRect(),t.attr("width",h.width),t.attr("height",h.height)}h=c.getBBox();const g=0*t.padding,f=g/2,u=t.width<=h.width+t.padding?h.width+t.padding:t.width;t.width<=h.width+t.padding?t.diff=(h.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,r.attr("class","outer").attr("x",t.x-u/2-f).attr("y",t.y-t.height/2-f).attr("width",u+g).attr("height",t.height+g),l.attr("class","inner").attr("x",t.x-u/2-f).attr("y",t.y-t.height/2-f+h.height-1).attr("width",u+g).attr("height",t.height+g-h.height-3);const{subGraphTitleTopMargin:w}=(0,a.g)(n);o.attr("transform",`translate(${t.x-h.width/2}, ${t.y-t.height/2-t.padding/3+((0,d.m)(n.flowchart.htmlLabels)?5:3)+w})`);const p=r.node().getBBox();return t.height=p.height,t.intersect=function(e){return(0,a.i)(t,e)},i},noteGroup:(e,t)=>{const n=e.insert("g").attr("class","note-cluster").attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,d=r/2;i.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2-d).attr("width",t.width+r).attr("height",t.height+r).attr("fill","none");const o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.intersect=function(e){return(0,a.i)(t,e)},n},divider:(e,t)=>{const n=e.insert("g").attr("class",t.classes).attr("id",t.id),i=n.insert("rect",":first-child"),r=0*t.padding,d=r/2;i.attr("class","divider").attr("x",t.x-t.width/2-d).attr("y",t.y-t.height/2).attr("width",t.width+r).attr("height",t.height+r);const o=i.node().getBBox();return t.width=o.width,t.height=o.height,t.diff=-t.padding/2,t.intersect=function(e){return(0,a.i)(t,e)},n}};let b={};const C=async(e,t,n,o,l,s)=>{d.l.info("Graph in recursive render: XXX",r.M(t),l);const h=t.graph().rankdir;d.l.trace("Dir in recursive render - dir:",h);const g=e.insert("g").attr("class","root");t.nodes()?d.l.info("Recursive render XXX",t.nodes()):d.l.info("No nodes found for",t),t.edges().length>0&&d.l.trace("Recursive edges",t.edge(t.edges()[0]));const f=g.insert("g").attr("class","clusters"),u=g.insert("g").attr("class","edgePaths"),w=g.insert("g").attr("class","edgeLabels"),v=g.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const i=t.node(e);if(void 0!==l){const n=JSON.parse(JSON.stringify(l.clusterData));d.l.info("Setting data for cluster XXX (",e,") ",n,l),t.setNode(l.id,n),t.parent(e)||(d.l.trace("Setting parent",e,l.id),t.setParent(e,l.id,n))}if(d.l.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),i&&i.clusterNode){d.l.info("Cluster identified",e,i.width,t.node(e));const r=await C(v,i.graph,n,o,t.node(e),s),l=r.elem;(0,a.u)(i,l),i.diff=r.diff||0,d.l.info("Node bounds (abc123)",e,i,i.width,i.x,i.y),(0,a.s)(l,i),d.l.warn("Recursive render complete ",l,i)}else t.children(e).length>0?(d.l.info("Cluster - the non recursive path XXX",e,i.id,i,t),d.l.info(p(i.id,t)),c[i.id]={id:p(i.id,t),node:i}):(d.l.info("Node - the non recursive path",e,i.id,i),await(0,a.e)(v,t.node(e),h))}))),t.edges().forEach((function(e){const n=t.edge(e.v,e.w,e.name);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.l.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),d.l.info("Fix",c,"ids:",e.v,e.w,"Translating: ",c[e.v],c[e.w]),(0,a.f)(w,n)})),t.edges().forEach((function(e){d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),d.l.info("#############################################"),d.l.info("###                Layout                 ###"),d.l.info("#############################################"),d.l.info(t),(0,i.Zp)(t),d.l.info("Graph after layout:",r.M(t));let y=0;const{subGraphTitleTotalMargin:E}=(0,a.g)(s);return(e=>x(e,e.children()))(t).forEach((function(e){const n=t.node(e);d.l.info("Position "+e+": "+JSON.stringify(t.node(e))),d.l.info("Position "+e+": ("+n.x,","+n.y,") width: ",n.width," height: ",n.height),n&&n.clusterNode?(n.y+=E,(0,a.p)(n)):t.children(e).length>0?(n.height+=E,((e,t)=>{d.l.trace("Inserting cluster");const n=t.shape||"rect";b[t.id]=m[n](e,t)})(f,n),c[n.id].node=n):(n.y+=E/2,(0,a.p)(n))})),t.edges().forEach((function(e){const i=t.edge(e);d.l.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach((e=>e.y+=E/2));const r=(0,a.h)(u,e,i,c,n,t,o);(0,a.j)(i,r)})),t.nodes().forEach((function(e){const n=t.node(e);d.l.info(e,n.type,n.diff),"group"===n.type&&(y=n.diff)})),{elem:g,diff:y}},E=async(e,t,n,i,o)=>{(0,a.a)(e,n,i,o),(0,a.b)(),(0,a.d)(),b={},h={},g={},c={},d.l.warn("Graph at first:",JSON.stringify(r.M(t))),((e,t)=>{if(!e||t>10)d.l.debug("Opting out, no graph ");else{d.l.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(d.l.warn("Cluster identified",t," Replacement id in edges: ",p(t,e)),h[t]=w(t,e),c[t]={id:p(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const n=e.children(t),i=e.edges();n.length>0?(d.l.debug("Cluster identified",t,h),i.forEach((e=>{e.v!==t&&e.w!==t&&f(e.v,t)^f(e.w,t)&&(d.l.warn("Edge: ",e," leaves cluster ",t),d.l.warn("Descendants of XXX ",t,": ",h[t]),c[t].externalConnections=!0)}))):d.l.debug("Not a cluster ",t,h)}));for(let t of Object.keys(c)){const n=c[t].id,i=e.parent(n);i!==t&&c[i]&&!c[i].externalConnections&&(c[t].id=i)}e.edges().forEach((function(t){const n=e.edge(t);d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),d.l.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let i=t.v,r=t.w;if(d.l.warn("Fix XXX",c,"ids:",t.v,t.w,"Translating: ",c[t.v]," --- ",c[t.w]),c[t.v]&&c[t.w]&&c[t.v]===c[t.w]){d.l.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=v(t.v),r=v(t.w),e.removeEdge(t.v,t.w,t.name);const a=t.w+"---"+t.v;e.setNode(a,{domId:a,id:a,labelStyle:"",labelText:n.label,padding:0,shape:"labelRect",style:""});const o=structuredClone(n),l=structuredClone(n);o.label="",o.arrowTypeEnd="none",l.label="",o.fromCluster=t.v,l.toCluster=t.v,e.setEdge(i,a,o,t.name+"-cyclic-special"),e.setEdge(a,r,l,t.name+"-cyclic-special")}else if(c[t.v]||c[t.w]){if(d.l.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),i=v(t.v),r=v(t.w),e.removeEdge(t.v,t.w,t.name),i!==t.v){const r=e.parent(i);c[r].externalConnections=!0,n.fromCluster=t.v}if(r!==t.w){const i=e.parent(r);c[i].externalConnections=!0,n.toCluster=t.w}d.l.warn("Fix Replacing with XXX",i,r,t.name),e.setEdge(i,r,n,t.name)}})),d.l.warn("Adjusted Graph",r.M(e)),y(e,0),d.l.trace(c)}})(t),d.l.warn("Graph after:",JSON.stringify(r.M(t)));const l=(0,d.c)();await C(e,t,i,o,void 0,l)}}}]);