import{s as y,n as w,d as H}from"../chunks/scheduler.f7cad496.js";import{S as k,i as A,g as f,s as g,r as z,h,y as v,c as b,j as $,u as D,f as r,k as u,a as i,z as L,v as M,d as P,t as R,w as S}from"../chunks/index.9f4e2312.js";import{C as j}from"../chunks/Card.240516b8.js";import{b as q}from"../chunks/paths.3866b01c.js";const B=""+new URL("../assets/pixeldrop.1c8b7f74.png",import.meta.url).href;function E(C){let t,d="Pixel Drop",n,s,x="By: Ryan Yuan",p,a,m="A simple and elegant purple pixel drop design.";return{c(){t=f("h3"),t.textContent=d,n=g(),s=f("h4"),s.textContent=x,p=g(),a=f("p"),a.textContent=m,this.h()},l(e){t=h(e,"H3",{class:!0,"data-svelte-h":!0}),v(t)!=="svelte-dh6s8z"&&(t.textContent=d),n=b(e),s=h(e,"H4",{class:!0,"data-svelte-h":!0}),v(s)!=="svelte-1n6wv9g"&&(s.textContent=x),p=b(e),a=h(e,"P",{"data-svelte-h":!0}),v(a)!=="svelte-1rh0i1l"&&(a.textContent=m),this.h()},h(){u(t,"class","text-2xl font-bold"),u(s,"class","mb-2 font-medium text-stone-400")},m(e,c){i(e,t,c),i(e,n,c),i(e,s,c),i(e,p,c),i(e,a,c)},p:w,d(e){e&&(r(t),r(n),r(s),r(p),r(a))}}}function I(C){let t,d;return{c(){t=f("img"),this.h()},l(n){t=h(n,"IMG",{src:!0,class:!0,slot:!0,alt:!0}),this.h()},h(){H(t.src,d=B)||u(t,"src",d),u(t,"class","h-32 w-full object-contain bg-[#231124] rounded-md"),u(t,"slot","banner"),u(t,"alt","triple fault pixel drop banner")},m(n,s){i(n,t,s)},p:w,d(n){n&&r(t)}}}function T(C){let t,d="Resources",n,s,x=`Open source components and guides for you to use.<br/> All work is licenced under
  CC BY-SA 4.0.`,p,a,m,e,c;return e=new j({props:{class:"w-full",$$slots:{banner:[I],default:[E]},$$scope:{ctx:C}}}),{c(){t=f("h1"),t.textContent=d,n=g(),s=f("h2"),s.innerHTML=x,p=g(),a=f("div"),m=f("a"),z(e.$$.fragment),this.h()},l(l){t=h(l,"H1",{class:!0,"data-svelte-h":!0}),v(t)!=="svelte-zk97i0"&&(t.textContent=d),n=b(l),s=h(l,"H2",{class:!0,"data-svelte-h":!0}),v(s)!=="svelte-wk1eyl"&&(s.innerHTML=x),p=b(l),a=h(l,"DIV",{class:!0});var o=$(a);m=h(o,"A",{href:!0});var _=$(m);D(e.$$.fragment,_),_.forEach(r),o.forEach(r),this.h()},h(){u(t,"class","mb-2 text-6xl font-extrabold text-center"),u(s,"class","mb-8 text-center md:text-lg"),u(m,"href",q+"/resources/pixel-drop"),u(a,"class","grid grid-cols-1 grid-rows-1 gap-4 m-auto md:grid-cols-2 xl:grid-cols-3")},m(l,o){i(l,t,o),i(l,n,o),i(l,s,o),i(l,p,o),i(l,a,o),L(a,m),M(e,m,null),c=!0},p(l,[o]){const _={};o&1&&(_.$$scope={dirty:o,ctx:l}),e.$set(_)},i(l){c||(P(e.$$.fragment,l),c=!0)},o(l){R(e.$$.fragment,l),c=!1},d(l){l&&(r(t),r(n),r(s),r(p),r(a)),S(e)}}}class V extends k{constructor(t){super(),A(this,t,null,T,y,{})}}export{V as component};
