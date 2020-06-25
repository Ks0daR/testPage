(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[4,7],{174:function(e,t,a){"use strict";var r=a(7),n=a(176);t.a={fetchProducts:function(){return function(e){e(r.a.productsRequest()),Object(n.d)().then((function(t){var a=t.data;return e(r.a.productsSuccess(a.products))})).catch((function(t){return e(r.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(r.a.byCategoryRequest()),Object(n.f)(e).then((function(e){var a=e.data;return t(r.a.byCategorySuccess(a.products))})).catch((function(e){return t(r.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(r.a.byIdRequest()),Object(n.e)(e).then((function(e){var a=e.data;return t(r.a.byIdSuccess(a.product))})).catch((function(e){return t(r.a.byIdErrror(e))}))}},sendFile:function(e){return function(t){t(r.a.sendFileRequest()),Object(n.g)(e).then((function(e){var a=e.data;return t(r.a.sendFileSuccess(a.image.file))})).catch((function(e){return t(r.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(r.a.sendProductRequest()),Object(n.h)(e).then((function(e){var a=e.data;return t(r.a.sendProductSuccess(a.product))})).catch((function(e){return t(r.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(r.a.getAllIngradientsRequest()),Object(n.c)().then((function(t){var a=t.data;return e(r.a.getAllIngradientsSuccess(a.ingredients))})).catch((function(t){return e(r.a.getAllIngradientsError(t))}))}},updateProduct:function(e,t){return function(a){a(r.a.updateProductRequest()),Object(n.i)(e,t).then((function(e){return a(r.a.updateProductSuccess(e))})).catch((function(e){return a(r.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(r.a.deleteProductRequest()),Object(n.a)(e).then((function(e){var a=e.data;return t(r.a.deleteProductSuccess(a))})).catch((function(e){return t(r.a.deleteProductError(e))}))}}}},175:function(e,t,a){"use strict";t.a={getLoading:function(e){return e.products.loading},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngradients:function(e){return e.products.ingradients},fileLink:function(e){return e.products.fileLink}}},176:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return m})),a.d(t,"h",(function(){return p})),a.d(t,"g",(function(){return _})),a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return d})),a.d(t,"e",(function(){return l})),a.d(t,"i",(function(){return f})),a.d(t,"a",(function(){return z}));var r=a(45),n=a.n(r),c=a(53),i=a(25),u=a.n(i),s="https://evening-caverns-34846.herokuapp.com",o=function(){return u.a.get("/products")},d=function(e){return u.a.get('/products/?category="'.concat(e,'"'))},l=function(e){return u.a.get("/products/".concat(e))},m=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("".concat(s,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(e){return u.a.post("".concat(s,"/products"),e)},f=function(e,t){return u.a.put("/products/".concat(e),t)},z=function(e){return u.a.delete("/products/".concat(e))},_=function(){var e=Object(c.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),e.abrupt("return",u.a.post("".concat(s,"/images"),a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){return u.a.get("/developers")}},177:function(e,t,a){"use strict";a(7);var r=a(174);a.d(t,"a",(function(){return r.a}));var n=a(175);a.d(t,"b",(function(){return n.a}));a(74)},178:function(e,t,a){e.exports={pizzaListCard:"PizzaListItem_pizzaListCard__1h4Rv",imageItemWrapper:"PizzaListItem_imageItemWrapper__2sYRI",imageItem:"PizzaListItem_imageItem__2lP-q",descriptionContainer:"PizzaListItem_descriptionContainer__1VGJp",sizePriceContainer:"PizzaListItem_sizePriceContainer__MKBtm",sizePriceButtonWrapper:"PizzaListItem_sizePriceButtonWrapper__g57po",sizePriceWrapper:"PizzaListItem_sizePriceWrapper__2K3rc",heading:"PizzaListItem_heading__1MGN_",ingredients:"PizzaListItem_ingredients__2dFGl",ingredientItem:"PizzaListItem_ingredientItem__vcRkv",radioButtonsList:"PizzaListItem_radioButtonsList__5eFxc",sizeLabel:"PizzaListItem_sizeLabel__2N08w",radioButton:"PizzaListItem_radioButton__3zO0v",sizeText:"PizzaListItem_sizeText__3kQDX",price:"PizzaListItem_price__2oKBT",currency:"PizzaListItem_currency__p4ytG",addCart:"PizzaListItem_addCart__27zuE"}},179:function(e,t,a){e.exports={pizzaHeading:"PizzaList_pizzaHeading__2LJoX",pizzaList:"PizzaList_pizzaList__3K3zX",pizzaListWrapper:"PizzaList_pizzaListWrapper__3bmzT"}},189:function(e,t,a){"use strict";a.r(t);var r=a(77),n=a(78),c=a(80),i=a(79),u=a(0),s=a.n(u),o=a(11),d=a(171),l=a(45),m=a.n(l),p=a(53),f=a(43),z=a(75),_=a(76),g=a(178),E=a.n(g),b=["M","L","XL"];var P=function(e){var t=Object(o.d)((function(e){return e.local.lang})),a=e._id,r=e.name,n=e.price,c=e.ingredients,i=e.images,l=Object(o.c)(),g=Object(u.useState)(["M","L","XL"]),P=Object(f.a)(g,2),v=P[0],h=P[1],L=Object(u.useState)("M"),y=Object(f.a)(L,2),O=y[0],I=y[1],j=function(){return l(z.a.addProdToOrderList(e,O))},N=s.a.createElement(d.a,{id:"order.pizzaSuccess",values:{name:r[t]}}),k=s.a.createElement(d.a,{id:"order.pizzaError",values:{name:r[t]}}),C=Object(u.useState)(!1),S=Object(f.a)(C,2),x=S[0],W=S[1],B=Object(u.useState)(N),R=Object(f.a)(B,2),w=R[0],F=R[1],q=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=14;break}if(!v.includes(O)){e.next=9;break}return W(!1),F(N),j(),h(v.filter((function(e){return e!==O}))),e.next=8,setTimeout((function(){return W(!0)}),10);case 8:return e.abrupt("return",e.sent);case 9:return W(!1),F(k),e.next=13,setTimeout((function(){return W(!0)}),10);case 13:return e.abrupt("return",e.sent);case 14:j(),h(v.filter((function(e){return e!==O}))),W(!0);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(e){var t=e.target.value;I(t)};return s.a.createElement("li",{key:a,className:E.a.pizzaListCard},x&&s.a.createElement(_.a,{message:w,confirm:!0,forCard:!0}),s.a.createElement("div",{className:E.a.imageItemWrapper},s.a.createElement("img",{src:i,className:E.a.imageItem,alt:"",width:"354px",height:"192px"})),s.a.createElement("div",{className:E.a.descriptionContainer},s.a.createElement("p",{className:E.a.heading},r[t]),s.a.createElement("ul",{className:E.a.ingredients},c.map((function(e){return s.a.createElement("li",{key:e._id},s.a.createElement("span",{className:E.a.ingredientItem},e.name[t]))}))),s.a.createElement("form",null,s.a.createElement("div",{className:E.a.sizePriceContainer},s.a.createElement("ul",{className:E.a.radioButtonsList},b.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("label",{className:E.a.sizeLabel},s.a.createElement("input",{type:"radio",value:e,checked:e===O,onChange:D,className:E.a.radioButton,key:e}),s.a.createElement("span",{className:E.a.sizeText},e)))}))),s.a.createElement("div",{className:E.a.sizePriceButtonWrapper},s.a.createElement("div",{className:E.a.sizePriceWrapper},s.a.createElement("span",{className:E.a.price},n[O],".00"),s.a.createElement("span",{className:E.a.currency}," ",s.a.createElement(d.a,{id:"grn"}))),s.a.createElement("button",{className:E.a.addCart,type:"button",onClick:function(){return q()}},s.a.createElement(d.a,{id:"orders.chart"})))))))},v=a(179),h=a.n(v);function L(e){var t=e.products,a=Object(o.d)((function(e){return e.local.lang}));return s.a.createElement("div",{className:h.a.pizzaListWrapper},s.a.createElement("h2",{className:h.a.pizzaHeading},s.a.createElement(d.a,{id:"pizza.classic"})),s.a.createElement("ul",{className:h.a.pizzaList},t.map((function(e,t){if("classic"===e.subcategory)return s.a.createElement(P,Object.assign({},e,{key:t,local:a}))}))),s.a.createElement("h2",{className:h.a.pizzaHeading},s.a.createElement(d.a,{id:"pizza.special"})),s.a.createElement("ul",{className:h.a.pizzaList},t.map((function(e,t){if("branded"===e.subcategory)return s.a.createElement(P,Object.assign({},e,{key:t,local:a}))}))),s.a.createElement("h2",{className:h.a.pizzaHeading},s.a.createElement(d.a,{id:"pizza.premium"})),s.a.createElement("ul",{className:h.a.pizzaList},t.map((function(e,t){if("premium"===e.subcategory)return s.a.createElement(P,Object.assign({},e,{key:t,local:a}))}))))}var y=a(177),O=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchProductPizza("pizza")}},{key:"render",value:function(){return s.a.createElement(L,this.props)}}]),a}(u.Component),I={onFetchProductPizza:y.a.fetchProductsByCategory};t.default=Object(o.b)((function(e){return{products:y.b.getProducts(e)}}),I)(O)},191:function(e,t,a){e.exports={sliderWrapper:"Slider_sliderWrapper__2qRdx",sliderOverlay:"Slider_sliderOverlay__3ZeEZ",sliderImg:"Slider_sliderImg__2o_Ji",sliderContent:"Slider_sliderContent__h2GD8",slidePromoName:"Slider_slidePromoName__2o7JF",sliderPromoDescription:"Slider_sliderPromoDescription__31iaj"}},195:function(e,t,a){e.exports={productWrapper:"ProductContainer_productWrapper__1DnEx"}},233:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return P}));var r=a(43),n=a(0),c=a.n(n),i=a(25),u=a.n(i),s=a(12),o=a(11),d=a(229),l=a(8),m=a(191),p=a.n(m);function f(e){var t=Object(o.d)((function(e){return e.local.lang}));return c.a.createElement(d.a,{controls:!1},e.items.map((function(e){var a=e._id,r=e.images,n=e.title,i=e.description;return c.a.createElement(d.a.Item,{key:a,images:r,title:n[t],description:i[t]},c.a.createElement(s.c,{to:l.a.PROMO},c.a.createElement("div",{className:p.a.sliderWrapper},c.a.createElement("img",{className:p.a.sliderImg+" d-block w-100 h-100",src:r,alt:""}),c.a.createElement("div",{className:p.a.sliderOverlay},c.a.createElement("div",{className:p.a.sliderContent},c.a.createElement("p",{className:p.a.sliderPromoDescription},i[t]),c.a.createElement("h2",{className:p.a.slidePromoName},n[t]))))))})))}var z=a(46),_=a(195),g=a.n(_),E=function(e){var t=e.children;return c.a.createElement("div",{className:g.a.productWrapper},t)},b=(a(196),a(189)),P=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){u.a.get("/promo").then((function(e){var t=e.data;return i(t.promo)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{items:a}),c.a.createElement(n.Suspense,{fallback:c.a.createElement(z.a,null)},c.a.createElement(E,null,c.a.createElement(b.default,null))))}}}]);
//# sourceMappingURL=4.35132cbd.chunk.js.map