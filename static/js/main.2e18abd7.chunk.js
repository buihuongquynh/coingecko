(this["webpackJsonpsagas-redux"]=this["webpackJsonpsagas-redux"]||[]).push([[0],{48:function(e,c,t){},65:function(e,c,t){},70:function(e,c,t){},71:function(e,c,t){},91:function(e,c,t){"use strict";t.r(c);var n=t(2),r=t.n(n),a=t(19),s=t.n(a),i=(t(48),t(26)),l=t(15),j={GET_DATA_CURRENCY:"GET_DATA_CURRENCY",GET_DATA_CURRENCY_SUCCESS:"GET_DATA_CURRENCY_SUCCESS",GET_VAL_CURRENCY:"GET_VAL_CURRENCY",GET_VAL_CURRENCY_SUCCESS:"GET_VAL_CURRENCY_SUCCESS",GET_DATA:"GET_DATA",GET_DATA_SUCCESS:"GET_DATA_SUCCESS"},d=t(0);var h=function(){var e=Object(l.b)(),c=Object(l.c)((function(e){return e.currency.data}));Object(n.useEffect)((function(){e({type:j.GET_DATA_CURRENCY})}),[]);var t=[];return c&&(t=c.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))),Object(d.jsx)("select",{onChange:function(c){var t;c.persist(),e((t=c.target.value,{type:j.GET_VAL_CURRENCY,payload:t}))},children:c?t:null})},o=t(36),b=t.n(o),u=function(e){var c=e.dataList,t=Object(n.useState)(""),r=Object(i.a)(t,2),a=r[0],s=r[1],l=Object(n.useState)([]),j=Object(i.a)(l,2),o=j[0],u=j[1],x={placeholder:"Name conins",value:a,onChange:function(e,c){var t=c.newValue;s(t)}};return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{style:{paddingBottom:"20px"},className:"header",children:[Object(d.jsx)("div",{className:"header__top",children:Object(d.jsxs)("ul",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"s",children:["EN ",Object(d.jsx)("i",{className:"fas fa-caret-down"})]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"s",children:["BCH ",Object(d.jsx)("i",{className:"fas fa-caret-down"})," "]})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"s",children:["Help"," ",Object(d.jsx)("img",{src:"https://static.coingecko.com/s/candy_notification-13bfd4ea8bd89d20951b5bd2045b30c9ebb912ac6ec73c020234ab37de7be52f.svg"})]})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"s",children:"Sign"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"s",children:"Sign Up"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"s",children:Object(d.jsx)("i",{className:"fas fa-bookmark text-black"})})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"s",children:Object(d.jsx)("i",{className:"fas text-2xs fa-moon"})})})]})}),Object(d.jsxs)("div",{className:"header__menu",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{src:"https://static.coingecko.com/s/cg_haloween_light_mode-4b3a48e27e17965af9ad3795f8f91918e9bc4ab85d87f6a0b7d96fa6d5e0cac7.png"})}),Object(d.jsxs)("ul",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Home"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Markets"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"DeFi"})}),Object(d.jsx)("li",{children:Object(d.jsxs)("a",{href:"d",children:["Farms ",Object(d.jsx)("span",{children:" \ud83e\uddd1\u200d\ud83c\udf3e"})]})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Exchanges"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"News"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Tools"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Resources"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Learn"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Community"})})]})]}),Object(d.jsxs)("div",{className:"header__drop",children:[Object(d.jsx)("h1",{children:"Top 100 Coins by Market Capitalization"}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"row__right",children:[Object(d.jsx)("div",{className:"drop"}),Object(d.jsxs)("ul",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)(h,{}),Object(d.jsx)(b.a,{suggestions:o,onSuggestionsFetchRequested:function(e){var t=e.value;u(function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:c.filter((function(e){return e.name.toLowerCase().slice(0,n)===t}))}(t))},onSuggestionsClearRequested:function(){u([])},getSuggestionValue:function(e){return e.name},renderSuggestion:function(e){return Object(d.jsx)("div",{children:e.name})},inputProps:x})]})]}),Object(d.jsx)("div",{className:"row__left",children:Object(d.jsxs)("ul",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:" Market"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:" All-Time High"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:" Developer"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"d",children:"Social"})})]})})]})]})]})})},x=(t(65),t(21));var O=function(){return Object(d.jsx)("div",{className:"Login",children:Object(d.jsx)("div",{className:"banner",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-lg-5 col-md-12",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{children:"\u0110\u0103ng nh\u1eadp \u0111\u1ec3 s\u1eed d\u1ee5ng"}),Object(d.jsx)("div",{className:"face",children:Object(d.jsxs)("a",{href:"a",children:[Object(d.jsx)("i",{className:"fab fa-facebook-square"}),Object(d.jsx)("span",{children:"\u0110\u0103ng nh\u1eadp v\u1edbi Facebook"})]})}),Object(d.jsxs)("div",{className:"text",children:[Object(d.jsxs)("p",{children:["Khi b\u1ea1n \u0111\u0103ng nh\u1eadp b\u1eb1ng facebook, m\u1eb7c \u0111\u1ecbnh b\u1ea1n \u0111\u1ed3ng \xfd v\u1edbi",Object(d.jsx)("span",{children:"\u0110i\u1ec1u kho\u1ea3n d\u1ecbch v\u1ee5"})," v\xe0",Object(d.jsx)("span",{children:"Ch\xednh s\xe1ch b\u1ea3o m\u1eadt"})," c\u1ee7a CoinGecko"]}),Object(d.jsx)("hr",{})]}),Object(d.jsx)("p",{children:"Ho\u1eb7c s\u1eed d\u1ee5ng email"}),Object(d.jsxs)("div",{className:"form",children:[Object(d.jsx)("input",{type:"text",placeholder:"Email"}),Object(d.jsx)("input",{type:"password",placeholder:"M\u1eadt kh\u1ea9u"}),Object(d.jsx)("div",{className:"dn",children:Object(d.jsx)("span",{children:"\u0110\u0103ng nh\u1eadp"})}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"a",children:"Qu\xean m\u1eadt kh\u1ea9u?"})}),Object(d.jsxs)("div",{className:"dk",children:[Object(d.jsx)(x.b,{to:"/signup",children:"\u0110\u0103ng k\xfd t\xe0i kho\u1ea3n m\u1edbi"}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"B\u1ea1n kh\xf4ng \u0111\u0103ng nh\u1eadp \u0111\u01b0\u1ee3c t\xe0i kho\u1ea3n?"}),Object(d.jsxs)("p",{children:["Vui l\xf2ng g\u1ecdi t\u1edbi s\u1ed1 ",Object(d.jsx)("span",{children:"(024) 6680 5588"}),"(gi\u1edd h\xe0nh ch\xednh) \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3."]})]})]})]})}),Object(d.jsx)("div",{className:"col-lg-7 col-md-12",children:Object(d.jsx)("div",{className:"tutorial",children:Object(d.jsxs)("div",{className:"tutorial_text",children:[Object(d.jsx)("h1",{children:"H\u01b0\u1edbng d\u1eabn s\u1eed d\u1ee5ng BotWork"}),Object(d.jsx)("p",{children:"1. \u0110\u0103ng nh\u1eadp (\u0110\u0103ng k\xfd t\xe0i kho\u1ea3n m\u1edbi n\u1ebfu b\u1ea1n ch\u01b0a t\u1eebng s\u1eed d\u1ee5ng BotWork t\u1ea1i \u0111\xe2y)"}),Object(d.jsx)("p",{children:"Bitcoin price today is 175,977.495 XLM with a  It has a circulating supply of 19 Million BTC coins and a total"}),Object(d.jsx)("p",{children:" supply of 21 Million. 24-hour trading volume of 145,319,831,050.929 XLM."}),Object(d.jsx)("p",{children:" BTC price is up 2.4% in the last 24 hours."}),Object(d.jsx)("p",{children:" If you are looking to buy or sell Bitcoin, Binance is currently the most active exchange."}),Object(d.jsx)("iframe",{src:"https://www.youtube.com/embed/REMS55jZFoc",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"})]})})})]})})})},p="price_change_percentage_1h_in_currency",m="price_change_percentage_24h_in_currency",f="price_change_percentage_7d_in_currency",g=function(e){var c=e.item,t=new Intl.NumberFormat("en-US",{style:"currency",currency:e.itemCurrency,minimumFractionDigits:0}),n=parseFloat(c[p]).toFixed(2),r=parseFloat(c[m]).toFixed(2),a=parseFloat(c[f]).toFixed(2),s=Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("td",{className:"item star",children:[Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"far fa-star"})})," ",c.market_cap_rank]}),Object(d.jsxs)("td",{className:"item logo",children:[" ",Object(d.jsxs)("div",{className:"item-small",children:[" ",Object(d.jsx)("img",{src:c.image})," ",Object(d.jsx)("h3",{children:c.name})]})," ",Object(d.jsx)("h5",{className:"upcase",children:c.symbol})," "]}),Object(d.jsx)("td",{className:"item",children:t.format(c.current_price)}),c[p]>0?Object(d.jsxs)("td",{className:"item green-num",children:[n,"%"]}):Object(d.jsx)("td",{className:"item red-num",children:isNaN(n)?"--":"".concat(n,"%")}),c[m]>0?Object(d.jsxs)("td",{className:"item green-num",children:[r,"%"]}):Object(d.jsx)("td",{className:"item red-num",children:isNaN(r)?"--":"".concat(r,"%")}),c[f]>0?Object(d.jsxs)("td",{className:"item green-num",children:[a,"%"]}):Object(d.jsx)("td",{className:"item red-num",children:isNaN(a)?"--":"".concat(a,"%")}),Object(d.jsx)("td",{className:"item",children:t.format(c.total_volume)}),Object(d.jsx)("td",{className:"item",children:t.format(c.market_cap)})]});return Object(d.jsx)("tr",{className:"list-row-item",children:s})},_=function(e){var c=e.dataList,t=null,r=Object(l.b)();return c&&(t=c.map((function(c,t){return Object(d.jsx)(g,{itemCurrency:e.currency,item:c},t)}))),Object(n.useEffect)((function(){try{r({type:j.GET_DATA,payload:e.query})}catch(c){}}),[e.currency]),Object(d.jsx)("div",{children:c?Object(d.jsx)("table",{children:t}):null})};t(70);var v=function(){var e=Object(l.c)((function(e){return e.dataCurrency.data})),c=Object(l.c)((function(e){return e.valCurrency.data})),t={vs_currency:c,price_change_percentage:["1h%2C","24h%2C","7d"]};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{dataList:e}),Object(d.jsx)("div",{style:{overflow:"auto",height:"450px"},children:Object(d.jsx)(_,{dataList:e,currency:c,query:t})})]})},C=(t(71),t(5));var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(x.a,{children:[Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(C.c,{children:[Object(d.jsx)(C.a,{path:"/home",exact:!0,component:v}),Object(d.jsx)(C.a,{path:"/coingecko",exact:!0,component:O})]})})]})})},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,92)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,a=c.getLCP,s=c.getTTFB;t(e),n(e),r(e),a(e),s(e)}))},E=t(42),S=t(43),T=t(7),A=t(8),k={data:null},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case j.GET_DATA_CURRENCY_SUCCESS:var t=c.payload;return Object(A.a)(Object(A.a)({},e),{},{data:t});default:return e}},w={data:null},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case j.GET_DATA_SUCCESS:var t=c.payload;return Object(A.a)(Object(A.a)({},e),{},{data:t});default:return e}},G={data:"btc"},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case j.GET_VAL_CURRENCY_SUCCESS:var t=c.payload;return Object(A.a)(Object(A.a)({},e),{},{data:t});default:return e}},L=Object(T.c)({currency:R,dataCurrency:U,valCurrency:F}),D=t(14),Y=t.n(D),B=t(12),I=t(38),V=t(39),M=t(40),H=t.n(M),q=t(41),P=t.n(q),z=H.a.create({baseURL:"https://api.coingecko.com/api/v3",headers:{"content-type":"application/json"},paramsSerializer:function(e){var c=e.price_change_percentage.join(""),t=Object(A.a)(Object(A.a)({},e),{},{price_change_percentage:c});return P.a.stringify(t,{encode:!1})}});z.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var J=z,W=function(){function e(){Object(I.a)(this,e)}return Object(V.a)(e,null,[{key:"list",value:function(e){return J.get("/coins/markets",{params:e})}},{key:"listCurrency",value:function(){return J.get("/simple/supported_vs_currencies")}}]),e}(),X=Y.a.mark(ee),K=Y.a.mark(ce),Q=Y.a.mark(te),Z=Y.a.mark(ne),$=Y.a.mark(re);function ee(){var e;return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(B.b)(W.listCurrency);case 3:return e=c.sent,c.next=6,Object(B.c)({type:j.GET_DATA_CURRENCY_SUCCESS,payload:e});case 6:c.next=12;break;case 8:return c.prev=8,c.t0=c.catch(0),c.next=12,Object(B.c)({type:"USER_FETCH_FAILED",message:c.t0.message});case 12:case"end":return c.stop()}}),X,null,[[0,8]])}function ce(e){return Y.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(B.c)((t=e.payload,{type:j.GET_VAL_CURRENCY_SUCCESS,payload:t}));case 3:c.next=9;break;case 5:return c.prev=5,c.t0=c.catch(0),c.next=9,Object(B.c)({type:"USER_FETCH_FAILED",message:c.t0.message});case 9:case"end":return c.stop()}var t}),K,null,[[0,5]])}function te(e){var c;return Y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(B.b)(W.list,e.payload);case 3:return c=t.sent,t.next=6,Object(B.c)({type:j.GET_DATA_SUCCESS,payload:c});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(B.c)({type:"USER_FETCH_FAILED",message:t.t0.message});case 12:case"end":return t.stop()}}),Q,null,[[0,8]])}function ne(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.d)(j.GET_DATA_CURRENCY,ee);case 2:return e.next=4,Object(B.d)(j.GET_VAL_CURRENCY,ce);case 4:return e.next=6,Object(B.d)(j.GET_DATA,te);case 6:case"end":return e.stop()}}),Z)}function re(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(B.a)([ne()]);case 2:case"end":return e.stop()}}),$)}var ae=Object(S.a)(),se=Object(E.a)({reducer:L,middleware:[ae]});ae.run(re);var ie=function(e){return Object(d.jsx)(l.a,{store:se,children:e.children})};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(ie,{children:Object(d.jsx)(y,{})})}),document.getElementById("root")),N()}},[[91,1,2]]]);
//# sourceMappingURL=main.2e18abd7.chunk.js.map