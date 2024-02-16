import{s as H,e as I,a as $,c as T,b as y,f as g,g as B,m,i as z,h as E,C as D,q as ae,D as ce,o as ue,t as L,d as N,z as K,j as fe,E as V,r as ie,Q,R as X,n as R,G as he}from"../chunks/scheduler.X-rPE9nc.js";import{S as O,i as Y,c as q,a as C,m as M,t as S,b as U,d as P,e as me,g as de}from"../chunks/index.UaAhxXUt.js";import{U as J,e as F}from"../chunks/UIcon.6Cx6DeO6.js";import{g as W,I as A,u as ee,a as _e,h as ge,T as te,H as pe}from"../chunks/params.WSON2WKb.js";import{i as ve}from"../chunks/index.d6qvuZ_w.js";import{T as be}from"../chunks/Title.WV2Ukl-n.js";function re(t,e,r){const s=t.slice();return s[16]=e[r],s}function ne(t){let e,r,s,l,n,o,u=t[16].name+"",h,w;return{c(){e=I("div"),r=I("img"),n=$(),o=I("span"),h=L(u),w=$(),this.h()},l(p){e=T(p,"DIV",{class:!0});var k=y(e);r=T(k,"IMG",{class:!0,src:!0,alt:!0}),n=B(k),o=T(k,"SPAN",{class:!0});var x=y(o);h=N(x,u),x.forEach(g),w=B(k),k.forEach(g),this.h()},h(){m(r,"class","w-120px h-120px aspect-square"),K(r.src,s=W(t[16].logo))||m(r,"src",s),m(r,"alt",l=t[16].name),m(o,"class","text-center m-t-20px"),m(e,"class","box-content w-150px p-15px col-center")},m(p,k){z(p,e,k),E(e,r),E(e,n),E(e,o),E(o,h),E(e,w)},p(p,k){k&1&&!K(r.src,s=W(p[16].logo))&&m(r,"src",s),k&1&&l!==(l=p[16].name)&&m(r,"alt",l),k&1&&u!==(u=p[16].name+"")&&fe(h,u)},d(p){p&&g(e)}}}function ke(t){let e,r,s,l,n,o,u,h,w,p,k;s=new J({props:{icon:"i-carbon-chevron-left"}});let x=F(t[0]),d=[];for(let f=0;f<x.length;f+=1)d[f]=ne(re(t,x,f));return h=new J({props:{icon:"i-carbon-chevron-right"}}),{c(){e=I("div"),r=I("button"),q(s.$$.fragment),l=$(),n=I("div");for(let f=0;f<d.length;f+=1)d[f].c();o=$(),u=I("button"),q(h.$$.fragment),this.h()},l(f){e=T(f,"DIV",{class:!0});var i=y(e);r=T(i,"BUTTON",{class:!0});var _=y(r);C(s.$$.fragment,_),_.forEach(g),l=B(i),n=T(i,"DIV",{class:!0});var a=y(n);for(let c=0;c<d.length;c+=1)d[c].l(a);a.forEach(g),o=B(i),u=T(i,"BUTTON",{class:!0});var v=y(u);C(h.$$.fragment,v),v.forEach(g),i.forEach(g),this.h()},h(){m(r,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(n,"class","row overflow-hidden box-content w-150px"),m(u,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),m(e,"class","carrousel flex-[0.5] row-center")},m(f,i){z(f,e,i),E(e,r),M(s,r,null),E(e,l),E(e,n);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(n,null);t[11](n),E(e,o),E(e,u),M(h,u,null),w=!0,p||(k=[D(r,"click",t[2]),D(r,"keyup",t[8]),D(r,"keydown",t[9]),D(r,"keypress",t[10]),D(u,"click",t[3]),D(u,"keyup",t[5]),D(u,"keydown",t[6]),D(u,"keypress",t[7])],p=!0)},p(f,[i]){if(i&1){x=F(f[0]);let _;for(_=0;_<x.length;_+=1){const a=re(f,x,_);d[_]?d[_].p(a,i):(d[_]=ne(a),d[_].c(),d[_].m(n,null))}for(;_<d.length;_+=1)d[_].d(1);d.length=x.length}},i(f){w||(S(s.$$.fragment,f),S(h.$$.fragment,f),w=!0)},o(f){U(s.$$.fragment,f),U(h.$$.fragment,f),w=!1},d(f){f&&g(e),P(s),ae(d,f),t[11](null),P(h),p=!1,ce(k)}}}const we=2500;function xe(t,e,r){let{items:s=[]}=e,l,n,o=0,u=!0;const h=c=>{c?o<s.length-1?r(4,o=o+1):(r(4,o=o-1),u=!1):o>0?r(4,o=o-1):(r(4,o=o+1),u=!0)},w=c=>{clearTimeout(n),n=setTimeout(()=>{h(c),w(u)},we)},p=()=>{clearTimeout(n),u=!1,h(!1),w(u)},k=()=>{clearTimeout(n),u=!0,h(!0),w(u)};ue(()=>{w(!0)});function x(c){V.call(this,t,c)}function d(c){V.call(this,t,c)}function f(c){V.call(this,t,c)}function i(c){V.call(this,t,c)}function _(c){V.call(this,t,c)}function a(c){V.call(this,t,c)}function v(c){ie[c?"unshift":"push"](()=>{l=c,r(1,l)})}return t.$$set=c=>{"items"in c&&r(0,s=c.items)},t.$$.update=()=>{t.$$.dirty&18&&l&&l.scroll({left:o*150,behavior:"smooth"})},[s,l,p,k,o,x,d,f,i,_,a,v]}class Ee extends O{constructor(e){super(),Y(this,e,xe,ke,H,{items:0})}}const se=t=>t===A.Youtube?"0 0 461.001 461.001":t===A.Facebook?"0 0 408.788 408.788":[A.GitHub,A.Search,A.Code].includes(t)?"0 0 16 16":"0 0 24 24";function ye(t){let e,r,s;return{c(){e=Q("svg"),r=Q("path"),this.h()},l(l){e=X(l,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var n=y(e);r=X(n,"path",{d:!0}),y(r).forEach(g),n.forEach(g),this.h()},h(){m(r,"d",t[2]),m(e,"class","inline-block"),m(e,"viewBox",s=se(t[2])),m(e,"fill",t[1]),m(e,"height",t[0]),m(e,"width",t[0])},m(l,n){z(l,e,n),E(e,r),t[4](e)},p(l,[n]){n&4&&m(r,"d",l[2]),n&4&&s!==(s=se(l[2]))&&m(e,"viewBox",s),n&2&&m(e,"fill",l[1]),n&1&&m(e,"height",l[0]),n&1&&m(e,"width",l[0])},i:R,o:R,d(l){l&&g(e),t[4](null)}}}function Ie(t,e,r){let s,{size:l="30px"}=e,{color:n="var(--main-text)"}=e,{icon:o}=e;function u(h){ie[h?"unshift":"push"](()=>{s=h,r(3,s)})}return t.$$set=h=>{"size"in h&&r(0,l=h.size),"color"in h&&r(1,n=h.color),"icon"in h&&r(2,o=h.icon)},[l,n,o,s,u]}class Te extends O{constructor(e){super(),Y(this,e,Ie,ye,H,{size:0,color:1,icon:2})}}function le(t,e,r){const s=t.slice();return s[7]=e[r],s}function $e(t){let e,r,s,l;return{c(){e=L(t[1]),r=$(),s=L(t[2]),l=L(",")},l(n){e=N(n,t[1]),r=B(n),s=N(n,t[2]),l=N(n,",")},m(n,o){z(n,e,o),z(n,r,o),z(n,s,o),z(n,l,o)},p:R,d(n){n&&(g(e),g(r),g(s),g(l))}}}function oe(t){let e,r,s,l;return r=new Te({props:{icon:ge(t[7].platform),color:"var(--accent-text",size:"24px"}}),{c(){e=I("a"),q(r.$$.fragment),s=$(),this.h()},l(n){e=T(n,"A",{class:!0,href:!0,target:!0,rel:!0});var o=y(e);C(r.$$.fragment,o),s=B(o),o.forEach(g),this.h()},h(){m(e,"class","decoration-none"),m(e,"href",`${t[6](t[7].link)?"mailto:":""} ${t[7].link}`),m(e,"target","_blank"),m(e,"rel","noreferrer")},m(n,o){z(n,e,o),M(r,e,null),E(e,s),l=!0},p:R,i(n){l||(S(r.$$.fragment,n),l=!0)},o(n){U(r.$$.fragment,n),l=!1},d(n){n&&g(e),P(r)}}}function Be(t){let e,r,s,l,n,o,u,h,w,p,k,x,d;document.title=e=ee(t[3],te),n=new be({props:{classes:"md:text-left ",$$slots:{default:[$e]},$$scope:{ctx:t}}});let f=F(t[4]),i=[];for(let a=0;a<f.length;a+=1)i[a]=oe(le(t,f,a));const _=a=>U(i[a],1,1,()=>{i[a]=null});return x=new Ee({props:{items:t[5]??_e}}),{c(){r=$(),s=I("div"),l=I("div"),q(n.$$.fragment),o=$(),u=I("p"),h=L(t[0]),w=$(),p=I("div");for(let a=0;a<i.length;a+=1)i[a].c();k=$(),q(x.$$.fragment),this.h()},l(a){he("svelte-gorrxo",document.head).forEach(g),r=B(a),s=T(a,"DIV",{class:!0});var c=y(s);l=T(c,"DIV",{class:!0});var b=y(l);C(n.$$.fragment,b),o=B(b),u=T(b,"P",{class:!0});var j=y(u);h=N(j,t[0]),j.forEach(g),w=B(b),p=T(b,"DIV",{class:!0});var Z=y(p);for(let G=0;G<i.length;G+=1)i[G].l(Z);Z.forEach(g),b.forEach(g),k=B(c),C(x.$$.fragment,c),c.forEach(g),this.h()},h(){m(u,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),m(p,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),m(l,"class","md:flex-1 gap-10px"),m(s,"class","col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px")},m(a,v){z(a,r,v),z(a,s,v),E(s,l),M(n,l,null),E(l,o),E(l,u),E(u,h),E(l,w),E(l,p);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(p,null);E(s,k),M(x,s,null),d=!0},p(a,[v]){(!d||v&8)&&e!==(e=ee(a[3],te))&&(document.title=e);const c={};if(v&1024&&(c.$$scope={dirty:v,ctx:a}),n.$set(c),v&80){f=F(a[4]);let b;for(b=0;b<f.length;b+=1){const j=le(a,f,b);i[b]?(i[b].p(j,v),S(i[b],1)):(i[b]=oe(j),i[b].c(),S(i[b],1),i[b].m(p,null))}for(de(),b=f.length;b<i.length;b+=1)_(b);me()}},i(a){if(!d){S(n.$$.fragment,a);for(let v=0;v<f.length;v+=1)S(i[v]);S(x.$$.fragment,a),d=!0}},o(a){U(n.$$.fragment,a),i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)U(i[v]);U(x.$$.fragment,a),d=!1},d(a){a&&(g(r),g(s)),P(n),ae(i,a),P(x)}}}function ze(t){const{description:e,firstName:r,lastName:s,title:l,links:n,skills:o}=pe;return[e,r,s,l,n,o,h=>{const w=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!ve(h)&&w.test(h)}]}class Le extends O{constructor(e){super(),Y(this,e,ze,Be,H,{})}}export{Le as component};
