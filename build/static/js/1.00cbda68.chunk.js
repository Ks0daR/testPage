(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[1],{174:function(e,t,n){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngredients:function(e){return e.products.ingredients},createNewIngredient:function(e){return e.products.newIngredient},addIngredient:function(e){return e.products.ingredient}}},175:function(e,t,n){"use strict";var r=n(4),a=n(176);t.a={fetchProducts:function(){return function(e){e(r.a.productsRequest()),Object(a.g)().then((function(t){var n=t.data;return e(r.a.productsSuccess(n.products))})).catch((function(t){return e(r.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(r.a.byCategoryRequest()),Object(a.j)(e).then((function(e){var n=e.data;return t(r.a.byCategorySuccess(n.products))})).catch((function(e){return t(r.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(r.a.byIdRequest()),Object(a.i)(e).then((function(e){var n=e.data;return t(r.a.byIdSuccess(n.product))})).catch((function(e){return t(r.a.byIdError(e))}))}},sendFile:function(e){return function(t){t(r.a.sendFileRequest()),Object(a.k)(e).then((function(e){var n=e.data;return t(r.a.sendFileSuccess(n.image.file))})).catch((function(e){return t(r.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(r.a.sendProductRequest()),Object(a.l)(e).then((function(e){var n=e.data;t(r.a.sendProductSuccess(n.product)),t(r.a.clearFile())})).catch((function(e){return t(r.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(r.a.getAllIngredientsRequest()),Object(a.f)().then((function(t){var n=t.data;return e(r.a.getAllIngredientsSuccess(n.ingredients))})).catch((function(t){return e(r.a.getAllIngredientsError(t))}))}},updateProduct:function(e,t){return function(n){n(r.a.updateProductRequest()),Object(a.p)(e,t).then((function(e){var t=e.data;return n(r.a.updateProductSuccess(t))})).catch((function(e){return n(r.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(r.a.deleteProductRequest()),Object(a.c)(e).then((function(e){var n=e.data;return t(r.a.deleteProductSuccess(n))})).catch((function(e){return t(r.a.deleteProductError(e))}))}},createNewIngredient:function(e){return function(t){t(r.a.createNewIngredientsRequest()),Object(a.a)(e).then((function(){return t(r.a.createNewIngredientsSuccess())})).catch((function(e){return t(r.a.createNewIngredientsError(e))}))}}}},176:function(e,t,n){"use strict";n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return f})),n.d(t,"a",(function(){return m})),n.d(t,"l",(function(){return z})),n.d(t,"k",(function(){return b})),n.d(t,"g",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"i",(function(){return l})),n.d(t,"p",(function(){return g})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return v})),n.d(t,"n",(function(){return P})),n.d(t,"m",(function(){return E})),n.d(t,"o",(function(){return L})),n.d(t,"b",(function(){return y})),n.d(t,"h",(function(){return I}));var r=n(46),a=n.n(r),c=n(53),i=n(25),u=n.n(i),o=u.a.CancelToken.source(),s="https://evening-caverns-34846.herokuapp.com",d=function(){return u.a.get("/products")},p=function(e){return u.a.get('/products/?category="'.concat(e,'"'),{cancelToken:o.token})},l=function(e){return u.a.get("/products/".concat(e))},f=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("".concat(s,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post("".concat(s,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){return u.a.post("".concat(s,"/products"),e)},g=function(e,t){return u.a.put("/products/".concat(e),t)},_=function(e){return u.a.delete("/products/".concat(e))},b=function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.abrupt("return",u.a.post("".concat(s,"/images"),n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){return u.a.get("/developers")},v=function(){return u.a.get("/promo")},P=function(e){return u.a.post("/images",e)},E=function(e){return u.a.post("/promo",e)},L=function(e,t){return u.a.put("/promo/".concat(e),t)},y=function(e){return u.a.delete("/promo/".concat(e))},I=function(e){return u.a.get("/promo/".concat(e))}},177:function(e,t,n){"use strict";var r=n(4);n.d(t,"a",(function(){return r.a}));var a=n(175);n.d(t,"b",(function(){return a.a}));var c=n(174);n.d(t,"c",(function(){return c.a}));n(74)},202:function(e,t,n){e.exports={pizzaListCard:"PizzaListItem_pizzaListCard__1h4Rv",imageItemWrapper:"PizzaListItem_imageItemWrapper__2sYRI",imageItem:"PizzaListItem_imageItem__2lP-q",descriptionContainer:"PizzaListItem_descriptionContainer__1VGJp",sizePriceContainer:"PizzaListItem_sizePriceContainer__MKBtm",sizePriceButtonWrapper:"PizzaListItem_sizePriceButtonWrapper__g57po",sizePriceWrapper:"PizzaListItem_sizePriceWrapper__2K3rc",heading:"PizzaListItem_heading__1MGN_",ingredients:"PizzaListItem_ingredients__2dFGl",ingredientItem:"PizzaListItem_ingredientItem__vcRkv",radioButtonsList:"PizzaListItem_radioButtonsList__5eFxc",sizeLabel:"PizzaListItem_sizeLabel__2N08w",radioButton:"PizzaListItem_radioButton__3zO0v",sizeText:"PizzaListItem_sizeText__3kQDX",price:"PizzaListItem_price__2oKBT",currency:"PizzaListItem_currency__p4ytG",addCart:"PizzaListItem_addCart__27zuE"}},203:function(e,t,n){e.exports={pizzaHeading:"PizzaList_pizzaHeading__2LJoX",pizzaList:"PizzaList_pizzaList__3K3zX",pizzaListWrapper:"PizzaList_pizzaListWrapper__3bmzT"}},231:function(e,t,n){"use strict";n.r(t);var r=n(46),a=n.n(r),c=n(53),i=n(77),u=n(78),o=n(81),s=n(80),d=n(0),p=n.n(d),l=n(11),f=n(25),m=n.n(f),z=n(177),g=n(171),_=n(44),b=n(75),h=n(76),v=n(202),P=n.n(v),E=["M","L","XL"];var L=function(e){var t=Object(l.d)((function(e){return e.local.lang})),n=e._id,r=e.name,i=e.price,u=e.ingredients,o=e.images,s=Object(l.c)(),f=Object(d.useState)(["M","L","XL"]),m=Object(_.a)(f,2),z=m[0],v=m[1],L=Object(d.useState)("M"),y=Object(_.a)(L,2),I=y[0],j=y[1],O=function(){return s(b.a.addProdToOrderList(e,I))},k=p.a.createElement(g.a,{id:"order.pizzaSuccess",values:{name:r[t]}}),N=p.a.createElement(g.a,{id:"order.pizzaError",values:{name:r[t]}}),w=Object(d.useState)(!1),C=Object(_.a)(w,2),x=C[0],B=C[1],S=Object(d.useState)(k),R=Object(_.a)(S,2),W=R[0],F=R[1],T=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!x){e.next=14;break}if(!z.includes(I)){e.next=9;break}return B(!1),F(k),O(),v(z.filter((function(e){return e!==I}))),e.next=8,setTimeout((function(){return B(!0)}),10);case 8:return e.abrupt("return",e.sent);case 9:return B(!1),F(N),e.next=13,setTimeout((function(){return B(!0)}),10);case 13:return e.abrupt("return",e.sent);case 14:O(),v(z.filter((function(e){return e!==I}))),B(!0);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(e){var t=e.target.value;j(t)};return p.a.createElement("li",{key:n,className:P.a.pizzaListCard},x&&p.a.createElement(h.a,{message:W,confirm:!0,forCard:!0}),p.a.createElement("div",{className:P.a.imageItemWrapper},p.a.createElement("img",{src:o,className:P.a.imageItem,alt:"",width:"354px",height:"192px"})),p.a.createElement("div",{className:P.a.descriptionContainer},p.a.createElement("p",{className:P.a.heading},r[t]),u.length>0&&p.a.createElement("ul",{className:P.a.ingredients},u.map((function(e){return p.a.createElement("li",{key:e._id},p.a.createElement("span",{className:P.a.ingredientItem},e.name?e.name[t]:null))}))),p.a.createElement("form",null,p.a.createElement("div",{className:P.a.sizePriceContainer},p.a.createElement("ul",{className:P.a.radioButtonsList},E.map((function(e,t){return p.a.createElement("li",{key:t},p.a.createElement("label",{className:P.a.sizeLabel},p.a.createElement("input",{type:"radio",value:e,checked:e===I,onChange:q,className:P.a.radioButton,key:e}),p.a.createElement("span",{className:P.a.sizeText},e)))}))),p.a.createElement("div",{className:P.a.sizePriceButtonWrapper},p.a.createElement("div",{className:P.a.sizePriceWrapper},p.a.createElement("span",{className:P.a.price},i[I],".00"),p.a.createElement("span",{className:P.a.currency}," ",p.a.createElement(g.a,{id:"grn"}))),p.a.createElement("button",{className:P.a.addCart,type:"button",onClick:function(){return T()}},p.a.createElement(g.a,{id:"orders.chart"})))))))},y=n(47),I=n(203),j=n.n(I);function O(e){var t=e.products,n=Object(l.d)((function(e){return e.local.lang})),r=Object(l.d)(z.c.getLoading);return p.a.createElement("div",{className:j.a.pizzaListWrapper},r&&p.a.createElement(y.a,null),p.a.createElement("h2",{className:j.a.pizzaHeading},p.a.createElement(g.a,{id:"pizza.classic"})),p.a.createElement("ul",{className:j.a.pizzaList},t.filter((function(e){return"classic"===e.subcategory})).map((function(e){return p.a.createElement(L,Object.assign({},e,{key:e._id,local:n}))}))),p.a.createElement("h2",{className:j.a.pizzaHeading},p.a.createElement(g.a,{id:"pizza.special"})),p.a.createElement("ul",{className:j.a.pizzaList},t.filter((function(e){return"branded"===e.subcategory})).map((function(e){return p.a.createElement(L,Object.assign({},e,{key:e._id,local:n}))}))),p.a.createElement("h2",{className:j.a.pizzaHeading},p.a.createElement(g.a,{id:"pizza.premium"})),p.a.createElement("ul",{className:j.a.pizzaList},t.filter((function(e){return"premium"===e.subcategory})).map((function(e){return p.a.createElement(L,Object.assign({},e,{key:e._id,local:n}))}))))}var k=m.a.CancelToken.source(),N=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.props.onFetchProductPizza("pizza")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{k.cancel("Operation canceled")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return p.a.createElement(O,this.props)}}]),n}(d.Component),w={onFetchProductPizza:z.b.fetchProductsByCategory};t.default=Object(l.b)((function(e){return{products:z.c.getProducts(e)}}),w)(N)}}]);
//# sourceMappingURL=1.00cbda68.chunk.js.map