import{s as b,n,o as v}from"../chunks/scheduler.f7cad496.js";import{S as w,i as y,s as m,g as u,x,f as a,c as h,h as p,j as _,y as T,k as f,a as i}from"../chunks/index.9f4e2312.js";import{l as M,g as C}from"../chunks/index.15c719b2.js";import{b as S}from"../chunks/paths.06a43173.js";const k=""+new URL("../assets/bom.1fca64a9.png",import.meta.url).href,A=""+new URL("../assets/tools.8f351e84.png",import.meta.url).href,$=""+new URL("../assets/one.0497a61c.png",import.meta.url).href,L=""+new URL("../assets/two.7fe73162.png",import.meta.url).href,U=""+new URL("../assets/three.6b2f66c7.png",import.meta.url).href,R=""+new URL("../assets/four.2b530cce.png",import.meta.url).href,D=""+new URL("../assets/four_two.48e2caa1.png",import.meta.url).href,F=""+new URL("../assets/five.3c284952.png",import.meta.url).href,P=""+new URL("../assets/six.f05b379e.png",import.meta.url).href;const{document:g}=C;function B(d){let s,e,o,l,c=`<div class="font-mono [&amp;&gt;*]:block [&amp;&gt;*]:px-2 [&amp;&gt;*]:py-1 [&amp;&gt;*]:rounded-md hover:[&amp;&gt;*]:bg-white/10 sticky self-start h-auto top-24 md:block hidden min-w-[12rem]"><a href="${S}/resources/pixel-drop" class="mb-2">← Back</a> <a href="#bom">BoM</a> <a href="#tools">Tools</a> <a href="#assembly">Assembly</a></div> <div><h1 class="mb-4 text-5xl font-bold">Pixel Drop Assembly Instructions</h1> <div class="prose prose-invert lg:prose-lg"><h2 id="bom">Bill Of Materials</h2> <table class="m-0 table-auto"><thead><tr><th>Component</th> <th>Source</th> <th>Qty</th></tr></thead> <tbody class="text-lg"><tr><td>Triple Fault Custom Mount</td> <td>3D Printed</td> <td>1</td></tr> <tr><td>Triple Fault Custom Cam</td> <td>3D Printed</td> <td>1</td></tr> <tr><td>Triple Fault Custom Follower</td> <td>3D Printed</td> <td>1</td></tr> <tr><td>Triple Fault Custom Cap</td> <td>3D Printed</td> <td>1</td></tr> <tr><td>GoBuilda Standard Size Servo</td> <td>COTS</td> <td>1</td></tr> <tr><td>M3 8mm Hex Socket Cap Head Screw</td> <td>COTS</td> <td>3</td></tr> <tr><td>M4 8mm Hex Socket Cap Head Screw</td> <td>COTS</td> <td>2</td></tr> <tr><td>Size 10 Rubber Band</td> <td>COTS</td> <td>1</td></tr></tbody></table> <img src="${k}" class="svelte-al4ud8"/> <h2 id="tools">Tools</h2> <img src="${A}" class="svelte-al4ud8"/> <ul><li>M3 Allen Key</li> <li>M4 Allen Key</li> <li>X-Acto Knife</li></ul> <h2 id="assembly">Assembly</h2> <ol><li>Use an X-Acto knife or another sharp tool to remove the small support
          triangle on the side of the servo. The support gets in the way of the
          custom mount, so it’s best to remove it.
          <img src="${$}" class="svelte-al4ud8"/></li> <li>Attach the custom mount to the servo using two M4 screws and an M4
          Allen key.
          <img src="${L}" class="svelte-al4ud8"/></li> <li>Attach the custom cam to the servo spline using one M3 screw and an M3
          Allen key.
          <img src="${U}" class="svelte-al4ud8"/></li> <li>Fold the rubber band in half and slide it into the small groove of the
          custom follower.
          <div class="grid grid-cols-2 gap-2 [&amp;&gt;*]:object-cover [&amp;&gt;*]:h-full mb-4 not-prose"><img src="${R}" class="svelte-al4ud8"/> <img src="${D}" class="svelte-al4ud8"/></div></li> <li>Attach the follower to the custom mount by wrapping the rubber band
          around the cam and standoff.
          <img src="${F}" class="svelte-al4ud8"/></li> <li>Finally, attach the custom cap to the bottom of the mount using two M3
          screws and an M3 Allen key. Congratulations, you’ve successfully
          assembled the Triple Fault Pixel Drop Mechanism!
          <img src="${P}" class="svelte-al4ud8"/></li></ol></div></div>`;return{c(){s=m(),e=u("div"),o=m(),l=u("div"),l.innerHTML=c,this.h()},l(t){x("svelte-1qxj3lo",g.head).forEach(a),s=h(t),e=p(t,"DIV",{class:!0}),_(e).forEach(a),o=h(t),l=p(t,"DIV",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-p88gi3"&&(l.innerHTML=c),this.h()},h(){g.title="Triple Fault | Pixel Drop | Assembly",f(e,"class","fixed w-full h-full -z-20 bg-[#231124] top-0 left-0"),f(l,"class","flex max-w-5xl gap-8 m-auto")},m(t,r){i(t,s,r),i(t,e,r),i(t,o,r),i(t,l,r)},p:n,i:n,o:n,d(t){t&&(a(s),a(e),a(o),a(l))}}}function H(d){return v(()=>{for(const s of document.getElementsByTagName("a")){const e=s;e.href.includes("#")&&(e.onclick=()=>{var o;return(o=M)==null?void 0:o.scrollTo(`#${e.href.split("#")[1]}`)})}}),[]}class I extends w{constructor(s){super(),y(this,s,H,B,b,{})}}export{I as component};