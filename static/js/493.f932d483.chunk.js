"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[493,364],{493:function(t,n,r){r.r(n);var e=r(861),c=r(439),a=r(757),u=r.n(a),o=r(791),s=r(689),i=r(409),p=r(184);n.default=function(){var t=(0,s.UO)().movieId,n=(0,o.useState)([]),r=(0,c.Z)(n,2),a=r[0],f=r[1];return(0,o.useEffect)((function(){var n=function(){var n=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.uV)(t);case 2:r=n.sent,f(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,p.jsx)("div",{children:a.length>0?(0,p.jsx)("ul",{children:a.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:t.name}),(0,p.jsx)("p",{children:t.name}),(0,p.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))}):(0,p.jsx)("p",{children:"We don't have any cast information for this movie."})})}},409:function(t,n,r){r.d(n,{Hx:function(){return v},WK:function(){return d},Y5:function(){return p},uV:function(){return h},wr:function(){return s}});var e=r(861),c=r(757),a=r.n(c),u="6c6629b9a6051b47df8b53c44a5b68ca",o="https://api.themoviedb.org/3/";function s(){return i.apply(this,arguments)}function i(){return(i=(0,e.Z)(a().mark((function t(){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"trending/movie/day?api_key=").concat(u));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching trending movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(u));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie details:",t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.cast);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie credits:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error fetching movie reviews:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function d(t){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(o,"search/movie?query=").concat(n,"&api_key=").concat(u));case 3:return r=t.sent,t.next=6,r.json();case 6:return e=t.sent,t.abrupt("return",e.results);case 10:return t.prev=10,t.t0=t.catch(0),console.log("Error searching movies:",t.t0),t.abrupt("return",[]);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}},861:function(t,n,r){function e(t,n,r,e,c,a,u){try{var o=t[a](u),s=o.value}catch(i){return void r(i)}o.done?n(s):Promise.resolve(s).then(e,c)}function c(t){return function(){var n=this,r=arguments;return new Promise((function(c,a){var u=t.apply(n,r);function o(t){e(u,c,a,o,s,"next",t)}function s(t){e(u,c,a,o,s,"throw",t)}o(void 0)}))}}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=493.f932d483.chunk.js.map