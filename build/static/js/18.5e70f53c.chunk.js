(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[18],{175:function(e,t,n){"use strict";var a=n(7),r=n(177);t.a={fetchProducts:function(){return function(e){e(a.a.productsRequest()),Object(r.f)().then((function(t){var n=t.data;return e(a.a.productsSuccess(n.products))})).catch((function(t){return e(a.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(a.a.byCategoryRequest()),Object(r.i)(e).then((function(e){var n=e.data;return t(a.a.byCategorySuccess(n.products))})).catch((function(e){return t(a.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(a.a.byIdRequest()),Object(r.h)(e).then((function(e){var n=e.data;return t(a.a.byIdSuccess(n.product))})).catch((function(e){return t(a.a.byIdErrror(e))}))}},sendFile:function(e){return function(t){t(a.a.sendFileRequest()),Object(r.j)(e).then((function(e){var n=e.data;return t(a.a.sendFileSuccess(n.image.file))})).catch((function(e){return t(a.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(a.a.sendProductRequest()),Object(r.k)(e).then((function(e){var n=e.data;return t(a.a.sendProductSuccess(n.product))})).catch((function(e){return t(a.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(a.a.getAllIngradientsRequest()),Object(r.e)().then((function(t){var n=t.data;return e(a.a.getAllIngradientsSuccess(n.ingredients))})).catch((function(t){return e(a.a.getAllIngradientsError(t))}))}},updateProduct:function(e,t){return function(n){n(a.a.updateProductRequest()),Object(r.o)(e,t).then((function(e){var t=e.data;return n(a.a.updateProductSuccess(t))})).catch((function(e){return n(a.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(a.a.deleteProductRequest()),Object(r.b)(e).then((function(e){var n=e.data;return t(a.a.deleteProductSuccess(n))})).catch((function(e){return t(a.a.deleteProductError(e))}))}},saveExistProdImg:function(e){return function(t){t(a.a.saveExistedImg(e))}}}},176:function(e,t,n){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngradients:function(e){return e.products.ingradients},fileLink:function(e){return e.products.fileLink}}},177:function(e,t,n){"use strict";n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"j",(function(){return v})),n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return d})),n.d(t,"h",(function(){return p})),n.d(t,"o",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"m",(function(){return j})),n.d(t,"l",(function(){return O})),n.d(t,"n",(function(){return y})),n.d(t,"a",(function(){return C})),n.d(t,"g",(function(){return k}));var a=n(46),r=n.n(a),u=n(53),c=n(25),i=n.n(c),o=i.a.CancelToken.source(),l="https://evening-caverns-34846.herokuapp.com",s=function(){return i.a.get("/products")},d=function(e){return i.a.get('/products/?category="'.concat(e,'"'),{cancelToken:o.token})},p=function(e){return i.a.get("/products/".concat(e))},f=function(){var e=Object(u.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.get("".concat(l,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(e){return i.a.post("".concat(l,"/products"),e)},b=function(e,t){return i.a.put("/products/".concat(e),t)},g=function(e){return i.a.delete("/products/".concat(e))},v=function(){var e=Object(u.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.abrupt("return",i.a.post("".concat(l,"/images"),n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){return i.a.get("/developers")},E=function(){return i.a.get("/promo")},j=function(e){return i.a.post("/images",e)},O=function(e){return i.a.post("/promo",e)},y=function(e,t){return i.a.put("/promo/".concat(e),t)},C=function(e){return i.a.delete("/promo/".concat(e))},k=function(e){return i.a.get("/promo/".concat(e))}},224:function(e,t,n){e.exports={createContainer:"CreateNewProduct_createContainer__3miQy",applyForm:"CreateNewProduct_applyForm__1bpSr",ingredientsContainer:"CreateNewProduct_ingredientsContainer__27jlA",ingredient:"CreateNewProduct_ingredient__3pWQa",select:"CreateNewProduct_select__6Q71N",inputLabel:"CreateNewProduct_inputLabel__2e9jl"}},245:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(46),r=n.n(a),u=n(53),c=n(45),i=n(43),o=n(0),l=n.n(o),s=n(11),d=n(224),p=n.n(d),f=n(95),m=n(176),b=n(175),g=n(76),v=n(172),h=n(44),E=function(){var e=Object(s.d)((function(e){return e.local.lang})),t="pizza",n="drinks",a="sides",d="desserts",E=[{value:t,label:h.a[e].pizza},{value:n,label:h.a[e].drinks},{value:a,label:h.a[e].sides},{value:d,label:h.a[e].desserts}],j=[{value:"classic",label:h.a[e]["pizza.classic"]},{value:"branded",label:h.a[e]["pizza.special"]},{value:"premium",label:h.a[e]["pizza.premium"]}],O=Object(o.useState)(E[0]),y=Object(i.a)(O,2),C=y[0],k=y[1],P=Object(o.useState)(j[0]),_=Object(i.a)(P,2),N=_[0],S=_[1],L=Object(o.useState)(""),w=Object(i.a)(L,2),x=w[0],z=w[1],I=Object(o.useState)(""),F=Object(i.a)(I,2),R=F[0],q=F[1],A=Object(o.useState)(""),D=Object(i.a)(A,2),Q=D[0],B=D[1],J=Object(o.useState)(""),M=Object(i.a)(J,2),T=M[0],X=M[1],W=Object(o.useState)(""),G=Object(i.a)(W,2),H=G[0],K=G[1],U=Object(o.useState)(""),V=Object(i.a)(U,2),Y=V[0],Z=V[1],$=Object(o.useState)(""),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ae=Object(o.useState)(""),re=Object(i.a)(ae,2),ue=re[0],ce=re[1],ie=Object(o.useState)([]),oe=Object(i.a)(ie,2),le=oe[0],se=oe[1],de=Object(s.d)(m.a.getIngradients),pe=Object(s.c)(),fe=Object(s.d)(m.a.fileLink),me=function(e){return pe(b.a.sendProduct(e))},be=Object(s.d)(m.a.getProducts);Object(o.useEffect)((function(){pe(b.a.getIngredients())}),[pe]);var ge=function(e){if(e.persist(),e.target.checked)return se((function(t){return[].concat(Object(c.a)(t),[e.target.value])}));se((function(t){return t.filter((function(t){return t!==e.target.value}))}))},ve=function(){var e=Object(u.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.persist(),n.preventDefault(),a={categories:C.value,currency:"\u0433\u0440\u043d",images:fe,name:{ukr:x,en:R,ru:Q},likes:0,sku:0,description:ue},C.value===t?(a.ingredients=le,a.subcategory=N.value,a.price={M:H,L:Y,XL:te}):a.price={price:T},me(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:p.a.createContainer},1===be.length&&l.a.createElement(g.a,{message:h.a[e]["product.created"],confirm:!0,forCard:!0}),l.a.createElement("form",{onSubmit:ve,className:p.a.applyForm},l.a.createElement(f.a,{className:p.a.select,value:C,onChange:k,options:E}),l.a.createElement(f.a,{className:p.a.select,value:C.value===t?N:null,onChange:S,options:j,isDisabled:C.value!==t}),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,l.a.createElement(v.a,{id:"ukr name"})),l.a.createElement("input",{type:"text",value:x,onChange:function(e){return z(e.target.value)}})),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,l.a.createElement(v.a,{id:"eng name"})),l.a.createElement("input",{type:"text",value:R,onChange:function(e){return q(e.target.value)}})),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,l.a.createElement(v.a,{id:"rus name"})),l.a.createElement("input",{type:"text",value:Q,onChange:function(e){return B(e.target.value)}})),C.value===t?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,"M"),l.a.createElement("input",{type:"text",value:H,onChange:function(e){return K(e.target.value)}})),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,"L"),l.a.createElement("input",{type:"text",value:Y,onChange:function(e){return Z(e.target.value)}})),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,"XL"),l.a.createElement("input",{type:"text",value:te,onChange:function(e){return ne(e.target.value)}}))):l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,l.a.createElement(v.a,{id:"product.price"})),l.a.createElement("input",{type:"text",value:T,onChange:function(e){return X(e.target.value)}})),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,l.a.createElement(v.a,{id:"product.description"})),l.a.createElement("input",{type:"text",value:ue,onChange:function(e){return ce(e.target.value)}})),l.a.createElement("label",{className:p.a.inputLabel},l.a.createElement("h4",null,l.a.createElement(v.a,{id:"photo"})),l.a.createElement("input",{type:"file",id:"image",onChange:function(e){var t;e.persist(),e.preventDefault(),t=e.target.files[0],pe(b.a.sendFile(t))}})),l.a.createElement("div",{className:p.a.ingredientsContainer},C.value===t&&de.map((function(t){return l.a.createElement("label",{key:t._id,className:p.a.ingredient},t.name[e],l.a.createElement("input",{onClick:ge,type:"checkbox",id:t._id,value:t._id}))}))),l.a.createElement("button",{type:"Submit"},l.a.createElement(v.a,{id:"send"}))))}}}]);
//# sourceMappingURL=18.5e70f53c.chunk.js.map