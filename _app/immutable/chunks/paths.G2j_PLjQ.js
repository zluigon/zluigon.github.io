import{n as c,s as l}from"./scheduler.AYp2G5nm.js";const e=[];function h(o,a=c){let n;const i=new Set;function r(t){if(l(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function u(t){r(t(o))}function f(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=a(r,u)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:u,subscribe:f}}const p=globalThis.__sveltekit_1ou3pap?.base??"",g=globalThis.__sveltekit_1ou3pap?.assets??p;export{g as a,p as b,h as w};
