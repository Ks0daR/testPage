(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[11],{200:function(e,t,r){e.exports={secondaryHeaderFontSize:"1.5 rem",primaryHeaderFontSize:"2.25 rem",accentColor:"#FF6C00",thirdHeaderFontStyle:"1.88 rem",orderListContainer:"OrderList_orderListContainer__37qkT",orderList:"OrderList_orderList__3d_jE",orderListPrice:"OrderList_orderListPrice__1cF6u",orderListPriceCurrency:"OrderList_orderListPriceCurrency__2JeIL",orderListToPayText:"OrderList_orderListToPayText__DZr_h",orderListTitle:"OrderList_orderListTitle__28NDA",orderListEmpty:"OrderList_orderListEmpty__uP7vJ"}},201:function(e,t,r){e.exports={variables:"'../../stylesheet/vars.css'",accentColor:"#FF6C00",lightColor:"#FFF",secondaryTextFontSize:"1.25 rem",orderItemCard:"OrderListItem_orderItemCard__2iYfk",deleteButton:"OrderListItem_deleteButton__2GUqL",itemImg:"OrderListItem_itemImg__3wbox",productName:"OrderListItem_productName__3msjH",ingredientsText:"OrderListItem_ingredientsText__3n_py",orderDetailsWrapper:"OrderListItem_orderDetailsWrapper__2YGNn",priceText:"OrderListItem_priceText__2gAGp",currencyText:"OrderListItem_currencyText__AqVxl",amountContainer:"OrderListItem_amountContainer__9CgrM",decrementBtn:"OrderListItem_decrementBtn__cKwMs",incrementBtn:"OrderListItem_incrementBtn__2RQlc",amountNumber:"OrderListItem_amountNumber__3cuk6",pizzaSize:"OrderListItem_pizzaSize__17DF1",imgContainer:"OrderListItem_imgContainer__3ycbF",contentWrapper:"OrderListItem_contentWrapper__3A4AM"}},202:function(e,t,r){e.exports=r.p+"static/media/remove_order_item_button.56fe91b0.svg"},203:function(e,t,r){e.exports={borderColor:"rgba(39, 39, 39, 0.1)",primaryHeaderFontSize:"2.25 rem",primaryTextFontSize:"0.875 rem",list:"OrderPage_list__1iPI3",OrderPageContainer:"OrderPage_OrderPageContainer__mwCEv",line:"OrderPage_line__3Wr5q"}},204:function(e,t,r){e.exports={contactForm:"OrderForm_contactForm__2cW1W",input:"OrderForm_input__svMR6",label:"OrderForm_label__3_HB8",submit:"OrderForm_submit__25egP"}},234:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(11),i=r(200),m=r.n(i),l=r(201),o=r.n(l),s=r(202),d=r.n(s),u=r(172),p=(r(33),function(e){return e.local.lang}),_=p,b=(r(82),function(e){var t=e.name,r=e.id,a=e.img,i=e.ingredients,m=e.price,l=e.onIncrementItem,s=e.onDecrementItem,p=e.onRemoveItem,b=e.itemsCount,O=e.type,E=Object(c.d)((function(e){return _(e)})),L=i.map((function(e){return[e.name[E]]})).join(", ");return n.a.createElement("li",{className:o.a.orderItemCard},n.a.createElement("img",{src:a,alt:t,className:o.a.itemImg}),n.a.createElement("button",{type:"button",className:o.a.deleteButton,onClick:function(){return p({id:r,type:O})}},n.a.createElement("img",{src:d.a,alt:"delete-btn"})),n.a.createElement("div",{className:o.a.contentWrapper},n.a.createElement("h5",{className:o.a.productName},t[E]),n.a.createElement("p",{className:o.a.ingredientsText},L),n.a.createElement("div",{className:o.a.orderDetailsWrapper},n.a.createElement("p",{className:o.a.priceText},m,n.a.createElement("span",{className:o.a.currencyText},n.a.createElement(u.a,{id:"grn"}))),"string"===typeof O?n.a.createElement("div",{className:o.a.pizzaSize},O):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:o.a.amountContainer},n.a.createElement("button",{className:o.a.decrementBtn,onClick:function(){return s({id:r,type:O})}},"-"),n.a.createElement("p",{className:o.a.amountNumber},b),n.a.createElement("button",{className:[o.a.decrementBtn,o.a.incrementBtn].join(" "),onClick:function(){return l({id:r,type:O})}},"+")))))}),O=function(e){var t=e.deleteProdToOrderList,r=e.incrementItemsCount,a=e.decrementItemsCount,i=Object(c.d)((function(e){return e.orders.userOrderList.productsList})),l=function(e){return e.reduce((function(e,t){return e+t.itemsCount*t.productprice}),0)}(i);return i.length>0?n.a.createElement("div",{className:m.a.orderListContainer},n.a.createElement("h2",{className:m.a.orderListTitle},n.a.createElement(u.a,{id:"order"})),n.a.createElement("ul",{className:m.a.orderList},i.map((function(e){var c=e.productId,i=e.productName,m=e.productprice,l=e.productImg,o=e.itemsCount,s=e.productIngredients,d=e.type;return n.a.createElement(b,{key:c+m,id:c,img:l,name:i,price:m,ingredients:s,itemsCount:o,onRemoveItem:t,onIncrementItem:r,onDecrementItem:a,type:d})}))),n.a.createElement("p",{className:m.a.orderListPrice},n.a.createElement("span",{className:m.a.orderListToPayText},n.a.createElement(u.a,{id:"orders.sumToPay"})),l||"0",n.a.createElement("span",{className:m.a.orderListPriceCurrency},n.a.createElement(u.a,{id:"grn"})))):n.a.createElement("h2",{className:m.a.orderListEmpty},n.a.createElement(u.a,{id:"orders.empty"}))},E=r(75),L={deleteProdToOrderList:E.a.deleteProdToOrderList,incrementItemsCount:E.a.incrementItemsCount,decrementItemsCount:E.a.decrementItemsCount},g=Object(c.b)((function(e){return{userOrderList:E.b.getUserOrder(e),local:p(e)}}),L)(O),y=r(203),N=r.n(y),C=r(43),I=r(19),f=r(94),h=r(204),v=r.n(h),F=r(44);function j(){var e=Object(c.c)(),t=Object(c.d)((function(e){return I.b.isAuthenticated(e)})),r=Object(c.d)((function(e){return e.local.lang})),i=Object(c.d)((function(e){return I.b.getUserId(e)})),m=Object(c.d)((function(e){return I.b.getUserName(e)})),l=Object(c.d)((function(e){return E.b.getUserOrder(e)})),o=Object(f.a)(l),s=Object(a.useState)(""),d=Object(C.a)(s,2),p=d[0],_=d[1],b=Object(a.useState)(""),O=Object(C.a)(b,2),L=O[0],g=O[1],y=Object(a.useState)(""),N=Object(C.a)(y,2),h=N[0],j=N[1],T=Object(a.useState)(""),x=Object(C.a)(T,2),P=x[0],z=x[1],S=Object(a.useState)(null),B=Object(C.a)(S,2),D=B[0],k=B[1];Object(a.useEffect)((function(){l.length>0&&k(null)}),[l]);return t?t&&null===D&&l.length>0?n.a.createElement("form",{className:v.a.contactForm,onSubmit:function(t){t.preventDefault();var r="".concat(L,", ").concat(h,", ").concat(P),a={creator:i,productsList:l,deliveryAddress:r,sumToPay:o,phone:p,name:m};e(E.a.addOrder({orderObject:a})),_(""),g(""),j(""),z(""),k((new Date).toLocaleTimeString().slice(0,-3))}},n.a.createElement("input",{type:"number",id:"dynamic-label-input",value:p,name:"phone",placeholder:F.a[r]["phone number"],className:v.a.input,onChange:function(e){var t=e.target.value;_(t)},required:!0}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"phone number"})),n.a.createElement("input",{type:"text",id:"dynamic-label-input",value:L,name:"city",placeholder:F.a[r].city,className:v.a.input,onChange:function(e){var t=e.target.value;g(t)}}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"city"})),n.a.createElement("input",{type:"text",id:"dynamic-label-input",value:h,name:"street",placeholder:F.a[r].street,className:v.a.input,onChange:function(e){var t=e.target.value;j(t)}}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"street"})),n.a.createElement("input",{type:"text",id:"dynamic-label-input",value:P,name:"house",placeholder:F.a[r].house,className:v.a.input,onChange:function(e){var t=e.target.value;z(t)}}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"house"})),n.a.createElement("button",{className:v.a.submit,type:"submit"},n.a.createElement(u.a,{id:"order2"}))):null!==D?n.a.createElement("h3",null,n.a.createElement(u.a,{id:"orders.appliedAt"}),D," ",n.a.createElement(u.a,{id:"orders.wait"})):n.a.createElement(n.a.Fragment,null):n.a.createElement("h3",null,n.a.createElement(u.a,{id:"notAuthenticated"}))}t.default=function(){return n.a.createElement("div",{className:N.a.OrderPageContainer},n.a.createElement("hr",{className:N.a.line}),n.a.createElement(g,null),n.a.createElement(j,null))}}}]);
//# sourceMappingURL=11.dde6495c.chunk.js.map