(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[13],{202:function(e,t,r){e.exports={secondaryHeaderFontSize:"1.5 rem",primaryHeaderFontSize:"2.25 rem",accentColor:"#FF6C00",thirdHeaderFontStyle:"1.88 rem",orderListContainer:"OrderList_orderListContainer__3P-LP",orderList:"OrderList_orderList__G3b5B",orderListPrice:"OrderList_orderListPrice__1wBKB",orderListPriceCurrency:"OrderList_orderListPriceCurrency__1moQo",orderListToPayText:"OrderList_orderListToPayText__70NiL",orderListTitle:"OrderList_orderListTitle__3B-Ea",orderListEmpty:"OrderList_orderListEmpty__1nP8P"}},203:function(e,t,r){e.exports={variables:"'../../stylesheet/vars.css'",accentColor:"#FF6C00",lightColor:"#FFF",secondaryTextFontSize:"1.25 rem",orderItemCard:"OrderListItem_orderItemCard__1LiYS",deleteButton:"OrderListItem_deleteButton__3Kwp8",itemImg:"OrderListItem_itemImg__24KoU",productName:"OrderListItem_productName__16aTI",ingredientsText:"OrderListItem_ingredientsText__2J9A7",orderDetailsWrapper:"OrderListItem_orderDetailsWrapper__asA2z",priceText:"OrderListItem_priceText__1EyFY",currencyText:"OrderListItem_currencyText__1AL9W",amountContainer:"OrderListItem_amountContainer__3AEds",decrementBtn:"OrderListItem_decrementBtn__2b5g6",incrementBtn:"OrderListItem_incrementBtn__-wxRG",amountNumber:"OrderListItem_amountNumber__FWFN_",pizzaSize:"OrderListItem_pizzaSize__1gtAR",imgContainer:"OrderListItem_imgContainer__Uu6uy",contentWrapper:"OrderListItem_contentWrapper__2L3f7"}},204:function(e,t,r){e.exports=r.p+"static/media/remove_order_item_button.56fe91b0.svg"},205:function(e,t,r){e.exports={borderColor:"rgba(39, 39, 39, 0.1)",primaryHeaderFontSize:"2.25 rem",primaryTextFontSize:"0.875 rem",list:"OrderPage_list__dJbNh",OrderPageContainer:"OrderPage_OrderPageContainer__1Sggt",line:"OrderPage_line__2uoGN"}},206:function(e,t,r){e.exports={contactForm:"OrderForm_contactForm__5SF-2",input:"OrderForm_input__2S2SI",label:"OrderForm_label__2wBAS",submit:"OrderForm_submit__2alHe"}},239:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(11),c=r(202),m=r.n(c),o=r(203),l=r.n(o),s=r(204),d=r.n(s),u=r(172),p=(r(33),function(e){return e.local.lang}),_=p,b=(r(83),function(e){var t=e.name,r=e.id,a=e.img,c=e.ingredients,m=e.price,o=e.onIncrementItem,s=e.onDecrementItem,p=e.onRemoveItem,b=e.itemsCount,O=e.type,E=Object(i.d)((function(e){return _(e)})),L=c.map((function(e){return[e.name[E]]})).join(", ");return n.a.createElement("li",{className:l.a.orderItemCard},n.a.createElement("img",{src:a,alt:t,className:l.a.itemImg}),n.a.createElement("button",{type:"button",className:l.a.deleteButton,onClick:function(){return p({id:r,type:O})}},n.a.createElement("img",{src:d.a,alt:"delete-btn"})),n.a.createElement("div",{className:l.a.contentWrapper},n.a.createElement("h5",{className:l.a.productName},t[E]),n.a.createElement("p",{className:l.a.ingredientsText},L),n.a.createElement("div",{className:l.a.orderDetailsWrapper},n.a.createElement("p",{className:l.a.priceText},m,n.a.createElement("span",{className:l.a.currencyText},n.a.createElement(u.a,{id:"grn"}))),"string"===typeof O?n.a.createElement("div",{className:l.a.pizzaSize},O):n.a.createElement(n.a.Fragment,null),n.a.createElement("div",{className:l.a.amountContainer},n.a.createElement("button",{className:l.a.decrementBtn,onClick:function(){return s({id:r,type:O})}},"-"),n.a.createElement("p",{className:l.a.amountNumber},b),n.a.createElement("button",{className:[l.a.decrementBtn,l.a.incrementBtn].join(" "),onClick:function(){return o({id:r,type:O})}},"+")))))}),O=function(e){var t=e.deleteProdToOrderList,r=e.incrementItemsCount,a=e.decrementItemsCount,c=Object(i.d)((function(e){return e.orders.userOrderList.productsList})),o=function(e){return e.reduce((function(e,t){return e+t.itemsCount*t.productprice}),0)}(c);return c.length>0?n.a.createElement("div",{className:m.a.orderListContainer},n.a.createElement("h2",{className:m.a.orderListTitle},n.a.createElement(u.a,{id:"order"})),n.a.createElement("ul",{className:m.a.orderList},c.map((function(e){var i=e.productId,c=e.productName,m=e.productprice,o=e.productImg,l=e.itemsCount,s=e.productIngredients,d=e.type;return n.a.createElement(b,{key:i+m,id:i,img:o,name:c,price:m,ingredients:s,itemsCount:l,onRemoveItem:t,onIncrementItem:r,onDecrementItem:a,type:d})}))),n.a.createElement("p",{className:m.a.orderListPrice},n.a.createElement("span",{className:m.a.orderListToPayText},n.a.createElement(u.a,{id:"orders.sumToPay"})),o||"0",n.a.createElement("span",{className:m.a.orderListPriceCurrency},n.a.createElement(u.a,{id:"grn"})))):n.a.createElement("h2",{className:m.a.orderListEmpty},n.a.createElement(u.a,{id:"orders.empty"}))},E=r(75),L={deleteProdToOrderList:E.a.deleteProdToOrderList,incrementItemsCount:E.a.incrementItemsCount,decrementItemsCount:E.a.decrementItemsCount},g=Object(i.b)((function(e){return{userOrderList:E.b.getUserOrder(e),local:p(e)}}),L)(O),y=r(205),N=r.n(y),I=r(43),f=r(19),C=r(95),h=r(206),v=r.n(h),F=r(44);function T(){var e=Object(i.c)(),t=Object(i.d)((function(e){return f.b.isAuthenticated(e)})),r=Object(i.d)((function(e){return e.local.lang})),c=Object(i.d)((function(e){return f.b.getUserId(e)})),m=Object(i.d)((function(e){return f.b.getUserName(e)})),o=Object(i.d)((function(e){return E.b.getUserOrder(e)})),l=Object(C.a)(o),s=Object(a.useState)(""),d=Object(I.a)(s,2),p=d[0],_=d[1],b=Object(a.useState)(""),O=Object(I.a)(b,2),L=O[0],g=O[1],y=Object(a.useState)(""),N=Object(I.a)(y,2),h=N[0],T=N[1],j=Object(a.useState)(""),P=Object(I.a)(j,2),x=P[0],S=P[1],z=Object(a.useState)(null),B=Object(I.a)(z,2),A=B[0],w=B[1];Object(a.useEffect)((function(){o.length>0&&w(null)}),[o]);return t?t&&null===A&&o.length>0?n.a.createElement("form",{className:v.a.contactForm,onSubmit:function(t){t.preventDefault();var r="".concat(L,", ").concat(h,", ").concat(x),a={creator:c,productsList:o,deliveryAddress:r,sumToPay:l,phone:p,name:m};e(E.a.addOrder({orderObject:a})),_(""),g(""),T(""),S(""),w((new Date).toLocaleTimeString().slice(0,-3))}},n.a.createElement("input",{type:"number",id:"dynamic-label-input",value:p,name:"phone",placeholder:F.a[r]["phone number"],className:v.a.input,onChange:function(e){var t=e.target.value;_(t)},required:!0}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"phone number"})),n.a.createElement("input",{type:"text",id:"dynamic-label-input",value:L,name:"city",placeholder:F.a[r].city,className:v.a.input,onChange:function(e){var t=e.target.value;g(t)}}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"city"})),n.a.createElement("input",{type:"text",id:"dynamic-label-input",value:h,name:"street",placeholder:F.a[r].street,className:v.a.input,onChange:function(e){var t=e.target.value;T(t)}}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"street"})),n.a.createElement("input",{type:"text",id:"dynamic-label-input",value:x,name:"house",placeholder:F.a[r].house,className:v.a.input,onChange:function(e){var t=e.target.value;S(t)}}),n.a.createElement("label",{htmlFor:"dynamic-label-input",className:v.a.label},n.a.createElement(u.a,{id:"house"})),n.a.createElement("button",{className:v.a.submit,type:"submit"},n.a.createElement(u.a,{id:"order2"}))):null!==A?n.a.createElement("h3",null,n.a.createElement(u.a,{id:"orders.appliedAt"}),A," ",n.a.createElement(u.a,{id:"orders.wait"})):n.a.createElement(n.a.Fragment,null):n.a.createElement("h3",null,n.a.createElement(u.a,{id:"notAuthenticated"}))}t.default=function(){return n.a.createElement("div",{className:N.a.OrderPageContainer},n.a.createElement("hr",{className:N.a.line}),n.a.createElement(g,null),n.a.createElement(T,null))}}}]);
//# sourceMappingURL=13.c7019efe.chunk.js.map