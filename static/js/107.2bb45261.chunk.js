"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[107],{575:function(n,t,r){r.d(t,{z:function(){return p}});r(791);var e,c,o=r(168),a=r(444),i=a.ZP.button(e||(e=(0,o.Z)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: rgba(3, 37, 65, 1);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 180px;\n  margin: 0 auto;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background: linear-gradient(\n      to bottom,\n      rgba(3, 37, 65, 1),\n      #e4e4d9,\n      rgba(3, 37, 65, 1)\n    );\n    color: rgba(3, 37, 65, 1);\n    border: 1px solid rgba(3, 37, 65, 1);\n    box-shadow: 10px 10px 5px -5px rgba(3, 37, 65, 1);\n  }\n"]))),u=a.ZP.div(c||(c=(0,o.Z)(["\n  display: flex;\n  justifycontent: center;\n  margin: 20px 0;\n"]))),s=r(184),p=function(n){var t=n.onClick;return(0,s.jsx)(u,{children:(0,s.jsx)(i,{type:"button",className:"button",onClick:t,children:"Load more"})})}},107:function(n,t,r){r.r(t),r.d(t,{default:function(){return z}});var e,c,o,a,i,u,s=r(433),p=r(861),l=r(439),f=r(757),d=r.n(f),h=r(791),x=r(87),v=r(409),g=r(686),b=r(168),m=r(444),w=m.ZP.div(e||(e=(0,b.Z)(["\n  padding: 15px;\n"]))),y=m.ZP.h1(c||(c=(0,b.Z)(["\n  color: rgba(3, 37, 65, 1);\n"]))),Z=m.ZP.ul(o||(o=(0,b.Z)(["\n  display: flex;\n  list-style: none;\n  gap: 16px;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),k=m.ZP.li(a||(a=(0,b.Z)(["\n  width: 224px;\n  height: 325px;\n  cursor: pointer;\n  border-radius: 5px;\n  position: relative;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(180deg, #0000 63.48%, #000000e6 92.16%);\n    border-radius: 5px;\n    position: absolute;\n  }\n"]))),j=m.ZP.img(i||(i=(0,b.Z)(["\n  border-radius: 5px;\n  max-width: 100%;\n"]))),_=m.ZP.p(u||(u=(0,b.Z)(["\n  position: absolute;\n  bottom: 0;\n  padding-left: 12px;\n  padding-right: 12px;\n  color: #fff;\n"]))),P=r(575),E=r(176),C=r(184),z=function(){var n=(0,h.useState)([]),t=(0,l.Z)(n,2),r=t[0],e=t[1],c=(0,h.useState)(1),o=(0,l.Z)(c,2),a=o[0],i=o[1],u=(0,h.useState)(!1),f=(0,l.Z)(u,2),b=f[0],m=f[1],z=(0,h.useState)(!1),S=(0,l.Z)(z,2),L=S[0],q=S[1];(0,h.useEffect)((function(){var n=function(){var n=(0,p.Z)(d().mark((function n(){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m(!0),n.prev=1,n.next=4,(0,v.wr)(a);case 4:0===(t=n.sent).length?q(!0):e((function(n){return 1===a?t:[].concat((0,s.Z)(n),(0,s.Z)(t))})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("Error fetching trending movies:",n.t0);case 11:return n.prev=11,m(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[a]);return(0,C.jsxs)(w,{children:[(0,C.jsx)(y,{children:"Trending today"}),(0,C.jsx)(Z,{children:r.map((function(n){return(0,C.jsx)(x.rU,{to:"/movies/".concat(n.id),children:(0,C.jsxs)(k,{children:[(0,C.jsx)(j,{src:(t=n.poster_path,t?"https://image.tmdb.org/t/p/w200/".concat(t):g),alt:n.title,width:224,height:325}),(0,C.jsx)(_,{children:n.title})]})},n.id);var t}))}),b&&(0,C.jsx)(E.a,{}),!L&&r.length>0&&!b&&(0,C.jsx)(P.z,{onClick:function(){i((function(n){return n+1}))},children:"Load More"})]})}},409:function(n,t,r){r.d(t,{Hx:function(){return h},WK:function(){return v},Y5:function(){return p},uV:function(){return f},wr:function(){return u}});var e=r(861),c=r(757),o=r.n(c),a="6c6629b9a6051b47df8b53c44a5b68ca",i="https://api.themoviedb.org/3/";function u(n){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"trending/movie/day?api_key=").concat(a,"&page=").concat(t));case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching trending movies:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"?api_key=").concat(a));case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie details:",n.t0),n.abrupt("return",null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(a));case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.cast);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie credits:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 3:return r=n.sent,n.next=6,r.json();case 6:return e=n.sent,n.abrupt("return",e.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error fetching movie reviews:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}function v(n,t){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(o().mark((function n(t,r){var e,c;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(i,"search/movie?query=").concat(t,"&page=").concat(r,"&api_key=").concat(a));case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.abrupt("return",c.results);case 10:return n.prev=10,n.t0=n.catch(0),console.log("Error searching movies:",n.t0),n.abrupt("return",[]);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))).apply(this,arguments)}},686:function(n,t,r){n.exports=r.p+"static/media/coming_soon_default.a210914256bc0076e847.jpg"},861:function(n,t,r){function e(n,t,r,e,c,o,a){try{var i=n[o](a),u=i.value}catch(s){return void r(s)}i.done?t(u):Promise.resolve(u).then(e,c)}function c(n){return function(){var t=this,r=arguments;return new Promise((function(c,o){var a=n.apply(t,r);function i(n){e(a,c,o,i,u,"next",n)}function u(n){e(a,c,o,i,u,"throw",n)}i(void 0)}))}}r.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=107.2bb45261.chunk.js.map