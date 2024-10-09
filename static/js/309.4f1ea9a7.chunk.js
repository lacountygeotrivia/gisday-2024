"use strict";(globalThis.webpackChunkth_v3=globalThis.webpackChunkth_v3||[]).push([[309,3645],{61156:(e,t,n)=>{n.d(t,{A:()=>R,B:()=>S,C:()=>V,D:()=>D,E:()=>H,F:()=>I,G:()=>j,H:()=>C,I:()=>k,J:()=>L,K:()=>_,a:()=>c,b:()=>a,c:()=>o,d:()=>u,e:()=>s,f:()=>l,g:()=>q,h:()=>f,i:()=>h,j:()=>g,k:()=>x,l:()=>N,m:()=>y,n:()=>M,o:()=>m,p:()=>w,q:()=>Z,r:()=>G,s:()=>v,t:()=>d,u:()=>z,v:()=>b,w:()=>p,x:()=>E,y:()=>A,z:()=>P});var i=n(99058),r=n(40237);function s(e){return i.G.extendedSpatialReferenceInfo(e)}function o(e,t,n){return i.G.clip(r.N,e,t,n)}function c(e,t,n){return i.G.cut(r.N,e,t,n)}function a(e,t,n){return i.G.contains(r.N,e,t,n)}function u(e,t,n){return i.G.crosses(r.N,e,t,n)}function l(e,t,n,s){return i.G.distance(r.N,e,t,n,s)}function f(e,t,n){return i.G.equals(r.N,e,t,n)}function h(e,t,n){return i.G.intersects(r.N,e,t,n)}function d(e,t,n){return i.G.touches(r.N,e,t,n)}function p(e,t,n){return i.G.within(r.N,e,t,n)}function g(e,t,n){return i.G.disjoint(r.N,e,t,n)}function m(e,t,n){return i.G.overlaps(r.N,e,t,n)}function G(e,t,n,s){return i.G.relate(r.N,e,t,n,s)}function x(e,t){return i.G.isSimple(r.N,e,t)}function v(e,t){return i.G.simplify(r.N,e,t)}function N(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return i.G.convexHull(r.N,e,t,n)}function y(e,t,n){return i.G.difference(r.N,e,t,n)}function M(e,t,n){return i.G.symmetricDifference(r.N,e,t,n)}function w(e,t,n){return i.G.intersect(r.N,e,t,n)}function z(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return i.G.union(r.N,e,t,n)}function Z(e,t,n,s,o,c,a){return i.G.offset(r.N,e,t,n,s,o,c,a)}function b(e,t,n,s){let o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return i.G.buffer(r.N,e,t,n,s,o)}function E(e,t,n,s,o,c,a){return i.G.geodesicBuffer(r.N,e,t,n,s,o,c,a)}function A(e,t,n){let s=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return i.G.nearestCoordinate(r.N,e,t,n,s)}function P(e,t,n){return i.G.nearestVertex(r.N,e,t,n)}function R(e,t,n,s,o){return i.G.nearestVertices(r.N,e,t,n,s,o)}function S(e,t,n,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");const s=i.G.rotate(t,n,r);return s.spatialReference=e,s}function V(e,t,n){if(null==t||null==n)throw new Error("Illegal Argument Exception");const r=i.G.flipHorizontal(t,n);return r.spatialReference=e,r}function D(e,t,n){if(null==t||null==n)throw new Error("Illegal Argument Exception");const r=i.G.flipVertical(t,n);return r.spatialReference=e,r}function H(e,t,n,s,o){return i.G.generalize(r.N,e,t,n,s,o)}function I(e,t,n,s){return i.G.densify(r.N,e,t,n,s)}function j(e,t,n,s){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return i.G.geodesicDensify(r.N,e,t,n,s,o)}function C(e,t,n){return i.G.planarArea(r.N,e,t,n)}function k(e,t,n){return i.G.planarLength(r.N,e,t,n)}function L(e,t,n,s){return i.G.geodesicArea(r.N,e,t,n,s)}function _(e,t,n,s){return i.G.geodesicLength(r.N,e,t,n,s)}const q=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:s,clip:o,cut:c,contains:a,crosses:u,distance:l,equals:f,intersects:h,touches:d,within:p,disjoint:g,overlaps:m,relate:G,isSimple:x,simplify:v,convexHull:N,difference:y,symmetricDifference:M,intersect:w,union:z,offset:Z,buffer:b,geodesicBuffer:E,nearestCoordinate:A,nearestVertex:P,nearestVertices:R,rotate:S,flipHorizontal:V,flipVertical:D,generalize:H,densify:I,geodesicDensify:j,planarArea:C,planarLength:k,geodesicArea:L,geodesicLength:_},Symbol.toStringTag,{value:"Module"}))},40237:(e,t,n)=>{n.d(t,{N:()=>i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const i=new r(e.getPointX(t),e.getPointY(t),n),s=e.hasZ(t),o=e.hasM(t);return s&&(i.z=e.getPointZ(t)),o&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new c(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const i=e.hasZ(t),r=e.hasM(t),s=new a(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class s{constructor(e,t,n,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(e,t,n,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class c{constructor(e,t,n,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(e,t,n,i,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},50309:(e,t,n)=>{n.r(t),n.d(t,{buffer:()=>i.v,clip:()=>i.c,contains:()=>i.b,convexHull:()=>i.l,crosses:()=>i.d,cut:()=>i.a,densify:()=>i.F,difference:()=>i.m,disjoint:()=>i.j,distance:()=>i.f,equals:()=>i.h,extendedSpatialReferenceInfo:()=>i.e,flipHorizontal:()=>i.C,flipVertical:()=>i.D,generalize:()=>i.E,geodesicArea:()=>i.J,geodesicBuffer:()=>i.x,geodesicDensify:()=>i.G,geodesicLength:()=>i.K,intersect:()=>i.p,intersects:()=>i.i,isSimple:()=>i.k,nearestCoordinate:()=>i.y,nearestVertex:()=>i.z,nearestVertices:()=>i.A,offset:()=>i.q,overlaps:()=>i.o,planarArea:()=>i.H,planarLength:()=>i.I,relate:()=>i.r,rotate:()=>i.B,simplify:()=>i.s,symmetricDifference:()=>i.n,touches:()=>i.t,union:()=>i.u,within:()=>i.w});n(99058),n(40237);var i=n(61156)}}]);
//# sourceMappingURL=309.4f1ea9a7.chunk.js.map