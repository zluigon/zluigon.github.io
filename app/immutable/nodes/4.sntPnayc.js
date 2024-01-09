import{s as me,e as C,a as P,t as le,c as E,b as I,g as M,f as h,d as ae,m as k,i as B,h as p,j as de,q as he,n as Z,l as se,p as _e}from"../chunks/scheduler.AYp2G5nm.js";import{S as ue,i as pe,c as D,a as V,m as y,t as _,b as w,d as L,g as ne,e as re}from"../chunks/index.r715hrnn.js";import{e as O,U as G,u as ve,o as we}from"../chunks/UIcon.zLhtqsW9.js";import{d as oe,g as Q,e as be}from"../chunks/params.E6vTnSYq.js";import{C as xe}from"../chunks/Card.PHjHal8I.js";import{C as ke}from"../chunks/CardLogo.NZSVEZMu.js";import{C as Ce,a as K}from"../chunks/ChipIcon.iafOrMr5.js";import{b as W}from"../chunks/paths.ptUsDKp6.js";import{S as Ee}from"../chunks/SearchPage.O5OJmdGV.js";import{i as Ie}from"../chunks/index.d6qvuZ_w.js";function ie(s,t,n){const e=s.slice();return e[4]=t[n],e}function De(s){let t,n;return t=new G({props:{icon:"i-carbon-building"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p:Z,i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Ve(s){let t,n;return t=new G({props:{icon:"i-carbon-location"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p:Z,i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ye(s){let t,n;return t=new G({props:{icon:"i-carbon-hourglass"}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p:Z,i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function ce(s){let t,n;return t=new K({props:{logo:Q(s[4].logo),name:s[4].name,href:`${W}/skills/${s[4].slug}`}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,r){const o={};r&1&&(o.logo=Q(e[4].logo)),r&1&&(o.name=e[4].name),r&1&&(o.href=`${W}/skills/${e[4].slug}`),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Le(s){let t,n,e,r,o,c,$,a,l,f,d,q,g,x,S,F,ee,R,H=s[0].description+"",J,te,N,T;n=new ke({props:{src:Q(s[0].logo),alt:s[0].company,size:75}}),c=new Ce({props:{title:s[0].name}}),l=new K({props:{name:`Company: ${s[0].company}`,$$slots:{default:[De]},$$scope:{ctx:s}}}),d=new K({props:{name:`Location: ${s[0].location}`,$$slots:{default:[Ve]},$$scope:{ctx:s}}}),g=new K({props:{name:`Contract: ${s[0].contract}`,$$slots:{default:[ye]},$$scope:{ctx:s}}});let U=O(s[0].skills),u=[];for(let i=0;i<U.length;i+=1)u[i]=ce(ie(s,U,i));const ge=i=>w(u[i],1,1,()=>{u[i]=null});return{c(){t=C("div"),D(n.$$.fragment),e=P(),r=C("div"),o=C("h3"),D(c.$$.fragment),$=P(),a=C("div"),D(l.$$.fragment),f=P(),D(d.$$.fragment),q=P(),D(g.$$.fragment),x=P(),S=C("div"),F=le(s[1]),ee=P(),R=C("div"),J=le(H),te=P(),N=C("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=E(i,"DIV",{class:!0});var m=I(t);V(n.$$.fragment,m),e=M(m),r=E(m,"DIV",{class:!0});var v=I(r);o=E(v,"H3",{class:!0});var X=I(o);V(c.$$.fragment,X),X.forEach(h),$=M(v),a=E(v,"DIV",{class:!0});var j=I(a);V(l.$$.fragment,j),f=M(j),V(d.$$.fragment,j),q=M(j),V(g.$$.fragment,j),j.forEach(h),x=M(v),S=E(v,"DIV",{class:!0});var Y=I(S);F=ae(Y,s[1]),Y.forEach(h),ee=M(v),R=E(v,"DIV",{class:!0});var z=I(R);J=ae(z,H),z.forEach(h),te=M(v),N=E(v,"DIV",{class:!0});var b=I(N);for(let A=0;A<u.length;A+=1)u[A].l(b);b.forEach(h),v.forEach(h),m.forEach(h),this.h()},h(){k(o,"class","flex text-[0.9em] flex-col items-start sm:flex-row sm:items-center justify-between sm:gap-5 md:flex-col md:items-start md:gap-0 lg:flex-row lg:items-center"),k(a,"class","row flex-wrap m-b-2 gap-1 text-0.9em font-300"),k(S,"class","text-[var(--accent-text)] text-[0.9em] font-200"),k(R,"class","experience-description"),k(N,"class","flex flex-row flex-wrap mt-5"),k(r,"class","col ml-0 md:ml-[20px] gap-3 w-full"),k(t,"class","col md:flex-row items-start gap-5 md:gap-1")},m(i,m){B(i,t,m),y(n,t,null),p(t,e),p(t,r),p(r,o),y(c,o,null),p(r,$),p(r,a),y(l,a,null),p(a,f),y(d,a,null),p(a,q),y(g,a,null),p(r,x),p(r,S),p(S,F),p(r,ee),p(r,R),p(R,J),p(r,te),p(r,N);for(let v=0;v<u.length;v+=1)u[v]&&u[v].m(N,null);T=!0},p(i,m){const v={};m&1&&(v.src=Q(i[0].logo)),m&1&&(v.alt=i[0].company),n.$set(v);const X={};m&1&&(X.title=i[0].name),c.$set(X);const j={};m&1&&(j.name=`Company: ${i[0].company}`),m&128&&(j.$$scope={dirty:m,ctx:i}),l.$set(j);const Y={};m&1&&(Y.name=`Location: ${i[0].location}`),m&128&&(Y.$$scope={dirty:m,ctx:i}),d.$set(Y);const z={};if(m&1&&(z.name=`Contract: ${i[0].contract}`),m&128&&(z.$$scope={dirty:m,ctx:i}),g.$set(z),(!T||m&1)&&H!==(H=i[0].description+"")&&de(J,H),m&1){U=O(i[0].skills);let b;for(b=0;b<U.length;b+=1){const A=ie(i,U,b);u[b]?(u[b].p(A,m),_(u[b],1)):(u[b]=ce(A),u[b].c(),_(u[b],1),u[b].m(N,null))}for(ne(),b=U.length;b<u.length;b+=1)ge(b);re()}},i(i){if(!T){_(n.$$.fragment,i),_(c.$$.fragment,i),_(l.$$.fragment,i),_(d.$$.fragment,i),_(g.$$.fragment,i);for(let m=0;m<U.length;m+=1)_(u[m]);T=!0}},o(i){w(n.$$.fragment,i),w(c.$$.fragment,i),w(l.$$.fragment,i),w(d.$$.fragment,i),w(g.$$.fragment,i),u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)w(u[m]);T=!1},d(i){i&&h(t),L(n),L(c),L(l),L(d),L(g),he(u,i)}}}function Se(s){let t,n;return t=new xe({props:{margin:"0px 0px 20px 0px",tiltDegree:2,href:`${W}/experience/${s[0].slug}`,$$slots:{default:[Le]},$$scope:{ctx:s}}}),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,[r]){const o={};r&1&&(o.href=`${W}/experience/${e[0].slug}`),r&129&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Pe(s,t,n){let{experience:e}=t;const r=`${oe(e.period.from.getMonth())} ${e.period.from.getFullYear()}`,o=e.period.to?`${oe(e.period.to.getMonth())} ${e.period.to.getFullYear()}`:"Present",c=`${r} - ${o}`;return s.$$set=$=>{"experience"in $&&n(0,e=$.experience)},[e,c]}class Me extends ue{constructor(t){super(),pe(this,t,Pe,Se,me,{experience:0})}}function fe(s,t,n){const e=s.slice();return e[4]=t[n],e[6]=n,e}function je(s){let t,n,e=[],r=new Map,o,c,$=O(s[0]);const a=l=>l[4].slug;for(let l=0;l<$.length;l+=1){let f=fe(s,$,l),d=a(f);r.set(d,e[l]=$e(d,f))}return{c(){t=C("div"),n=P();for(let l=0;l<e.length;l+=1)e[l].c();o=se(),this.h()},l(l){t=E(l,"DIV",{class:!0}),I(t).forEach(h),n=M(l);for(let f=0;f<e.length;f+=1)e[f].l(l);o=se(),this.h()},h(){k(t,"class","w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px bg-[var(--border)] absolute rounded")},m(l,f){B(l,t,f),B(l,n,f);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(l,f);B(l,o,f),c=!0},p(l,f){f&1&&($=O(l[0]),ne(),e=ve(e,f,a,1,l,$,r,o.parentNode,we,$e,o,fe),re())},i(l){if(!c){for(let f=0;f<$.length;f+=1)_(e[f]);c=!0}},o(l){for(let f=0;f<e.length;f+=1)w(e[f]);c=!1},d(l){l&&(h(t),h(n),h(o));for(let f=0;f<e.length;f+=1)e[f].d(l)}}}function qe(s){let t,n,e,r,o="Could not find anything...",c;return n=new G({props:{icon:"i-carbon-development",classes:"text-3.5em"}}),{c(){t=C("div"),D(n.$$.fragment),e=P(),r=C("p"),r.textContent=o,this.h()},l($){t=E($,"DIV",{class:!0});var a=I(t);V(n.$$.fragment,a),e=M(a),r=E(a,"P",{class:!0,"data-svelte-h":!0}),_e(r)!=="svelte-1jyyf6v"&&(r.textContent=o),a.forEach(h),this.h()},h(){k(r,"class","font-300"),k(t,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1")},m($,a){B($,t,a),y(n,t,null),p(t,e),p(t,r),c=!0},p:Z,i($){c||(_(n.$$.fragment,$),c=!0)},o($){w(n.$$.fragment,$),c=!1},d($){$&&h(t),L(n)}}}function $e(s,t){let n,e,r,o,c,$,a,l,f,d,q;return c=new G({props:{icon:"i-carbon-condition-point",classes:""}}),l=new Me({props:{experience:t[4]}}),{key:s,first:null,c(){n=C("div"),e=C("div"),r=P(),o=C("div"),D(c.$$.fragment),$=P(),a=C("div"),D(l.$$.fragment),f=P(),this.h()},l(g){n=E(g,"DIV",{class:!0});var x=I(n);e=E(x,"DIV",{class:!0}),I(e).forEach(h),r=M(x),o=E(x,"DIV",{class:!0});var S=I(o);V(c.$$.fragment,S),S.forEach(h),$=M(x),a=E(x,"DIV",{class:!0});var F=I(a);V(l.$$.fragment,F),F.forEach(h),f=M(x),x.forEach(h),this.h()},h(){k(e,"class","flex-1 hidden lg:flex"),k(o,"class","hidden lg:inline p-15px bg-[var(--main)] rounded"),k(a,"class","flex-1 col items-stretch"),k(n,"class",d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`),this.first=n},m(g,x){B(g,n,x),p(n,e),p(n,r),p(n,o),y(c,o,null),p(n,$),p(n,a),y(l,a,null),p(n,f),q=!0},p(g,x){t=g;const S={};x&1&&(S.experience=t[4]),l.$set(S),(!q||x&1&&d!==(d=`flex ${t[6]%2!==0?"flex-row":"flex-row-reverse"} relative items-center w-full my-[10px]`))&&k(n,"class",d)},i(g){q||(_(c.$$.fragment,g),_(l.$$.fragment,g),q=!0)},o(g){w(c.$$.fragment,g),w(l.$$.fragment,g),q=!1},d(g){g&&h(n),L(c),L(l)}}}function Ne(s){let t,n,e,r;const o=[qe,je],c=[];function $(a,l){return a[0].length===0?0:1}return n=$(s),e=c[n]=o[n](s),{c(){t=C("div"),e.c(),this.h()},l(a){t=E(a,"DIV",{class:!0});var l=I(t);e.l(l),l.forEach(h),this.h()},h(){k(t,"class","col items-center relative mt-10 flex-1")},m(a,l){B(a,t,l),c[n].m(t,null),r=!0},p(a,l){let f=n;n=$(a),n===f?c[n].p(a,l):(ne(),w(c[f],1,1,()=>{c[f]=null}),re(),e=c[n],e?e.p(a,l):(e=c[n]=o[n](a),e.c()),_(e,1),e.m(t,null))},i(a){r||(_(e),r=!0)},o(a){w(e),r=!1},d(a){a&&h(t),c[n].d()}}}function Ue(s){let t,n;return t=new Ee({props:{title:s[1],$$slots:{default:[Ne]},$$scope:{ctx:s}}}),t.$on("search",s[2]),{c(){D(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,[r]){const o={};r&129&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){w(t.$$.fragment,e),n=!1},d(e){L(t,e)}}}function Be(s,t,n){const{items:e,title:r}=be;let o=[...e];return[o,r,$=>{const a=$.detail.search;if(Ie(a)){n(0,o=e);return}n(0,o=e.filter(l=>l.name.toLowerCase().includes(a)||l.company.toLowerCase().includes(a)||l.description.toLowerCase().includes(a)))}]}class Ke extends ue{constructor(t){super(),pe(this,t,Be,Ue,me,{})}}export{Ke as component};
