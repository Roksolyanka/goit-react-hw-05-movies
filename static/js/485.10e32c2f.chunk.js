"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[485,135],{485:function(n,r,t){t.r(r),t.d(r,{default:function(){return _}});var e,c,a,o,u,s,i=t(861),p=t(439),f=t(757),l=t.n(f),h=t(791),v=t(689),d=t(409),x=t(168),b=t(444),g=b.ZP.div(e||(e=(0,x.Z)(["\n  padding: 15px;\n"]))),w=b.ZP.ul(c||(c=(0,x.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n"]))),m=b.ZP.li(a||(a=(0,x.Z)(["\n  width: 100%;\n  border-radius: 6px;\n  padding: 12px 20px;\n  border: 1px solid rgba(227, 227, 227, 1);\n  box-sizing: border-box;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n"]))),y=b.ZP.h3(o||(o=(0,x.Z)(["\n  color: rgba(3, 37, 65, 1);\n"]))),Z=b.ZP.p(u||(u=(0,x.Z)(["\n  color: rgba(3, 37, 65, 1);\n"]))),k=b.ZP.p(s||(s=(0,x.Z)(["\n  color: rgba(3, 37, 65, 1);\n  font-weight: bold;\n  text-align: center;\n"]))),j=t(184),_=function(){var n=(0,v.UO)().movieId,r=(0,h.useState)([]),t=(0,p.Z)(r,2),e=t[0],c=t[1];return(0,h.useEffect)((function(){var r=function(){var r=(0,i.Z)(l().mark((function r(){var t;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,d.Hx)(n);case 2:t=r.sent,c(t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[n]),(0,j.jsx)(g,{children:e.length>0?(0,j.jsx)(w,{children:e.map((function(n){return(0,j.jsxs)(m,{children:[(0,j.jsxs)(y,{children:["Author: ",n.author]}),(0,j.jsx)(Z,{children:n.content})]},n.id)}))}):(0,j.jsx)(k,{children:"We don't have any reviews for this movie."})})}},409:function(n,r,t){t.d(r,{Hx:function(){return v},WK:function(){return x},Y5:function(){return p},uV:function(){return l},wr:function(){return s}});var e=t(861),c=t(757),a=t.n(c),o="6c6629b9a6051b47df8b53c44a5b68ca",u="https://api.themoviedb.org/3/";function s(n){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"trending/movie/day?api_key=").concat(o,"&page=").concat(r));case 3:return t=n.sent,n.next=6,t.json();case 6:return e=n.sent,n.abrupt("return",e.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching trending movies:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(r,"?api_key=").concat(o));case 3:return t=n.sent,n.next=6,t.json();case 6:return e=n.sent,n.abrupt("return",e);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie details:",n.t0),n.abrupt("return",null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(r,"/credits?api_key=").concat(o));case 3:return t=n.sent,n.next=6,t.json();case 6:return e=n.sent,n.abrupt("return",e.cast);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie credits:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function v(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function n(r){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"/movie/").concat(r,"/reviews?api_key=").concat(o));case 3:return t=n.sent,n.next=6,t.json();case 6:return e=n.sent,n.abrupt("return",e.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie reviews:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function x(n,r){return b.apply(this,arguments)}function b(){return(b=(0,e.Z)(a().mark((function n(r,t){var e,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(u,"search/movie?query=").concat(r,"&page=").concat(t,"&api_key=").concat(o));case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.abrupt("return",c.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error searching movies:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}},861:function(n,r,t){function e(n,r,t,e,c,a,o){try{var u=n[a](o),s=u.value}catch(i){return void t(i)}u.done?r(s):Promise.resolve(s).then(e,c)}function c(n){return function(){var r=this,t=arguments;return new Promise((function(c,a){var o=n.apply(r,t);function u(n){e(o,c,a,u,s,"next",n)}function s(n){e(o,c,a,u,s,"throw",n)}u(void 0)}))}}t.d(r,{Z:function(){return c}})}}]);
//# sourceMappingURL=485.10e32c2f.chunk.js.map