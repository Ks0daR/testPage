(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[16],{212:function(e,t,r){e.exports={variables:"'../../stylesheet/vars.css'",accentColor:"#FF6C00",primaryColor:"#272727",lightColor:"#FFF",secondaryTextFontSize:"1.25 rem",thirdHeaderFontStyle:"1.88 rem",borderColor:"rgba(39, 39, 39, 0.1)",primaryTextColor:"rgba(0, 0, 0, 0.6)",clientOrderTitle:"ClientOrders_clientOrderTitle__2w727",orderDate:"ClientOrders_orderDate__fK9QA",productTitle:"ClientOrders_productTitle__heWag",productAmount:"ClientOrders_productAmount__PLIsZ",orderPrice:"ClientOrders_orderPrice__20K1V",noOrdersText:"ClientOrders_noOrdersText__3Vna2",clientOrderContainer:"ClientOrders_clientOrderContainer__27PrF",clientOrdersList:"ClientOrders_clientOrdersList__3EFvQ"}},213:function(e,t,r){e.exports=r.p+"static/media/user.eefa8b66.svg"},214:function(e,t,r){e.exports=r.p+"static/media/mail.b7412335.svg"},215:function(e,t,r){e.exports={variables:"'../../stylesheet/vars.css'",accentColor:"#FF6C00",primaryColor:"#272727",lightColor:"#FFF",secondaryTextFontSize:"1.25 rem",thirdHeaderFontStyle:"1.88 rem",borderColor:"rgba(39, 39, 39, 0.1)",primaryTextColor:"rgba(0, 0, 0, 0.6)",clientInfo:"ClientInfo_clientInfo__j7F76",clienInfoTitle:"ClientInfo_clienInfoTitle__3aKVw",clientInfoList:"ClientInfo_clientInfoList__PlB8S"}},216:function(e,t,r){e.exports={variables:"'../../stylesheet/vars.css'",accentColor:"#FF6C00",primaryColor:"#272727",lightColor:"#FFF",secondaryTextFontSize:"1.25 rem",thirdHeaderFontStyle:"1.88 rem",borderColor:"rgba(39, 39, 39, 0.1)",primaryTextColor:"rgba(0, 0, 0, 0.6)",clientInfoContainer:"UserProfile_clientInfoContainer__2J52R",orderBtn:"UserProfile_orderBtn__a-qeW",orderBtnText:"UserProfile_orderBtnText__1tVsA"}},245:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(19),i=r(18),c=r(12),o=r(11),s=r(172),d=r(212),m=r.n(d),u=function(){var e=Object(o.d)((function(e){return e.local.lang})),t=Object(o.d)(l.b.getUserOrders),r=t.map((function(t){return n.a.createElement("li",{key:t._id},n.a.createElement("span",{className:m.a.orderDate},new Date(t.createdAt).toLocaleDateString()),n.a.createElement("div",{className:m.a.productTitle},t.productsList.map((function(t){return n.a.createElement("div",{key:t._id},t.productName[e]," ",n.a.createElement("span",{className:m.a.productAmount},t.type," - ",t.itemsCount," ",n.a.createElement(s.a,{id:"q"})))}))),n.a.createElement("span",{className:m.a.orderPrice},n.a.createElement(s.a,{id:"orders.sum"})," ",t.sumToPay," ",n.a.createElement(s.a,{id:"grn"})),n.a.createElement("hr",null))}));return n.a.createElement(n.a.Fragment,null,t?n.a.createElement("div",{className:m.a.clientOrderContainer},n.a.createElement("h4",{className:m.a.clientOrderTitle},n.a.createElement(s.a,{id:"orders.history"})),n.a.createElement("ul",{className:m.a.clientOrdersList},r)):n.a.createElement("div",null,n.a.createElement("p",{className:m.a.noOrdersText},n.a.createElement(s.a,{id:"orders.no"}))))},_=r(213),E=r.n(_),p=r(214),f=r.n(p),C=r(215),b=r.n(C),O=function(e){var t=e.username,r=e.email;return n.a.createElement("div",{className:b.a.clientInfo},n.a.createElement("h3",{className:b.a.clienInfoTitle},n.a.createElement(s.a,{id:"welcome"})," ",t,"!"),n.a.createElement("ul",{className:b.a.clientInfoList},n.a.createElement("li",null,n.a.createElement("img",{src:E.a,alt:"user icon"}),n.a.createElement("span",null,t)),r&&"null"!==r&&"undefined"!==r&&n.a.createElement("li",null,n.a.createElement("img",{src:f.a,alt:"mail icon"}),n.a.createElement("span",null,r))))},F=r(216),g=r.n(F);function T(){var e=Object(o.c)(),t=Object(o.d)(l.b.getUserName),r=Object(o.d)(l.b.getUserId),d=Object(o.d)(l.b.getUserEmail),m=Object(o.d)(l.b.isAuthenticated);return Object(a.useEffect)((function(){r&&e(l.a.getUserOrders(r))}),[]),m?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:g.a.clientInfoContainer},m&&n.a.createElement(O,{username:t,email:d}),m&&n.a.createElement(u,null),n.a.createElement(c.b,{to:"/pizza",className:g.a.orderBtnText},n.a.createElement("div",{className:g.a.orderBtn},n.a.createElement(s.a,{id:"new order"}))))):n.a.createElement(i.a,{to:"/"})}t.default=function(){return n.a.createElement("div",{className:"userPageContainer"},n.a.createElement(T,null))}}}]);
//# sourceMappingURL=16.96ccb1e7.chunk.js.map