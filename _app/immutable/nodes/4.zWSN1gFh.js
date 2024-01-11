import{s as me,e as C,a as P,t as le,c as E,b as D,g as M,f as d,d as ae,m as k,i as B,h as p,j as he,q as de,n as Z,l as se,p as _e}from"../chunks/scheduler.AYp2G5nm.js";import{S as ue,i as pe,c as I,a as V,m as y,t as _,b as w,d as L,g as re,e as ne}from"../chunks/index.r715hrnn.js";import{e as O,U as G,u as ve,o as we}from"../chunks/UIcon.zLhtqsW9.js";import{d as oe,g as Q,e as be}from"../chunks/params.szbd71JB.js";import{C as xe}from"../chunks/Card.AIoKWHe6.js";import{C as ke}from"../chunks/CardLogo.NZSVEZMu.js";import{C as Ce,a as K}from"../chunks/ChipIcon.q_Czxl-_.js";import{b as W}from"../chunks/paths.G2j_PLjQ.js";import{S as Ee}from"../chunks/SearchPage.MiRZXYZ6.js";import{i as De}from"../chunks/index.d6qvuZ_w.js";function ie(s,t,r){const e=s.slice();return e[4]=t[r],e}function Ie(s){let t,r;return t=new G({props:{icon:"i-carbon-building"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Ve(s){let t,r;return t=new G({props:{icon:"i-carbon-location"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ye(s){let t,r;return t=new G({props:{icon:"i-carbon-hourglass"}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p:Z,i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function ce(s){let t,r;return t=new K({props:{logo:Q(s[4].logo),name:s[4].name,href:`${W}/skills/${s[4].slug}`}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,n){const o={};n&1&&(o.logo=Q(e[4].logo)),n&1&&(o.name=e[4].name),n&1&&(o.href=`${W}/skills/${e[4].slug}`),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Le(s){let t,r,e,n,o,c,$,a,l,f,h,q,g,x,S,F,ee,R,H=s[0].shortDescription+"",J,te,N,T;r=new ke({props:{src:Q(s[0].logo),alt:s[0].company,size:75}}),c=new Ce({props:{title:s[0].name}}),l=new K({props:{name:`Company: ${s[0].company}`,$$slots:{default:[Ie]},$$scope:{ctx:s}}}),h=new K({props:{name:`Location: ${s[0].location}`,$$slots:{default:[Ve]},$$scope:{ctx:s}}}),g=new K({props:{name:`Contract: ${s[0].contract}`,$$slots:{default:[ye]},$$scope:{ctx:s}}});let U=O(s[0].skills),u=[];for(let i=0;i<U.length;i+=1)u[i]=ce(ie(s,U,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),I(r.$$.fragment),e=P(),n=C("div"),o=C("h3"),I(c.$$.fragment),$=P(),a=C("div"),I(l.$$.fragment),f=P(),I(h.$$.fragment),q=P(),I(g.$$.fragment),x=P(),S=C("div"),F=le(s[1]),ee=P(),R=C("div"),J=le(H),te=P(),N=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=D(t);V(r.$$.fragment,m),e=M(m),n=E(m,"DIV",{class:!0});var v=D(n);o=E(v,"H3",{class:!0});var X=D(o);V(c.$$.fragment,X),X.forEach(d),$=M(v),a=E(v,"DIV",{class:!0});var j=D(a);V(l.$$.fragment,j),f=M(j),V(h.$$.fragment,j),q=M(j),V(g.$$.fragment,j),j.forEach(d),x=M(v),S=E(v,"DIV",{class:!0});var Y=D(S);F=ae(Y,s[1]),Y.forEach(d),ee=M(v),R=E(v,"DIV",{class:!0});var z=D(R);J=ae(z,H),z.forEach(d),te=M(v),N=E(v,"DIV",{class:!0});var b=D(N);for(let A=0;A<u.length;A+=1)u[A].l(b);b.forEach(d),v.forEach(d),m.forEach(d),this.h()},h(){k(o,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(a,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(S,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(n,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){B(i,t,m),y(r,t,null),p(t,e),p(t,n),p(n,o),y(c,o,null),p(n,$),p(n,a),y(l,a,null),p(a,f),y(h,a,null),p(a,q),y(g,a,null),p(n,x),p(n,S),p(S,F),p(n,ee),p(n,R),p(R,J),p(n,te),p(n,N);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(N,null);T=!0},p(i,m){const v={};m&1&&(v.src=Q(i[0].logo)),m&1&&(v.alt=i[0].company),r.$set(v);const X={};m&1&&(X.title=i[0].name),c.$set(X);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&128&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const Y={};m&1&&(Y.name=`Location: ${i[0].location}`),m&128&&(Y.$$scope={dirty:m,ctx:i}),h.$set(Y);const z={};if(m&1&&(z.name=`Contract: ${i[0].contract}`),m&128&&(z.$$scope={dirty:m,ctx:i}),g.$set(z),(!T||m&1)&&H!==(H=i[0].shortDescription+"")&&he(J,H),m&1){U=O(i[0].skills);let b;for(b=0;b<U.length;b+=1){const A=ie(i,U,b);u[b]?(u[b].p(A,m),_(u[b],1)):(u[b]=ce(A),u[b].c(),_(u[b],1),u[b].m(N,null))}for(re(),b=U.length;b<u.length;b+=1)ge(b);ne()}},i(i){if(!T){_(r.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(h.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<U.length;m+=1)_(u[m]);T=!0}},o(i){w(r.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(h.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);T=!1},d(i){i&&d(t),L(r),L(c),L(l),L(h),L(g),de(u,i)}}}function Se(s){let t,r;return t=new xe({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${W}/experience/${s[0].slug}`,$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const o={};n&1&&(o.href=`${W}/experience/${e[0].slug}`),n&129&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Pe(s,t,r){let{experience:e}=t;const n=`${oe(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,o=e.period.to?`${oe(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",c=`${n} - ${o}`;return s.$$set=$=>{"experience"in $&&r(0,e=$.experience)},[e,c]}class Me extends ue{constructor(t){super(),pe(this,t,Pe,Se,me,{experience:0})}}function fe(s,t,r){const e=s.slice();return e[4]=t[r],e[6]=r,e}function je(s){let t,r,e=[],n=new Map,o,c,$=O(s[0]);const a=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(s,$,l),h=a(f);n.set(h,e[l]=$e(h,f))}return{c(){t=C("div"),r=P();for(let l=0;l<e.length;l+=1)e[l].c();o=se(),this.h()},l(l){t=E(l,"DIV",{class:!0}),D(t).forEach(d),r=M(l);for(let f=0;f<e.length;f+=1)e[f].l(l);o=se(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){B(l,t,f),B(l,r,f);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(l,f);B(l,o,f),c=!0},p(l,f){f&1&&($=O(l[0]),re(),e=ve(e,f,a,1,l,$,n,o.parentNode,we,$e,o,fe),ne())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(d(t),d(r),d(o));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function qe(s){let t,r,e,n,o="Could not find anything...",c;return r=new G({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),I(r.$$.fragment),e=P(),n=C("p"),n.textContent=o,this.h()},l($){t=E($,"DIV",{class:!0});var a=D(t);V(r.$$.fragment,a),e=M(a),n=E(a,"P",{class:!0,"data-svelte-h":!0}),_e(n)!=="svelte-1jyyf6v"&&(n.textContent=o),a.forEach(d),this.h()},h(){k(n,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,a){B($,t,a),y(r,t,null),p(t,e),p(t,n),c=!0},p:Z,i($){c||(_(r.$$.fragment,$),c=!0)},o($){w(r.$$.fragment,$),c=!1},d($){$&&d(t),L(r)}}}function $e(s,t){let r,e,n,o,c,$,a,l,f,h,q;return c=new G({props:{icon:"i-carbon-condition-point",classes:""}}),l=new Me({props:{experience:t[4]}}),{key:s,first:null,c(){r=C("div"),e=C("div"),n=P(),o=C("div"),I(c.$$.fragment),$=P(),a=C("div"),I(l.$$.fragment),f=P(),this.h()},l(g){r=E(g,"DIV",{class:!0});var x=D(r);e=E(x,"DIV",{class:!0}),D(e).forEach(d),n=M(x),o=E(x,"DIV",{class:!0});var S=D(o);V(c.$$.fragment,S),S.forEach(d),$=M(x),a=E(x,"DIV",{class:!0});var F=D(a);V(l.$$.fragment,F),F.forEach(d),f=M(x),x.forEach(d),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(a,"class","flex-1 col items-stretch"),k(r,"class",h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=r},m(g,x){B(g,r,x),p(r,e),p(r,n),p(r,o),y(c,o,null),p(r,$),p(r,a),y(l,a,null),p(r,f),q=!0},p(g,x){t=g;const S={};x&1&&(S.experience=t[4]),l.$set(S),(!q||x&1&&h!==(h=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(r,"class",h)},i(g){q||(_(c.$$.fragment,g),_(l.$$.fragment,g),q=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),q=!1},d(g){g&&d(r),L(c),L(l)}}}function Ne(s){let t,r,e,n;const o=[qe,je],c=[];function $(a,l){return a[0].length===0?0:1}return r=$(s),e=c[r]=o[r](s),{c(){t=C("div"),e.c(),this.h()},l(a){t=E(a,"DIV",{class:!0});var l=D(t);e.l(l),l.forEach(d),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(a,l){B(a,t,l),c[r].m(t,null),n=!0},p(a,l){let f=r;r=$(a),r===f?c[r].p(a,l):(re(),w(c[f],1,1,()=>{c[f]=null}),ne(),e=c[r],e?e.p(a,l):(e=c[r]=o[r](a),e.c()),_(e,1),e.m(t,null))},i(a){n||(_(e),n=!0)},o(a){w(e),n=!1},d(a){a&&d(t),c[r].d()}}}function Ue(s){let t,r;return t=new Ee({props:{title:s[1],$$slots:{default:[Ne]},$$scope:{ctx:s}}}),t.$on("search",s[2]),{c(){I(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){y(t,e,n),r=!0},p(e,[n]){const o={};n&129&&(o.$$scope={dirty:n,ctx:e}),t.$set(o)},i(e){r||(_(t.$$.fragment,e),r=!0)},o(e){w(t.$$.fragment,e),r=!1},d(e){L(t,e)}}}function Be(s,t,r){const{items:e,title:n}=be;let o=[...e];return[o,n,$=>{const a=$.detail.search;if(De(a)){r(0,o=e);return}r(0,o=e.filter(l=>l.name.toLowerCase().includes(a)||l.company.toLowerCase().includes(a)||l.description.toLowerCase().includes(a)))}]}class Ke extends ue{constructor(t){super(),pe(this,t,Be,Ue,me,{})}}export{Ke as component};