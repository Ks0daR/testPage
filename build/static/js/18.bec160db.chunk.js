(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[18],{182:function(e,t,r){e.exports={variables:"'../../stylesheet/vars.css'",secondaryTextFontSize:"1.25 rem",primaryColor:"#272727",primaryTextColor:"rgba(0, 0, 0, 0.6)",primaryTextFontSize:"0.875 rem",totalSum:"AdminOrdersListItem_totalSum__V0DqW",itemsList:"AdminOrdersListItem_itemsList__1LIbF",orderWrapper:"AdminOrdersListItem_orderWrapper__1bxdG",dateWrapper:"AdminOrdersListItem_dateWrapper__1rWFk",orderDate:"AdminOrdersListItem_orderDate__76XE_",itemsListItem:"AdminOrdersListItem_itemsListItem__Tokh3",itemName:"AdminOrdersListItem_itemName__2e6Gj",itemSize:"AdminOrdersListItem_itemSize__3G08E",itemsCount:"AdminOrdersListItem_itemsCount__x_Dqy",sumWrapper:"AdminOrdersListItem_sumWrapper__1AjRh",sumToPay:"AdminOrdersListItem_sumToPay__1Bgdx",orderContacts:"AdminOrdersListItem_orderContacts__28TdZ",orderCheckbox:"AdminOrdersListItem_orderCheckbox__3iepU",currency:"AdminOrdersListItem_currency__K0v7E"}},183:function(e,t,r){e.exports={noOrderContainer:"AdminOrderList_noOrderContainer__9WMZe",noOrderText:"AdminOrderList_noOrderText__hl01I",orderContainer:"AdminOrderList_orderContainer__2XwJh",buttons_container:"AdminOrderList_buttons_container__3vsC2",button:"AdminOrderList_button__2rJY7",button_active:"AdminOrderList_button_active__1FcUy"}},190:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return L}));var a=r(43),n=r(0),s=r.n(n),m=r(171),i=r(11),c=r(187),o=r.n(c),d=r(182),l=r.n(d),u=r(75);function _(e){var t=e.item,r=Object(i.d)((function(e){return e.local.lang})),a=Object(i.c)(),n=function(){a(u.a.postOrderStutus(t._id))};return s.a.createElement("li",{className:l.a.orderWrapper},s.a.createElement("div",{className:l.a.dateWrapper},s.a.createElement("p",{className:l.a.orderDate},o()(t.createdAt).format("h:MM a DD MMMM YY"))),s.a.createElement("ul",{className:l.a.itemsList},t.productsList.map((function(e){return s.a.createElement("li",{className:l.a.itemsListItem,key:e._id},s.a.createElement("h4",{className:l.a.itemName},e.productName[r]),s.a.createElement("p",{className:l.a.itemSize},e.type),s.a.createElement("p",{className:l.a.itemsCount},e.itemsCount))}))),s.a.createElement("div",{className:l.a.sumWrapper},s.a.createElement("p",{className:l.a.sumToPay},s.a.createElement(m.a,{id:"orders.sum"})),s.a.createElement("p",{className:l.a.totalSum},t.sumToPay,s.a.createElement("span",{className:l.a.currency},s.a.createElement(m.a,{id:"grn"})))),s.a.createElement("div",{className:l.a.orderContacts},s.a.createElement("p",null,t.deliveryAddress),s.a.createElement("p",null,t.phone),s.a.createElement("p",null,t.name)),s.a.createElement("div",{className:l.a.orderCheckbox},s.a.createElement("p",null,s.a.createElement(m.a,{id:"orders.done"})),"done"===t.status&&s.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n,checked:!0,disabled:!0}),"new"===t.status&&s.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n})))}var p=r(81),E=r(183),O=r.n(E),b=r(44);function L(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.local.lang})),r=Object(i.d)(u.b.getOrders),c=Object(i.d)(u.b.getLoading),o=Object(i.d)(u.b.getError),d=Object(n.useState)(b.a[t]["orders.new"]),l=Object(a.a)(d,2),E=l[0],L=l[1],N=[b.a[t]["orders.new"],b.a[t]["orders.done"],b.a[t]["orders.all"]];return Object(n.useEffect)((function(){e(u.a.getOrders())}),[e]),s.a.createElement(s.a.Fragment,null,o&&s.a.createElement("div",null,"Error: ",o.message),c&&s.a.createElement(p.a,null),!o&&!c&&s.a.createElement(s.a.Fragment,null,r.length?s.a.createElement("div",{className:O.a.orderContainer},s.a.createElement("div",{className:O.a.buttons_container},N.map((function(e){return s.a.createElement("button",{key:e,className:"".concat(O.a.button," ").concat(E===e?O.a.button_active:""),onClick:function(){return L(e)}},e)}))),s.a.createElement("div",{className:O.a.orderItems},s.a.createElement("ul",null,r.map((function(e){if(E===b.a[t]["orders.all"])return s.a.createElement(_,{key:e._id,item:e})}))),s.a.createElement("ul",null,r.map((function(e){if(E===b.a[t]["orders.done"]&&"done"===e.status)return s.a.createElement(_,{key:e._id,item:e})}))),s.a.createElement("ul",null,r.map((function(e){if(E===b.a[t]["orders.new"]&&"new"===e.status)return s.a.createElement(_,{key:e._id,item:e})}))))):s.a.createElement("div",{className:O.a.noOrderContainer},s.a.createElement("p",{className:O.a.noOrderText},s.a.createElement(m.a,{id:"orders.no"})))))}}}]);
//# sourceMappingURL=18.bec160db.chunk.js.map