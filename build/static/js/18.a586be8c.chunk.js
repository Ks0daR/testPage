(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[18],{175:function(e,t,r){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngredients:function(e){return e.products.ingredients},createNewIngredient:function(e){return e.products.newIngredient},fileLink:function(e){return e.products.fileLink},addIngredient:function(e){return e.products.ingredient}}},176:function(e,t,r){"use strict";var n=r(4),c=r(177);t.a={fetchProducts:function(){return function(e){e(n.a.productsRequest()),Object(c.g)().then((function(t){var r=t.data;return e(n.a.productsSuccess(r.products))})).catch((function(t){return e(n.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(n.a.byCategoryRequest()),Object(c.j)(e).then((function(e){var r=e.data;return t(n.a.byCategorySuccess(r.products))})).catch((function(e){return t(n.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(n.a.byIdRequest()),Object(c.i)(e).then((function(e){var r=e.data;return t(n.a.byIdSuccess(r.product))})).catch((function(e){return t(n.a.byIdError(e))}))}},sendFile:function(e){return function(t){t(n.a.sendFileRequest()),Object(c.k)(e).then((function(e){var r=e.data;return t(n.a.sendFileSuccess(r.image.file))})).catch((function(e){return t(n.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(n.a.sendProductRequest()),Object(c.l)(e).then((function(e){var r=e.data;t(n.a.sendProductSuccess(r.product)),t(n.a.clearFile())})).catch((function(e){return t(n.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(n.a.getAllIngredientsRequest()),Object(c.f)().then((function(t){var r=t.data;return e(n.a.getAllIngredientsSuccess(r.ingredients))})).catch((function(t){return e(n.a.getAllIngredientsError(t))}))}},updateProduct:function(e,t){return function(r){r(n.a.updateProductRequest()),Object(c.p)(e,t).then((function(e){var t=e.data;return r(n.a.updateProductSuccess(t))})).catch((function(e){return r(n.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(n.a.deleteProductRequest()),Object(c.c)(e).then((function(e){var r=e.data;return t(n.a.deleteProductSuccess(r))})).catch((function(e){return t(n.a.deleteProductError(e))}))}},createNewIngredient:function(e){return function(t){t(n.a.createNewIngredientsRequest()),Object(c.a)(e).then((function(){return t(n.a.createNewIngredientsSuccess())})).catch((function(e){return t(n.a.createNewIngredientsError(e))}))}}}},177:function(e,t,r){"use strict";r.d(t,"e",(function(){return _})),r.d(t,"f",(function(){return l})),r.d(t,"a",(function(){return m})),r.d(t,"l",(function(){return g})),r.d(t,"k",(function(){return v})),r.d(t,"g",(function(){return d})),r.d(t,"j",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"p",(function(){return h})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return E})),r.d(t,"n",(function(){return j})),r.d(t,"m",(function(){return y})),r.d(t,"o",(function(){return O})),r.d(t,"b",(function(){return P})),r.d(t,"h",(function(){return k}));var n=r(46),c=r.n(n),s=r(53),a=r(25),u=r.n(a),o=u.a.CancelToken.source(),i="https://evening-caverns-34846.herokuapp.com",d=function(){return u.a.get("/products")},f=function(e){return u.a.get('/products/?category="'.concat(e,'"'),{cancelToken:o.token})},p=function(e){return u.a.get("/products/".concat(e))},l=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("".concat(i,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post("".concat(i,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return u.a.post("".concat(i,"/products"),e)},h=function(e,t){return u.a.put("/products/".concat(e),t)},b=function(e){return u.a.delete("/products/".concat(e))},v=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),e.abrupt("return",u.a.post("".concat(i,"/images"),r));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){return u.a.get("/developers")},E=function(){return u.a.get("/promo")},j=function(e){return u.a.post("/images",e)},y=function(e){return u.a.post("/promo",e)},O=function(e,t){return u.a.put("/promo/".concat(e),t)},P=function(e){return u.a.delete("/promo/".concat(e))},k=function(e){return u.a.get("/promo/".concat(e))}},178:function(e,t,r){"use strict";var n=r(4);r.d(t,"a",(function(){return n.a}));var c=r(176);r.d(t,"b",(function(){return c.a}));var s=r(175);r.d(t,"c",(function(){return s.a}));r(74)},194:function(e,t,r){e.exports={dessertConainer:"DessertsList_dessertConainer__30E_5",dessertsHeading:"DessertsList_dessertsHeading__1zJW7",dessertList:"DessertsList_dessertList__16xM-",dessertItem:"DessertsList_dessertItem__3rkep",dessertImg:"DessertsList_dessertImg__2I-DQ",dessertDescription:"DessertsList_dessertDescription__1N5fc",dessertTittle:"DessertsList_dessertTittle__tolcq",dessertWeight:"DessertsList_dessertWeight__zCGr1",dessertOrder:"DessertsList_dessertOrder__1tcjA",dessertPriceContainer:"DessertsList_dessertPriceContainer__26qCq",dessertPrice:"DessertsList_dessertPrice__2CiUv",dessertCurrency:"DessertsList_dessertCurrency__3nPLk",dessertButton:"DessertsList_dessertButton__L3FeW"}},248:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return B}));var n=r(46),c=r.n(n),s=r(53),a=r(77),u=r(78),o=r(81),i=r(80),d=r(0),f=r.n(d),p=r(11),l=r(172),m=r(25),g=r.n(m),h=r(178),b=r(43),v=r(75),_=r(76),E=r(194),j=r.n(E),y=j.a.dessertItem,O=j.a.dessertTittle,P=j.a.dessertWeight,k=j.a.dessertOrder,L=j.a.dessertDescription,w=j.a.dessertPriceContainer,I=j.a.dessertPrice,C=j.a.dessertCurrency,D=j.a.dessertButton,N=j.a.dessertImg,q=function(e){var t=e.name,r=e.description,n=e.price,a=e.images,u=Object(p.d)((function(e){return e.local.lang})),o=Object(p.c)(),i=f.a.createElement(l.a,{id:"order.success",values:{name:t[u]}}),m=f.a.createElement(l.a,{id:"order.error",values:{name:t[u]}}),g=Object(d.useState)(!1),h=Object(b.a)(g,2),E=h[0],j=h[1],q=Object(d.useState)(i),S=Object(b.a)(q,2),x=S[0],F=S[1],R=function(){var t=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!E){t.next=6;break}return j(!1),F(m),t.next=5,setTimeout((function(){return j(!0)}),10);case 5:return t.abrupt("return",t.sent);case 6:o(v.a.addProdToOrderList(e)),j(!0);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f.a.createElement("li",{className:y},E&&f.a.createElement(_.a,{message:x,confirm:!0,forCard:!0}),f.a.createElement("img",{src:a,alt:"",width:"280",className:N}),f.a.createElement("div",{className:L},f.a.createElement("h2",{className:O},t[u]),f.a.createElement("span",{className:P},f.a.createElement(l.a,{id:"weight"}),r,f.a.createElement(l.a,{id:"g"})),f.a.createElement("div",{className:k},f.a.createElement("div",{className:w},f.a.createElement("span",{className:I},"".concat(n.price,".00 ")),f.a.createElement("span",{className:C},f.a.createElement(l.a,{id:"grn"}))),f.a.createElement("button",{className:D,type:"submit",onClick:R},f.a.createElement(l.a,{id:"orders.chart"})))))},S=g.a.CancelToken.source(),x=j.a.dessertConainer,F=j.a.dessertsHeading,R=j.a.dessertList,T=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.props.onFetchProductDesserts("desserts")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{S.cancel("Operation canceled")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.products;return f.a.createElement("div",{className:x},f.a.createElement("h2",{className:F},f.a.createElement(l.a,{id:"desserts"})),f.a.createElement("ul",{className:R},e.map((function(e){return f.a.createElement(q,Object.assign({key:e._id},e))}))))}}]),r}(d.Component),z={onFetchProductDesserts:h.b.fetchProductsByCategory},B=Object(p.b)((function(e){return{products:h.c.getProducts(e)}}),z)(T)}}]);
//# sourceMappingURL=18.a586be8c.chunk.js.map