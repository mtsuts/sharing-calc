import{I as $,y as _,J as y,h as S,d as E,K as I,L as w,M as O,N as p,O as b,P as C,Q as x,R as L,S as M,T as N,U as P,V as R}from"./scheduler.2GXnEO7r.js";const u=new Set;let d;function Q(){d={r:0,c:[],p:d}}function T(){d.r||$(d.c),d=d.p}function U(t,e){t&&t.i&&(u.delete(t),t.i(e))}function z(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function A(t){t&&t.c()}function D(t,e){t&&t.l(e)}function V(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),p(()=>{const f=t.$$.on_mount.map(L).filter(w);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(p)}function j(t,e){const n=t.$$;n.fragment!==null&&(b(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function B(t,e){t.$$.dirty[0]===-1&&(M.push(t),N(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,a,i,f,c=null,v=[-1]){const o=C;x(t);const s=t.$$={fragment:null,ctx:[],props:f,update:_,not_equal:i,bound:y(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:y(),dirty:v,skip_bound:!1,root:e.target||o.$$.root};c&&c(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,h,...g)=>{const m=g.length?g[0]:h;return s.ctx&&i(s.ctx[r],s.ctx[r]=m)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](m),l&&B(t,r)),h}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){P();const r=S(e.target);s.fragment&&s.fragment.l(r),r.forEach(E)}else s.fragment&&s.fragment.c();e.intro&&U(t.$$.fragment),V(t,e.target,e.anchor),R(),I()}x(o)}class G{$$=void 0;$$set=void 0;$destroy(){j(this,1),this.$destroy=_}$on(e,n){if(!w(n))return _;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!O(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(J);export{G as S,U as a,A as b,T as c,D as d,j as e,Q as g,F as i,V as m,z as t};
