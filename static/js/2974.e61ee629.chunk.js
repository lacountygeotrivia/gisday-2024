"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[2974],{8229:(e,t,s)=>{function i(){return new Float32Array(3)}function n(e,t,s){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=s,i}function r(){return i()}function o(){return n(1,1,1)}function a(){return n(1,0,0)}function l(){return n(0,1,0)}function h(){return n(0,0,1)}s.d(t,{c:()=>i,f:()=>n});const u=r(),p=o(),d=a(),c=l(),y=h();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:function(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t},fromValues:n,createView:function(e,t){return new Float32Array(e,t,3)},zeros:r,ones:o,unitX:a,unitY:l,unitZ:h,ZEROS:u,ONES:p,UNIT_X:d,UNIT_Y:c,UNIT_Z:y},Symbol.toStringTag,{value:"Module"}))},47991:(e,t,s)=>{s.d(t,{SR:()=>p,Ui:()=>u});var i=s(92026),n=s(65156),r=s(376),o=s(69662),a=s(77981),l=s(76335),h=s(92975);function u(e){return d(e,!0)}function p(e){return d(e,!1)}function d(e,t){if((0,i.Wi)(e))return null;const s=e.spatialReference,n=(0,h.C5)(s),o="toJSON"in e?e.toJSON():e;if(!n)return o;const u=(0,h.sS)(s)?102100:4326,p=l.UZ[u].maxX,d=l.UZ[u].minX;if((0,a.wp)(o))return y(o,p,d);if((0,a.aW)(o))return o.points=o.points.map((e=>y(e,p,d))),o;if((0,a.YX)(o))return c(o,n);if((0,a.oU)(o)||(0,a.l9)(o)){const e=(0,r.$P)(x,o),s={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},i=(0,l.XZ)(s.xmin,d)*(2*p),n=0===i?o:(0,l.Sy)(o,i);return s.xmin+=i,s.xmax+=i,s.xmax>p?v(n,p,t):s.xmin<d?v(n,d,t):n}return o}function c(e,t){if(!t)return e;const s=function(e,t){const s=[],{ymin:i,ymax:n,xmin:r,xmax:o}=e,a=e.xmax-e.xmin,[l,h]=t.valid,{x:u,frameId:p}=m(e.xmin,t),{x:d,frameId:c}=m(e.xmax,t),y=u===d&&a>0;if(a>2*h){const e={xmin:r<o?u:d,ymin:i,xmax:h,ymax:n},t={xmin:l,ymin:i,xmax:r<o?d:u,ymax:n},a={xmin:0,ymin:i,xmax:h,ymax:n},y={xmin:l,ymin:i,xmax:0,ymax:n},m=[],_=[];f(e,a)&&m.push(p),f(e,y)&&_.push(p),f(t,a)&&m.push(c),f(t,y)&&_.push(c);for(let s=p+1;s<c;s++)m.push(s),_.push(s);s.push(new g(e,[p]),new g(t,[c]),new g(a,m),new g(y,_))}else u>d||y?s.push(new g({xmin:u,ymin:i,xmax:h,ymax:n},[p]),new g({xmin:l,ymin:i,xmax:d,ymax:n},[c])):s.push(new g({xmin:u,ymin:i,xmax:d,ymax:n},[p]));return s}(e,t).map((e=>e.extent));return s.length<2?s[0]||e:s.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:s.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function y(e,t,s){if(Array.isArray(e)){const i=e[0];if(i>t){const s=(0,l.XZ)(i,t);e[0]=i+s*(-2*t)}else if(i<s){const t=(0,l.XZ)(i,s);e[0]=i+t*(-2*s)}}else{const i=e.x;if(i>t){const s=(0,l.XZ)(i,t);e.x+=s*(-2*t)}else if(i<s){const t=(0,l.XZ)(i,s);e.x+=t*(-2*s)}}return e}function m(e,t){const[s,i]=t.valid,n=2*i;let r,o=0;return e>i?(r=Math.ceil(Math.abs(e-i)/n),e-=r*n,o=r):e<s&&(r=Math.ceil(Math.abs(e-s)/n),e+=r*n,o=-r),{x:e,frameId:o}}function f(e,t){const{xmin:s,ymin:i,xmax:n,ymax:r}=t;return _(e,s,i)&&_(e,s,r)&&_(e,n,r)&&_(e,n,i)}function _(e,t,s){return t>=e.xmin&&t<=e.xmax&&s>=e.ymin&&s<=e.ymax}function v(e,t){let s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=!(0,a.l9)(e);if(i&&(0,o.Zy)(e),s)return(new w).cut(e,t);const n=i?e.rings:e.paths,r=i?4:2,l=n.length,h=-2*t;for(let o=0;o<l;o++){const e=n[o];if(e&&e.length>=r){const t=[];for(const s of e)t.push([s[0]+h,s[1]]);n.push(t)}}return i?e.rings=n:e.paths=n,e}class g{constructor(e,t){this.extent=e,this.frameIds=t}}const x=(0,n.Ue)();class w{constructor(){this.linesIn=[],this.linesOut=[]}cut(e,t){let s;if(this.xCut=t,e.rings)this.closed=!0,s=e.rings,this.minPts=4;else{if(!e.paths)return null;this.closed=!1,s=e.paths,this.minPts=2}for(const n of s){if(!n||n.length<this.minPts)continue;let e=!0;for(const t of n)e?(this.moveTo(t),e=!1):this.lineTo(t);this.closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(const n of this.linesIn)n&&n.length>=this.minPts&&s.push(n);const i=-2*this.xCut;for(const n of this.linesOut)if(n&&n.length>=this.minPts){for(const e of n)e[0]+=i;s.push(n)}return this.closed?e.rings=s:e.paths=s,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const s=this._intersect(this._prevPt,e);this._lineTo(this.xCut,s,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this.lineIn),this._checkClosingPt(this.lineOut)}_moveTo(e,t,s){this.closed?(this.lineIn.push([s<=0?e:this.xCut,t]),this.lineOut.push([s>=0?e:this.xCut,t])):(s<=0&&this.lineIn.push([e,t]),s>=0&&this.lineOut.push([e,t]))}_lineTo(e,t,s){this.closed?(this._addPolyVertex(this.lineIn,s<=0?e:this.xCut,t),this._addPolyVertex(this.lineOut,s>=0?e:this.xCut,t)):s<0?(0===this._prevSide&&this._pushLineOut(),this.lineIn.push([e,t])):s>0?(0===this._prevSide&&this._pushLineIn(),this.lineOut.push([e,t])):this._prevSide<0?(this.lineIn.push([e,t]),this.lineOut.push([e,t])):this._prevSide>0&&(this.lineOut.push([e,t]),this.lineIn.push([e,t]))}_addPolyVertex(e,t,s){const i=e.length;i>1&&e[i-1][0]===t&&e[i-2][0]===t?e[i-1][1]=s:e.push([t,s])}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this.xCut&&e[t-2][0]===this.xCut&&e[1][0]===this.xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this.xCut?-1:e>this.xCut?1:0}_intersect(e,t){const s=(this.xCut-e[0])/(t[0]-e[0]);return e[1]+s*(t[1]-e[1])}_pushLineIn(){this.lineIn&&this.lineIn.length>=this.minPts&&this.linesIn.push(this.lineIn),this.lineIn=[]}_pushLineOut(){this.lineOut&&this.lineOut.length>=this.minPts&&this.linesOut.push(this.lineOut),this.lineOut=[]}}},95986:(e,t,s)=>{s.d(t,{y:()=>I});var i=s(27366),n=s(40281),r=s(60354),o=s(10064),a=s(94172),l=s(49861),h=(s(63780),s(93169),s(25243),s(69912)),u=s(33624),p=s(46784);s(32718),s(75366);let d=class extends p.wq{};d=(0,i._)([(0,h.j)("esri.views.layers.support.ClipArea")],d);const c=d;var y;let m=y=class extends c{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),(0,i._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],m.prototype,"version",null),m=y=(0,i._)([(0,h.j)("esri.views.layers.support.ClipRect")],m);const f=m;s(59486);var _,v=s(32238),g=s(77981),x=s(53866),w=s(80885);const b={base:v.Z,key:"type",typeMap:{extent:x.Z,polygon:w.Z}};let C=_=class extends c{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new _({geometry:this.geometry.clone()})}};(0,i._)([(0,l.Cb)({types:b,json:{read:g.im,write:!0}})],C.prototype,"geometry",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],C.prototype,"version",null),C=_=(0,i._)([(0,h.j)("esri.views.layers.support.Geometry")],C);const R=C;let S=class extends c{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,i._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],S.prototype,"path",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],S.prototype,"version",null),S=(0,i._)([(0,h.j)("esri.views.layers.support.Path")],S);const O=S,P=n.Z.ofType({key:"type",base:c,typeMap:{rect:f,path:O,geometry:R}}),I=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new P,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,a.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.tX),(0,a.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),a.tX),(0,a.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.tX),(0,a.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.tX),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return(0===s||e<=s)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}};return(0,i._)([(0,l.Cb)()],t.prototype,"attached",void 0),(0,i._)([(0,l.Cb)({type:P,set(e){const t=(0,r.Z)(e,this._get("clips"),P);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"container",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"moving",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updateRequested",void 0),(0,i._)([(0,l.Cb)()],t.prototype,"updating",null),(0,i._)([(0,l.Cb)()],t.prototype,"view",void 0),(0,i._)([(0,l.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,i._)([(0,h.j)("esri.views.2d.layers.LayerView2D")],t),t}},12974:(e,t,s)=>{s.r(t),s.d(t,{default:()=>H});var i=s(27366),n=(s(59486),s(40281)),r=s(32718),o=s(77427),a=s(92026),l=s(66978),h=s(94172),u=s(49861),p=(s(63780),s(93169),s(25243),s(69912)),d=s(65156),c=s(34066),y=s(85015),m=s(80885),f=s(52587),_=s(47991);let v=class extends y.Z{constructor(e){super(e)}get bounds(){const e=this.coords;return(0,a.Wi)(e)?null:(0,d.oJ)(e.extent)}get coords(){const e=(0,a.Wg)(this.element.georeference)?.coords;return(0,f.dz)(e,this.spatialReference).geometry}get normalizedCoords(){return m.Z.fromJSON((0,_.Ui)(this.coords))}get normalizedBounds(){return(0,a.pC)(this.normalizedCoords)?(0,d.oJ)(this.normalizedCoords.extent):null}};(0,i._)([(0,u.Cb)()],v.prototype,"spatialReference",void 0),(0,i._)([(0,u.Cb)()],v.prototype,"element",void 0),(0,i._)([(0,u.Cb)()],v.prototype,"bounds",null),(0,i._)([(0,u.Cb)()],v.prototype,"coords",null),(0,i._)([(0,u.Cb)()],v.prototype,"normalizedCoords",null),(0,i._)([(0,u.Cb)()],v.prototype,"normalizedBounds",null),v=(0,i._)([(0,p.j)("esri.layers.support.media.MediaElementView")],v);s(5131),s(37995),s(73828);var g=s(32344),x=s(85269),w=s(10064),b=s(98928),C=s(16889),R=s(87422),S=s(44070),O=s(8548),P=s(51378),I=s(45412),M=s(30308);class T extends R.s{constructor(e){super(),this.elementView=e,this.isWrapAround=!1,this._vertices=new Float32Array(20),this._handles=[],this._handles.push((0,h.YP)((()=>this.elementView.element.opacity),(e=>this.opacity=e),h.nn),(0,h.YP)((()=>[this.elementView.coords]),(()=>{this.requestRender()}),h.nn),(0,h.gx)((()=>this.elementView.element.loaded),(()=>{const e=this.elementView.element;this.ready(),"video"===e.type&&(0,a.pC)(e.content)&&this._handles.push((0,b.on)(e.content,"play",(()=>this.requestRender())))}),h.nn)),e.element.load().catch((t=>{r.Z.getLogger("esri.views.2d.layers.MediaLayerView2D").error(new w.Z("element-load-error","Element cannot be displayed",{element:e,error:t}))}))}destroy(){this._handles.forEach((e=>e.remove())),this.texture?.dispose(),this.texture=null}get dvsMat3(){return this.parent.dvsMat3}beforeRender(e){const{context:t}=e,s=this.elementView.element.content;if((0,a.pC)(s)){const e=s instanceof HTMLImageElement,i=s instanceof HTMLVideoElement,n=e?s.naturalWidth:i?s.videoWidth:s.width,r=e?s.naturalHeight:i?s.videoHeight:s.height;this.texture?i&&!s.paused&&(this.texture.setData(s),this.requestRender(),((0,M.Z)(t.gl)||(0,C.wt)(n)&&(0,C.wt)(r))&&this.texture.generateMipmap()):(this.texture=new P.x(t,{pixelFormat:O.VI.RGBA,dataType:O.Br.UNSIGNED_BYTE,samplingMode:O.cw.LINEAR,wrapMode:O.e8.CLAMP_TO_EDGE,width:n,height:r},s),((0,M.Z)(t.gl)||(0,C.wt)(n)&&(0,C.wt)(r))&&this.texture.generateMipmap(),i&&!s.paused&&this.requestRender())}super.beforeRender(e)}_createTransforms(){return null}updateDrawCoords(e,t){const s=this.elementView.coords;if((0,a.Wi)(s))return;const[i,n,r,o]=s.rings[0],l=this._vertices,{x:h,y:u}=e,p=0!==t;p?l.set([n[0]-h,n[1]-u,i[0]-h,i[1]-u,r[0]-h,r[1]-u,o[0]-h,o[1]-u,o[0]-h,o[1]-u,n[0]+t-h,n[1]-u,n[0]+t-h,n[1]-u,i[0]+t-h,i[1]-u,r[0]+t-h,r[1]-u,o[0]+t-h,o[1]-u]):l.set([n[0]-h,n[1]-u,i[0]-h,i[1]-u,r[0]-h,r[1]-u,o[0]-h,o[1]-u]),this.isWrapAround=p}getVAO(e,t,s){if((0,a.Wi)(this.elementView.coords))return null;const i=this._vertices;if(this._vao)this._geometryVbo.setData(i);else{this._geometryVbo=S.f.createVertex(e,O.l1.DYNAMIC_DRAW,i);const n=S.f.createVertex(e,O.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1]));this._vao=new I.U(e,s,t,{geometry:this._geometryVbo,tex:n})}return this._vao}}var q=s(17842),A=s(22753),Z=s(23588),V=s(15245),E=s(8229),U=s(50689),L=s(92975),j=s(86226),W=s(53628),D=s(80613),N=s(64510);class z extends N.Z{constructor(){super(...arguments),this._localOrigin=(0,q.vW)(0,0),this._viewStateId=-1,this._dvsMat3=(0,Z.c)(),this.requiresDedicatedFBO=!1}get dvsMat3(){return this._dvsMat3}beforeRender(e){this._updateMatrices(e),this._updateOverlays(e,this.children);for(const t of this.children)t.beforeRender(e)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"overlay",brushes:[W.U.overlay],target:()=>this.children,drawPhase:D.jx.MAP});return[...super.prepareRenderPasses(e),t]}_updateMatrices(e){const{state:t}=e,{id:s,size:i,pixelRatio:n,resolution:r,rotation:o,viewpoint:a,displayMat3:l}=t;if(this._viewStateId===s)return;const h=Math.PI/180*o,u=n*i[0],p=n*i[1],{x:d,y:c}=a.targetGeometry,y=(0,U.or)(d,t.spatialReference);this._localOrigin.x=y,this._localOrigin.y=c;const m=r*u,f=r*p,_=(0,A.b)(this._dvsMat3);(0,A.m)(_,_,l),(0,A.c)(_,_,(0,V.f)(u/2,p/2)),(0,A.d)(_,_,(0,E.f)(u/m,-p/f,1)),(0,A.r)(_,_,-h),this._viewStateId=s}_updateOverlays(e,t){const{state:s}=e,{rotation:i,spatialReference:n,worldScreenWidth:r,size:o,viewpoint:l}=s,h=this._localOrigin;let u=0;if(n.isWrappable){const e=o[0],p=o[1],d=180/Math.PI*i,c=Math.abs(Math.cos(d)),y=Math.abs(Math.sin(d)),m=Math.round(e*c+p*y),[f,_]=(0,L.C5)(n).valid,v=(0,j.ut)(n),{x:g,y:x}=l.targetGeometry,w=[g,x],b=[0,0];s.toScreen(b,w);const C=[0,0];let R;R=m>r?.5*r:.5*m;const S=Math.floor((g+.5*v)/v),O=f+S*v,P=_+S*v,I=[b[0]+R,0];s.toMap(C,I),C[0]>P&&(u=v),I[0]=b[0]-R,s.toMap(C,I),C[0]<O&&(u=-v);for(const s of t){const e=s.elementView.bounds;if((0,a.Wi)(e))continue;const[t,,i]=e;t<f&&i>f?s.updateDrawCoords(h,v):i>_&&t<_?s.updateDrawCoords(h,-v):s.updateDrawCoords(h,u)}}else for(const a of t)a.updateDrawCoords(h,u)}}var X=s(95986),k=s(67581),Y=s(53866);let F=class extends((0,X.y)(k.Z)){constructor(){super(...arguments),this._overlayContainer=null,this._fetchQueue=null,this._tileStrategy=null,this._elementReferences=new Map,this.layer=null,this.elements=new n.Z}attach(){this.handles.add((0,h.on)((()=>this.layer.source),"refresh",(()=>{for(const e of this._tileStrategy.tiles)this._updateTile(e);this.requestUpdate()}))),this._overlayContainer=new z,this.container.addChild(this._overlayContainer),this._fetchQueue=new g.Z({tileInfoView:this.view.featuresTilingScheme,concurrency:10,process:(e,t)=>this._queryElements(e,t)}),this._tileStrategy=new x.Z({cachePolicy:"purge",resampling:!0,acquireTile:e=>this._acquireTile(e),releaseTile:e=>this._releaseTile(e),tileInfoView:this.view.featuresTilingScheme}),this.requestUpdate()}detach(){this.handles.removeAll(),this.elements.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.destroy(),this._overlayContainer.removeAllChildren(),this.container.removeAllChildren(),this._elementReferences.clear()}supportsSpatialReference(e){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(e){this._tileStrategy.update(e)}async hitTest(e,t){const s=[],i=[e.x,e.y];for(const n of this.elements){const t=(0,a.Wg)(n.georeference)?.coords;(0,a.pC)(t)&&(0,c.wP)(t.rings,i)&&s.push({type:"media",element:n,layer:this.layer,mapPoint:e})}return s.reverse()}canResume(){return null!=this.layer.source&&super.canResume()}async doRefresh(){}_acquireTile(e){const t=new G(e.clone());return this._updateTile(t),t}_updateTile(e){this.updatingHandles.addPromise(this._fetchQueue.push(e.key).then((t=>{const[s,i]=e.setElements(t);this._acquireElements(e,s),this._releaseElements(e,i),this.requestUpdate()}),(e=>{(0,l.D_)(e)||r.Z.getLogger(this.declaredClass).error(e)})))}_releaseTile(e){this._fetchQueue.abort(e.key.id),e.elements&&this._releaseElements(e,e.elements),this.requestUpdate()}async _queryElements(e,t){const s=this.layer.source;if((0,a.Wi)(s))return[];this.view.featuresTilingScheme.getTileBounds(B,e,!0);const i=new Y.Z({xmin:B[0],ymin:B[1],xmax:B[2],ymax:B[3],spatialReference:this.view.spatialReference});return s.queryElements(i,t)}_acquireElements(e,t){const s=this.layer.source,i=this.view.spatialReference;if(!(0,a.Wi)(s))for(const n of t)(0,o.s1)(this._elementReferences,n.uid,(()=>{const e=new v({element:n,spatialReference:i}),t=new T(e);return this._overlayContainer.addChild(t),this.elements.add(n),{tiles:new Set,projectedElement:e,overlay:t}})).tiles.add(e)}_releaseElements(e,t){for(const s of t){const t=this._elementReferences.get(s.uid);t.tiles.delete(e),t.tiles.size||(this._overlayContainer.removeChild(t.overlay),t.overlay.destroy(),t.projectedElement.destroy(),this._elementReferences.delete(s.uid),this.elements.remove(s))}}};(0,i._)([(0,u.Cb)()],F.prototype,"_fetchQueue",void 0),(0,i._)([(0,u.Cb)()],F.prototype,"layer",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],F.prototype,"elements",void 0),F=(0,i._)([(0,p.j)("esri.views.2d.layers.MediaLayerView2D")],F);const B=(0,d.Ue)();class G{constructor(e){this.key=e,this.elements=null,this.isReady=!1,this.visible=!0}setElements(e){const t=[],s=new Set(this.elements);this.elements=e;for(const i of e)s.has(i)?s.delete(i):t.push(i);return this.isReady=!0,[t,Array.from(s)]}}const H=F},67581:(e,t,s)=>{s.d(t,{Z:()=>y});var i=s(27366),n=s(85015),r=s(91505),o=s(41691),a=s(79056),l=s(32718),h=s(92026),u=s(67426),p=s(49861),d=(s(63780),s(93169),s(25243),s(69912));let c=class extends((0,o.p)((0,a.IG)((0,u.v)(r.Z.EventedMixin(n.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",s=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${s}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,h.Pt)(this.get("layer.opacity"),1)*(0,h.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,i._)([(0,p.Cb)()],c.prototype,"fullOpacity",null),(0,i._)([(0,p.Cb)()],c.prototype,"layer",void 0),(0,i._)([(0,p.Cb)()],c.prototype,"parent",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,i._)([(0,p.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,i._)([(0,p.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,i._)([(0,p.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,i._)([(0,p.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,i._)([(0,p.Cb)()],c.prototype,"visible",null),(0,i._)([(0,p.Cb)()],c.prototype,"view",void 0),c=(0,i._)([(0,d.j)("esri.views.layers.LayerView")],c);const y=c}}]);
//# sourceMappingURL=2974.e61ee629.chunk.js.map