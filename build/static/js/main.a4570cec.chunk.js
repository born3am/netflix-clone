(this["webpackJsonpnetflix-multilingual"]=this["webpackJsonpnetflix-multilingual"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(0),s=n.n(i),c=n(8),a=n.n(c),r=n(3),o=n.n(r),l=n(5),h=n(4),d=(n(23),"a3d5a62b2c8899a5ae80c328d3978630"),u=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("/discover/tv?with_network=213?language=en-US&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Netflix Originals",items:e.t0},e.next=6,u("/trending/movie/week?language=en-US&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"People are talking about",items:e.t2},e.next=10,u("/movie/top_rated?language=en-US&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"top-rated",title:"Top Rated Movies",items:e.t4},e.next=14,u("/discover/movie?with_genres=28&language=en-US&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"Action Movies",items:e.t6},e.next=18,u("/discover/movie?with_genres=35&language=en-US&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Comedies",items:e.t8},e.next=22,u("/discover/movie?with_genres=53&language=en-US&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"thriller",title:"Thrillers",items:e.t10},e.next=26,u("/discover/movie?with_genres=878&language=en-US&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"science-fiction",title:"Science Fiction",items:e.t12},e.next=30,u("/discover/movie?with_genres=10751&language=en-US&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"family",title:"Family",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i={},"movie"!==n){e.next=7;break}return e.next=4,u("/movie/".concat(t,"?language=en-US&api_key=").concat(d));case 4:i=e.sent,e.next=11;break;case 7:if("tv"!==n){e.next=11;break}return e.next=10,u("/tv/".concat(t,"?language=en-US&api_key=").concat(d));case 10:i=e.sent;case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},j=g,m=(n(24),n(14)),b=n.n(m),v=n(16),x=n.n(v),f=n(1);function p(e){var t=e.title,n=e.items,s=Object(i.useState)(-400),c=Object(h.a)(s,2),a=c[0],r=c[1];return Object(f.jsxs)("div",{className:"movieRow",children:[Object(f.jsxs)("h2",{children:[t," "]}),Object(f.jsx)("div",{className:"movieRow--left",onClick:function(){var e=a+Math.round(window.innerWidth/2);e>0&&(e=0),r(e)},children:Object(f.jsx)(b.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--right",onClick:function(){var e=a-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),r(e)},children:Object(f.jsx)(x.a,{style:{fontSize:50}})}),Object(f.jsx)("div",{className:"movieRow--listarea",children:Object(f.jsx)("div",{className:"movieRow--list",style:{marginLeft:a,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(f.jsx)("div",{className:"movieRow--item",children:Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})}n(31);function O(e){var t=e.item;console.log("===================================="),console.log(t),console.log("====================================");var n=new Date(t.first_air_date),i=n.toLocaleString("en-us",{month:"short"}),s=[];for(var c in t.genres)s.push(t.genres[c].name);var a=t.overview;return a.length>200&&(a=a.substring(0,200)+"..."),Object(f.jsx)("section",{className:"highlighted",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(t.backdrop_path,")")},children:Object(f.jsx)("div",{className:"highlighted--vertical",children:Object(f.jsxs)("div",{className:"highlighted--horizontal",children:[Object(f.jsxs)("div",{className:"highlighted--name",children:[" ",t.name," "]}),Object(f.jsxs)("div",{className:"highlighted--info",children:[Object(f.jsxs)("div",{className:"highlighted--points",children:[" ",t.vote_average," points"]}),Object(f.jsxs)("div",{className:"highlighted--year",children:[" "," ".concat(i,"-").concat(n.getFullYear())," "]}),Object(f.jsxs)("div",{className:"highlighted--seasons",children:[" ",t.number_of_seasons," season",1!==t.number_of_seasons?"s":"","  "]})]}),Object(f.jsxs)("div",{className:"highlighted--description",children:[" ",a," "]}),Object(f.jsxs)("div",{className:"highlighted--buttons",children:[Object(f.jsx)("a",{href:"watch/".concat(t.id," "),className:"highlighted--watch-button",children:" \u25b6 Watch"}),Object(f.jsx)("a",{href:"list/add/".concat(t.id),className:"highlighted--list-button",children:" + My List "})]}),Object(f.jsxs)("div",{className:"highlighted--genres",children:[Object(f.jsx)("strong",{children:"Genres: "})," ",s.join(", ")]})]})})})}n(32);function w(e){var t=e.black;return Object(f.jsxs)("header",{className:t?"black":"",children:[Object(f.jsx)("div",{className:"header--logo",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png",alt:"Netflix"})})}),Object(f.jsx)("div",{className:"header--user",children:Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",alt:"user"})})})]})}function _(){var e=Object(i.useState)([]),t=Object(h.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(null),a=Object(h.a)(c,2),r=a[0],d=a[1],u=Object(i.useState)(!1),g=Object(h.a)(u,2),m=g[0],b=g[1];return Object(i.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,i,c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getHomeList();case 2:return t=e.sent,n=t.filter((function(e){return"originals"===e.slug})),i=Math.floor(Math.random()*(n[0].items.results.length-1)),c=n[0].items.results[i],e.next=8,j.getMovieInfo(c.id,"tv");case 8:a=e.sent,d(a),s(t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(i.useEffect)((function(){var e=function(){window.scrollY>10?b(!0):b(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(f.jsxs)("div",{className:"page",children:[Object(f.jsx)(w,{black:m}),r&&Object(f.jsx)(O,{item:r}),Object(f.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(f.jsx)(p,{title:e.title,items:e.items},t)}))}),Object(f.jsxs)("footer",{children:[Object(f.jsxs)("p",{children:["developed by",Object(f.jsx)("span",{children:Object(f.jsx)("a",{href:"https://github.com/born3am",children:" born3am"})})," - Nov.2021"]}),Object(f.jsxs)("p",{children:["Image rights reserved to",Object(f.jsx)("span",{children:Object(f.jsx)("a",{href:"https://www.netflix.com",children:" Netflix"})})]}),Object(f.jsxs)("p",{children:["Data source:",Object(f.jsxs)("span",{children:[" ",Object(f.jsx)("a",{href:"https://www.themoviedb.org",children:" TMDB"})]})]})]}),n.length<=0&&Object(f.jsx)("div",{className:"loading",children:Object(f.jsx)("img",{src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif",alt:"loading"})})]})}a.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(_,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a4570cec.chunk.js.map