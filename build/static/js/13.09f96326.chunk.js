(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[13,18],{182:function(e,t,a){e.exports={variables:"'../../stylesheet/vars.css'",secondaryTextFontSize:"1.25 rem",primaryColor:"#272727",primaryTextColor:"rgba(0, 0, 0, 0.6)",primaryTextFontSize:"0.875 rem",totalSum:"AdminOrdersListItem_totalSum__V0DqW",itemsList:"AdminOrdersListItem_itemsList__1LIbF",orderWrapper:"AdminOrdersListItem_orderWrapper__1bxdG",dateWrapper:"AdminOrdersListItem_dateWrapper__1rWFk",orderDate:"AdminOrdersListItem_orderDate__76XE_",itemsListItem:"AdminOrdersListItem_itemsListItem__Tokh3",itemName:"AdminOrdersListItem_itemName__2e6Gj",itemSize:"AdminOrdersListItem_itemSize__3G08E",itemsCount:"AdminOrdersListItem_itemsCount__x_Dqy",sumWrapper:"AdminOrdersListItem_sumWrapper__1AjRh",sumToPay:"AdminOrdersListItem_sumToPay__1Bgdx",orderContacts:"AdminOrdersListItem_orderContacts__28TdZ",orderCheckbox:"AdminOrdersListItem_orderCheckbox__3iepU",currency:"AdminOrdersListItem_currency__K0v7E"}},183:function(e,t,a){e.exports={noOrderContainer:"AdminOrderList_noOrderContainer__9WMZe",noOrderText:"AdminOrderList_noOrderText__hl01I",orderContainer:"AdminOrderList_orderContainer__2XwJh",buttons_container:"AdminOrderList_buttons_container__3vsC2",button:"AdminOrderList_button__2rJY7",button_active:"AdminOrderList_button_active__1FcUy"}},190:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return I}));var r=a(43),n=a(0),m=a.n(n),i=a(171),s=a(11),c=a(187),l=a.n(c),d=a(182),o=a.n(d),u=a(75);function _(e){var t=e.item,a=Object(s.d)((function(e){return e.local.lang})),r=Object(s.c)(),n=function(){r(u.a.postOrderStutus(t._id))};return m.a.createElement("li",{className:o.a.orderWrapper},m.a.createElement("div",{className:o.a.dateWrapper},m.a.createElement("p",{className:o.a.orderDate},l()(t.createdAt).format("h:MM a DD MMMM YY"))),m.a.createElement("ul",{className:o.a.itemsList},t.productsList.map((function(e){return m.a.createElement("li",{className:o.a.itemsListItem,key:e._id},m.a.createElement("h4",{className:o.a.itemName},e.productName[a]),m.a.createElement("p",{className:o.a.itemSize},e.type),m.a.createElement("p",{className:o.a.itemsCount},e.itemsCount))}))),m.a.createElement("div",{className:o.a.sumWrapper},m.a.createElement("p",{className:o.a.sumToPay},m.a.createElement(i.a,{id:"orders.sum"})),m.a.createElement("p",{className:o.a.totalSum},t.sumToPay,m.a.createElement("span",{className:o.a.currency},m.a.createElement(i.a,{id:"grn"})))),m.a.createElement("div",{className:o.a.orderContacts},m.a.createElement("p",null,t.deliveryAddress),m.a.createElement("p",null,t.phone),m.a.createElement("p",null,t.name)),m.a.createElement("div",{className:o.a.orderCheckbox},m.a.createElement("p",null,m.a.createElement(i.a,{id:"orders.done"})),"done"===t.status&&m.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n,checked:!0,disabled:!0}),"new"===t.status&&m.a.createElement("input",{type:"checkbox",name:"orderDone",onClick:n})))}var E=a(81),p=a(183),A=a.n(p),O=a(44);function I(){var e=Object(s.c)(),t=Object(s.d)((function(e){return e.local.lang})),a=Object(s.d)(u.b.getOrders),c=Object(s.d)(u.b.getLoading),l=Object(s.d)(u.b.getError),d=Object(n.useState)(O.a[t]["orders.new"]),o=Object(r.a)(d,2),p=o[0],I=o[1],N=[O.a[t]["orders.new"],O.a[t]["orders.done"],O.a[t]["orders.all"]];return Object(n.useEffect)((function(){e(u.a.getOrders())}),[e]),m.a.createElement(m.a.Fragment,null,l&&m.a.createElement("div",null,"Error: ",l.message),c&&m.a.createElement(E.a,null),!l&&!c&&m.a.createElement(m.a.Fragment,null,a.length?m.a.createElement("div",{className:A.a.orderContainer},m.a.createElement("div",{className:A.a.buttons_container},N.map((function(e){return m.a.createElement("button",{key:e,className:"".concat(A.a.button," ").concat(p===e?A.a.button_active:""),onClick:function(){return I(e)}},e)}))),m.a.createElement("div",{className:A.a.orderItems},m.a.createElement("ul",null,a.map((function(e){if(p===O.a[t]["orders.all"])return m.a.createElement(_,{key:e._id,item:e})}))),m.a.createElement("ul",null,a.map((function(e){if(p===O.a[t]["orders.done"]&&"done"===e.status)return m.a.createElement(_,{key:e._id,item:e})}))),m.a.createElement("ul",null,a.map((function(e){if(p===O.a[t]["orders.new"]&&"new"===e.status)return m.a.createElement(_,{key:e._id,item:e})}))))):m.a.createElement("div",{className:A.a.noOrderContainer},m.a.createElement("p",{className:A.a.noOrderText},m.a.createElement(i.a,{id:"orders.no"})))))}},214:function(e,t,a){e.exports={variables:"'../../stylesheet/vars.css'",borderColor:"rgba(39, 39, 39, 0.1)",thirdHeaderFontStyle:"1.875 rem",primaryColor:"#272727",accentColor:"#FF6C00",primaryTextFontSize:"0.875 rem",list:"AdminPage_list__3OYwd",AdminPageContainer:"AdminPage_AdminPageContainer__2BgP4",clienInfoTitle:"AdminPage_clienInfoTitle__1XIAC",line:"AdminPage_line__P6ZY7",adminMenuItems:"AdminPage_adminMenuItems__1OqTN",adminMenuItem:"AdminPage_adminMenuItem__2Gil8",adminMenuActiveItem:"AdminPage_adminMenuActiveItem__13-C2",lightHeader:"AdminPage_lightHeader__2Wyde"}},228:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(0),n=a.n(r),m=a(12),i=a(18),s=a(171),c=a(8),l=a(190),d=a(214),o=a.n(d);function u(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:o.a.AdminPageContainer},n.a.createElement("h3",{className:o.a.clienInfoTitle},n.a.createElement(s.a,{id:"welcomeAdmin"})),n.a.createElement("ul",{className:o.a.adminMenuItems},n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_ORDER_LISTS,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"orders.accepted"}))),n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_CREATE_PRODUCT,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"product.create"}))),n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_UPDATE_PRODUCT,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"product.edit"}))),n.a.createElement("li",null,n.a.createElement(m.c,{to:c.a.ADMIN_UPDATE_PROMO,className:o.a.adminMenuItem,activeClassName:o.a.adminMenuActiveItem},n.a.createElement(s.a,{id:"promo.edit"})))),n.a.createElement("hr",{className:o.a.line})),n.a.createElement(i.b,{path:c.a.ADMIN_PAGE},n.a.createElement(l.default,null)))}}}]);
//# sourceMappingURL=13.09f96326.chunk.js.map