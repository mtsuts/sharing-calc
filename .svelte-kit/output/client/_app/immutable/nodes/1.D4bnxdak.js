import{s as E,f as b,l as _,a as S,g as d,h as f,m as g,d as p,c as x,i as l,u as h,n as v,y as $,z as y}from"../chunks/scheduler.2GXnEO7r.js";import{S as q,i as z}from"../chunks/index.FmHQqFF2.js";import{d as C}from"../chunks/singletons.v_VspI_I.js";const H=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},P={subscribe(s){return H().page.subscribe(s)}};function j(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",u;return{c(){t=b("h1"),o=_(r),n=S(),i=b("p"),u=_(c)},l(e){t=d(e,"H1",{});var a=f(t);o=g(a,r),a.forEach(p),n=x(e),i=d(e,"P",{});var m=f(i);u=g(m,c),m.forEach(p)},m(e,a){l(e,t,a),h(t,o),l(e,n,a),l(e,i,a),h(i,u)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&v(o,r),a&1&&c!==(c=e[0].error?.message+"")&&v(u,c)},i:$,o:$,d(e){e&&(p(t),p(n),p(i))}}}function k(s,t,r){let o;return y(s,P,n=>r(0,o=n)),[o]}let D=class extends q{constructor(t){super(),z(this,t,k,j,E,{})}};export{D as component};
