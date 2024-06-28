"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[9801],{55628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>T,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(11527),s=t(7463);const r={sidebar_position:3},l="Two-Crystal Ball Problem",i={id:"notes/programming/DSA/Searching/Two Crystal Ball Problem/index",title:"Two-Crystal Ball Problem",description:"Given two crystal balls that will break if dropped from a high-enough distance, determine the exact spot at which it will break in the most optimized way.",source:"@site/docs/notes/programming/DSA/Searching/Two Crystal Ball Problem/index.md",sourceDirName:"notes/programming/DSA/Searching/Two Crystal Ball Problem",slug:"/notes/programming/DSA/Searching/Two Crystal Ball Problem/",permalink:"/notes/programming/DSA/Searching/Two Crystal Ball Problem/",draft:!1,unlisted:!1,editUrl:"https://github.com/0tickpulse/0tick.io/tree/main/docs/notes/programming/DSA/Searching/Two Crystal Ball Problem/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebarNotes",previous:{title:"Binary Search",permalink:"/notes/programming/DSA/Searching/Binary Search/"},next:{title:"Sorting",permalink:"/notes/programming/DSA/Sort/Bubble Sort/"}},o={},d=[{value:"Generalization",id:"generalization",level:2},{value:"Implementation",id:"implementation",level:2}];function Q(e){const n={code:"code",defs:"defs",g:"g",h1:"h1",h2:"h2","mjx-container":"mjx-container",p:"p",path:"path",pre:"pre",rect:"rect",style:"style",svg:"svg",use:"use",...(0,s.a)(),...e.components},t=n["mjx-container"];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"two-crystal-ball-problem",children:"Two-Crystal Ball Problem"}),"\n",(0,a.jsx)(n.p,{children:"Given two crystal balls that will break if dropped from a high-enough distance, determine the exact spot at which it will break in the most optimized way."}),"\n",(0,a.jsx)(n.p,{children:"Sometimes you receive the problem in the context of a building and you need to find the highest floor at which the ball will break."}),"\n",(0,a.jsx)(n.h2,{id:"generalization",children:"Generalization"}),"\n",(0,a.jsxs)(n.p,{children:["The floors can be thought of as an array of booleans, where ",(0,a.jsx)(n.code,{children:"true"})," means the ball will break and ",(0,a.jsx)(n.code,{children:"false"})," means the ball will not break."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"floors [ false false ... true true ... ]\n       |                 |             |\n       0                 |             n\n                         |\n                         i\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If we use linear search and start at 0, we will eventually find the first ",(0,a.jsx)(n.code,{children:"true"})," value.\nBut this doesn't utilize our constraints: we have two balls. The time complexity is ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-1-TEX-I-1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}),(0,a.jsx)(n.path,{id:"MJX-1-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),(0,a.jsx)(n.path,{id:"MJX-1-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}),(0,a.jsx)(n.path,{id:"MJX-1-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsxs)(n.g,{"data-mml-node":"math",children:[(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D442",xlinkHref:"#MJX-1-TEX-I-1D442"})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(763,0)",children:(0,a.jsx)(n.use,{"data-c":"28",xlinkHref:"#MJX-1-TEX-N-28"})}),(0,a.jsx)(n.g,{"data-mml-node":"mi",transform:"translate(1152,0)",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-1-TEX-I-1D45B"})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(1752,0)",children:(0,a.jsx)(n.use,{"data-c":"29",xlinkHref:"#MJX-1-TEX-N-29"})})]})})]})}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["We know that this array is ordered, so we can use binary search to find the first ",(0,a.jsx)(n.code,{children:"true"})," value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"floors [ false false ... floors[i] = true? ... ]\n       |                 |                     |\n       0                 |                     n\n                         |\n                         i = 0.5n\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Well, if it's true, one of the balls broke. We will have to linearly search from 0 to i using the other ball to find the exact spot.\nIf we run ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.249ex",height:"1.557ex",role:"img",focusable:"false",viewBox:"0 -666 1878 688",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-2-TEX-N-30",d:"M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"}),(0,a.jsx)(n.path,{id:"MJX-2-TEX-N-2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"}),(0,a.jsx)(n.path,{id:"MJX-2-TEX-N-35",d:"M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"}),(0,a.jsx)(n.path,{id:"MJX-2-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsxs)(n.g,{"data-mml-node":"math",children:[(0,a.jsxs)(n.g,{"data-mml-node":"mn",children:[(0,a.jsx)(n.use,{"data-c":"30",xlinkHref:"#MJX-2-TEX-N-30"}),(0,a.jsx)(n.use,{"data-c":"2E",xlinkHref:"#MJX-2-TEX-N-2E",transform:"translate(500,0)"}),(0,a.jsx)(n.use,{"data-c":"35",xlinkHref:"#MJX-2-TEX-N-35",transform:"translate(778,0)"})]}),(0,a.jsx)(n.g,{"data-mml-node":"mi",transform:"translate(1278,0)",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-2-TEX-I-1D45B"})})]})})]})})," linear searches, the time complexity is ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.844ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 2141 1000",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-3-TEX-I-1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}),(0,a.jsx)(n.path,{id:"MJX-3-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),(0,a.jsx)(n.path,{id:"MJX-3-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}),(0,a.jsx)(n.path,{id:"MJX-3-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsxs)(n.g,{"data-mml-node":"math",children:[(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D442",xlinkHref:"#MJX-3-TEX-I-1D442"})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(763,0)",children:(0,a.jsx)(n.use,{"data-c":"28",xlinkHref:"#MJX-3-TEX-N-28"})}),(0,a.jsx)(n.g,{"data-mml-node":"mi",transform:"translate(1152,0)",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-3-TEX-I-1D45B"})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(1752,0)",children:(0,a.jsx)(n.use,{"data-c":"29",xlinkHref:"#MJX-3-TEX-N-29"})})]})})]})}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Both of these approaches suck."}),"\n",(0,a.jsxs)(n.p,{children:["The problem is that we are jumping a portion of ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsx)(n.defs,{children:(0,a.jsx)(n.path,{id:"MJX-4-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsx)(n.g,{"data-mml-node":"math",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-4-TEX-I-1D45B"})})})})]})}),". We need to use a fundamentally different unit. For example, we can jump by ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.491ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.287ex",height:"2.398ex",role:"img",focusable:"false",viewBox:"0 -843 1453 1060",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-5-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),(0,a.jsx)(n.path,{id:"MJX-5-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsx)(n.g,{"data-mml-node":"math",children:(0,a.jsxs)(n.g,{"data-mml-node":"msqrt",children:[(0,a.jsx)(n.g,{transform:"translate(853,0)",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-5-TEX-I-1D45B"})})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(0,-17)",children:(0,a.jsx)(n.use,{"data-c":"221A",xlinkHref:"#MJX-5-TEX-N-221A"})}),(0,a.jsx)(n.rect,{width:"600",height:"60",x:"853",y:"723"})]})})})]})}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-plaintext",children:"floors [ f f ... t t t t t t t t t t t t ... t ]\n       |         |         |         |         |\n       0<--------|--------\x3e|--------\x3e|--------\x3en\n                   sqrt(n)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In the worst case, we are running forward at most ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.491ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.287ex",height:"2.398ex",role:"img",focusable:"false",viewBox:"0 -843 1453 1060",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-6-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),(0,a.jsx)(n.path,{id:"MJX-6-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsx)(n.g,{"data-mml-node":"math",children:(0,a.jsxs)(n.g,{"data-mml-node":"msqrt",children:[(0,a.jsx)(n.g,{transform:"translate(853,0)",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-6-TEX-I-1D45B"})})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(0,-17)",children:(0,a.jsx)(n.use,{"data-c":"221A",xlinkHref:"#MJX-6-TEX-N-221A"})}),(0,a.jsx)(n.rect,{width:"600",height:"60",x:"853",y:"723"})]})})})]})})," times, going back, and then linearly searching the last ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.491ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.287ex",height:"2.398ex",role:"img",focusable:"false",viewBox:"0 -843 1453 1060",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-7-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),(0,a.jsx)(n.path,{id:"MJX-7-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsx)(n.g,{"data-mml-node":"math",children:(0,a.jsxs)(n.g,{"data-mml-node":"msqrt",children:[(0,a.jsx)(n.g,{transform:"translate(853,0)",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-7-TEX-I-1D45B"})})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(0,-17)",children:(0,a.jsx)(n.use,{"data-c":"221A",xlinkHref:"#MJX-7-TEX-N-221A"})}),(0,a.jsx)(n.rect,{width:"600",height:"60",x:"853",y:"723"})]})})})]})})," floors."]}),"\n",(0,a.jsxs)(n.p,{children:["So, the time complexity is ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"12.827ex",height:"2.473ex",role:"img",focusable:"false",viewBox:"0 -843 5669.4 1093",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-8-TEX-I-1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}),(0,a.jsx)(n.path,{id:"MJX-8-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),(0,a.jsx)(n.path,{id:"MJX-8-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),(0,a.jsx)(n.path,{id:"MJX-8-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}),(0,a.jsx)(n.path,{id:"MJX-8-TEX-N-2B",d:"M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"}),(0,a.jsx)(n.path,{id:"MJX-8-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsxs)(n.g,{"data-mml-node":"math",children:[(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D442",xlinkHref:"#MJX-8-TEX-I-1D442"})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(763,0)",children:(0,a.jsx)(n.use,{"data-c":"28",xlinkHref:"#MJX-8-TEX-N-28"})}),(0,a.jsxs)(n.g,{"data-mml-node":"msqrt",transform:"translate(1152,0)",children:[(0,a.jsx)(n.g,{transform:"translate(853,0)",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-8-TEX-I-1D45B"})})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(0,-17)",children:(0,a.jsx)(n.use,{"data-c":"221A",xlinkHref:"#MJX-8-TEX-N-221A"})}),(0,a.jsx)(n.rect,{width:"600",height:"60",x:"853",y:"723"})]}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(2827.2,0)",children:(0,a.jsx)(n.use,{"data-c":"2B",xlinkHref:"#MJX-8-TEX-N-2B"})}),(0,a.jsxs)(n.g,{"data-mml-node":"msqrt",transform:"translate(3827.4,0)",children:[(0,a.jsx)(n.g,{transform:"translate(853,0)",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-8-TEX-I-1D45B"})})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(0,-17)",children:(0,a.jsx)(n.use,{"data-c":"221A",xlinkHref:"#MJX-8-TEX-N-221A"})}),(0,a.jsx)(n.rect,{width:"600",height:"60",x:"853",y:"723"})]}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(5280.4,0)",children:(0,a.jsx)(n.use,{"data-c":"29",xlinkHref:"#MJX-8-TEX-N-29"})})]})})]})})," which is ",(0,a.jsx)(t,{className:"MathJax",jax:"SVG",style:{fontSize:"120%"},children:(0,a.jsxs)(n.svg,{style:{verticalAlign:"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.774ex",height:"2.473ex",role:"img",focusable:"false",viewBox:"0 -843 2994 1093",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[(0,a.jsxs)(n.defs,{children:[(0,a.jsx)(n.path,{id:"MJX-9-TEX-I-1D442",d:"M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"}),(0,a.jsx)(n.path,{id:"MJX-9-TEX-N-28",d:"M94 250Q94 319 104 381T127 488T164 576T202 643T244 695T277 729T302 750H315H319Q333 750 333 741Q333 738 316 720T275 667T226 581T184 443T167 250T184 58T225 -81T274 -167T316 -220T333 -241Q333 -250 318 -250H315H302L274 -226Q180 -141 137 -14T94 250Z"}),(0,a.jsx)(n.path,{id:"MJX-9-TEX-N-221A",d:"M95 178Q89 178 81 186T72 200T103 230T169 280T207 309Q209 311 212 311H213Q219 311 227 294T281 177Q300 134 312 108L397 -77Q398 -77 501 136T707 565T814 786Q820 800 834 800Q841 800 846 794T853 782V776L620 293L385 -193Q381 -200 366 -200Q357 -200 354 -197Q352 -195 256 15L160 225L144 214Q129 202 113 190T95 178Z"}),(0,a.jsx)(n.path,{id:"MJX-9-TEX-I-1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"}),(0,a.jsx)(n.path,{id:"MJX-9-TEX-N-29",d:"M60 749L64 750Q69 750 74 750H86L114 726Q208 641 251 514T294 250Q294 182 284 119T261 12T224 -76T186 -143T145 -194T113 -227T90 -246Q87 -249 86 -250H74Q66 -250 63 -250T58 -247T55 -238Q56 -237 66 -225Q221 -64 221 250T66 725Q56 737 55 738Q55 746 60 749Z"})]}),(0,a.jsx)(n.g,{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)",children:(0,a.jsxs)(n.g,{"data-mml-node":"math",children:[(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D442",xlinkHref:"#MJX-9-TEX-I-1D442"})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(763,0)",children:(0,a.jsx)(n.use,{"data-c":"28",xlinkHref:"#MJX-9-TEX-N-28"})}),(0,a.jsxs)(n.g,{"data-mml-node":"msqrt",transform:"translate(1152,0)",children:[(0,a.jsx)(n.g,{transform:"translate(853,0)",children:(0,a.jsx)(n.g,{"data-mml-node":"mi",children:(0,a.jsx)(n.use,{"data-c":"1D45B",xlinkHref:"#MJX-9-TEX-I-1D45B"})})}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(0,-17)",children:(0,a.jsx)(n.use,{"data-c":"221A",xlinkHref:"#MJX-9-TEX-N-221A"})}),(0,a.jsx)(n.rect,{width:"600",height:"60",x:"853",y:"723"})]}),(0,a.jsx)(n.g,{"data-mml-node":"mo",transform:"translate(2605,0)",children:(0,a.jsx)(n.use,{"data-c":"29",xlinkHref:"#MJX-9-TEX-N-29"})})]})})]})}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"fn two_crystal_balls(breaks: &[bool]) -> u8 {\n    let jump_size = (breaks.len() as f64).sqrt() as usize;\n    let mut i = jump_size;\n    while i < breaks.len() {\n        if breaks[i] {\n            break;\n        }\n        i += jump_size;\n    }\n    // linear search from i - jump_size to i\n    for j in (i - jump_size)..i {\n        if breaks[j] {\n            return j as u8;\n        }\n    }\n    unreachable!()\n}\n"})}),"\n",(0,a.jsx)(n.style,{children:'\nmjx-container[jax="SVG"] {\n  direction: ltr;\n}\n\nmjx-container[jax="SVG"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax="SVG"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-container[jax="SVG"][display="true"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax="SVG"][display="true"][width="full"] {\n  display: flex;\n}\n\nmjx-container[jax="SVG"][justify="left"] {\n  text-align: left;\n}\n\nmjx-container[jax="SVG"][justify="right"] {\n  text-align: right;\n}\n\ng[data-mml-node="merror"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node="merror"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node="mtable"] > g > svg {\n  overflow: visible;\n}\n\n[jax="SVG"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax="SVG"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node="maction"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {\n  stroke-width: 3;\n}\n'})]})}function T(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(Q,{...e})}):Q(e)}},7463:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>l});var a=t(50959);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);