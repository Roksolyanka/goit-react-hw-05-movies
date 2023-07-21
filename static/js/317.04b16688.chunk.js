"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[317],{575:function(n,t,e){e.d(t,{z:function(){return p}});e(791);var r,o,c=e(168),a=e(444),i=a.ZP.button(r||(r=(0,c.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: rgba(3, 37, 65, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  margin: 0 auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background: linear-gradient(\n      to bottom,\n      rgba(3, 37, 65, 1),\n      #e4e4d9,\n      rgba(3, 37, 65, 1)\n    );\n    color: rgba(3, 37, 65, 1);\n    border: 1px solid rgba(3, 37, 65, 1);\n    box-shadow: 10px 10px 5px -5px rgba(3, 37, 65, 1);\n  }\n"]))),s=a.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justifycontent: center;\n  margin: 20px 0;\n"]))),u=e(184),p=function(n){var t=n.onClick;return(0,u.jsx)(s,{children:(0,u.jsx)(i,{type:"button",className:"button",onClick:t,children:"Load more"})})}},317:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,o,c,a,i,s,u=e(433),p=e(861),l=e(439),f=e(757),h=e.n(f),d=e(791),x=e(689),g=e(87),b=e(409),v=e(686),m=e(168),w=e(444),y=w.ZP.div(r||(r=(0,m.Z)(["\n  padding: 15px;\n"]))),Z=w.ZP.ul(o||(o=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),k=w.ZP.li(c||(c=(0,m.Z)(["\n  width: 224px;\n  height: 325px;\n  cursor: pointer;\n  border-radius: 5px;\n  position: relative;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(180deg, #0000 63.48%, #000000e6 92.16%);\n    border-radius: 5px;\n    position: absolute;\n  }\n"]))),j=w.ZP.img(a||(a=(0,m.Z)(["\n  border-radius: 5px;\n  max-width: 100%;\n"]))),_=w.ZP.p(i||(i=(0,m.Z)(["\n  position: absolute;\n  bottom: 0;\n  padding-left: 12px;\n  padding-right: 12px;\n  color: #fff;\n"]))),P=w.ZP.p(s||(s=(0,m.Z)(["\n  color: rgba(3, 37, 65, 1);\n  font-weight: bold;\n  text-align: center;\n"]))),E=e(575),S=e(176),C=e(184),z=function(){var n=(0,d.useState)([]),t=(0,l.Z)(n,2),e=t[0],r=t[1],o=(0,d.useState)(1),c=(0,l.Z)(o,2),a=c[0],i=c[1],s=(0,d.useState)(!1),f=(0,l.Z)(s,2),m=f[0],w=f[1],z=(0,d.useState)(""),q=(0,l.Z)(z,2),H=q[0],L=q[1],K=(0,d.useState)(!0),N=(0,l.Z)(K,2),T=N[0],U=N[1],W=(0,d.useState)(!1),M=(0,l.Z)(W,2),R=M[0],V=M[1],Y=(0,x.TH)();(0,d.useEffect)((function(){var n=function(){var n=(0,p.Z)(h().mark((function n(){var t,e,o;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(w(!0),n.prev=1,t=new URLSearchParams(Y.search),(e=t.get("query"))!==H&&(L(e),r([]),i(1),V(!1)),!e){n.next=11;break}return U(!1),n.next=9,(0,b.WK)(e,a);case 9:0===(o=n.sent).length?V(!0):r((function(n){return 1===a?o:[].concat((0,u.Z)(n),(0,u.Z)(o))}));case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),console.log("Error searching movies:",n.t0);case 16:return n.prev=16,w(!1),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),n.finish(16);case 20:case"end":return n.stop()}}),n,null,[[1,13,16,20]])})));return function(){return n.apply(this,arguments)}}();n()}),[Y.search,a,H]);return(0,C.jsxs)(y,{children:[T&&0===e.length?null:(0,C.jsxs)("div",{children:[(0,C.jsx)(Z,{children:e.map((function(n){return(0,C.jsx)(g.rU,{state:{from:Y},to:"/movies/".concat(n.id),children:(0,C.jsxs)(k,{children:[(0,C.jsx)(j,{src:(t=n.poster_path,t?"https://image.tmdb.org/t/p/w200/".concat(t):v),alt:n.title,width:224,height:325}),(0,C.jsx)(_,{children:n.title})]})},n.id);var t}))}),m&&(0,C.jsx)(S.a,{}),e.length>0&&!m&&!R&&(0,C.jsx)(E.z,{onClick:function(){i((function(n){return n+1}))},children:"Load More"})]}),!T&&0===e.length&&(0,C.jsx)(P,{children:"No movies were found for your search query."})]})}},409:function(n,t,e){e.d(t,{Hx:function(){return d},WK:function(){return g},Y5:function(){return p},uV:function(){return f},wr:function(){return s}});var r=e(861),o=e(757),c=e.n(o),a="6c6629b9a6051b47df8b53c44a5b68ca",i="https://api.themoviedb.org/3/";function s(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"trending/movie/day?api_key=").concat(a,"&page=").concat(t));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching trending movies:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(a));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie details:",n.t0),n.abrupt("return",null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(a));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r.cast);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie credits:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 3:return e=n.sent,n.next=6,e.json();case 6:return r=n.sent,n.abrupt("return",r.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie reviews:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function g(n,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(c().mark((function n(t,e){var r,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"search/movie?query=").concat(t,"&page=").concat(e,"&api_key=").concat(a));case 3:return r=n.sent,n.next=6,r.json();case 6:return o=n.sent,n.abrupt("return",o.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error searching movies:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}},686:function(n,t,e){n.exports=e.p+"static/media/coming_soon_default.a210914256bc0076e847.jpg"}}]);
//# sourceMappingURL=317.04b16688.chunk.js.map