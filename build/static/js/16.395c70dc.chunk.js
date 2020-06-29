(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[16],{175:function(e,t,r){"use strict";var n=r(7),c=r(177);t.a={fetchProducts:function(){return function(e){e(n.a.productsRequest()),Object(c.f)().then((function(t){var r=t.data;return e(n.a.productsSuccess(r.products))})).catch((function(t){return e(n.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(n.a.byCategoryRequest()),Object(c.i)(e).then((function(e){var r=e.data;return t(n.a.byCategorySuccess(r.products))})).catch((function(e){return t(n.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(n.a.byIdRequest()),Object(c.h)(e).then((function(e){var r=e.data;return t(n.a.byIdSuccess(r.product))})).catch((function(e){return t(n.a.byIdErrror(e))}))}},sendFile:function(e){return function(t){t(n.a.sendFileRequest()),Object(c.j)(e).then((function(e){var r=e.data;return t(n.a.sendFileSuccess(r.image.file))})).catch((function(e){return t(n.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(n.a.sendProductRequest()),Object(c.k)(e).then((function(e){var r=e.data;return t(n.a.sendProductSuccess(r.product))})).catch((function(e){return t(n.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(n.a.getAllIngradientsRequest()),Object(c.e)().then((function(t){var r=t.data;return e(n.a.getAllIngradientsSuccess(r.ingredients))})).catch((function(t){return e(n.a.getAllIngradientsError(t))}))}},updateProduct:function(e,t){return function(r){r(n.a.updateProductRequest()),Object(c.o)(e,t).then((function(e){var t=e.data;return r(n.a.updateProductSuccess(t))})).catch((function(e){return r(n.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(n.a.deleteProductRequest()),Object(c.b)(e).then((function(e){var r=e.data;return t(n.a.deleteProductSuccess(r))})).catch((function(e){return t(n.a.deleteProductError(e))}))}},saveExistProdImg:function(e){return function(t){t(n.a.saveExistedImg(e))}}}},176:function(e,t,r){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngradients:function(e){return e.products.ingradients},fileLink:function(e){return e.products.fileLink}}},177:function(e,t,r){"use strict";r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return l})),r.d(t,"k",(function(){return m})),r.d(t,"j",(function(){return b})),r.d(t,"f",(function(){return d})),r.d(t,"i",(function(){return f})),r.d(t,"h",(function(){return p})),r.d(t,"o",(function(){return g})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return _})),r.d(t,"m",(function(){return E})),r.d(t,"l",(function(){return y})),r.d(t,"n",(function(){return O})),r.d(t,"a",(function(){return j})),r.d(t,"g",(function(){return P}));var n=r(46),c=r.n(n),s=r(53),a=r(25),u=r.n(a),o=u.a.CancelToken.source(),i="https://evening-caverns-34846.herokuapp.com",d=function(){return u.a.get("/products")},f=function(e){return u.a.get('/products/?category="'.concat(e,'"'),{cancelToken:o.token})},p=function(e){return u.a.get("/products/".concat(e))},l=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("".concat(i,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){return u.a.post("".concat(i,"/products"),e)},g=function(e,t){return u.a.put("/products/".concat(e),t)},h=function(e){return u.a.delete("/products/".concat(e))},b=function(){var e=Object(s.a)(c.a.mark((function e(t){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).append("file",t),e.abrupt("return",u.a.post("".concat(i,"/images"),r));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){return u.a.get("/developers")},_=function(){return u.a.get("/promo")},E=function(e){return u.a.post("/images",e)},y=function(e){return u.a.post("/promo",e)},O=function(e,t){return u.a.put("/promo/".concat(e),t)},j=function(e){return u.a.delete("/promo/".concat(e))},P=function(e){return u.a.get("/promo/".concat(e))}},178:function(e,t,r){"use strict";r(7);var n=r(175);r.d(t,"a",(function(){return n.a}));var c=r(176);r.d(t,"b",(function(){return c.a}));r(74)},187:function(e,t,r){e.exports={dessertConainer:"DessertsList_dessertConainer__1gc1A",dessertsHeading:"DessertsList_dessertsHeading__3fjOu",dessertList:"DessertsList_dessertList__2i3Ra",dessertItem:"DessertsList_dessertItem__Ort3C",dessertImg:"DessertsList_dessertImg__27Dt9",dessertDescription:"DessertsList_dessertDescription__e5Yyt",dessertTittle:"DessertsList_dessertTittle__2gtdv",dessertWeight:"DessertsList_dessertWeight__3pEZY",dessertOrder:"DessertsList_dessertOrder__1E1wz",dessertPriceContainer:"DessertsList_dessertPriceContainer__2DNTM",dessertPrice:"DessertsList_dessertPrice__11ivQ",dessertCurrency:"DessertsList_dessertCurrency__IpvXh",dessertButton:"DessertsList_dessertButton__1j5MS"}},242:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return z}));var n=r(46),c=r.n(n),s=r(53),a=r(77),u=r(78),o=r(80),i=r(79),d=r(0),f=r.n(d),p=r(11),l=r(172),m=r(25),g=r.n(m),h=r(178),b=r(43),v=r(75),_=r(76),E=r(187),y=r.n(E),O=y.a.dessertItem,j=y.a.dessertTittle,P=y.a.dessertWeight,k=y.a.dessertOrder,D=y.a.dessertDescription,L=y.a.dessertPriceContainer,C=y.a.dessertPrice,I=y.a.dessertCurrency,w=y.a.dessertButton,N=y.a.dessertImg,S=function(e){var t=e.name,r=e.description,n=e.price,a=e.images,u=Object(p.d)((function(e){return e.local.lang})),o=Object(p.c)(),i=f.a.createElement(l.a,{id:"order.success",values:{name:t[u]}}),m=f.a.createElement(l.a,{id:"order.error",values:{name:t[u]}}),g=Object(d.useState)(!1),h=Object(b.a)(g,2),E=h[0],y=h[1],S=Object(d.useState)(i),x=Object(b.a)(S,2),R=x[0],T=x[1],q=function(){var t=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!E){t.next=6;break}return y(!1),T(m),t.next=5,setTimeout((function(){return y(!0)}),10);case 5:return t.abrupt("return",t.sent);case 6:o(v.a.addProdToOrderList(e)),y(!0);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f.a.createElement("li",{className:O},E&&f.a.createElement(_.a,{message:R,confirm:!0,forCard:!0}),f.a.createElement("img",{src:a,alt:"",width:"280",className:N}),f.a.createElement("div",{className:D},f.a.createElement("h2",{className:j},t[u]),f.a.createElement("span",{className:P},f.a.createElement(l.a,{id:"weight"}),r,f.a.createElement(l.a,{id:"g"})),f.a.createElement("div",{className:k},f.a.createElement("div",{className:L},f.a.createElement("span",{className:C},"".concat(n.price,".00 ")),f.a.createElement("span",{className:I},f.a.createElement(l.a,{id:"grn"}))),f.a.createElement("button",{className:w,type:"submit",onClick:q},f.a.createElement(l.a,{id:"orders.chart"})))))},x=g.a.CancelToken.source(),R=y.a.dessertConainer,T=y.a.dessertsHeading,q=y.a.dessertList,F=function(e){Object(o.a)(r,e);var t=Object(i.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{this.props.onFetchProductDesserts("desserts")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{x.cancel("Operation canceled")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.products;return f.a.createElement("div",{className:R},f.a.createElement("h2",{className:T},f.a.createElement(l.a,{id:"desserts"})),f.a.createElement("ul",{className:q},e.map((function(e){return f.a.createElement(S,Object.assign({key:e._id},e))}))))}}]),r}(d.Component),B={onFetchProductDesserts:h.a.fetchProductsByCategory},z=Object(p.b)((function(e){return{products:h.b.getProducts(e)}}),B)(F)}}]);
//# sourceMappingURL=16.395c70dc.chunk.js.map