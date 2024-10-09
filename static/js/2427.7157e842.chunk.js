"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[2427],{87433:(t,e,a)=>{a.d(e,{Z:()=>ht});var s=a(27366),i=a(52639),r=a(41691),n=a(94172),o=a(49861),l=(a(63780),a(93169),a(25243),a(69912)),h=a(92026),c=a(17842);function d(t){return"constant"===t.kind?t.value[0]:t.values[t.values.length-1]}function u(t){const e=t.toRgba();return[e[0]/255,e[1]/255,e[2]/255,e[3]]}function p(t){if(!t.hasVisualVariables("size"))return{kind:"constant",value:[(0,c.F2)(t.trailWidth)]};const e=t.getVisualVariablesForType("size")[0],a=[],s=[];let i;if(e.stops){for(const t of e.stops)a.push(t.value),s.push((0,c.F2)(t.size));i=e.stops.length}else a.push(e.minDataValue,e.maxDataValue),s.push((0,c.F2)(e.minSize),(0,c.F2)(e.maxSize)),i=2;return{kind:"ramp",stops:a,values:s,count:i}}function m(t){if(!t.hasVisualVariables("opacity"))return{kind:"constant",value:[1]};const e=t.getVisualVariablesForType("opacity")[0],a=[],s=[];for(const i of e.stops)a.push(i.value),s.push(i.opacity);return{kind:"ramp",stops:a,values:s,count:e.stops.length}}function _(t,e,a,s){switch(e){case"int":t.setUniform1iv(a,s);break;case"float":t.setUniform1fv(a,s);break;case"vec2":t.setUniform2fv(a,s);break;case"vec3":t.setUniform3fv(a,s);break;case"vec4":t.setUniform4fv(a,s)}}function f(t,e,a,s){"constant"===s.kind?_(t,a,`u_${e}`,s.value):(_(t,"float",`u_${e}_stops`,s.stops),_(t,a,`u_${e}_values`,s.values),t.setUniform1i(`u_${e}_count`,s.count))}function y(t,e){return t===e||!(!(0,h.pC)(t)||!(0,h.pC)(e))&&t.equals(e)}function g(t,e){if(!function(t,e){let a=!0;return a=a&&t.collisions===e.collisions,a=a&&t.density===e.density,a=a&&t.interpolate===e.interpolate,a=a&&t.lineCollisionWidth===e.lineCollisionWidth,a=a&&t.lineSpacing===e.lineSpacing,a=a&&t.maxTurnAngle===e.maxTurnAngle,a=a&&t.minSpeedThreshold===e.minSpeedThreshold,a=a&&t.segmentLength===e.segmentLength,a=a&&t.smoothing===e.smoothing,a=a&&t.velocityScale===e.velocityScale,a=a&&t.verticesPerLine===e.verticesPerLine,a}(t.simulationSettings,e.simulationSettings))return!1;if(!y(t.timeExtent,e.timeExtent))return!1;let a=!0;return a=a&&t.loadImagery===e.loadImagery,a=a&&t.createFlowMesh===e.createFlowMesh,a=a&&t.color.kind===e.color.kind,a=a&&t.opacity.kind===e.opacity.kind,a=a&&t.size.kind===e.size.kind,a}var v=a(66978),x=a(44070),w=a(8548),b=a(51378),D=a(45412),A=a(61109);class S{constructor(t){this._params=t,this.animated=!1}isCompatible(t){if(!(t instanceof S))return!1;if(!y(this._params.timeExtent,t._params.timeExtent))return!1;let e=!0;return e=e&&this._params.loadImagery===t._params.loadImagery,e=e&&this._params.color.kind===t._params.color.kind,e=e&&this._params.opacity.kind===t._params.opacity.kind,e}async load(t,e){const{extent:a,size:s}=t;(0,v.k_)(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e);return new F(i,{color:this._params.color,opacity:this._params.opacity})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),s.bindTexture(a.texture,0),i.setUniform1i("u_texture",0),i.setUniform1f("u_Min",a.min),i.setUniform1f("u_Max",a.max),f(i,"color","vec4",this._params.color),f(i,"opacity","float",this._params.opacity),s.bindVAO(a.vertexArray),s.drawArrays(w.MX.TRIANGLE_STRIP,0,4)}}const C=new Map;C.set("a_position",0),C.set("a_texcoord",1);const z={geometry:[new A.G("a_position",2,w.g.UNSIGNED_SHORT,0,8),new A.G("a_texcoord",2,w.g.UNSIGNED_SHORT,4,8)]},T={vsPath:"raster/flow/imagery",fsPath:"raster/flow/imagery",attributes:C};class F{constructor(t,e){this._flowData=t,this._values=e}attach(t){const{context:e}=t,{width:a,height:s}=this._flowData,i=x.f.createVertex(e,w.l1.STATIC_DRAW,new Uint16Array([0,0,0,1,a,0,1,1,0,s,0,0,a,s,1,0])),r=new D.U(e,C,z,{geometry:i}),n=[];"ramp"===this._values.color.kind&&n.push("vvColor"),"ramp"===this._values.opacity.kind&&n.push("vvOpacity");const o=t.painter.materialManager.getProgram(T,n);let l=1e6,h=-1e6;for(let u=0;u<s;u++)for(let t=0;t<a;t++)if(0!==this._flowData.mask[u*a+t]){const e=this._flowData.data[2*(u*a+t)+0],s=this._flowData.data[2*(u*a+t)+1],i=Math.sqrt(e*e+s*s);l=Math.min(l,i),h=Math.max(h,i)}const c=new Uint8Array(4*a*s);for(let u=0;u<s;u++)for(let t=0;t<a;t++)if(0!==this._flowData.mask[u*a+t]){const e=this._flowData.data[2*(u*a+t)+0],s=this._flowData.data[2*(u*a+t)+1],i=(Math.sqrt(e*e+s*s)-l)/(h-l);c[4*(u*a+t)+0]=255*i,c[4*(u*a+t)+1]=0,c[4*(u*a+t)+2]=0,c[4*(u*a+t)+3]=255}else c[4*(u*a+t)+0]=0,c[4*(u*a+t)+1]=0,c[4*(u*a+t)+2]=0,c[4*(u*a+t)+3]=0;const d=new b.x(e,{pixelFormat:w.VI.RGBA,internalFormat:w.VI.RGBA,samplingMode:w.cw.LINEAR,dataType:w.Br.UNSIGNED_BYTE,wrapMode:w.e8.CLAMP_TO_EDGE,flipped:!0,width:a,height:s},c);this.vertexArray=r,this.program=o,this.texture=d,this.min=l,this.max=h,this._flowData=null}detach(){this.vertexArray.dispose(),this.texture.dispose()}get ready(){return this.program.isCompiled}}class I{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof I&&g(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;(0,v.k_)(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Particles",this._params.simulationSettings,i,e);return new O(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),f(i,"color","vec4",this._params.color),f(i,"opacity","float",this._params.opacity),f(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(w.MX.TRIANGLES,a.indexCount,w.g.UNSIGNED_INT,0)}}const M=new Map;M.set("a_xyts0",0),M.set("a_xyts1",1),M.set("a_typeIdDurationSeed",2),M.set("a_extrudeInfo",3);const R={geometry:[new A.G("a_xyts0",4,w.g.FLOAT,0,64),new A.G("a_xyts1",4,w.g.FLOAT,16,64),new A.G("a_typeIdDurationSeed",4,w.g.FLOAT,32,64),new A.G("a_extrudeInfo",4,w.g.FLOAT,48,64)]},V={vsPath:"raster/flow/particles",fsPath:"raster/flow/particles",attributes:M};class O{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=x.f.createVertex(e,w.l1.STATIC_DRAW,this._vertexData),s=x.f.createIndex(e,w.l1.STATIC_DRAW,this._indexData),i=new D.U(e,M,R,{geometry:a},s),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");const n=t.painter.materialManager.getProgram(V,r);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}}class k{constructor(t){this._styles=t}get animated(){return this._styles.reduce(((t,e)=>t||e.animated),!1)}isCompatible(t){if(!(t instanceof k))return!1;if(this._styles.length!==t._styles.length)return!1;const e=this._styles.length;for(let a=0;a<e;a++)if(!this._styles[a].isCompatible(t._styles[a]))return!1;return!0}async load(t,e){const a=await Promise.all(this._styles.map((a=>a.load(t,e))));return new P(a)}render(t,e,a){for(let s=0;s<this._styles.length;s++)this._styles[s].render(t,e,a.resources[s])}}class P{constructor(t){this.resources=t}attach(t){for(const e of this.resources)e.attach(t)}detach(){for(const t of this.resources)t.detach()}get ready(){return this.resources.reduce(((t,e)=>t&&e.ready),!0)}}class E{constructor(t){this._params=t}get animated(){return this._params.flowSpeed>0}isCompatible(t){return t instanceof E&&g(this._params,t._params)}async load(t,e){const{extent:a,size:s}=t;(0,v.k_)(e);const i=await this._params.loadImagery(a,s[0],s[1],this._params.timeExtent,e),{vertexData:r,indexData:n}=await this._params.createFlowMesh("Streamlines",this._params.simulationSettings,i,e);return new G(r,n,{color:this._params.color,opacity:this._params.opacity,size:this._params.size})}render(t,e,a){const{context:s}=t,{program:i}=a;s.setFaceCullingEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA),s.useProgram(i),i.setUniform1f("u_time",e.time),i.setUniform1f("u_trailLength",this._params.trailLength),i.setUniform1f("u_flowSpeed",this._params.flowSpeed),i.setUniform1f("u_featheringSize",this._params.featheringSize),i.setUniform1f("u_featheringOffset",this._params.featheringOffset),i.setUniform1f("u_introFade",this._params.introFade?1:0),i.setUniform1f("u_fadeToZero",this._params.fadeToZero?1:0),i.setUniform1f("u_decayRate",this._params.decayRate),i.setUniformMatrix3fv("u_dvsMat3",e.dvsMat3),i.setUniformMatrix3fv("u_displayViewMat3",e.displayViewMat3),f(i,"color","vec4",this._params.color),f(i,"opacity","float",this._params.opacity),f(i,"size","float",this._params.size),s.bindVAO(a.vertexArray),s.drawElements(w.MX.TRIANGLES,a.indexCount,w.g.UNSIGNED_INT,0)}}const U=new Map;U.set("a_positionAndSide",0),U.set("a_timeInfo",1),U.set("a_extrude",2),U.set("a_speed",3);const L={geometry:[new A.G("a_positionAndSide",3,w.g.FLOAT,0,36),new A.G("a_timeInfo",3,w.g.FLOAT,12,36),new A.G("a_extrude",2,w.g.FLOAT,24,36),new A.G("a_speed",1,w.g.FLOAT,32,36)]},N={vsPath:"raster/flow/streamlines",fsPath:"raster/flow/streamlines",attributes:U};class G{constructor(t,e,a){this._vertexData=t,this._indexData=e,this._values=a}attach(t){const{context:e}=t,a=x.f.createVertex(e,w.l1.STATIC_DRAW,this._vertexData),s=x.f.createIndex(e,w.l1.STATIC_DRAW,this._indexData),i=new D.U(e,U,L,{geometry:a},s),r=[];"ramp"===this._values.color.kind&&r.push("vvColor"),"ramp"===this._values.opacity.kind&&r.push("vvOpacity"),"ramp"===this._values.size.kind&&r.push("vvSize");const n=t.painter.materialManager.getProgram(N,r);this.vertexArray=i,this.program=n,this.indexCount=this._indexData.length,this._vertexData=null,this._indexData=null}detach(){this.vertexArray.dispose()}get ready(){return this.program.isCompiled}}function W(t,e){const{flowSpeed:a,trailLength:s}=t,i=function(t){const e=d(p(t)),a=e,s=Math.max(e/2,5),i=Math.round((0,c.F2)(t.maxPathLength)/s)+1,{density:r}=t;return{smoothing:(0,c.F2)(t.smoothing),interpolate:!0,velocityScale:"flow-from"===t.flowRepresentation?1:-1,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:s,maxTurnAngle:1,collisions:!0,lineCollisionWidth:a,lineSpacing:10,density:r}}(t);let r=null;const n={opacity:m(t),size:p(t)};let o=function(t){if(!t.hasVisualVariables("color"))return{kind:"constant",value:u(t.color)};const e=t.getVisualVariablesForType("color")[0],a=[],s=[];for(const i of e.stops)a.push(i.value),Array.prototype.push.apply(s,u(i.color));return{kind:"ramp",stops:a,values:s,count:e.stops.length}}(t);if("none"===t.background)n.color=o;else{"constant"===o.kind&&(o={kind:"ramp",stops:[0,1],values:[0,0,0,1,o.value[0],o.value[1],o.value[2],o.value[3]],count:2});const t={loadImagery:e.loadImagery,timeExtent:e.timeExtent,color:o,opacity:{kind:"constant",value:[1]}};r=new S(t),n.color={kind:"constant",value:[.1,.1,.1,1]}}const l={loadImagery:e.loadImagery,createFlowMesh:e.createFlowMesh,simulationSettings:i,timeExtent:e.timeExtent,trailLength:s,flowSpeed:a,featheringSize:1,featheringOffset:.5,introFade:true,fadeToZero:true,decayRate:2.3,color:n.color,opacity:n.opacity,size:n.size},_="butt"===t.trailCap||d(p(t))<=4?new E(l):new I(l);return(0,h.pC)(r)?new k([r,_]):_}var Z=a(55185),j=a(28959),q=a(80613),B=a(64510);class H extends B.Z{constructor(){super(...arguments),this.flowStyle=null}get requiresDedicatedFBO(){return!1}doRender(t){super.doRender(t)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"flow",brushes:[j.Z],target:()=>this.children,drawPhase:q.jx.MAP});return[...super.prepareRenderPasses(t),e]}}a(59486);var K=a(85015),Y=a(32718),$=a(16889),X=a(7882);const J=Y.Z.getLogger("esri.views.2d.engine.flow.FlowDisplayData");class Q{constructor(t,e,a,s){this.state={name:"created"},this.flowStyle=t,this.extent=e,this.size=a,this.pixelRatio=s}async load(){const t=new AbortController;this.state={name:"loading",abortController:t};const e={extent:this.extent,size:this.size,pixelRatio:this.pixelRatio},a=await this.flowStyle.load(e,t.signal);this.state={name:"loaded",resources:a}}attach(t){if("loaded"!==this.state.name)return void J.error("Only loaded resources can be attached.");const e=this.state.resources;e.attach(t),this.state={name:"attached",resources:e}}detach(){if("loading"===this.state.name)return this.state.abortController.abort(),void(this.state={name:"detached"});"attached"===this.state.name&&(this.state.resources.detach(),this.state={name:"detached"})}update(t){return!!this.flowStyle.isCompatible(t.flowStyle)&&(!(!this.extent.equals(t.extent)||this.size[0]!==t.size[0]||this.size[1]!==t.size[1]||this.pixelRatio!==t.pixelRatio)&&(this.flowStyle=t.flowStyle,!0))}}var tt=a(22753),et=a(23588),at=a(87422);class st extends at.s{constructor(){super(...arguments),this._displayData=null}get displayData(){return this._displayData}set displayData(t){this._displayData=t,this.requestRender()}clear(){(0,h.pC)(this._displayData)&&(this._displayData.detach(),this._displayData=null,this.requestRender())}setTransform(t){const{displayData:e}=this;if((0,h.Wi)(e))return;const a=e.extent.xmin,s=e.extent.ymax,i=[0,0];t.toScreen(i,[a,s]);const r=(e.extent.xmax-e.extent.xmin)/e.size[0]/t.resolution,n=(0,$.Vl)(t.rotation),{dvs:o}=this.transforms;(0,tt.h)(o,[-1,1,0]),(0,tt.d)(o,o,[2/(t.size[0]*t.pixelRatio),-2/(t.size[1]*t.pixelRatio),1]),(0,tt.c)(o,o,[i[0],i[1],0]),(0,tt.r)(o,o,n),(0,tt.d)(o,o,[r*t.pixelRatio,r*t.pixelRatio,1])}_createTransforms(){return{dvs:(0,et.c)()}}}var it=a(53866);const rt=Y.Z.getLogger("esri.views.2d.engine.flow.FlowStrategy");let nt=class extends K.Z{constructor(t){super(t),this._flowDisplayObject=new st,this._loading=null}initialize(){this.flowContainer.addChild(this._flowDisplayObject)}destroy(){this._clear(),this.flowContainer.removeAllChildren()}get updating(){return null!=this._loading}update(t){const{flowStyle:e}=this.flowContainer;if((0,h.Wi)(e))return void this._clear();const{extent:a,rotation:s,resolution:i,pixelRatio:r}=t.state,n=function(t,e){const a=new X.Z({x:(t.xmax+t.xmin)/2,y:(t.ymax+t.ymin)/2,spatialReference:t.spatialReference}),s=t.xmax-t.xmin,i=t.ymax-t.ymin,r=Math.abs(Math.cos((0,$.Vl)(e))),n=Math.abs(Math.sin((0,$.Vl)(e))),o=r*s+n*i,l=n*s+r*i,h=new it.Z({xmin:a.x-o/2,ymin:a.y-l/2,xmax:a.x+o/2,ymax:a.y+l/2,spatialReference:t.spatialReference});return h.centerAt(a),h}(a,s);n.expand(1.15);const o=[Math.round((n.xmax-n.xmin)/i),Math.round((n.ymax-n.ymin)/i)],l=new Q(e,n,o,r);if((0,h.pC)(this._loading)){if(this._loading.update(l))return;this._loading.detach(),this._loading=null}!(0,h.Wi)(this._flowDisplayObject.displayData)&&this._flowDisplayObject.displayData.update(l)||(l.load().then((()=>{this._flowDisplayObject.clear(),this._flowDisplayObject.displayData=this._loading,this._loading=null}),(t=>{(0,v.D_)(t)||(rt.error("A resource failed to load.",t),this._loading=null)})),this._loading=l)}_clear(){this._flowDisplayObject.clear(),(0,h.pC)(this._loading)&&(this._loading.detach(),this._loading=null)}};(0,s._)([(0,o.Cb)()],nt.prototype,"_loading",void 0),(0,s._)([(0,o.Cb)()],nt.prototype,"flowContainer",void 0),(0,s._)([(0,o.Cb)()],nt.prototype,"updating",null),nt=(0,s._)([(0,l.j)("esri.views.2d.engine.flow.FlowStrategy")],nt);const ot=nt;let lt=class extends r.r{constructor(){super(...arguments),this._loadImagery=(t,e,a,s,i)=>(0,Z.KK)(this.layer,t,e,a,s,i),this._createFlowMesh=(t,e,a,s)=>this.layer.createFlowMesh({meshType:t,flowData:a,simulationSettings:e},{signal:s}),this.attached=!1,this.container=null,this.layer=null,this.type="flow",this.timeExtent=null,this.redrawOrRefetch=async()=>{this._updateVisualization()}}get updating(){return!this._strategy||this._strategy.updating}attach(){const{layer:t}=this,e=()=>{this._loadImagery=(e,a,s,i,r)=>(0,Z.KK)(t,e,a,s,i,r),this._updateVisualization()};"multidimensionalDefinition"in t?this.handles.add((0,n.YP)((()=>t.multidimensionalDefinition),e)):this.handles.add([(0,n.YP)((()=>t.mosaicRule),e),(0,n.YP)((()=>t.renderingRule),e),(0,n.YP)((()=>t.definitionExpression),e)]),this.container=new H,this._strategy=new ot({flowContainer:this.container}),this._updateVisualization()}detach(){this._strategy.destroy(),this.container.removeAllChildren(),this.container=null,this.handles.removeAll()}update(t){t.stationary?this._strategy.update(t):this.layerView.requestUpdate()}hitTest(t){return new i.Z({attributes:{},geometry:t.clone(),layer:this.layer})}moveEnd(){}async doRefresh(){}_updateVisualization(){const{renderer:t}=this.layer;if("flow"!==t.type)return;const e=W(t,{loadImagery:this._loadImagery,createFlowMesh:this._createFlowMesh,timeExtent:this.timeExtent});this.container.flowStyle=e,this.layerView.requestUpdate()}};(0,s._)([(0,o.Cb)()],lt.prototype,"_strategy",void 0),(0,s._)([(0,o.Cb)()],lt.prototype,"attached",void 0),(0,s._)([(0,o.Cb)()],lt.prototype,"container",void 0),(0,s._)([(0,o.Cb)()],lt.prototype,"layer",void 0),(0,s._)([(0,o.Cb)()],lt.prototype,"layerView",void 0),(0,s._)([(0,o.Cb)()],lt.prototype,"type",void 0),(0,s._)([(0,o.Cb)()],lt.prototype,"updating",null),(0,s._)([(0,o.Cb)()],lt.prototype,"timeExtent",void 0),lt=(0,s._)([(0,l.j)("esri.views.2d.engine.flow.FlowView2D")],lt);const ht=lt},60831:(t,e,a)=>{a.d(e,{F:()=>p});a(93169);var s=a(92026),i=a(22753),r=a(23588),n=a(15245),o=a(64145),l=a(87422),h=a(46640),c=a(44070),d=a(8548),u=a(45412);class p extends l.s{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super(),this._source=null,this._symbolizerParameters=null,this._vaoInvalidated=!0,this.coordScale=[1,1],this.height=null,this.stencilRef=0,this.resolution=null,this.pixelRatio=1,this.x=0,this.y=0,this.rotation=0,this.rawPixelData=null,this.width=null,this.source=t}destroy(){(0,s.pC)(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null)}get symbolizerParameters(){return this._symbolizerParameters}set symbolizerParameters(t){JSON.stringify(this._symbolizerParameters)!==JSON.stringify(t)&&(this._symbolizerParameters=t,this.invalidateVAO())}get source(){return this._source}set source(t){this._source=t,this.invalidateVAO()}invalidateVAO(){!this._vaoInvalidated&&(0,s.pC)(this.vaoData)&&(this.vaoData.magdir?.vao.dispose(),this.vaoData.scalar?.vao.dispose(),this.vaoData=null,this._vaoInvalidated=!0,this.requestRender())}updateVectorFieldVAO(t){if(this._vaoInvalidated){if(this._vaoInvalidated=!1,(0,s.pC)(this.source)&&(0,s.Wi)(this.vaoData)){const{style:e}=this.symbolizerParameters;switch(e){case"beaufort_ft":case"beaufort_km":case"beaufort_kn":case"beaufort_m":case"beaufort_mi":case"classified_arrow":case"ocean_current_kn":case"ocean_current_m":case"single_arrow":{const e=(0,o.wF)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={magdir:a}}break;case"simple_scalar":{const e=(0,o.K)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e);this.vaoData={scalar:a}}break;case"wind_speed":{const e=(0,o.wF)(this.source,this.symbolizerParameters),a=this._createVectorFieldVAO(t.context,e),s=(0,o.K)(this.source,this.symbolizerParameters),i=this._createVectorFieldVAO(t.context,s);this.vaoData={magdir:a,scalar:i}}}}this.ready(),this.requestRender()}}_createTransforms(){return{dvs:(0,r.c)()}}setTransform(t){const e=(0,i.b)(this.transforms.dvs),[a,s]=t.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/t.resolution,o=r*this.width,l=r*this.height,h=Math.PI*this.rotation/180;(0,i.c)(e,e,(0,n.f)(a,s)),(0,i.c)(e,e,(0,n.f)(o/2,l/2)),(0,i.r)(e,e,-h),(0,i.c)(e,e,(0,n.f)(-o/2,-l/2)),(0,i.j)(e,e,(0,n.f)(o,l)),(0,i.m)(this.transforms.dvs,t.displayViewMat3,e)}onAttach(){this.invalidateVAO()}onDetach(){this.invalidateVAO()}_createVectorFieldVAO(t,e){const{vertexData:a,indexData:s}=e,i=c.f.createVertex(t,d.l1.STATIC_DRAW,new Float32Array(a)),r=c.f.createIndex(t,d.l1.STATIC_DRAW,new Uint32Array(s)),n=(0,h.cM)("vector-field",{geometry:[{location:0,name:"a_pos",count:2,type:d.g.FLOAT,normalized:!1},{location:1,name:"a_offset",count:2,type:d.g.FLOAT,normalized:!1},{location:2,name:"a_vv",count:2,type:d.g.FLOAT,normalized:!1}]});return{vao:new u.U(t,n.attributes,n.bufferLayouts,{geometry:i},r),elementCount:s.length}}}},24405:(t,e,a)=>{a.d(e,{V:()=>n,e:()=>r});var s=a(92026),i=a(80031);async function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.popupTemplate;if((0,s.Wi)(e))return[];const a=await e.getRequiredFields(t.fieldsIndex),{lastEditInfoEnabled:r}=e,{objectIdField:n,typeIdField:o,globalIdField:l,relationships:h}=t;if(a.includes("*"))return["*"];const c=r?await(0,i.CH)(t):[],d=(0,i.Q0)(t.fieldsIndex,[...a,...c]);return o&&d.push(o),d&&n&&t.fieldsIndex.has(n)&&!d.includes(n)&&d.push(n),d&&l&&t.fieldsIndex.has(l)&&!d.includes(l)&&d.push(l),h&&h.forEach((e=>{const{keyField:a}=e;d&&a&&t.fieldsIndex.has(a)&&!d.includes(a)&&d.push(a)})),d}function n(t,e){return t.popupTemplate?t.popupTemplate:(0,s.pC)(e)&&e.defaultPopupTemplateEnabled&&(0,s.pC)(t.defaultPopupTemplate)?t.defaultPopupTemplate:null}}}]);
//# sourceMappingURL=2427.7157e842.chunk.js.map