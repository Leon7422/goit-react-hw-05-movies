"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{82:function(t,e,n){n.d(e,{Pg:function(){return o},Ue:function(){return s},dW:function(){return f},gF:function(){return i},qz:function(){return p}});var r=n(861),a=n(757),c=n.n(a),u=n(44),i=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/all/day?api_key=40b1202aa7011d9f08f63b0e75c279f2",t.next=3,u.ZP.get("".concat("https://api.themoviedb.org/3/trending/all/day?api_key=40b1202aa7011d9f08f63b0e75c279f2"));case 3:return e=t.sent,t.abrupt("return",e.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=40b1202aa7011d9f08f63b0e75c279f2"),t.next=3,u.ZP.get("".concat(n));case 3:return r=t.sent,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=40b1202aa7011d9f08f63b0e75c279f2&language=en-US"),t.next=3,u.ZP.get("".concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=40b1202aa7011d9f08f63b0e75c279f2&language=en-US&page=1"),t.next=3,u.ZP.get("".concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?api_key=40b1202aa7011d9f08f63b0e75c279f2&query=".concat(e),t.next=3,u.ZP.get("".concat(n));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},485:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r,a,c=n(885),u=n(82),i=n(791),o=n(168),s=n(444),f=n(731),p=s.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),d=(0,s.ZP)(f.rU)(a||(a=(0,o.Z)(["\n  color: black;\n  :hover {\n    color: teal;\n  }\n"]))),h=n(689),v=n(184),l=function(){var t=(0,i.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1],a=(0,h.TH)();return(0,i.useEffect)((function(){(0,u.gF)().then(r)}),[]),(0,v.jsx)(p,{children:n.map((function(t){return(0,v.jsx)("li",{children:(0,v.jsx)(d,{to:"/movies/".concat(t.id),state:{from:a},children:t.title||t.name})},t.id)}))})}}}]);
//# sourceMappingURL=485.8d653c5a.chunk.js.map