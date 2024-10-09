"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[7934],{53801:(e,t,r)=>{function n(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}r.d(t,{m:()=>n});Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],u+=o,c+=i},makeDense:n},Symbol.toStringTag,{value:"Module"}))},19131:(e,t,r)=>{r.d(t,{f:()=>i,n:()=>s});var n=r(48734);function o(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],n[u+1]=s[c+1],u+=o,c+=i}function s(e,t,r){const s=e.typedBuffer,i=e.typedBufferStride,a=t.typedBuffer,u=t.typedBufferStride,c=r?r.count:t.count;let f=(r&&r.dstIndex?r.dstIndex:0)*i,l=(r&&r.srcIndex?r.srcIndex:0)*u;if((0,n.U)(t.elementType)){const e=(0,n.Op)(t.elementType);if((0,n.B3)(t.elementType))for(let t=0;t<c;++t)s[f]=Math.max(a[l]/e,-1),s[f+1]=Math.max(a[l+1]/e,-1),f+=i,l+=u;else for(let t=0;t<c;++t)s[f]=a[l]/e,s[f+1]=a[l+1]/e,f+=i,l+=u}else o(e,t,r);return e}function i(e,t,r,n){const o=e.typedBuffer,s=e.typedBufferStride,i=n?.count??e.count;let a=(n?.dstIndex??0)*s;for(let u=0;u<i;++u)o[a]=t,o[a+1]=r,a+=s}Object.freeze(Object.defineProperty({__proto__:null,copy:o,normalizeIntegerBuffer:s,fill:i},Symbol.toStringTag,{value:"Module"}))},19093:(e,t,r)=>{r.d(t,{a:()=>a,n:()=>s,s:()=>i,t:()=>o});var n=r(77873);function o(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=e.typedBuffer,m=e.typedBufferStride,y=t.typedBuffer,g=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*m,t=n*g,r=y[t],o=y[t+1],b=y[t+2],w=y[t+3];h[e]=s*r+u*o+l*b,h[e+1]=i*r+c*o+d*b,h[e+2]=a*r+f*o+p*b,h[e+3]=w}}function s(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride;for(let a=0;a<r;a++){const e=a*o,t=a*i,r=s[t],u=s[t+1],c=s[t+2],f=r*r+u*u+c*c;if(f>0){const t=1/Math.sqrt(f);n[e]=t*r,n[e+1]=t*u,n[e+2]=t*c}}}function i(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*a;o[e]=r*i[t],o[e+1]=r*i[t+1],o[e+2]=r*i[t+2],o[e+3]=r*i[t+3]}}function a(e,t,r){const n=Math.min(e.count,t.count),o=e.typedBuffer,s=e.typedBufferStride,i=t.typedBuffer,a=t.typedBufferStride;for(let u=0;u<n;u++){const e=u*s,t=u*a;o[e]=i[t]>>r,o[e+1]=i[t+1]>>r,o[e+2]=i[t+2]>>r,o[e+3]=i[t+3]>>r}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:function(e,t,r){if(e.count!==t.count)return void n.c.error("source and destination buffers need to have the same number of elements");const o=e.count,s=r[0],i=r[1],a=r[2],u=r[3],c=r[4],f=r[5],l=r[6],d=r[7],p=r[8],h=r[9],m=r[10],y=r[11],g=r[12],b=r[13],w=r[14],T=r[15],_=e.typedBuffer,x=e.typedBufferStride,S=t.typedBuffer,I=t.typedBufferStride;for(let n=0;n<o;n++){const e=n*x,t=n*I,r=S[t],o=S[t+1],A=S[t+2],v=S[t+3];_[e]=s*r+c*o+p*A+g*v,_[e+1]=i*r+f*o+h*A+b*v,_[e+2]=a*r+l*o+m*A+w*v,_[e+3]=u*r+d*o+y*A+T*v}},transformMat3:o,normalize:s,scale:i,shiftRight:a},Symbol.toStringTag,{value:"Module"}))},69618:(e,t,r)=>{function n(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f)n[u]=s[c],n[u+1]=s[c+1],n[u+2]=s[c+2],n[u+3]=s[c+3],u+=o,c+=i}function o(e,t,r,n,o,s){const i=e.typedBuffer,a=e.typedBufferStride,u=s?.count??e.count;let c=(s?.dstIndex??0)*a;for(let f=0;f<u;++f)i[c]=t,i[c+1]=r,i[c+2]=n,i[c+3]=o,c+=a}r.d(t,{c:()=>n,f:()=>o});Object.freeze(Object.defineProperty({__proto__:null,copy:n,fill:o},Symbol.toStringTag,{value:"Module"}))},21530:(e,t,r)=>{r.d(t,{x:()=>o});var n=r(70758);class o{constructor(e){this.allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,n.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*s);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,s));e++)this._items.push(this.allocator())}}const s=1024},49901:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(10064);class o{constructor(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.major=e,this.minor=t,this._context=r}lessThan(e,t){return this.major<e||e===this.major&&this.minor<t}since(e,t){return!this.lessThan(e,t)}validate(e){if(this.major!==e.major){const t=this._context&&this._context+":",r=this._context&&this._context+" ";throw new n.Z(t+"unsupported-version",`Required major ${r}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:e})}}clone(){return new o(this.major,this.minor,this._context)}static parse(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const[r,s]=e.split("."),i=/^\s*\d+\s*$/;if(!r||!r.match||!r.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:e});if(!s||!s.match||!s.match(i))throw new n.Z((t&&t+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:e});const a=parseInt(r,10),u=parseInt(s,10);return new o(a,u,t)}}},48734:(e,t,r)=>{r.d(t,{B3:()=>o,Op:()=>i,U:()=>s,n1:()=>n});r(93169);function n(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function o(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function i(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}},17054:(e,t,r)=>{r.d(t,{gS:()=>o});var n=r(48734);Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<9;++e)n[u+e]=s[c+e];u+=o,c+=i}}},Symbol.toStringTag,{value:"Module"}));Object.freeze(Object.defineProperty({__proto__:null,copy:function(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,i=t.typedBufferStride,a=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*o,c=(r&&r.srcIndex?r.srcIndex:0)*i;for(let f=0;f<a;++f){for(let e=0;e<16;++e)n[u+e]=s[c+e];u+=o,c+=i}}},Symbol.toStringTag,{value:"Module"}));r(53801),r(19131),r(92770),r(69618);function o(e,t){return new e(new ArrayBuffer(t*e.ElementCount*(0,n.n1)(e.ElementType)))}},85981:(e,t,r)=>{r.d(t,{Ue:()=>u,nF:()=>f,zk:()=>c});var n=r(16889),o=r(21530),s=r(11186),i=r(71353),a=r(11185);function u(e){return e?{origin:(0,i.a)(e.origin),vector:(0,i.a)(e.vector)}:{origin:(0,i.c)(),vector:(0,i.c)()}}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,s.c)(r.origin,e),(0,s.b)(r.vector,t,e),r}function f(e,t,r){return function(e,t,r,o,i){const{vector:u,origin:c}=e,f=(0,s.b)(a.WM.get(),t,c),l=(0,s.e)(u,f)/(0,s.p)(u);return(0,s.g)(i,u,(0,n.uZ)(l,r,o)),(0,s.a)(i,i,e.origin)}(e,t,0,1,r)}(0,i.c)(),(0,i.c)(),new o.x((()=>({origin:null,vector:null})))},11185:(e,t,r)=>{r.d(t,{MP:()=>h,WM:()=>p});var n=r(59896),o=r(70758),s=r(11873),i=r(81949),a=r(98131),u=r(6394),c=r(71353),f=r(67077);class l{constructor(e,t,r){this.itemByteSize=e,this.itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this.itemByteSize)}get(){0===this._itemsPtr&&(0,o.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this.itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this.itemCreate(e,t*this.itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(16,u.c,e)}static createVec3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(24,c.b,e)}static createVec4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,f.a,e)}static createMat3f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(72,s.a,e)}static createMat4f64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(128,i.a,e)}static createQuatf64(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return new l(32,a.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this.itemByteSize}}}const d=4*n.Y8.KILOBYTES,p=(l.createVec2f64(),l.createVec3f64()),h=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},27053:(e,t,r)=>{r.d(t,{C:()=>c});var n=r(76200),o=r(14921),s=r(10064),i=r(92026),a=r(66978),u=r(35995);class c{constructor(e){this.streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return(0,u.HK)(e)?((0,a.k_)(t),(0,u.AH)(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if((0,i.Wi)(this.streamDataRequester))return(await(0,n.default)(t,{responseType:f[e]})).data;const u=await(0,o.q6)(this.streamDataRequester.request(t,e,r));if(!0===u.ok)return u.value;throw(0,a.r9)(u.error),new s.Z("",`Request for resource failed: ${u.error}`)}}const f={image:"image",binary:"array-buffer",json:"json"}},32315:(e,t,r)=>{r.d(t,{DA:()=>i,jX:()=>a,nh:()=>s});var n=r(18722),o=r(81935);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.p;return"number"==typeof e?t(e):(0,n.Uc)(e)||(0,n.lq)(e)?new Uint32Array(e):e}function i(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(n[e++]=t,n[e++]=t+1,n[e++]=t+2):(n[e++]=t+1,n[e++]=t,n[e++]=t+2)}else{let t=0;for(let o=0;o<r;o+=1)if(o%2==0){const r=e[o],s=e[o+1],i=e[o+2];n[t++]=r,n[t++]=s,n[t++]=i}else{const r=e[o+1],s=e[o],i=e[o+2];n[t++]=r,n[t++]=s,n[t++]=i}}return n}function a(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,n=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)n[e++]=0,n[e++]=t+1,n[e++]=t+2;return n}{const t=e[0];let o=e[1],s=0;for(let i=0;i<r;++i){const r=e[i+2];n[s++]=t,n[s++]=o,n[s++]=r,o=r}return n}}},55798:(e,t,r)=>{r.d(t,{z:()=>j});var n=r(92026),o=r(81949),s=r(10064);const i=r(32718).Z.getLogger("esri.views.3d.glTF");var a=r(8548);var u,c,f=r(41644),l=r(77427),d=r(35995),p=r(49901),h=r(14226),m=r(48976),y=r(98131),g=r(25158),b=r(53801);class w{constructor(e){this.data=e,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const e=this.offset4;return this.offset4+=1,this.dataUint32[e]}readUint8Array(e){const t=4*this.offset4;return this.offset4+=e/4,new Uint8Array(this.data,t,e)}remainingBytes(){return this.data.byteLength-4*this.offset4}}!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(u||(u={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(c||(c={}));const T={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},_={pbrMetallicRoughness:T,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},x={ESRI_externalColorMixMode:"tint"},S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t={...T,...e.pbrMetallicRoughness},r=I({...x,...e.extras});return{..._,...e,pbrMetallicRoughness:t,extras:r}};function I(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,f.Bg)(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}const A={magFilter:a.cw.LINEAR,minFilter:a.cw.LINEAR_MIPMAP_LINEAR,wrapS:a.e8.REPEAT,wrapT:a.e8.REPEAT},v=e=>({...A,...e});const O=1179937895,E=1313821514,N=5130562;class B{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferLoaders=new Map,this.textureLoaders=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,n,o)=>(t=n||"",r=o||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this._computeNodeParents()}static async load(e,t,r,n){if((0,d.HK)(r)){const n=(0,d.sJ)(r);if("model/gltf-binary"!==n.mediaType)try{const o=JSON.parse(n.isBase64?atob(n.data):n.data);return new B(e,t,r,o)}catch{}const o=(0,d.AH)(r);if(B._isGLBData(o))return this._fromGLBData(e,t,r,o)}if(r.endsWith(".gltf")){const o=await e.loadJSON(r,n);return new B(e,t,r,o)}const o=await e.loadBinary(r,n);if(B._isGLBData(o))return this._fromGLBData(e,t,r,o);const s=await e.loadJSON(r,n);return new B(e,t,r,s)}static _isGLBData(e){const t=new w(e);return t.remainingBytes()>=4&&t.readUint32()===O}static async _fromGLBData(e,t,r,n){const o=await B._parseGLBData(t,n);return new B(e,t,r,o.json,o.binaryData)}static async _parseGLBData(e,t){const r=new w(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===O,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===E,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await P(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==N,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;const o=await this._getBufferLoader(e,t);return n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match."),o}async _getBufferLoader(e,t){const r=this.bufferLoaders.get(e);if(r)return r;const n=this.json.buffers[e],o=this.context.loadBinary(this._resolveUri(n.uri),t).then((e=>new Uint8Array(e)));return this.bufferLoaders.set(e,o),o}async getAccessor(e,t){const r=this.errorContext;r.errorUnsupportedIf(!this.json.accessors,"Accessors missing.");const n=this.json.accessors[e];r.errorUnsupportedIf(null==n?.bufferView,"Some accessor does not specify a bufferView."),r.errorUnsupportedIf(n.type in[u.MAT2,u.MAT3,u.MAT4],`AttributeType ${n.type} is not supported`);const o=this.json.bufferViews[n.bufferView],s=await this.getBuffer(o.buffer,t),i=R[n.type],a=L[n.componentType],c=i*a,f=o.byteStride||c;return{raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(o.byteOffset||0)+(n.byteOffset||0),entryCount:n.count,isDenselyPacked:f===c,componentCount:i,componentByteSize:a,componentType:n.componentType,min:n.min,max:n.max,normalized:!!n.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case a.g.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case a.g.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case a.g.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case a.g.UNSIGNED_BYTE:return(0,b.m)(this._wrapAccessor(g.D_,r));case a.g.UNSIGNED_SHORT:return(0,b.m)(this._wrapAccessor(g.av,r));case a.g.UNSIGNED_INT:return(0,b.m)(this._wrapAccessor(g.Nu,r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(n.componentType!==a.g.FLOAT,"Expected type FLOAT for POSITION vertex attribute, but found "+F[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this._wrapAccessor(g.ct,n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(n.componentType!==a.g.FLOAT,"Expected type FLOAT for NORMAL vertex attribute, but found "+F[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this._wrapAccessor(g.ct,n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(n.componentType!==a.g.FLOAT,"Expected type FLOAT for TANGENT vertex attribute, but found "+F[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new g.ek(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),n.componentType===a.g.FLOAT?this._wrapAccessor(g.Eu,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(e){switch(e.componentType){case a.g.BYTE:return new g.Vs(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_BYTE:return new g.xA(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.SHORT:return new g.or(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_SHORT:return new g.TS(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.UNSIGNED_INT:return new g.qt(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case a.g.FLOAT:return new g.Eu(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void(0,f.Bg)(e.componentType)}}(n))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(n.componentType===a.g.FLOAT)return this._wrapAccessor(g.ek,n);if(n.componentType===a.g.UNSIGNED_BYTE)return this._wrapAccessor(g.mc,n);if(n.componentType===a.g.UNSIGNED_SHORT)return this._wrapAccessor(g.v6,n)}else if(3===n.componentCount){if(n.componentType===a.g.FLOAT)return this._wrapAccessor(g.ct,n);if(n.componentType===a.g.UNSIGNED_BYTE)return this._wrapAccessor(g.ne,n);if(n.componentType===a.g.UNSIGNED_SHORT)return this._wrapAccessor(g.mw,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+F[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?S(this.json.materials[e.material]):S(),s=o.pbrMetallicRoughness,i=this.hasVertexColors(e),a=this.getTexture(s.baseColorTexture,t),u=this.getTexture(o.normalTexture,t),c=r?this.getTexture(o.occlusionTexture,t):null,f=r?this.getTexture(o.emissiveTexture,t):null,l=r?this.getTexture(s.metallicRoughnessTexture,t):null,d=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await a,normalTexture:await u,name:o.name,id:d,occlusionTexture:await c,emissiveTexture:await f,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await l,hasVertexColors:i,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){if(!e)return null;this.errorContext.errorUnsupportedIf(0!==(e.texCoord||0),"Only TEXCOORD with index 0 is supported.");const r=e.index,n=this.errorContext,o=this.json.textures[r],s=v(null!=o.sampler?this.json.samplers[o.sampler]:{});n.errorUnsupportedIf(null==o.source,"Source is expected to be defined for a texture.");const i=this.json.images[o.source],a=await this._loadTextureImageData(r,o,t);return(0,l.s1)(this.textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>(n.error(`Unexpected TextureSampler WrapMode: ${e}. Using default REPEAT(10497).`),10497);return{data:a,wrapS:e(s.wrapS)?s.wrapS:t(s.wrapS),wrapT:e(s.wrapT)?s.wrapT:t(s.wrapT),minFilter:s.minFilter,name:i.name,id:r}}))}getNodeTransform(e){if(void 0===e)return M;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=(0,h.m)((0,o.c)(),r,n.matrix):n.translation||n.rotation||n.scale?(t=(0,o.b)(r),n.translation&&(0,h.j)(t,t,n.translation),n.rotation&&(C[3]=(0,m.g)(C,n.rotation),(0,h.e)(t,t,C[3],C)),n.scale&&(0,h.h)(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return(0,d.hF)(e,this.baseUri)}_getNodeParent(e){return this.nodeParentMap.get(e)}_checkVersionSupported(){const e=p.G.parse(this.json.asset.version,"glTF");U.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const n=this.textureLoaders.get(e);if(n)return n;const o=this._createTextureLoader(t,r);return this.textureLoaders.set(e,o),o}async _createTextureLoader(e,t){const r=this.json.images[e.source];if(r.uri)return this.context.loadImage(this._resolveUri(r.uri),t);const n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Image bufferView must be defined."),n.errorUnsupportedIf(null==r.mimeType,"Image mimeType must be defined.");const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t);return n.errorUnsupportedIf(null!=o.byteStride,"byteStride not supported for image buffer"),async function(e,t){return new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e)})),i.src=s}))}(new Uint8Array(s.buffer,s.byteOffset+(o.byteOffset||0),o.byteLength),r.mimeType)}}const U=new p.G(2,0,"glTF"),M=(0,h.z)((0,o.c)(),Math.PI/2),C=(0,y.a)(),R={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},L={[a.g.BYTE]:1,[a.g.UNSIGNED_BYTE]:1,[a.g.SHORT]:2,[a.g.UNSIGNED_SHORT]:2,[a.g.FLOAT]:4,[a.g.UNSIGNED_INT]:4};async function P(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}const F={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};let D=0;async function j(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const i=await B.load(e,Y,t,r),u="gltf_"+D++,c={lods:[],materials:new Map,textures:new Map,meta:G(i)},f=!(!i.json.asset.extras||"symbolResource"!==i.json.asset.extras.ESRI_type),l=new Map;await V(i,(async(e,t,f,d)=>{const p=l.get(f)??0;l.set(f,p+1);const h=void 0!==e.mode?e.mode:a.MX.TRIANGLES,m=h===a.MX.TRIANGLES||h===a.MX.TRIANGLE_STRIP||h===a.MX.TRIANGLE_FAN?h:null;if((0,n.Wi)(m))return void Y.warnUnsupported("Unsupported primitive mode ("+q[h]+"). Skipping primitive.");if(!i.hasPositions(e))return void Y.warn("Skipping primitive without POSITION vertex attribute.");const y=i.getPositionData(e,r),g=i.getMaterial(e,r,s),b=i.hasNormals(e)?i.getNormalData(e,r):null,w=i.hasTangents(e)?i.getTangentData(e,r):null,T=i.hasTextureCoordinates(e)?i.getTextureCoordinates(e,r):null,_=i.hasVertexColors(e)?i.getVertexColors(e,r):null,x=i.getIndexData(e,r),S={transform:(0,o.b)(t),attributes:{position:await y,normal:b?await b:null,texCoord0:T?await T:null,color:_?await _:null,tangent:w?await w:null},indices:await x,primitiveType:m,material:z(c,await g,u)};let I=null;(0,n.pC)(c.meta)&&(0,n.pC)(c.meta.ESRI_lod)&&"screenSpaceRadius"===c.meta.ESRI_lod.metric&&(I=c.meta.ESRI_lod.thresholds[f]),c.lods[f]=c.lods[f]||{parts:[],name:d,lodThreshold:I},c.lods[f].parts[p]=S}));for(const n of c.lods)n.parts=n.parts.filter((e=>!!e));return{model:c,meta:{isEsriSymbolResource:f,uri:i.uri},customMeta:{}}}function G(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;(0,n.pC)(t)&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function V(e,t){const r=e.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const a of n){const e=r.nodes[a];s.push(i(a,0)),k(e)&&!o&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>i(e,t+1)))}async function i(n,o){const a=r.nodes[n],u=e.getNodeTransform(n);if(Y.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const r of e.primitives)s.push(t(r,u,o,e.name))}for(const e of a.children||[])s.push(i(e,o))}await Promise.all(s)}function k(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function z(e,t,r){const n=t=>{const n=`${r}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(n)){const r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{data:e,parameters:{wrap:{s:a.e8.REPEAT,t:a.e8.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:$.includes(t.minFilter),noUnpackFlip:!0});e.textures.set(n,r)}return n},o=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(o)){const r=function(){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?n(t.colorTexture):void 0,textureNormal:t.normalTexture?n(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?n(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?n(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?n(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(o,r)}return o}const Y=new class{error(e){throw new s.Z("gltf-loader-error",e)}errorUnsupported(e){throw new s.Z("gltf-loader-unsupported-feature",e)}errorUnsupportedIf(e,t){e&&this.errorUnsupported(t)}assert(e,t){e||this.error(t)}warn(e){i.warn(e)}warnUnsupported(e){this.warn("[Unsupported Feature] "+e)}warnUnsupportedIf(e,t){e&&this.warnUnsupported(t)}},$=[a.cw.LINEAR_MIPMAP_LINEAR,a.cw.LINEAR_MIPMAP_NEAREST],q=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"]},81935:(e,t,r)=>{r.d(t,{NO:()=>y,cM:()=>m,p:()=>p,DX:()=>h});var n=r(11186),o=r(71353),s=r(21530),i=r(85981);r(11185);function a(e,t,r){return(0,n.b)(u,t,e),(0,n.b)(c,r,e),(0,n.l)((0,n.f)(u,u,c))/2}new s.x(i.Ue),new s.x((()=>({p0:null,p1:null,p2:null})));const u=(0,o.c)(),c=(0,o.c)();let f=(()=>{const e=new Uint32Array(131072);for(let t=0;t<e.length;++t)e[t]=t;return e})();const l=new Uint16Array([0]),d=(()=>{const e=new Uint16Array(65536);for(let t=0;t<e.length;++t)e[t]=t;return e})();function p(e){if(1===e)return l;if(e<d.length)return new Uint16Array(d.buffer,0,e);if(e>f.length){const t=Math.max(2*f.length,e);f=new Uint32Array(t);for(let e=0;e<f.length;e++)f[e]=e}return new Uint32Array(f.buffer,0,e)}function h(e){if(1===e)return new Uint16Array(l);if(e<d.length)return new Uint16Array(d.slice(0,e));if(e>f.length){const t=new Uint32Array(e);for(let e=0;e<t.length;e++)t[e]=e;return t}return new Uint32Array(f.slice(0,e))}function m(e,t,r){if(!e)return!1;const{size:o,data:s}=e;(0,n.s)(r,0,0,0),(0,n.s)(T,0,0,0);let i=0,u=0;for(let c=0;c<t.length-2;c+=3){const e=t[c+0]*o,f=t[c+1]*o,l=t[c+2]*o;(0,n.s)(g,s[e+0],s[e+1],s[e+2]),(0,n.s)(b,s[f+0],s[f+1],s[f+2]),(0,n.s)(w,s[l+0],s[l+1],s[l+2]);const d=a(g,b,w);d?((0,n.a)(g,g,b),(0,n.a)(g,g,w),(0,n.g)(g,g,1/3*d),(0,n.a)(r,r,g),i+=d):((0,n.a)(T,T,g),(0,n.a)(T,T,b),(0,n.a)(T,T,w),u+=3)}return(0!==u||0!==i)&&(0!==i?((0,n.g)(r,r,1/i),!0):0!==u&&((0,n.g)(r,T,1/u),!0))}function y(e,t,r){if(!e||!t)return!1;const{size:o,data:s}=e;(0,n.s)(r,0,0,0);let i=-1,a=0;for(let n=0;n<t.length;n++){const e=t[n]*o;i!==e&&(r[0]+=s[e+0],r[1]+=s[e+1],r[2]+=s[e+2],a++),i=e}return a>1&&(0,n.g)(r,r,1/a),a>0}const g=(0,o.c)(),b=(0,o.c)(),w=(0,o.c)(),T=(0,o.c)()},68845:(e,t,r)=>{r.d(t,{K:()=>n});const n=2.1}}]);
//# sourceMappingURL=7934.0dd89080.chunk.js.map