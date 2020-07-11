(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[11],{175:function(e,t,n){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngredients:function(e){return e.products.ingredients},createNewIngredient:function(e){return e.products.newIngredient},addIngredient:function(e){return e.products.ingredient}}},176:function(e,t,n){"use strict";var r=n(4),c=n(177);t.a={fetchProducts:function(){return function(e){e(r.a.productsRequest()),Object(c.g)().then((function(t){var n=t.data;return e(r.a.productsSuccess(n.products))})).catch((function(t){return e(r.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(r.a.byCategoryRequest()),Object(c.j)(e).then((function(e){var n=e.data;return t(r.a.byCategorySuccess(n.products))})).catch((function(e){return t(r.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(r.a.byIdRequest()),Object(c.i)(e).then((function(e){var n=e.data;return t(r.a.byIdSuccess(n.product))})).catch((function(e){return t(r.a.byIdError(e))}))}},sendFile:function(e){return function(t){t(r.a.sendFileRequest()),Object(c.k)(e).then((function(e){var n=e.data;return t(r.a.sendFileSuccess(n.image.file))})).catch((function(e){return t(r.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(r.a.sendProductRequest()),Object(c.l)(e).then((function(e){var n=e.data;t(r.a.sendProductSuccess(n.product)),t(r.a.clearFile())})).catch((function(e){return t(r.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(r.a.getAllIngredientsRequest()),Object(c.f)().then((function(t){var n=t.data;return e(r.a.getAllIngredientsSuccess(n.ingredients))})).catch((function(t){return e(r.a.getAllIngredientsError(t))}))}},updateProduct:function(e,t){return function(n){n(r.a.updateProductRequest()),Object(c.p)(e,t).then((function(e){var t=e.data;return n(r.a.updateProductSuccess(t))})).catch((function(e){return n(r.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(r.a.deleteProductRequest()),Object(c.c)(e).then((function(e){var n=e.data;return t(r.a.deleteProductSuccess(n))})).catch((function(e){return t(r.a.deleteProductError(e))}))}},createNewIngredient:function(e){return function(t){t(r.a.createNewIngredientsRequest()),Object(c.a)(e).then((function(){return t(r.a.createNewIngredientsSuccess())})).catch((function(e){return t(r.a.createNewIngredientsError(e))}))}}}},177:function(e,t,n){"use strict";n.d(t,"e",(function(){return I})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return l})),n.d(t,"l",(function(){return g})),n.d(t,"k",(function(){return b})),n.d(t,"g",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return m})),n.d(t,"p",(function(){return _})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"n",(function(){return k})),n.d(t,"m",(function(){return y})),n.d(t,"o",(function(){return E})),n.d(t,"b",(function(){return j})),n.d(t,"h",(function(){return O}));var r=n(46),c=n.n(r),a=n(53),u=n(25),o=n.n(u),i=o.a.CancelToken.source(),s="https://evening-caverns-34846.herokuapp.com",d=function(){return o.a.get("/products")},f=function(e){return o.a.get('/products/?category="'.concat(e,'"'),{cancelToken:i.token})},m=function(e){return o.a.get("/products/".concat(e))},p=function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get("".concat(s,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.post("".concat(s,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return o.a.post("".concat(s,"/products"),e)},_=function(e,t){return o.a.put("/products/".concat(e),t)},h=function(e){return o.a.delete("/products/".concat(e))},b=function(){var e=Object(a.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.abrupt("return",o.a.post("".concat(s,"/images"),n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){return o.a.get("/developers")},v=function(){return o.a.get("/promo")},k=function(e){return o.a.post("/images",e)},y=function(e){return o.a.post("/promo",e)},E=function(e,t){return o.a.put("/promo/".concat(e),t)},j=function(e){return o.a.delete("/promo/".concat(e))},O=function(e){return o.a.get("/promo/".concat(e))}},178:function(e,t,n){"use strict";var r=n(4);n.d(t,"a",(function(){return r.a}));var c=n(176);n.d(t,"b",(function(){return c.a}));var a=n(175);n.d(t,"c",(function(){return a.a}));n(74)},182:function(e,t,n){e.exports={colors:'"../../stylesheet/vars.css"',accentColor:"#FF6C00",primaryColor:"#272727",secondaryBackgroundColor:"rgba(39, 39, 39, 0.2)",lightColor:"#FFF",primaryBackgroundColor:"rgba(39, 39, 39, 0.8)",menuItem:"drinkListItem_menuItem__2SLFd",menuItem_imageBlock:"drinkListItem_menuItem_imageBlock__36u3Z",menuItem_img:"drinkListItem_menuItem_img__10UE0",menuItem_content:"drinkListItem_menuItem_content__QgfFi",menuItem_headline:"drinkListItem_menuItem_headline__18h0n",menuItem_size:"drinkListItem_menuItem_size__LTygZ",menuItem_wrapper:"drinkListItem_menuItem_wrapper__3BBI_",currency:"drinkListItem_currency__1vYUG",menuItem_price:"drinkListItem_menuItem_price__1NDE4",button:"drinkListItem_button__27NUC"}},183:function(e,t,n){e.exports={colors:'"../../stylesheet/vars.css"',primaryColor:"#272727",containerList:"drinkList_containerList__2ENKW",menu:"drinkList_menu__2t04p",title:"drinkList_title__H8OkR"}},247:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r=n(46),c=n.n(r),a=n(53),u=n(77),o=n(78),i=n(81),s=n(80),d=n(0),f=n.n(d),m=n(11),p=n(172),l=n(47),g=n(25),_=n.n(g),h=n(178),b=n(44),I=n(76),v=n(75),k=n(182),y=n.n(k),E=function(e){var t=e.name,n=e.description,r=e.price,u=e.images,o=Object(m.d)((function(e){return e.local.lang})),i=f.a.createElement(p.a,{id:"order.success",values:{name:t[o]}}),s=f.a.createElement(p.a,{id:"order.error",values:{name:t[o]}}),l=Object(m.c)(),g=Object(d.useState)(!1),_=Object(b.a)(g,2),h=_[0],k=_[1],E=Object(d.useState)(i),j=Object(b.a)(E,2),O=j[0],w=j[1],L=function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=6;break}return k(!1),w(s),t.next=5,setTimeout((function(){return k(!0)}),10);case 5:return t.abrupt("return",t.sent);case 6:l(v.a.addProdToOrderList(e)),k(!0);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f.a.createElement("li",{className:y.a.menuItem},h&&f.a.createElement(I.a,{message:O,confirm:!0,forCard:!0}),f.a.createElement("div",{className:y.a.menuItem_imageBlock},f.a.createElement("img",{src:u,alt:t[o],className:y.a.menuItem_img})),f.a.createElement("div",{className:y.a.menuItem_content},f.a.createElement("h2",{className:y.a.menuItem_headline},t[o]),f.a.createElement("p",{className:y.a.menuItem_size},f.a.createElement(p.a,{id:"weight"}),n,f.a.createElement(p.a,{id:"g"})),f.a.createElement("div",{className:y.a.menuItem_wrapper},f.a.createElement("p",{className:y.a.menuItem_price},"".concat(r.price,".00"),f.a.createElement("span",{className:y.a.currency},f.a.createElement(p.a,{id:"grn"}))),f.a.createElement("button",{className:y.a.button,type:"button",onClick:function(){return L()}},f.a.createElement(p.a,{id:"orders.chart"})))))},j=n(183),O=n.n(j),w=_.a.CancelToken.source(),L=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.props.onFetchProductSides("sides")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(a.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{w.cancel("Operation canceled")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.products,n=e.isLoading;return f.a.createElement("div",{className:O.a.containerList},n&&f.a.createElement(l.a,null),f.a.createElement("h1",{className:O.a.title},f.a.createElement(p.a,{id:"sides"})),f.a.createElement("ul",{className:O.a.menu},t.filter((function(e){return"sides"===e.categories})).map((function(e){return f.a.createElement(E,Object.assign({key:e._id},e))}))))}}]),n}(d.Component),N={onFetchProductSides:h.b.fetchProductsByCategory},P=Object(m.b)((function(e){return{products:h.c.getProducts(e),isLoading:h.c.getLoading(e)}}),N)(L)}}]);
//# sourceMappingURL=11.2476186e.chunk.js.map