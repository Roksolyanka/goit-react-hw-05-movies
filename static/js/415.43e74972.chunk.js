"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(t,n,r){r.r(n);var e=r(861),c=r(439),u=r(757),a=r.n(u),o=r(791),s=r(87),i=r(409),p=r(184);n.default=function(){var t=(0,o.useState)([]),n=(0,c.Z)(t,2),r=n[0],u=n[1];return(0,o.useEffect)((function(){var t=function(){var t=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.wr)();case 2:n=t.sent,u(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:"Trending today"}),(0,p.jsx)("ul",{children:r.map((function(t){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/movies/".concat(t.id),children:t.title})},t.id)}))})]})}},409:function(t,n,r){r.d(n,{Hx:function(){return v},WK:function(){return m},Y5:function(){return p},uV:function(){return l},wr:function(){return s}});var e=r(861),c=r(757),u=r.n(c),a="6c6629b9a6051b47df8b53c44a5b68ca",o="https://api.themoviedb.org/3/";function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"trending/movie/day?api_key=").concat(a));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching trending movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie details:",t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.cast);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie credits:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie reviews:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"search/movie?query=").concat(n,"&api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error searching movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},861:function(t,n,r){function e(t,n,r,e,c,u,a){try{var o=t[u](a),s=o.value}catch(i){return void r(i)}o.done?n(s):Promise.resolve(s).then(e,c)}function c(t){return function(){var n=this,r=arguments;return new Promise((function(c,u){var a=t.apply(n,r);function o(t){e(a,c,u,o,s,"next",t)}function s(t){e(a,c,u,o,s,"throw",t)}o(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.43e74972.chunk.js.map