"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736,441],{736:function(t,n,r){r.r(n);var e=r(861),c=r(439),u=r(757),a=r.n(u),o=r(791),s=r(689),i=r(409),p=r(184);n.default=function(){var t=(0,s.UO)().movieId,n=(0,o.useState)([]),r=(0,c.Z)(n,2),u=r[0],f=r[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,e.Z)(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Hx)(t);case 2:r=n.sent,f(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,p.jsx)("div",{children:u.length>0?(0,p.jsx)("ul",{children:u.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",t.author]}),(0,p.jsx)("p",{children:t.content})]},t.id)}))}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie."})})}},409:function(t,n,r){r.d(n,{Hx:function(){return v},WK:function(){return m},Y5:function(){return p},uV:function(){return h},wr:function(){return s}});var e=r(861),c=r(757),u=r.n(c),a="6c6629b9a6051b47df8b53c44a5b68ca",o="https://api.themoviedb.org/3/";function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"trending/movie/day?api_key=").concat(a));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching trending movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie details:",t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.cast);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie credits:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie reviews:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"search/movie?query=").concat(n,"&api_key=").concat(a));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error searching movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},861:function(t,n,r){function e(t,n,r,e,c,u,a){try{var o=t[u](a),s=o.value}catch(i){return void r(i)}o.done?n(s):Promise.resolve(s).then(e,c)}function c(t){return function(){var n=this,r=arguments;return new Promise((function(c,u){var a=t.apply(n,r);function o(t){e(a,c,u,o,s,"next",t)}function s(t){e(a,c,u,o,s,"throw",t)}o(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=736.772ca0f6.chunk.js.map