import{s as A,c as P,h as _,u as F,g as G,e as H,j as S,i as j}from"./scheduler.a63e10c5.js";import{S as J,i as K,B,e as k,C as q,j as w,f as g,D as b,a as N,x as L,d as M,t as O,E as Q}from"./index.a8155e30.js";function z(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function D(l,e){const o={},n={},s={$$scope:1};let u=l.length;for(;u--;){const r=l[u],f=e[u];if(f){for(const a in r)a in f||(n[a]=1);for(const a in f)s[a]||(o[a]=f[a],s[a]=1);l[u]=f}else for(const a in r)s[a]=1}for(const r in n)r in o||(o[r]=void 0);return o}function Y(l){return typeof l=="object"&&l!==null?l:{}}const C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function E(l,e,o){const n=l.slice();return n[10]=e[o][0],n[11]=e[o][1],n}function v(l){let e,o=[l[11]],n={};for(let s=0;s<o.length;s+=1)n=_(n,o[s]);return{c(){e=B(l[10]),this.h()},l(s){e=q(s,l[10],{}),w(e).forEach(g),this.h()},h(){b(e,n)},m(s,u){N(s,e,u)},p(s,u){b(e,n=D(o,[u&32&&s[11]]))},d(s){s&&g(e)}}}function I(l){let e=l[10],o,n=l[10]&&v(l);return{c(){n&&n.c(),o=k()},l(s){n&&n.l(s),o=k()},m(s,u){n&&n.m(s,u),N(s,o,u)},p(s,u){s[10]?e?A(e,s[10])?(n.d(1),n=v(s),e=s[10],n.c(),n.m(o.parentNode,o)):n.p(s,u):(n=v(s),e=s[10],n.c(),n.m(o.parentNode,o)):e&&(n.d(1),n=null,e=s[10])},d(s){s&&g(o),n&&n.d(s)}}}function R(l){let e,o,n,s,u,r=z(l[5]),f=[];for(let t=0;t<r.length;t+=1)f[t]=I(E(l,r,t));const a=l[9].default,c=P(a,l,l[8],null);let m=[C,l[6],{width:l[2]},{height:l[2]},{stroke:l[1]},{"stroke-width":n=l[4]?Number(l[3])*24/Number(l[2]):l[3]},{class:s=`lucide-icon lucide lucide-${l[0]} ${l[7].class??""}`}],d={};for(let t=0;t<m.length;t+=1)d=_(d,m[t]);return{c(){e=B("svg");for(let t=0;t<f.length;t+=1)f[t].c();o=k(),c&&c.c(),this.h()},l(t){e=q(t,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var i=w(e);for(let h=0;h<f.length;h+=1)f[h].l(i);o=k(),c&&c.l(i),i.forEach(g),this.h()},h(){b(e,d)},m(t,i){N(t,e,i);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(e,null);L(e,o),c&&c.m(e,null),u=!0},p(t,[i]){if(i&32){r=z(t[5]);let h;for(h=0;h<r.length;h+=1){const W=E(t,r,h);f[h]?f[h].p(W,i):(f[h]=I(W),f[h].c(),f[h].m(e,o))}for(;h<f.length;h+=1)f[h].d(1);f.length=r.length}c&&c.p&&(!u||i&256)&&F(c,a,t,t[8],u?H(a,t[8],i,null):G(t[8]),null),b(e,d=D(m,[C,i&64&&t[6],(!u||i&4)&&{width:t[2]},(!u||i&4)&&{height:t[2]},(!u||i&2)&&{stroke:t[1]},(!u||i&28&&n!==(n=t[4]?Number(t[3])*24/Number(t[2]):t[3]))&&{"stroke-width":n},(!u||i&129&&s!==(s=`lucide-icon lucide lucide-${t[0]} ${t[7].class??""}`))&&{class:s}]))},i(t){u||(M(c,t),u=!0)},o(t){O(c,t),u=!1},d(t){t&&g(e),Q(f,t),c&&c.d(t)}}}function T(l,e,o){const n=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let s=S(e,n),{$$slots:u={},$$scope:r}=e,{name:f}=e,{color:a="currentColor"}=e,{size:c=24}=e,{strokeWidth:m=2}=e,{absoluteStrokeWidth:d=!1}=e,{iconNode:t}=e;return l.$$set=i=>{o(7,e=_(_({},e),j(i))),o(6,s=S(e,n)),"name"in i&&o(0,f=i.name),"color"in i&&o(1,a=i.color),"size"in i&&o(2,c=i.size),"strokeWidth"in i&&o(3,m=i.strokeWidth),"absoluteStrokeWidth"in i&&o(4,d=i.absoluteStrokeWidth),"iconNode"in i&&o(5,t=i.iconNode),"$$scope"in i&&o(8,r=i.$$scope)},e=j(e),[f,a,c,m,d,t,s,e,r,u]}class U extends J{constructor(e){super(),K(this,e,T,R,A,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}const Z=U;export{Z as I,Y as a,D as g};