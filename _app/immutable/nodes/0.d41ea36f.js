import{s as st,n as G,r as lt,c as at,u as ht,g as ct,d as ut,o as pt}from"../chunks/scheduler.e108d1fd.js";import{S as ot,i as nt,g as b,m as mt,h as E,j as L,n as dt,f as _,a as N,x as y,y as F,o as ft,s as j,r as J,c as k,z as Q,u as Z,k as T,v as tt,d as X,t as Y,w as et}from"../chunks/index.509b35b2.js";import{b as D}from"../chunks/paths.8f497528.js";const vt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,gt=!0,Ot=Object.freeze(Object.defineProperty({__proto__:null,prerender:gt},Symbol.toStringTag,{value:"Module"}));function St(a){let t,e,i,o;return{c(){t=b("span"),e=mt(a[0])},l(s){t=E(s,"SPAN",{});var r=L(t);e=dt(r,a[0]),r.forEach(_)},m(s,r){N(s,t,r),y(t,e),i||(o=[F(t,"mouseover",a[1]),F(t,"mouseout",a[2])],i=!0)},p(s,[r]){r&1&&ft(e,s[0])},i:G,o:G,d(s){s&&_(t),i=!1,lt(o)}}}function _t(a,t,e){let i="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-=_+[]{}|\\;:'\",.<>?/`~".split(""),{content:o=""}=t,{duration:s=2e3}=t,r=o,n=0,h=!1,c=null;const d=()=>i[Math.floor(Math.random()*i.length)],M=()=>{h=!1,c=null,n=0,e(0,r=o.split("").map(u=>d()).join("")),requestAnimationFrame(p)},p=u=>{c===null&&(c=u);let H=u-c;n/s>=1&&f(),!h&&(n+=H,e(0,r=o.split("").map((g,x)=>Math.random()<n/s||r[x]===g?g:Math.random()<.1?d():r[x]).join("")),c=u,requestAnimationFrame(p))},f=()=>{h=!0,c=null,n=0,e(0,r=o)};return a.$$set=u=>{"content"in u&&e(3,o=u.content),"duration"in u&&e(4,s=u.duration)},[r,M,f,o,s]}class it extends ot{constructor(t){super(),nt(this,t,_t,St,st,{content:3,duration:4})}}function P(){return P=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i])}return a},P.apply(this,arguments)}function q(a,t,e){return Math.max(a,Math.min(t,e))}class wt{advance(t){var e;if(!this.isRunning)return;let i=!1;if(this.lerp)this.value=(o=this.value,s=this.to,(1-(r=1-Math.exp(-60*this.lerp*t)))*o+r*s),Math.round(this.value)===this.to&&(this.value=this.to,i=!0);else{this.currentTime+=t;const n=q(0,this.currentTime/this.duration,1);i=n>=1;const h=i?1:this.easing(n);this.value=this.from+(this.to-this.from)*h}var o,s,r;(e=this.onUpdate)==null||e.call(this,this.value,{completed:i}),i&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:o=1,easing:s=n=>n,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=o,this.easing=s,this.currentTime=0,this.isRunning=!0,this.onUpdate=r}}class yt{constructor({wrapper:t,content:e,autoResize:i=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,i){const o=function(s,r){let n;return function(){let h=arguments,c=this;clearTimeout(n),n=setTimeout(function(){s.apply(c,h)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(o),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(o),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class rt{constructor(){this.events={}}emit(t,...e){let i=this.events[t]||[];for(let o=0,s=i.length;o<s;o++)i[o](...e)}on(t,e){var i;return(i=this.events[t])!=null&&i.push(e)||(this.events[t]=[e]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(s=>e!==s)}}destroy(){this.events={}}}class Tt{constructor(t,{wheelMultiplier:e=1,touchMultiplier:i=2,normalizeWheel:o=!1}){this.onTouchStart=s=>{const{clientX:r,clientY:n}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=r,this.touchStart.y=n,this.lastDelta={x:0,y:0}},this.onTouchMove=s=>{const{clientX:r,clientY:n}=s.targetTouches?s.targetTouches[0]:s,h=-(r-this.touchStart.x)*this.touchMultiplier,c=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=r,this.touchStart.y=n,this.lastDelta={x:h,y:c},this.emitter.emit("scroll",{type:"touch",deltaX:h,deltaY:c,event:s})},this.onTouchEnd=s=>{this.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})},this.onWheel=s=>{let{deltaX:r,deltaY:n}=s;this.normalizeWheel&&(r=q(-100,r,100),n=q(-100,n,100)),r*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{type:"wheel",deltaX:r,deltaY:n,event:s})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=i,this.normalizeWheel=o,this.touchStart={x:null,y:null},this.emitter=new rt,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class bt{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:i=t,smoothWheel:o=!0,smoothTouch:s=!1,syncTouch:r=!1,syncTouchLerp:n=.1,__iosNoInertiaSyncTouchLerp:h=.4,touchInertiaMultiplier:c=35,duration:d,easing:M=S=>Math.min(1,1.001-Math.pow(2,-10*S)),lerp:p=d&&.1,infinite:f=!1,orientation:u="vertical",gestureOrientation:H="vertical",touchMultiplier:g=1,wheelMultiplier:x=1,normalizeWheel:C=!1,autoResize:$=!0}={}){this.onVirtualScroll=({type:S,inertia:z,deltaX:A,deltaY:O,event:R})=>{if(R.ctrlKey)return;const m=S==="touch",l=S==="wheel";if(this.options.gestureOrientation==="vertical"&&O===0||this.options.gestureOrientation==="horizontal"&&A===0||m&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&O<=0||R.composedPath().find(w=>(w==null||w.hasAttribute==null?void 0:w.hasAttribute("data-lenis-prevent"))||m&&(w==null||w.hasAttribute==null?void 0:w.hasAttribute("data-lenis-prevent-touch"))||l&&(w==null||w.hasAttribute==null?void 0:w.hasAttribute("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked)return void R.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&m||this.options.smoothWheel&&l,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();R.preventDefault();let v=O;this.options.gestureOrientation==="both"?v=Math.abs(O)>Math.abs(A)?O:A:this.options.gestureOrientation==="horizontal"&&(v=A);const W=m&&this.options.syncTouch,I=m&&z&&Math.abs(v)>1;I&&(v=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+v,P({programmatic:!1},W&&{lerp:I?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onScroll=()=>{if(!this.isScrolling){const S=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-S),this.emit()}},window.lenisVersion="1.0.19",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:i,smoothWheel:o,smoothTouch:s,syncTouch:r,syncTouchLerp:n,__iosNoInertiaSyncTouchLerp:h,touchInertiaMultiplier:c,duration:d,easing:M,lerp:p,infinite:f,gestureOrientation:H,orientation:u,touchMultiplier:g,wheelMultiplier:x,normalizeWheel:C,autoResize:$},this.dimensions=new yt({wrapper:t,content:e,autoResize:$}),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new wt,this.emitter=new rt,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new Tt(i,{touchMultiplier:g,wheelMultiplier:x,normalizeWheel:C}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")}on(t,e){return this.emitter.on(t,e)}off(t,e){var i;this.emitter.events[t]=(i=this.emitter.events[t])==null?void 0:i.filter(o=>e!==o)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:i=!1,lock:o=!1,duration:s=this.options.duration,easing:r=this.options.easing,lerp:n=!s&&this.options.lerp,onComplete:h=null,force:c=!1,programmatic:d=!0}={}){if(!this.isStopped||c){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var M;let p;if(typeof t=="string"?p=document.querySelector(t):(M=t)!=null&&M.nodeType&&(p=t),p){if(this.options.wrapper!==window){const u=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?u.left:u.top}const f=p.getBoundingClientRect();t=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?d&&(this.targetScroll=this.animatedScroll=this.scroll):t=q(0,t,this.limit),i)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(h==null||h());if(!d){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:r,lerp:n,onUpdate:(p,{completed:f})=>{o&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),d&&(this.targetScroll=p),f&&(o&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,h==null||h()),this.emit()}})}}}get rootElement(){return this.options.wrapper===window?this.options.content:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}const{document:Et}=vt;function Mt(a){let t,e,i,o,s=`<img src="${D}/logo.svg" class="w-12 h-12 hover:opacity-75" alt="Triple Fault Logo"/>`,r,n,h,c,d,M,p,f,u,H,g,x='<span class="font-bold">NEWS:</span> A new website.',C,$,S,z,A,O;d=new it({props:{content:"TEAM"}}),u=new it({props:{content:"CONTACT"}});const R=a[2].default,m=at(R,a,a[1],null);return{c(){t=j(),e=b("header"),i=b("nav"),o=b("a"),o.innerHTML=s,r=j(),n=b("ul"),h=b("li"),c=b("a"),J(d.$$.fragment),M=j(),p=b("li"),f=b("a"),J(u.$$.fragment),H=j(),g=b("a"),g.innerHTML=x,$=j(),S=b("main"),m&&m.c(),this.h()},l(l){t=k(l),e=E(l,"HEADER",{});var v=L(e);i=E(v,"NAV",{class:!0});var W=L(i);o=E(W,"A",{href:!0,"data-svelte-h":!0}),Q(o)!=="svelte-1a8evbo"&&(o.innerHTML=s),r=k(W),n=E(W,"UL",{class:!0});var I=L(n);h=E(I,"LI",{});var w=L(h);c=E(w,"A",{href:!0,class:!0});var U=L(c);Z(d.$$.fragment,U),U.forEach(_),w.forEach(_),M=k(I),p=E(I,"LI",{});var V=L(p);f=E(V,"A",{href:!0,class:!0});var B=L(f);Z(u.$$.fragment,B),B.forEach(_),V.forEach(_),I.forEach(_),H=k(W),g=E(W,"A",{class:!0,href:!0,"data-svelte-h":!0}),Q(g)!=="svelte-hm0mg6"&&(g.innerHTML=x),W.forEach(_),v.forEach(_),$=k(l),S=E(l,"MAIN",{class:!0});var K=L(S);m&&m.l(K),K.forEach(_),this.h()},h(){T(o,"href",D),T(c,"href",D+"/team"),T(c,"class","hover:underline hover:opacity-75"),T(f,"href",D+"/contact"),T(f,"class","hover:underline hover:opacity-75"),T(n,"class","font-mono"),T(g,"class","ml-auto font-mono text-orange-300 hover:underline hover:opacity-75"),T(g,"href",D+"/timeline"),T(i,"class",C="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 backdrop-blur-md fixed h-16 w-[calc(100%-2rem)] items-center z-50 "+(a[0]?"border-stone-800/0":"border-stone-600/75 bg-stone-700/75")),T(S,"class","pt-24 mx-4")},m(l,v){N(l,t,v),N(l,e,v),y(e,i),y(i,o),y(i,r),y(i,n),y(n,h),y(h,c),tt(d,c,null),y(n,M),y(n,p),y(p,f),tt(u,f,null),y(i,H),y(i,g),N(l,$,v),N(l,S,v),m&&m.m(S,null),z=!0,A||(O=F(Et,"scroll",a[3]),A=!0)},p(l,[v]){(!z||v&1&&C!==(C="transition-all border flex flex-row py-2 px-4 my-3 mx-4 rounded-lg gap-2 backdrop-blur-md fixed h-16 w-[calc(100%-2rem)] items-center z-50 "+(l[0]?"border-stone-800/0":"border-stone-600/75 bg-stone-700/75")))&&T(i,"class",C),m&&m.p&&(!z||v&2)&&ht(m,R,l,l[1],z?ut(R,l[1],v,null):ct(l[1]),null)},i(l){z||(X(d.$$.fragment,l),X(u.$$.fragment,l),X(m,l),z=!0)},o(l){Y(d.$$.fragment,l),Y(u.$$.fragment,l),Y(m,l),z=!1},d(l){l&&(_(t),_(e),_($),_(S)),et(d),et(u),m&&m.d(l),A=!1,O()}}}function zt(a,t,e){let{$$slots:i={},$$scope:o}=t,s=!0;pt(()=>{const n=new bt;function h(c){n.raf(c),requestAnimationFrame(h)}requestAnimationFrame(h)});const r=()=>e(0,s=document.documentElement.scrollTop===0);return a.$$set=n=>{"$$scope"in n&&e(1,o=n.$$scope)},[s,o,i,r]}class Rt extends ot{constructor(t){super(),nt(this,t,zt,Mt,st,{})}}export{Rt as component,Ot as universal};
