"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[595],{970:function(e,t){t.Z="6c6629b9a6051b47df8b53c44a5b68ca"},473:function(e,t,r){r.r(t);var n=r(861),c=r(439),a=r(757),s=r.n(a),i=r(791),o=r(689),u=r(87),h=r(970),l=r(184);t.default=function(){var e=(0,i.useState)([]),t=(0,c.Z)(e,2),r=t[0],a=t[1],f=(0,o.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t,r,n,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=new URLSearchParams(f.search),!(r=t.get("query"))){e.next=11;break}return e.next=6,fetch("https://api.themoviedb.org/3/search/movie?query=".concat(r,"&api_key=").concat(h.Z));case 6:return n=e.sent,e.next=9,n.json();case 9:c=e.sent,a(c.results);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error searching movies:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[f.search]),(0,l.jsx)("div",{children:r.length>0?(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:r.map((function(e){return(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{state:{from:f},to:"/movies/".concat(e.id),children:e.title})},e.id)}))})}):(0,l.jsx)("p",{children:"No movies found."})})}}}]);
//# sourceMappingURL=595.2821ff87.chunk.js.map