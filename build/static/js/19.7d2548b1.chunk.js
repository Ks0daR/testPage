(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[19],{183:function(e,t,a){e.exports={variables:"'../../stylesheet/vars.css'",secondaryTextFontSize:"1.25 rem",thirdHeaderFontStyle:"1.88 rem",primaryColor:"#272727",primaryTextColor:"rgba(0, 0, 0, 0.6)",accentColor:"#FF6C00",primaryTextFontSize:"0.875 rem",totalSum:"AdminOrdersListItem_totalSum__3N4LN",itemsList:"AdminOrdersListItem_itemsList__1oWsS",orderWrapper:"AdminOrdersListItem_orderWrapper__Xuh5r",dateWrapper:"AdminOrdersListItem_dateWrapper__2D54b",orderDate:"AdminOrdersListItem_orderDate__3m7Ov",itemsListItem:"AdminOrdersListItem_itemsListItem__2gUpc",itemName:"AdminOrdersListItem_itemName__10pOP",itemSize:"AdminOrdersListItem_itemSize__2-MSx",itemsCount:"AdminOrdersListItem_itemsCount__ab7c0",sumWrapper:"AdminOrdersListItem_sumWrapper__KQuAy",sumToPay:"AdminOrdersListItem_sumToPay__3N-O2",orderContacts:"AdminOrdersListItem_orderContacts__1t565",orderCheckbox:"AdminOrdersListItem_orderCheckbox__3aCvg",titleDo:"AdminOrdersListItem_titleDo__3CLb4",currency:"AdminOrdersListItem_currency__fROu7"}},184:function(e,t,a){e.exports={noOrderContainer:"AdminOrderList_noOrderContainer__7x0F4",noOrderText:"AdminOrderList_noOrderText__t-BGm",orderContainer:"AdminOrderList_orderContainer__IqhGj",buttons_container:"AdminOrderList_buttons_container__2ZZb_",button:"AdminOrderList_button__yKkRj",button_active:"AdminOrderList_button_active__UAx8k"}},195:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var r=a(44),n=a(0),s=a.n(n),m=a(171),i=a(11),c=a(194),o=a.n(c),d=a(183),l=a.n(d),u=a(75);function _(e){var t=e.item,a=Object(i.d)((function(e){return e.local.lang})),r=Object(i.c)(),n=function(){r(u.a.postOrderStutus(t._id))};return s.a.createElement("li",{className:l.a.orderWrapper},s.a.createElement("div",{className:l.a.orderCheckbox},s.a.createElement("p",{className:l.a.titleDo},s.a.createElement(m.a,{id:"orders.do"})),"done"===t.status&&s.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n,checked:!0,disabled:!0,className:l.a.inputReady}),"new"===t.status&&s.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n,className:l.a.inputReady})),s.a.createElement("div",{className:l.a.dateWrapper},s.a.createElement("p",{className:l.a.orderDate},o()(t.createdAt).format("h:MM a DD MMMM YY"))),s.a.createElement("ul",{className:l.a.itemsList},t.productsList.map((function(e){return s.a.createElement("li",{className:l.a.itemsListItem,key:e._id},s.a.createElement("h4",{className:l.a.itemName},e.productName[a]),s.a.createElement("p",{className:l.a.itemSize},e.type),s.a.createElement("p",{className:l.a.itemsCount},e.itemsCount))}))),s.a.createElement("div",{className:l.a.sumWrapper},s.a.createElement("p",{className:l.a.sumToPay},s.a.createElement(m.a,{id:"orders.sum"})),s.a.createElement("p",{className:l.a.totalSum},t.sumToPay,s.a.createElement("span",{className:l.a.currency},s.a.createElement(m.a,{id:"grn"})))),s.a.createElement("div",{className:l.a.orderContacts},s.a.createElement("p",null,t.deliveryAddress),s.a.createElement("p",null,t.phone),s.a.createElement("p",null,t.name)))}var p=a(82),O=a(184),E=a.n(O),b=a(45);function L(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.local.lang})),a=Object(i.d)(u.b.getOrders),c=Object(i.d)(u.b.getLoading),o=Object(i.d)(u.b.getError),d=[{message:b.a[t]["orders.new"],status:"new"},{message:b.a[t]["orders.done"],status:"done"},{message:b.a[t]["orders.all"],status:"new done"}],l=Object(n.useState)(d[0]),O=Object(r.a)(l,2),L=O[0],N=O[1];return Object(n.useEffect)((function(){e(u.a.getOrders())}),[e]),s.a.createElement(s.a.Fragment,null,o&&s.a.createElement("div",null,"Error: ",o.message),c&&s.a.createElement(p.a,null),!o&&!c&&s.a.createElement(s.a.Fragment,null,a.length?s.a.createElement("div",{className:E.a.orderContainer},s.a.createElement("div",{className:E.a.buttons_container},d.map((function(e){return s.a.createElement("button",{key:e.message,className:"".concat(E.a.button," ").concat(L.message===e.message?E.a.button_active:""),onClick:function(){return N(e)}},e.message)}))),s.a.createElement("div",{className:E.a.orderItems},s.a.createElement("ul",null,a.filter((function(e){var t=e.status;return L.status.includes(t)})).map((function(e){return s.a.createElement(_,{key:e._id,item:e})}))))):s.a.createElement("div",{className:E.a.noOrderContainer},s.a.createElement("p",{className:E.a.noOrderText},s.a.createElement(m.a,{id:"orders.no"})))))}}}]);
//# sourceMappingURL=19.7d2548b1.chunk.js.map