import{n as c,s as l}from"./scheduler.X-rPE9nc.js";const e=[];function h(n,u=c){let i;const o=new Set;function r(t){if(l(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function a(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=u(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:a}}const _=globalThis.__sveltekit_1s80xsp?.base??"",g=globalThis.__sveltekit_1s80xsp?.assets??_;export{g as a,_ as b,h as w};
