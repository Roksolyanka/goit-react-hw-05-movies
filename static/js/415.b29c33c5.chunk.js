"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{970:function(e,n){n.Z="a9909d47681c6b09be18c529deedffef"},415:function(e,n,t){t.r(n);var r=t(861),c=t(439),i=t(757),o=t.n(i),u=t(791),a=t(87),s=t(970),f=t(184);n.default=function(){var e=(0,u.useState)([]),n=(0,c.Z)(e,2),t=n[0],i=n[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s.Z));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,i(t.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Error fetching trending movies:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Trending today"}),(0,f.jsx)("ul",{children:t.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,c,i,o){try{var u=e[i](o),a=u.value}catch(s){return void t(s)}u.done?n(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function u(e){r(o,c,i,u,a,"next",e)}function a(e){r(o,c,i,u,a,"throw",e)}u(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=415.b29c33c5.chunk.js.map