(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[17,19],{184:function(e,t,a){e.exports={variables:"'../../stylesheet/vars.css'",secondaryTextFontSize:"1.25 rem",thirdHeaderFontStyle:"1.88 rem",primaryColor:"#272727",primaryTextColor:"rgba(0, 0, 0, 0.6)",accentColor:"#FF6C00",primaryTextFontSize:"0.875 rem",totalSum:"AdminOrdersListItem_totalSum__3N4LN",itemsList:"AdminOrdersListItem_itemsList__1oWsS",orderWrapper:"AdminOrdersListItem_orderWrapper__Xuh5r",dateWrapper:"AdminOrdersListItem_dateWrapper__2D54b",orderDate:"AdminOrdersListItem_orderDate__3m7Ov",itemsListItem:"AdminOrdersListItem_itemsListItem__2gUpc",itemName:"AdminOrdersListItem_itemName__10pOP",itemSize:"AdminOrdersListItem_itemSize__2-MSx",itemsCount:"AdminOrdersListItem_itemsCount__ab7c0",sumWrapper:"AdminOrdersListItem_sumWrapper__KQuAy",sumToPay:"AdminOrdersListItem_sumToPay__3N-O2",orderContacts:"AdminOrdersListItem_orderContacts__1t565",orderCheckbox:"AdminOrdersListItem_orderCheckbox__3aCvg",titleDo:"AdminOrdersListItem_titleDo__3CLb4",currency:"AdminOrdersListItem_currency__fROu7"}},185:function(e,t,a){e.exports={noOrderContainer:"AdminOrderList_noOrderContainer__7x0F4",noOrderText:"AdminOrderList_noOrderText__t-BGm",orderContainer:"AdminOrderList_orderContainer__IqhGj",buttons_container:"AdminOrderList_buttons_container__2ZZb_",button:"AdminOrderList_button__yKkRj",button_active:"AdminOrderList_button_active__UAx8k"}},196:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var r=a(43),n=a(0),m=a.n(n),i=a(172),s=a(11),c=a(195),l=a.n(c),d=a(184),o=a.n(d),u=a(75);function _(e){var t=e.item,a=Object(s.d)((function(e){return e.local.lang})),r=Object(s.c)(),n=function(){r(u.a.postOrderStutus(t._id))};return m.a.createElement("li",{className:o.a.orderWrapper},m.a.createElement("div",{className:o.a.orderCheckbox},m.a.createElement("p",{className:o.a.titleDo},m.a.createElement(i.a,{id:"orders.do"})),"done"===t.status&&m.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n,checked:!0,disabled:!0,className:o.a.inputReady}),"new"===t.status&&m.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n,className:o.a.inputReady})),m.a.createElement("div",{className:o.a.dateWrapper},m.a.createElement("p",{className:o.a.orderDate},l()(t.createdAt).format("h:MM a DD MMMM YY"))),m.a.createElement("ul",{className:o.a.itemsList},t.productsList.map((function(e){return m.a.createElement("li",{className:o.a.itemsListItem,key:e._id},m.a.createElement("h4",{className:o.a.itemName},e.productName[a]),m.a.createElement("p",{className:o.a.itemSize},e.type),m.a.createElement("p",{className:o.a.itemsCount},e.itemsCount))}))),m.a.createElement("div",{className:o.a.sumWrapper},m.a.createElement("p",{className:o.a.sumToPay},m.a.createElement(i.a,{id:"orders.sum"})),m.a.createElement("p",{className:o.a.totalSum},t.sumToPay,m.a.createElement("span",{className:o.a.currency},m.a.createElement(i.a,{id:"grn"})))),m.a.createElement("div",{className:o.a.orderContacts},m.a.createElement("p",null,t.deliveryAddress),m.a.createElement("p",null,t.phone),m.a.createElement("p",null,t.name)))}var E=a(82),p=a(185),A=a.n(p),O=a(44);function N(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.local.lang})),a=Object(s.d)(u.b.getOrders),c=Object(s.d)(u.b.getLoading),l=Object(s.d)(u.b.getError),d=Object(n.useState)(O.a[t]["orders.new"]),o=Object(r.a)(d,2),p=o[0],N=o[1],I=[O.a[t]["orders.new"],O.a[t]["orders.done"],O.a[t]["orders.all"]];return Object(n.useEffect)((function(){e(u.a.getOrders())}),[e]),m.a.createElement(m.a.Fragment,null,l&&m.a.createElement("div",null,"Error: ",l.message),c&&m.a.createElement(E.a,null),!l&&!c&&m.a.createElement(m.a.Fragment,null,a.length?m.a.createElement("div",{className:A.a.orderContainer},m.a.createElement("div",{className:A.a.buttons_container},I.map((function(e){return m.a.createElement("button",{key:e,className:"".concat(A.a.button," ").concat(p===e?A.a.button_active:""),onClick:function(){return N(e)}},e)}))),m.a.createElement("div",{className:A.a.orderItems},m.a.createElement("ul",null,a.map((function(e){if(p===O.a[t]["orders.all"])return m.a.createElement(_,{key:e._id,item:e})}))),m.a.createElement("ul",null,a.map((function(e){if(p===O.a[t]["orders.done"]&&"done"===e.status)return m.a.createElement(_,{key:e._id,item:e})}))),m.a.createElement("ul",null,a.map((function(e){if(p===O.a[t]["orders.new"]&&"new"===e.status)return m.a.createElement(_,{key:e._id,item:e})}))))):m.a.createElement("div",{className:A.a.noOrderContainer},m.a.createElement("p",{className:A.a.noOrderText},m.a.createElement(i.a,{id:"orders.no"})))))}},222:function(e,t,a){e.exports={variables:"'../../stylesheet/vars.css'",borderColor:"rgba(39, 39, 39, 0.1)",thirdHeaderFontStyle:"1.88 rem",primaryColor:"#272727",accentColor:"#FF6C00",primaryTextFontSize:"0.875 rem",list:"AdminPage_list__3zPmi",AdminPageContainer:"AdminPage_AdminPageContainer__2P4Pi",clienInfoTitle:"AdminPage_clienInfoTitle__1PARR",line:"AdminPage_line__25IDA",adminMenuItems:"AdminPage_adminMenuItems__e-0uL",adminMenuItem:"AdminPage_adminMenuItem__1Q2v3",adminMenuActiveItem:"AdminPage_adminMenuActiveItem__3YoqK",lightHeader:"AdminPage_lightHeader__10tEx"}},238:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(0),n=a.n(r),m=a(12),i=a(18),s=a(172),c=a(8),l=a(196),d=a(222),o=a.n(d);function u(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o.a.AdminPageContainer},n.a.createElement("h3",{className:o.a.clienInfoTitle},n.a.createElement(s.a,{id:"welcomeAdmin"})),n.a.createElement("ul",{className:o.a.adminMenuItems},n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_ORDER_LISTS,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"orders.accepted"}))),n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_CREATE_PRODUCT,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"product.create"}))),n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_UPDATE_PRODUCT,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"product.edit"}))),n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_UPDATE_PROMO,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"promo.edit"})))),n.a.createElement("hr",{className:o.a.line})),n.a.createElement(i.b,{path:c.a.ADMIN_PAGE},n.a.createElement(l.default,null)))}}}]);
//# sourceMappingURL=17.9d52ab27.chunk.js.map