"use strict";(self.webpackChunk_0_tick_io=self.webpackChunk_0_tick_io||[]).push([[673],{90673:(t,e,i)=>{i.d(e,{ZU:()=>w});var n=i(95154);const o=new n.tBo,s=new n.Pq0,a=new n.Pq0,r=new n.PTz,h={X:new n.Pq0(1,0,0),Y:new n.Pq0(0,1,0),Z:new n.Pq0(0,0,1)},l={type:"change"},c={type:"mouseDown"},p={type:"mouseUp",mode:null},d={type:"objectChange"};class w extends n.B69{constructor(t,e){super(),void 0===e&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),e=document),this.isTransformControls=!0,this.visible=!1,this.domElement=e,this.domElement.style.touchAction="none";const i=new A;this._gizmo=i,this.add(i);const o=new z;this._plane=o,this.add(o);const s=this;function a(t,e){let n=e;Object.defineProperty(s,t,{get:function(){return void 0!==n?n:e},set:function(e){n!==e&&(n=e,o[t]=e,i[t]=e,s.dispatchEvent({type:t+"-changed",value:e}),s.dispatchEvent(l))}}),s[t]=e,o[t]=e,i[t]=e}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0);const r=new n.Pq0,h=new n.Pq0,c=new n.PTz,p=new n.PTz,d=new n.Pq0,w=new n.PTz,_=new n.Pq0,v=new n.Pq0,M=new n.Pq0,g=new n.Pq0;a("worldPosition",r),a("worldPositionStart",h),a("worldQuaternion",c),a("worldQuaternionStart",p),a("cameraPosition",d),a("cameraQuaternion",w),a("pointStart",_),a("pointEnd",v),a("rotationAxis",M),a("rotationAngle",0),a("eye",g),this._offset=new n.Pq0,this._startNorm=new n.Pq0,this._endNorm=new n.Pq0,this._cameraScale=new n.Pq0,this._parentPosition=new n.Pq0,this._parentQuaternion=new n.PTz,this._parentQuaternionInv=new n.PTz,this._parentScale=new n.Pq0,this._worldScaleStart=new n.Pq0,this._worldQuaternionInv=new n.PTz,this._worldScale=new n.Pq0,this._positionStart=new n.Pq0,this._quaternionStart=new n.PTz,this._scaleStart=new n.Pq0,this._getPointer=m.bind(this),this._onPointerDown=y.bind(this),this._onPointerHover=u.bind(this),this._onPointerMove=P.bind(this),this._onPointerUp=b.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){void 0!==this.object&&(this.object.updateMatrixWorld(),null===this.object.parent?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(t){if(void 0===this.object||!0===this.dragging)return;o.setFromCamera(t,this.camera);const e=_(this._gizmo.picker[this.mode],o);this.axis=e?e.object.name:null}pointerDown(t){if(void 0!==this.object&&!0!==this.dragging&&0===t.button&&null!==this.axis){o.setFromCamera(t,this.camera);const e=_(this._plane,o,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,c.mode=this.mode,this.dispatchEvent(c)}}pointerMove(t){const e=this.axis,i=this.mode,n=this.object;let c=this.space;if("scale"===i?c="local":"E"!==e&&"XYZE"!==e&&"XYZ"!==e||(c="world"),void 0===n||null===e||!1===this.dragging||-1!==t.button)return;o.setFromCamera(t,this.camera);const p=_(this._plane,o,!0);if(p){if(this.pointEnd.copy(p.point).sub(this.worldPositionStart),"translate"===i)this._offset.copy(this.pointEnd).sub(this.pointStart),"local"===c&&"XYZ"!==e&&this._offset.applyQuaternion(this._worldQuaternionInv),-1===e.indexOf("X")&&(this._offset.x=0),-1===e.indexOf("Y")&&(this._offset.y=0),-1===e.indexOf("Z")&&(this._offset.z=0),"local"===c&&"XYZ"!==e?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),n.position.copy(this._offset).add(this._positionStart),this.translationSnap&&("local"===c&&(n.position.applyQuaternion(r.copy(this._quaternionStart).invert()),-1!==e.search("X")&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),-1!==e.search("Y")&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),-1!==e.search("Z")&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.position.applyQuaternion(this._quaternionStart)),"world"===c&&(n.parent&&n.position.add(s.setFromMatrixPosition(n.parent.matrixWorld)),-1!==e.search("X")&&(n.position.x=Math.round(n.position.x/this.translationSnap)*this.translationSnap),-1!==e.search("Y")&&(n.position.y=Math.round(n.position.y/this.translationSnap)*this.translationSnap),-1!==e.search("Z")&&(n.position.z=Math.round(n.position.z/this.translationSnap)*this.translationSnap),n.parent&&n.position.sub(s.setFromMatrixPosition(n.parent.matrixWorld))));else if("scale"===i){if(-1!==e.search("XYZ")){let t=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(t*=-1),a.set(t,t,t)}else s.copy(this.pointStart),a.copy(this.pointEnd),s.applyQuaternion(this._worldQuaternionInv),a.applyQuaternion(this._worldQuaternionInv),a.divide(s),-1===e.search("X")&&(a.x=1),-1===e.search("Y")&&(a.y=1),-1===e.search("Z")&&(a.z=1);n.scale.copy(this._scaleStart).multiply(a),this.scaleSnap&&(-1!==e.search("X")&&(n.scale.x=Math.round(n.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==e.search("Y")&&(n.scale.y=Math.round(n.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),-1!==e.search("Z")&&(n.scale.z=Math.round(n.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if("rotate"===i){this._offset.copy(this.pointEnd).sub(this.pointStart);const t=20/this.worldPosition.distanceTo(s.setFromMatrixPosition(this.camera.matrixWorld));"E"===e?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):"XYZE"===e?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(s.copy(this.rotationAxis).cross(this.eye))*t):"X"!==e&&"Y"!==e&&"Z"!==e||(this.rotationAxis.copy(h[e]),s.copy(h[e]),"local"===c&&s.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(s.cross(this.eye).normalize())*t),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),"local"===c&&"E"!==e&&"XYZE"!==e?(n.quaternion.copy(this._quaternionStart),n.quaternion.multiply(r.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),n.quaternion.copy(r.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),n.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(l),this.dispatchEvent(d)}}pointerUp(t){0===t.button&&(this.dragging&&null!==this.axis&&(p.mode=this.mode,this.dispatchEvent(p)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse((function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}attach(t){return this.object=t,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(l),this.dispatchEvent(d),this.pointStart.copy(this.pointEnd))}getRaycaster(){return o}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}}function m(t){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:t.button};{const e=this.domElement.getBoundingClientRect();return{x:(t.clientX-e.left)/e.width*2-1,y:-(t.clientY-e.top)/e.height*2+1,button:t.button}}}function u(t){if(this.enabled)switch(t.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(t))}}function y(t){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(t)),this.pointerDown(this._getPointer(t)))}function P(t){this.enabled&&this.pointerMove(this._getPointer(t))}function b(t){this.enabled&&(this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(t)))}function _(t,e,i){const n=e.intersectObject(t,!0);for(let o=0;o<n.length;o++)if(n[o].object.visible||i)return n[o];return!1}const v=new n.O9p,M=new n.Pq0(0,1,0),g=new n.Pq0(0,0,0),S=new n.kn4,x=new n.PTz,f=new n.PTz,F=new n.Pq0,E=new n.kn4,I=new n.Pq0(1,0,0),q=new n.Pq0(0,1,0),Y=new n.Pq0(0,0,1),X=new n.Pq0,Q=new n.Pq0,Z=new n.Pq0;class A extends n.B69{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new n.V9B({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new n.mrM({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=t.clone();i.opacity=.15;const o=e.clone();o.opacity=.5;const s=t.clone();s.color.setHex(16711680);const a=t.clone();a.color.setHex(65280);const r=t.clone();r.color.setHex(255);const h=t.clone();h.color.setHex(16711680),h.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const c=t.clone();c.color.setHex(255),c.opacity=.5;const p=t.clone();p.opacity=.25;const d=t.clone();d.color.setHex(16776960),d.opacity=.25;t.clone().color.setHex(16776960);const w=t.clone();w.color.setHex(7895160);const m=new n.Ho_(0,.04,.1,12);m.translate(0,.05,0);const u=new n.iNn(.08,.08,.08);u.translate(0,.04,0);const y=new n.LoY;y.setAttribute("position",new n.qtW([0,0,0,1,0,0],3));const P=new n.Ho_(.0075,.0075,.5,3);function b(t,e){const i=new n.O3Y(t,.0075,3,64,e*Math.PI*2);return i.rotateY(Math.PI/2),i.rotateX(Math.PI/2),i}P.translate(0,.25,0);const _={X:[[new n.eaF(m,s),[.5,0,0],[0,0,-Math.PI/2]],[new n.eaF(m,s),[-.5,0,0],[0,0,Math.PI/2]],[new n.eaF(P,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new n.eaF(m,a),[0,.5,0]],[new n.eaF(m,a),[0,-.5,0],[Math.PI,0,0]],[new n.eaF(P,a)]],Z:[[new n.eaF(m,r),[0,0,.5],[Math.PI/2,0,0]],[new n.eaF(m,r),[0,0,-.5],[-Math.PI/2,0,0]],[new n.eaF(P,r),null,[Math.PI/2,0,0]]],XYZ:[[new n.eaF(new n.Ufg(.1,0),p.clone()),[0,0,0]]],XY:[[new n.eaF(new n.iNn(.15,.15,.01),c.clone()),[.15,.15,0]]],YZ:[[new n.eaF(new n.iNn(.15,.15,.01),h.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new n.eaF(new n.iNn(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},v={X:[[new n.eaF(new n.Ho_(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new n.eaF(new n.Ho_(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,.3,0]],[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new n.eaF(new n.Ufg(.2,0),i)]],XY:[[new n.eaF(new n.iNn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new n.eaF(new n.iNn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new n.eaF(new n.iNn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]]},M={START:[[new n.eaF(new n.Ufg(.01,2),o),null,null,null,"helper"]],END:[[new n.eaF(new n.Ufg(.01,2),o),null,null,null,"helper"]],DELTA:[[new n.N1A(function(){const t=new n.LoY;return t.setAttribute("position",new n.qtW([0,0,0,1,1,1],3)),t}(),o),null,null,null,"helper"]],X:[[new n.N1A(y,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new n.N1A(y,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new n.N1A(y,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},g={XYZE:[[new n.eaF(b(.5,1),w),null,[0,Math.PI/2,0]]],X:[[new n.eaF(b(.5,.5),s)]],Y:[[new n.eaF(b(.5,.5),a),null,[0,0,-Math.PI/2]]],Z:[[new n.eaF(b(.5,.5),r),null,[0,Math.PI/2,0]]],E:[[new n.eaF(b(.75,1),d),null,[0,Math.PI/2,0]]]},S={AXIS:[[new n.N1A(y,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},x={XYZE:[[new n.eaF(new n.Gu$(.25,10,8),i)]],X:[[new n.eaF(new n.O3Y(.5,.1,4,24),i),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new n.eaF(new n.O3Y(.5,.1,4,24),i),[0,0,0],[Math.PI/2,0,0]]],Z:[[new n.eaF(new n.O3Y(.5,.1,4,24),i),[0,0,0],[0,0,-Math.PI/2]]],E:[[new n.eaF(new n.O3Y(.75,.1,2,24),i)]]},f={X:[[new n.eaF(u,s),[.5,0,0],[0,0,-Math.PI/2]],[new n.eaF(P,s),[0,0,0],[0,0,-Math.PI/2]],[new n.eaF(u,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new n.eaF(u,a),[0,.5,0]],[new n.eaF(P,a)],[new n.eaF(u,a),[0,-.5,0],[0,0,Math.PI]]],Z:[[new n.eaF(u,r),[0,0,.5],[Math.PI/2,0,0]],[new n.eaF(P,r),[0,0,0],[Math.PI/2,0,0]],[new n.eaF(u,r),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new n.eaF(new n.iNn(.15,.15,.01),c),[.15,.15,0]]],YZ:[[new n.eaF(new n.iNn(.15,.15,.01),h),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new n.eaF(new n.iNn(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new n.eaF(new n.iNn(.1,.1,.1),p.clone())]]},F={X:[[new n.eaF(new n.Ho_(.2,0,.6,4),i),[.3,0,0],[0,0,-Math.PI/2]],[new n.eaF(new n.Ho_(.2,0,.6,4),i),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,.3,0]],[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,-.3,0],[0,0,Math.PI]]],Z:[[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,0,.3],[Math.PI/2,0,0]],[new n.eaF(new n.Ho_(.2,0,.6,4),i),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new n.eaF(new n.iNn(.2,.2,.01),i),[.15,.15,0]]],YZ:[[new n.eaF(new n.iNn(.2,.2,.01),i),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new n.eaF(new n.iNn(.2,.2,.01),i),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new n.eaF(new n.iNn(.2,.2,.2),i),[0,0,0]]]},E={X:[[new n.N1A(y,o.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new n.N1A(y,o.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new n.N1A(y,o.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function I(t){const e=new n.B69;for(const i in t)for(let n=t[i].length;n--;){const o=t[i][n][0].clone(),s=t[i][n][1],a=t[i][n][2],r=t[i][n][3],h=t[i][n][4];o.name=i,o.tag=h,s&&o.position.set(s[0],s[1],s[2]),a&&o.rotation.set(a[0],a[1],a[2]),r&&o.scale.set(r[0],r[1],r[2]),o.updateMatrix();const l=o.geometry.clone();l.applyMatrix4(o.matrix),o.geometry=l,o.renderOrder=1/0,o.position.set(0,0,0),o.rotation.set(0,0,0),o.scale.set(1,1,1),e.add(o)}return e}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=I(_)),this.add(this.gizmo.rotate=I(g)),this.add(this.gizmo.scale=I(f)),this.add(this.picker.translate=I(v)),this.add(this.picker.rotate=I(x)),this.add(this.picker.scale=I(F)),this.add(this.helper.translate=I(M)),this.add(this.helper.rotate=I(S)),this.add(this.helper.scale=I(E)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const e="local"===("scale"===this.mode?"local":this.space)?this.worldQuaternion:f;this.gizmo.translate.visible="translate"===this.mode,this.gizmo.rotate.visible="rotate"===this.mode,this.gizmo.scale.visible="scale"===this.mode,this.helper.translate.visible="translate"===this.mode,this.helper.rotate.visible="rotate"===this.mode,this.helper.scale.visible="scale"===this.mode;let i=[];i=i.concat(this.picker[this.mode].children),i=i.concat(this.gizmo[this.mode].children),i=i.concat(this.helper[this.mode].children);for(let n=0;n<i.length;n++){const t=i[n];let o;if(t.visible=!0,t.rotation.set(0,0,0),t.position.copy(this.worldPosition),o=this.camera.isOrthographicCamera?(this.camera.top-this.camera.bottom)/this.camera.zoom:this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),t.scale.set(1,1,1).multiplyScalar(o*this.size/4),"helper"!==t.tag){if(t.quaternion.copy(e),"translate"===this.mode||"scale"===this.mode){const i=.99,n=.2;"X"===t.name&&Math.abs(M.copy(I).applyQuaternion(e).dot(this.eye))>i&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),"Y"===t.name&&Math.abs(M.copy(q).applyQuaternion(e).dot(this.eye))>i&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),"Z"===t.name&&Math.abs(M.copy(Y).applyQuaternion(e).dot(this.eye))>i&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),"XY"===t.name&&Math.abs(M.copy(Y).applyQuaternion(e).dot(this.eye))<n&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),"YZ"===t.name&&Math.abs(M.copy(I).applyQuaternion(e).dot(this.eye))<n&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1),"XZ"===t.name&&Math.abs(M.copy(q).applyQuaternion(e).dot(this.eye))<n&&(t.scale.set(1e-10,1e-10,1e-10),t.visible=!1)}else"rotate"===this.mode&&(x.copy(e),M.copy(this.eye).applyQuaternion(r.copy(e).invert()),-1!==t.name.search("E")&&t.quaternion.setFromRotationMatrix(S.lookAt(this.eye,g,q)),"X"===t.name&&(r.setFromAxisAngle(I,Math.atan2(-M.y,M.z)),r.multiplyQuaternions(x,r),t.quaternion.copy(r)),"Y"===t.name&&(r.setFromAxisAngle(q,Math.atan2(M.x,M.z)),r.multiplyQuaternions(x,r),t.quaternion.copy(r)),"Z"===t.name&&(r.setFromAxisAngle(Y,Math.atan2(M.y,M.x)),r.multiplyQuaternions(x,r),t.quaternion.copy(r)));t.visible=t.visible&&(-1===t.name.indexOf("X")||this.showX),t.visible=t.visible&&(-1===t.name.indexOf("Y")||this.showY),t.visible=t.visible&&(-1===t.name.indexOf("Z")||this.showZ),t.visible=t.visible&&(-1===t.name.indexOf("E")||this.showX&&this.showY&&this.showZ),t.material._color=t.material._color||t.material.color.clone(),t.material._opacity=t.material._opacity||t.material.opacity,t.material.color.copy(t.material._color),t.material.opacity=t.material._opacity,this.enabled&&this.axis&&(t.name===this.axis||this.axis.split("").some((function(e){return t.name===e})))&&(t.material.color.setHex(16776960),t.material.opacity=1)}else t.visible=!1,"AXIS"===t.name?(t.visible=!!this.axis,"X"===this.axis&&(r.setFromEuler(v.set(0,0,0)),t.quaternion.copy(e).multiply(r),Math.abs(M.copy(I).applyQuaternion(e).dot(this.eye))>.9&&(t.visible=!1)),"Y"===this.axis&&(r.setFromEuler(v.set(0,0,Math.PI/2)),t.quaternion.copy(e).multiply(r),Math.abs(M.copy(q).applyQuaternion(e).dot(this.eye))>.9&&(t.visible=!1)),"Z"===this.axis&&(r.setFromEuler(v.set(0,Math.PI/2,0)),t.quaternion.copy(e).multiply(r),Math.abs(M.copy(Y).applyQuaternion(e).dot(this.eye))>.9&&(t.visible=!1)),"XYZE"===this.axis&&(r.setFromEuler(v.set(0,Math.PI/2,0)),M.copy(this.rotationAxis),t.quaternion.setFromRotationMatrix(S.lookAt(g,M,q)),t.quaternion.multiply(r),t.visible=this.dragging),"E"===this.axis&&(t.visible=!1)):"START"===t.name?(t.position.copy(this.worldPositionStart),t.visible=this.dragging):"END"===t.name?(t.position.copy(this.worldPosition),t.visible=this.dragging):"DELTA"===t.name?(t.position.copy(this.worldPositionStart),t.quaternion.copy(this.worldQuaternionStart),s.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),s.applyQuaternion(this.worldQuaternionStart.clone().invert()),t.scale.copy(s),t.visible=this.dragging):(t.quaternion.copy(e),this.dragging?t.position.copy(this.worldPositionStart):t.position.copy(this.worldPosition),this.axis&&(t.visible=-1!==this.axis.search(t.name)))}super.updateMatrixWorld(t)}}class z extends n.eaF{constructor(){super(new n.bdM(1e5,1e5,2,2),new n.V9B({visible:!1,wireframe:!0,side:n.$EB,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),"scale"===this.mode&&(e="local"),X.copy(I).applyQuaternion("local"===e?this.worldQuaternion:f),Q.copy(q).applyQuaternion("local"===e?this.worldQuaternion:f),Z.copy(Y).applyQuaternion("local"===e?this.worldQuaternion:f),M.copy(Q),this.mode){case"translate":case"scale":switch(this.axis){case"X":M.copy(this.eye).cross(X),F.copy(X).cross(M);break;case"Y":M.copy(this.eye).cross(Q),F.copy(Q).cross(M);break;case"Z":M.copy(this.eye).cross(Z),F.copy(Z).cross(M);break;case"XY":F.copy(Z);break;case"YZ":F.copy(X);break;case"XZ":M.copy(Z),F.copy(Q);break;case"XYZ":case"E":F.set(0,0,0)}break;default:F.set(0,0,0)}0===F.length()?this.quaternion.copy(this.cameraQuaternion):(E.lookAt(s.set(0,0,0),F,M),this.quaternion.setFromRotationMatrix(E)),super.updateMatrixWorld(t)}}}}]);