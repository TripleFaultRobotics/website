import{s as nt,n as we,d as z}from"../chunks/scheduler.a63e10c5.js";import{S as rt,i as ot,g as m,h as p,j as w,f as _,a as V,B as ye,C as et,k as o,x as d,d as U,p as bt,b as kt,t as x,E as y,s as I,c as C,r as tt,u as lt,v as st,w as at,m as O,n as Z,o as W,e as Ee,A as St}from"../chunks/index.a8155e30.js";import{e as M}from"../chunks/each.e59479a4.js";import{b as q}from"../chunks/paths.abb81002.js";function yt(n){let e,l,s;return{c(){e=ye("svg"),l=ye("path"),this.h()},l(t){e=et(t,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var a=w(e);l=et(a,"path",{"fill-rule":!0,"clip-rule":!0,d:!0,fill:!0}),w(l).forEach(_),a.forEach(_),this.h()},h(){o(l,"fill-rule","evenodd"),o(l,"clip-rule","evenodd"),o(l,"d","M58.0001 18.4851C58.0001 17.0585 57.2403 15.74 56.0062 15.0245L31.0062 0.531462C29.7655 -0.187815 28.2346 -0.187814 26.9939 0.531463L1.99391 15.0245C0.759772 15.74 6.10352e-05 17.0585 6.10352e-05 18.4851V47.4996C6.10352e-05 48.9261 0.759773 50.2447 1.99391 50.9602L26.9939 65.4532C28.2346 66.1725 29.7655 66.1725 31.0062 65.4532L56.0062 50.9602C57.2403 50.2447 58.0001 48.9261 58.0001 47.4996V18.4851ZM41.7152 28.0677C41.7152 26.6412 40.9555 25.3226 39.7214 24.6071L30.6714 19.3607C29.4307 18.6414 27.8998 18.6414 26.6591 19.3607L17.6091 24.6071C16.3749 25.3226 15.6152 26.6412 15.6152 28.0677V38.5891C15.6152 40.0156 16.3749 41.3342 17.6091 42.0496L26.6591 47.2961C27.8998 48.0154 29.4307 48.0154 30.6714 47.2961L39.7214 42.0496C40.9555 41.3342 41.7152 40.0156 41.7152 38.5891V28.0677Z"),o(l,"fill",s=n[1][n[0]]),o(e,"width","58"),o(e,"height","66"),o(e,"viewBox","0 0 58 66"),o(e,"fill","none"),o(e,"xmlns","http://www.w3.org/2000/svg")},m(t,a){V(t,e,a),d(e,l)},p(t,a){a&1&&s!==(s=t[1][t[0]])&&o(l,"fill",s)},d(t){t&&_(e)}}}function e0(n){let e,l;return{c(){e=ye("svg"),l=ye("circle"),this.h()},l(s){e=et(s,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,xmlns:!0});var t=w(e);l=et(t,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"fill-opacity":!0}),w(l).forEach(_),t.forEach(_),this.h()},h(){o(l,"cx","29"),o(l,"cy","33"),o(l,"r","8"),o(l,"fill","white"),o(l,"fill-opacity","0.25"),o(e,"width","58"),o(e,"height","67"),o(e,"viewBox","0 0 58 67"),o(e,"fill","none"),o(e,"xmlns","http://www.w3.org/2000/svg")},m(s,t){V(s,e,t),d(e,l)},p:we,d(s){s&&_(e)}}}function t0(n){let e;function l(a,c){return a[0]===0?e0:yt}let s=l(n),t=s(n);return{c(){e=m("div"),t.c()},l(a){e=p(a,"DIV",{});var c=w(e);t.l(c),c.forEach(_)},m(a,c){V(a,e,c),t.m(e,null)},p(a,[c]){s===(s=l(a))&&t?t.p(a,c):(t.d(1),t=s(a),t&&(t.c(),t.m(e,null)))},i:we,o:we,d(a){a&&_(e),t.d()}}}function l0(n,e,l){let{type:s=0}=e;const t=["#000000","#FFFFFF","#A78BFA","#FACC15","#84CC16"];return n.$$set=a=>{"type"in a&&l(0,s=a.type)},[s,t]}class s0 extends rt{constructor(e){super(),ot(this,e,l0,t0,nt,{type:0})}}function Bt(n,e,l){const s=n.slice();return s[2]=e[l],s[4]=l,s}function Lt(n,e,l){const s=n.slice();return s[5]=e[l],s}function At(n){let e,l;return e=new s0({props:{type:n[5]}}),{c(){tt(e.$$.fragment)},l(s){lt(e.$$.fragment,s)},m(s,t){st(e,s,t),l=!0},p(s,t){const a={};t&2&&(a.type=s[5]),e.$set(a)},i(s){l||(U(e.$$.fragment,s),l=!0)},o(s){x(e.$$.fragment,s),l=!1},d(s){at(e,s)}}}function Ft(n){let e,l,s,t,a=M(n[2]),c=[];for(let u=0;u<a.length;u+=1)c[u]=At(Lt(n,a,u));const g=u=>x(c[u],1,1,()=>{c[u]=null});return{c(){e=m("div");for(let u=0;u<c.length;u+=1)c[u].c();l=I(),this.h()},l(u){e=p(u,"DIV",{class:!0});var h=w(e);for(let f=0;f<c.length;f+=1)c[f].l(h);l=C(h),h.forEach(_),this.h()},h(){o(e,"class",s="grid "+(n[2].length===6?"grid-cols-6 ml-[28.5px]":"grid-cols-7")+" "+(n[4]>0?"-mt-[16.5px]":"")+" w-fit")},m(u,h){V(u,e,h);for(let f=0;f<c.length;f+=1)c[f]&&c[f].m(e,null);d(e,l),t=!0},p(u,h){if(h&2){a=M(u[2]);let f;for(f=0;f<a.length;f+=1){const j=Lt(u,a,f);c[f]?(c[f].p(j,h),U(c[f],1)):(c[f]=At(j),c[f].c(),U(c[f],1),c[f].m(e,l))}for(bt(),f=a.length;f<c.length;f+=1)g(f);kt()}(!t||h&2&&s!==(s="grid "+(u[2].length===6?"grid-cols-6 ml-[28.5px]":"grid-cols-7")+" "+(u[4]>0?"-mt-[16.5px]":"")+" w-fit"))&&o(e,"class",s)},i(u){if(!t){for(let h=0;h<a.length;h+=1)U(c[h]);t=!0}},o(u){c=c.filter(Boolean);for(let h=0;h<c.length;h+=1)x(c[h]);t=!1},d(u){u&&_(e),y(c,u)}}}function a0(n){let e,l,s,t=M(n[1]),a=[];for(let g=0;g<t.length;g+=1)a[g]=Ft(Bt(n,t,g));const c=g=>x(a[g],1,1,()=>{a[g]=null});return{c(){e=m("div");for(let g=0;g<a.length;g+=1)a[g].c();this.h()},l(g){e=p(g,"DIV",{class:!0});var u=w(e);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(_),this.h()},h(){o(e,"class",l="grid "+n[0])},m(g,u){V(g,e,u);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(e,null);s=!0},p(g,[u]){if(u&2){t=M(g[1]);let h;for(h=0;h<t.length;h+=1){const f=Bt(g,t,h);a[h]?(a[h].p(f,u),U(a[h],1)):(a[h]=Ft(f),a[h].c(),U(a[h],1),a[h].m(e,null))}for(bt(),h=t.length;h<a.length;h+=1)c(h);kt()}(!s||u&1&&l!==(l="grid "+g[0]))&&o(e,"class",l)},i(g){if(!s){for(let u=0;u<t.length;u+=1)U(a[u]);s=!0}},o(g){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)x(a[u]);s=!1},d(g){g&&_(e),y(a,g)}}}function n0(n,e,l){let{class:s}=e,{boardState:t}=e;return n.$$set=a=>{"class"in a&&l(0,s=a.class),"boardState"in a&&l(1,t=a.boardState)},[s,t]}class Rt extends rt{constructor(e){super(),ot(this,e,n0,a0,nt,{class:0,boardState:1})}}function Nt(n,e,l){const s=n.slice();return s[3]=e[l],s}function Tt(n,e,l){const s=n.slice();return s[3]=e[l],s}function Pt(n,e,l){const s=n.slice();return s[3]=e[l],s}function Qt(n,e,l){const s=n.slice();return s[3]=e[l],s}function zt(n,e,l){const s=n.slice();return s[3]=e[l],s}function qt(n,e,l){const s=n.slice();return s[3]=e[l],s}function r0(n){let e,l,s;return{c(){e=m("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/auto-"+n[3]+".svg")||o(e,"src",l),o(e,"title",s=n[2]["auto-"+n[3]])},m(t,a){V(t,e,a)},p(t,a){a&1&&!z(e.src,l=q+"/csicons/auto-"+t[3]+".svg")&&o(e,"src",l),a&1&&s!==(s=t[2]["auto-"+t[3]])&&o(e,"title",s)},d(t){t&&_(e)}}}function o0(n){let e,l;return{c(){e=m("img"),this.h()},l(s){e=p(s,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/auto-purple-red.svg")||o(e,"src",l),o(e,"title",n[2]["auto-purple"])},m(s,t){V(s,e,t)},p:we,d(s){s&&_(e)}}}function Ot(n){let e;function l(a,c){return a[3]==="purple"?o0:r0}let s=l(n),t=s(n);return{c(){t.c(),e=Ee()},l(a){t.l(a),e=Ee()},m(a,c){t.m(a,c),V(a,e,c)},p(a,c){s===(s=l(a))&&t?t.p(a,c):(t.d(1),t=s(a),t&&(t.c(),t.m(e.parentNode,e)))},d(a){a&&_(e),t.d(a)}}}function Zt(n){let e,l,s;return{c(){e=m("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/teleop-"+n[3]+".svg")||o(e,"src",l),o(e,"title",s=n[2]["teleop-"+n[3]])},m(t,a){V(t,e,a)},p(t,a){a&1&&!z(e.src,l=q+"/csicons/teleop-"+t[3]+".svg")&&o(e,"src",l),a&1&&s!==(s=t[2]["teleop-"+t[3]])&&o(e,"title",s)},d(t){t&&_(e)}}}function jt(n){let e,l,s;return{c(){e=m("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/endgame-"+n[3]+".svg")||o(e,"src",l),o(e,"title",s=n[2]["endgame-"+n[3]])},m(t,a){V(t,e,a)},p(t,a){a&1&&!z(e.src,l=q+"/csicons/endgame-"+t[3]+".svg")&&o(e,"src",l),a&1&&s!==(s=t[2]["endgame-"+t[3]])&&o(e,"title",s)},d(t){t&&_(e)}}}function Ut(n){let e,l,s,t,a=n[0].red.backstage+"",c;return{c(){e=m("div"),l=m("img"),t=O(" x "),c=O(a),this.h()},l(g){e=p(g,"DIV",{class:!0,title:!0});var u=w(e);l=p(u,"IMG",{src:!0,class:!0}),t=Z(u," x "),c=Z(u,a),u.forEach(_),this.h()},h(){z(l.src,s=q+"/csicons/pixel-white.svg")||o(l,"src",s),o(l,"class","w-8 inline"),o(e,"class","text-xl [width:fit-content!important]"),o(e,"title",n[2].backstage)},m(g,u){V(g,e,u),d(e,l),d(e,t),d(e,c)},p(g,u){u&1&&a!==(a=g[0].red.backstage+"")&&W(c,a)},d(g){g&&_(e)}}}function i0(n){let e,l,s;return{c(){e=m("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/auto-"+n[3]+".svg")||o(e,"src",l),o(e,"title",s=n[2]["auto-"+n[3]])},m(t,a){V(t,e,a)},p(t,a){a&1&&!z(e.src,l=q+"/csicons/auto-"+t[3]+".svg")&&o(e,"src",l),a&1&&s!==(s=t[2]["auto-"+t[3]])&&o(e,"title",s)},d(t){t&&_(e)}}}function c0(n){let e,l;return{c(){e=m("img"),this.h()},l(s){e=p(s,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/auto-purple-blue.svg")||o(e,"src",l),o(e,"title",n[2]["auto-purple"])},m(s,t){V(s,e,t)},p:we,d(s){s&&_(e)}}}function Wt(n){let e;function l(a,c){return a[3]==="purple"?c0:i0}let s=l(n),t=s(n);return{c(){t.c(),e=Ee()},l(a){t.l(a),e=Ee()},m(a,c){t.m(a,c),V(a,e,c)},p(a,c){s===(s=l(a))&&t?t.p(a,c):(t.d(1),t=s(a),t&&(t.c(),t.m(e.parentNode,e)))},d(a){a&&_(e),t.d(a)}}}function Yt(n){let e,l,s;return{c(){e=m("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/teleop-"+n[3]+".svg")||o(e,"src",l),o(e,"title",s=n[2]["teleop-"+n[3]])},m(t,a){V(t,e,a)},p(t,a){a&1&&!z(e.src,l=q+"/csicons/teleop-"+t[3]+".svg")&&o(e,"src",l),a&1&&s!==(s=t[2]["teleop-"+t[3]])&&o(e,"title",s)},d(t){t&&_(e)}}}function xt(n){let e,l,s;return{c(){e=m("img"),this.h()},l(t){e=p(t,"IMG",{src:!0,title:!0}),this.h()},h(){z(e.src,l=q+"/csicons/endgame-"+n[3]+".svg")||o(e,"src",l),o(e,"title",s=n[2]["endgame-"+n[3]])},m(t,a){V(t,e,a)},p(t,a){a&1&&!z(e.src,l=q+"/csicons/endgame-"+t[3]+".svg")&&o(e,"src",l),a&1&&s!==(s=t[2]["endgame-"+t[3]])&&o(e,"title",s)},d(t){t&&_(e)}}}function Jt(n){let e,l,s,t,a=n[0].blue.backstage+"",c;return{c(){e=m("div"),l=m("img"),t=O(" x "),c=O(a),this.h()},l(g){e=p(g,"DIV",{class:!0,title:!0});var u=w(e);l=p(u,"IMG",{src:!0,class:!0}),t=Z(u," x "),c=Z(u,a),u.forEach(_),this.h()},h(){z(l.src,s=q+"/csicons/pixel-white.svg")||o(l,"src",s),o(l,"class","w-8 inline"),o(e,"class","text-xl [width:fit-content!important]"),o(e,"title",n[2].backstage)},m(g,u){V(g,e,u),d(e,l),d(e,t),d(e,c)},p(g,u){u&1&&a!==(a=g[0].blue.backstage+"")&&W(c,a)},d(g){g&&_(e)}}}function u0(n){let e,l,s,t,a,c,g=n[0].red.teams[0].name+"",u,h,f,j=n[0].red.teams[0].tn+"",v,$,E,J,$e=n[0].red.teams[1].name+"",Se,it,oe,Ie=n[0].red.teams[1].tn+"",Be,Le,ct,N,Ae,Fe,Re,ut,ie,Ce=n[0].red.score+"",Ne,ft,ee,ht,te,Y,K,le,ce,Ve=n[0].blue.teams[0].name+"",Te,dt,ue,De=n[0].blue.teams[0].tn+"",Pe,gt,se,fe,He=n[0].blue.teams[1].name+"",Qe,_t,he,Me=n[0].blue.teams[1].tn+"",ze,qe,mt,T,Oe,Ze,je,pt,de,Ge=n[0].blue.score+"",Ue,vt,ae,We,G,ge=M(n[0].red.bonuses.auto??[]),S=[];for(let r=0;r<ge.length;r+=1)S[r]=Ot(qt(n,ge,r));let _e=M(n[0].red.bonuses.teleop??[]),B=[];for(let r=0;r<_e.length;r+=1)B[r]=Zt(zt(n,_e,r));let me=M(n[0].red.bonuses.endgame??[]),L=[];for(let r=0;r<me.length;r+=1)L[r]=jt(Qt(n,me,r));let P=n[0].red.backstage>0&&Ut(n);ee=new Rt({props:{class:"self-center mt-4",boardState:n[0].red.backdrop}});let pe=M(n[0].blue.bonuses.auto??[]),A=[];for(let r=0;r<pe.length;r+=1)A[r]=Wt(Pt(n,pe,r));let ve=M(n[0].blue.bonuses.teleop??[]),F=[];for(let r=0;r<ve.length;r+=1)F[r]=Yt(Tt(n,ve,r));let be=M(n[0].blue.bonuses.endgame??[]),R=[];for(let r=0;r<be.length;r+=1)R[r]=xt(Nt(n,be,r));let Q=n[0].blue.backstage>0&&Jt(n);return ae=new Rt({props:{class:"self-center mt-4",boardState:n[0].blue.backdrop}}),{c(){e=m("div"),l=m("div"),s=m("div"),t=m("div"),a=m("div"),c=m("h2"),u=O(g),h=I(),f=m("h3"),v=O(j),$=I(),E=m("div"),J=m("h2"),Se=O($e),it=I(),oe=m("h3"),Be=O(Ie),ct=I(),N=m("div");for(let r=0;r<S.length;r+=1)S[r].c();Ae=I();for(let r=0;r<B.length;r+=1)B[r].c();Fe=I();for(let r=0;r<L.length;r+=1)L[r].c();Re=I(),P&&P.c(),ut=I(),ie=m("h1"),Ne=O(Ce),ft=I(),tt(ee.$$.fragment),ht=I(),te=m("div"),Y=m("div"),K=m("div"),le=m("div"),ce=m("h2"),Te=O(Ve),dt=I(),ue=m("h3"),Pe=O(De),gt=I(),se=m("div"),fe=m("h2"),Qe=O(He),_t=I(),he=m("h3"),ze=O(Me),mt=I(),T=m("div");for(let r=0;r<A.length;r+=1)A[r].c();Oe=I();for(let r=0;r<F.length;r+=1)F[r].c();Ze=I();for(let r=0;r<R.length;r+=1)R[r].c();je=I(),Q&&Q.c(),pt=I(),de=m("h1"),Ue=O(Ge),vt=I(),tt(ae.$$.fragment),this.h()},l(r){e=p(r,"DIV",{class:!0});var k=w(e);l=p(k,"DIV",{class:!0});var b=w(l);s=p(b,"DIV",{class:!0});var X=w(s);t=p(X,"DIV",{class:!0});var i=w(t);a=p(i,"DIV",{class:!0});var H=w(a);c=p(H,"H2",{class:!0});var wt=w(c);u=Z(wt,g),wt.forEach(_),h=C(H),f=p(H,"H3",{class:!0});var Et=w(f);v=Z(Et,j),Et.forEach(_),H.forEach(_),$=C(i),E=p(i,"DIV",{class:!0});var Ye=w(E);J=p(Ye,"H2",{class:!0});var $t=w(J);Se=Z($t,$e),$t.forEach(_),it=C(Ye),oe=p(Ye,"H3",{class:!0});var It=w(oe);Be=Z(It,Ie),It.forEach(_),Ye.forEach(_),i.forEach(_),ct=C(X),N=p(X,"DIV",{class:!0});var ne=w(N);for(let D=0;D<S.length;D+=1)S[D].l(ne);Ae=C(ne);for(let D=0;D<B.length;D+=1)B[D].l(ne);Fe=C(ne);for(let D=0;D<L.length;D+=1)L[D].l(ne);Re=C(ne),P&&P.l(ne),ne.forEach(_),ut=C(X),ie=p(X,"H1",{class:!0});var Ct=w(ie);Ne=Z(Ct,Ce),Ct.forEach(_),X.forEach(_),ft=C(b),lt(ee.$$.fragment,b),b.forEach(_),ht=C(k),te=p(k,"DIV",{class:!0});var xe=w(te);Y=p(xe,"DIV",{class:!0});var ke=w(Y);K=p(ke,"DIV",{class:!0});var Je=w(K);le=p(Je,"DIV",{class:!0});var Ke=w(le);ce=p(Ke,"H2",{class:!0});var Vt=w(ce);Te=Z(Vt,Ve),Vt.forEach(_),dt=C(Ke),ue=p(Ke,"H3",{class:!0});var Dt=w(ue);Pe=Z(Dt,De),Dt.forEach(_),Ke.forEach(_),gt=C(Je),se=p(Je,"DIV",{class:!0});var Xe=w(se);fe=p(Xe,"H2",{class:!0});var Ht=w(fe);Qe=Z(Ht,He),Ht.forEach(_),_t=C(Xe),he=p(Xe,"H3",{class:!0});var Mt=w(he);ze=Z(Mt,Me),Mt.forEach(_),Xe.forEach(_),Je.forEach(_),mt=C(ke),T=p(ke,"DIV",{class:!0});var re=w(T);for(let D=0;D<A.length;D+=1)A[D].l(re);Oe=C(re);for(let D=0;D<F.length;D+=1)F[D].l(re);Ze=C(re);for(let D=0;D<R.length;D+=1)R[D].l(re);je=C(re),Q&&Q.l(re),re.forEach(_),pt=C(ke),de=p(ke,"H1",{class:!0});var Gt=w(de);Ue=Z(Gt,Ge),Gt.forEach(_),ke.forEach(_),vt=C(xe),lt(ae.$$.fragment,xe),xe.forEach(_),k.forEach(_),this.h()},h(){o(c,"class","text-2xl"),o(f,"class","text-lg"),o(a,"class","basis-1/2 bg-neutral-100/5 p-2 rounded-md"),o(J,"class","text-2xl"),o(oe,"class","text-lg"),o(E,"class","basis-1/2 bg-neutral-100/5 p-2 rounded-md"),o(t,"class",Le="flex gap-4 text-center "+(n[0].red.score>n[0].blue.score?"font-bold":"")),o(N,"class","bg-stone-700/50 rounded p-4 mt-4 [&>*]:w-8 [&>*]:inline-block [&>*]:mr-2"),o(ie,"class","text-6xl font-extrabold text-center mt-4 bg-red-900/50 rounded-md py-2"),o(s,"class","bg-red-500/50 p-4 rounded-md grow h-fit"),o(l,"class","flex flex-col"),o(ce,"class","text-2xl"),o(ue,"class","text-lg"),o(le,"class","basis-1/2 bg-neutral-100/5 p-2 rounded-md"),o(fe,"class","text-2xl"),o(he,"class","text-lg"),o(se,"class","basis-1/2 bg-neutral-100/5 p-2 rounded-md"),o(K,"class",qe="flex gap-4 text-center "+(n[0].blue.score>n[0].red.score?"font-bold":"")),o(T,"class","bg-slate-700/50 rounded p-4 mt-4 [&>*]:w-8 [&>*]:inline-block [&>*]:mr-2"),o(de,"class","text-6xl font-extrabold text-center mt-4 bg-blue-900/50 rounded-md py-2"),o(Y,"class","bg-blue-500/50 p-4 rounded-md grow h-fit"),o(te,"class","flex flex-col"),o(e,"class",We="grid gap-4 lg:grid-cols-2 "+n[1])},m(r,k){V(r,e,k),d(e,l),d(l,s),d(s,t),d(t,a),d(a,c),d(c,u),d(a,h),d(a,f),d(f,v),d(t,$),d(t,E),d(E,J),d(J,Se),d(E,it),d(E,oe),d(oe,Be),d(s,ct),d(s,N);for(let b=0;b<S.length;b+=1)S[b]&&S[b].m(N,null);d(N,Ae);for(let b=0;b<B.length;b+=1)B[b]&&B[b].m(N,null);d(N,Fe);for(let b=0;b<L.length;b+=1)L[b]&&L[b].m(N,null);d(N,Re),P&&P.m(N,null),d(s,ut),d(s,ie),d(ie,Ne),d(l,ft),st(ee,l,null),d(e,ht),d(e,te),d(te,Y),d(Y,K),d(K,le),d(le,ce),d(ce,Te),d(le,dt),d(le,ue),d(ue,Pe),d(K,gt),d(K,se),d(se,fe),d(fe,Qe),d(se,_t),d(se,he),d(he,ze),d(Y,mt),d(Y,T);for(let b=0;b<A.length;b+=1)A[b]&&A[b].m(T,null);d(T,Oe);for(let b=0;b<F.length;b+=1)F[b]&&F[b].m(T,null);d(T,Ze);for(let b=0;b<R.length;b+=1)R[b]&&R[b].m(T,null);d(T,je),Q&&Q.m(T,null),d(Y,pt),d(Y,de),d(de,Ue),d(te,vt),st(ae,te,null),G=!0},p(r,[k]){if((!G||k&1)&&g!==(g=r[0].red.teams[0].name+"")&&W(u,g),(!G||k&1)&&j!==(j=r[0].red.teams[0].tn+"")&&W(v,j),(!G||k&1)&&$e!==($e=r[0].red.teams[1].name+"")&&W(Se,$e),(!G||k&1)&&Ie!==(Ie=r[0].red.teams[1].tn+"")&&W(Be,Ie),(!G||k&1&&Le!==(Le="flex gap-4 text-center "+(r[0].red.score>r[0].blue.score?"font-bold":"")))&&o(t,"class",Le),k&5){ge=M(r[0].red.bonuses.auto??[]);let i;for(i=0;i<ge.length;i+=1){const H=qt(r,ge,i);S[i]?S[i].p(H,k):(S[i]=Ot(H),S[i].c(),S[i].m(N,Ae))}for(;i<S.length;i+=1)S[i].d(1);S.length=ge.length}if(k&5){_e=M(r[0].red.bonuses.teleop??[]);let i;for(i=0;i<_e.length;i+=1){const H=zt(r,_e,i);B[i]?B[i].p(H,k):(B[i]=Zt(H),B[i].c(),B[i].m(N,Fe))}for(;i<B.length;i+=1)B[i].d(1);B.length=_e.length}if(k&5){me=M(r[0].red.bonuses.endgame??[]);let i;for(i=0;i<me.length;i+=1){const H=Qt(r,me,i);L[i]?L[i].p(H,k):(L[i]=jt(H),L[i].c(),L[i].m(N,Re))}for(;i<L.length;i+=1)L[i].d(1);L.length=me.length}r[0].red.backstage>0?P?P.p(r,k):(P=Ut(r),P.c(),P.m(N,null)):P&&(P.d(1),P=null),(!G||k&1)&&Ce!==(Ce=r[0].red.score+"")&&W(Ne,Ce);const b={};if(k&1&&(b.boardState=r[0].red.backdrop),ee.$set(b),(!G||k&1)&&Ve!==(Ve=r[0].blue.teams[0].name+"")&&W(Te,Ve),(!G||k&1)&&De!==(De=r[0].blue.teams[0].tn+"")&&W(Pe,De),(!G||k&1)&&He!==(He=r[0].blue.teams[1].name+"")&&W(Qe,He),(!G||k&1)&&Me!==(Me=r[0].blue.teams[1].tn+"")&&W(ze,Me),(!G||k&1&&qe!==(qe="flex gap-4 text-center "+(r[0].blue.score>r[0].red.score?"font-bold":"")))&&o(K,"class",qe),k&5){pe=M(r[0].blue.bonuses.auto??[]);let i;for(i=0;i<pe.length;i+=1){const H=Pt(r,pe,i);A[i]?A[i].p(H,k):(A[i]=Wt(H),A[i].c(),A[i].m(T,Oe))}for(;i<A.length;i+=1)A[i].d(1);A.length=pe.length}if(k&5){ve=M(r[0].blue.bonuses.teleop??[]);let i;for(i=0;i<ve.length;i+=1){const H=Tt(r,ve,i);F[i]?F[i].p(H,k):(F[i]=Yt(H),F[i].c(),F[i].m(T,Ze))}for(;i<F.length;i+=1)F[i].d(1);F.length=ve.length}if(k&5){be=M(r[0].blue.bonuses.endgame??[]);let i;for(i=0;i<be.length;i+=1){const H=Nt(r,be,i);R[i]?R[i].p(H,k):(R[i]=xt(H),R[i].c(),R[i].m(T,je))}for(;i<R.length;i+=1)R[i].d(1);R.length=be.length}r[0].blue.backstage>0?Q?Q.p(r,k):(Q=Jt(r),Q.c(),Q.m(T,null)):Q&&(Q.d(1),Q=null),(!G||k&1)&&Ge!==(Ge=r[0].blue.score+"")&&W(Ue,Ge);const X={};k&1&&(X.boardState=r[0].blue.backdrop),ae.$set(X),(!G||k&2&&We!==(We="grid gap-4 lg:grid-cols-2 "+r[1]))&&o(e,"class",We)},i(r){G||(U(ee.$$.fragment,r),U(ae.$$.fragment,r),G=!0)},o(r){x(ee.$$.fragment,r),x(ae.$$.fragment,r),G=!1},d(r){r&&_(e),y(S,r),y(B,r),y(L,r),P&&P.d(),at(ee),y(A,r),y(F,r),y(R,r),Q&&Q.d(),at(ae)}}}function f0(n,e,l){const s={"auto-purple":"Purple pixel placed down on mark with team prop","auto-purple":"Purple pixel placed down on mark with team prop","auto-yellow":"Yellow dropped on corresponding april tag.","auto-navigation":"Robot parked during auto","teleop-mosaic":"A mosaic was formed.","teleop-set-line-1":"The first set line was reached","teleop-set-line-2":"The second set line was reached","teleop-set-line-3":"The third set line was reached","endgame-drone-1":"A drone landed in zone 1, providing 30 points","endgame-drone-2":"A drone landed in zone 2, providing 20 points","endgame-drone-3":"A drone landed in zone 3, providing 10 points","endgame-navigation":"Robot parked during Teleop","endgame-suspend":"Robot suspended off ground, rewarding 20 points",backstage:"Number of pixels pushed into the backstage"};let{match:t}=e,{class:a}=e;return n.$$set=c=>{"match"in c&&l(0,t=c.match),"class"in c&&l(1,a=c.class)},[t,a,s]}class h0 extends rt{constructor(e){super(),ot(this,e,f0,u0,nt,{match:0,class:1})}}function Kt(n,e,l){const s=n.slice();return s[3]=e[l],s}function Xt(n){let e,l,s=n[3].name+"",t,a,c,g,u;return c=new h0({props:{match:n[3],class:"mb-16"}}),{c(){e=m("div"),l=m("h1"),t=O(s),a=I(),tt(c.$$.fragment),g=I(),this.h()},l(h){e=p(h,"DIV",{});var f=w(e);l=p(f,"H1",{class:!0});var j=w(l);t=Z(j,s),j.forEach(_),a=C(f),lt(c.$$.fragment,f),g=C(f),f.forEach(_),this.h()},h(){o(l,"class","text-4xl mb-2 text-center text-stone-400")},m(h,f){V(h,e,f),d(e,l),d(l,t),d(e,a),st(c,e,null),d(e,g),u=!0},p:we,i(h){u||(U(c.$$.fragment,h),u=!0)},o(h){x(c.$$.fragment,h),u=!1},d(h){h&&_(e),at(c)}}}function d0(n){let e,l="Matches",s,t,a="Lovelace Meet #1",c,g,u,h=M(n[0]),f=[];for(let v=0;v<h.length;v+=1)f[v]=Xt(Kt(n,h,v));const j=v=>x(f[v],1,1,()=>{f[v]=null});return{c(){e=m("h1"),e.textContent=l,s=I(),t=m("h1"),t.textContent=a,c=I();for(let v=0;v<f.length;v+=1)f[v].c();g=Ee(),this.h()},l(v){e=p(v,"H1",{class:!0,"data-svelte-h":!0}),St(e)!=="svelte-p8zswq"&&(e.textContent=l),s=C(v),t=p(v,"H1",{class:!0,"data-svelte-h":!0}),St(t)!=="svelte-tg4tx3"&&(t.textContent=a),c=C(v);for(let $=0;$<f.length;$+=1)f[$].l(v);g=Ee(),this.h()},h(){o(e,"class","mb-8 text-6xl font-extrabold text-center"),o(t,"class","text-6xl mb-8 font-medium text-center")},m(v,$){V(v,e,$),V(v,s,$),V(v,t,$),V(v,c,$);for(let E=0;E<f.length;E+=1)f[E]&&f[E].m(v,$);V(v,g,$),u=!0},p(v,[$]){if($&1){h=M(v[0]);let E;for(E=0;E<h.length;E+=1){const J=Kt(v,h,E);f[E]?(f[E].p(J,$),U(f[E],1)):(f[E]=Xt(J),f[E].c(),U(f[E],1),f[E].m(g.parentNode,g))}for(bt(),E=h.length;E<f.length;E+=1)j(E);kt()}},i(v){if(!u){for(let $=0;$<h.length;$+=1)U(f[$]);u=!0}},o(v){f=f.filter(Boolean);for(let $=0;$<f.length;$+=1)x(f[$]);u=!1},d(v){v&&(_(e),_(s),_(t),_(c),_(g)),y(f,v)}}}function g0(n){const e={3848:"Shockwave",4216:"Rise of Hephaestus",5015:"Buffalo Wings",6226:"Bambusa",7609:"Lions",9049:"RoboPuffs",12499:"Gear Up",14338:"CAOS Robotics",14496:"Roboctopi",18263:"HIGH VOLTAGE",23251:"Triple Fault"},l=t=>({name:e[t],tn:t});return[[{name:"Qual 12",red:{score:43,teams:[l(14338),l(18263)],bonuses:{auto:["navigation"],endgame:["navigation","suspend"]},backstage:2,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,3,2,0,0]]},blue:{score:110,teams:[l(23251),l(4216)],bonuses:{auto:["navigation"],teleop:["set-line-1"],endgame:["drone-1","navigation","suspend"]},backstage:2,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,1,0,0,0,0],[1,3,1,3,0,0,0],[2,2,3,3,0,1]]}},{name:"Qual 10",red:{score:35,teams:[l(9049),l(7609)],bonuses:{auto:["navigation"],endgame:["navigation","suspend"]},backstage:5,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0]]},blue:{score:150,teams:[l(23251),l(14496)],bonuses:{auto:["purple","purple","navigation"],endgame:["drone-2","navigation","suspend"]},backstage:0,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,4,0,0,1,0,2],[2,3,1,3,4,2]]}},{name:"Qual 9",red:{score:119,teams:[l(23251),l(18263)],bonuses:{auto:["purple","yellow","navigation"],teleop:["set-line-1"],endgame:["navigation","suspend"]},backstage:1,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,1,0],[0,1,2,0,2,1,0],[2,2,3,3,3,1]]},blue:{score:79,teams:[l(12499),l(3848)],bonuses:{auto:["navigation","navigation"],endgame:["drone-2","suspend","suspend"]},backstage:5,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[2,0,0,0,0,0]]}},{name:"Qual 5",red:{score:157,teams:[l(12499),l(23251)],bonuses:{auto:["purple","yellow","navigation"],teleop:["set-line-1"],endgame:["drone-3","drone-2","suspend","suspend"]},backstage:0,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,0,0,0,0,0],[1,3,0,0,0,0,0],[2,3,1,3,3,2]]},blue:{score:42,teams:[l(4216),l(6226)],bonuses:{auto:["navigation"],endgame:["navigation","navigation"]},backstage:9,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,1,1,0,0],[0,1,1,1,1,0]]}},{name:"Qual 3",red:{score:202,teams:[l(18263),l(14496)],bonuses:{auto:["purple","purple","yellow","navigation"],teleop:["set-line-1","mosaic"],endgame:["drone-1","navigation","navigation"]},backstage:0,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,0,0,0,0],[1,1,1,0,0,0],[1,4,1,3,0,0,0],[2,3,1,3,2,2]]},blue:{score:90,teams:[l(5015),l(23251)],bonuses:{auto:["purple","yellow","navigation"],endgame:["suspend","navigation"]},backstage:3,backdrop:[[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0,0],[1,3,0,0,1,3]]}}]]}class b0 extends rt{constructor(e){super(),ot(this,e,g0,d0,nt,{})}}export{b0 as component};
