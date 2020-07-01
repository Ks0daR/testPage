(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[18],{175:function(e,t,n){"use strict";var a=n(6),r=n(177);t.a={fetchProducts:function(){return function(e){e(a.a.productsRequest()),Object(r.g)().then((function(t){var n=t.data;return e(a.a.productsSuccess(n.products))})).catch((function(t){return e(a.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(a.a.byCategoryRequest()),Object(r.j)(e).then((function(e){var n=e.data;return t(a.a.byCategorySuccess(n.products))})).catch((function(e){return t(a.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(a.a.byIdRequest()),Object(r.i)(e).then((function(e){var n=e.data;return t(a.a.byIdSuccess(n.product))})).catch((function(e){return t(a.a.byIdError(e))}))}},sendFile:function(e){return function(t){t(a.a.sendFileRequest()),Object(r.k)(e).then((function(e){var n=e.data;return t(a.a.sendFileSuccess(n.image.file))})).catch((function(e){return t(a.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(a.a.sendProductRequest()),Object(r.l)(e).then((function(e){var n=e.data;return t(a.a.sendProductSuccess(n.product))})).catch((function(e){return t(a.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(a.a.getAllIngredientsRequest()),Object(r.f)().then((function(t){var n=t.data;return e(a.a.getAllIngredientsSuccess(n.ingredients))})).catch((function(t){return e(a.a.getAllIngredientsError(t))}))}},updateProduct:function(e,t){return function(n){n(a.a.updateProductRequest()),Object(r.p)(e,t).then((function(e){var t=e.data;return n(a.a.updateProductSuccess(t))})).catch((function(e){return n(a.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(a.a.deleteProductRequest()),Object(r.c)(e).then((function(e){var n=e.data;return t(a.a.deleteProductSuccess(n))})).catch((function(e){return t(a.a.deleteProductError(e))}))}},createNewIngredient:function(e){return function(t){t(a.a.createNewIngredientsRequest()),Object(r.a)(e).then((function(){return t(a.a.createNewIngredientsSuccess())})).catch((function(e){return t(a.a.createNewIngredientsError(e))}))}}}},176:function(e,t,n){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngredients:function(e){return e.products.ingredients},createNewIngredient:function(e){return e.products.newIngredient},fileLink:function(e){return e.products.fileLink},addIngredient:function(e){return e.products.ingredient}}},177:function(e,t,n){"use strict";n.d(t,"e",(function(){return C})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"l",(function(){return f})),n.d(t,"k",(function(){return E})),n.d(t,"g",(function(){return s})),n.d(t,"j",(function(){return l})),n.d(t,"i",(function(){return _})),n.d(t,"p",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"n",(function(){return h})),n.d(t,"m",(function(){return N})),n.d(t,"o",(function(){return L})),n.d(t,"b",(function(){return I})),n.d(t,"h",(function(){return j}));var a=n(46),r=n.n(a),c=n(53),i=n(25),u=n.n(i),o=u.a.CancelToken.source(),d="https://evening-caverns-34846.herokuapp.com",s=function(){return u.a.get("/products")},l=function(e){return u.a.get('/products/?category="'.concat(e,'"'),{cancelToken:o.token})},_=function(e){return u.a.get("/products/".concat(e))},p=function(){var e=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("".concat(d,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post("".concat(d,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return u.a.post("".concat(d,"/products"),e)},g=function(e,t){return u.a.put("/products/".concat(e),t)},b=function(e){return u.a.delete("/products/".concat(e))},E=function(){var e=Object(c.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.abrupt("return",u.a.post("".concat(d,"/images"),n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){return u.a.get("/developers")},v=function(){return u.a.get("/promo")},h=function(e){return u.a.post("/images",e)},N=function(e){return u.a.post("/promo",e)},L=function(e,t){return u.a.put("/promo/".concat(e),t)},I=function(e){return u.a.delete("/promo/".concat(e))},j=function(e){return u.a.get("/promo/".concat(e))}},187:function(e,t,n){e.exports={container:"adminUpdateListItemEdit_container__1UZEx",editCard:"adminUpdateListItemEdit_editCard__3wMLf",editCard__image:"adminUpdateListItemEdit_editCard__image__1S-TF",editForm:"adminUpdateListItemEdit_editForm__2N10V",editCard__title:"adminUpdateListItemEdit_editCard__title__2IwRu",editCard__titleName:"adminUpdateListItemEdit_editCard__titleName__18hZa",editCard__titleLang:"adminUpdateListItemEdit_editCard__titleLang__1n8uS",editForm__inputLang:"adminUpdateListItemEdit_editForm__inputLang__1GqpP",editCard__photoLabel:"adminUpdateListItemEdit_editCard__photoLabel__1r1BC",editForm__newIngredient:"adminUpdateListItemEdit_editForm__newIngredient__2ysnq",editForm__photo:"adminUpdateListItemEdit_editForm__photo__3681v",editForm__photoBtn:"adminUpdateListItemEdit_editForm__photoBtn__17eVj",editForm__inputCategory:"adminUpdateListItemEdit_editForm__inputCategory__Q5FO7",editForm__price:"adminUpdateListItemEdit_editForm__price__1lh-2",editForm__priceInput:"adminUpdateListItemEdit_editForm__priceInput__1JbGK",editForm__inputSinglePrice:"adminUpdateListItemEdit_editForm__inputSinglePrice__hQZDx",editForm__priceTitle:"adminUpdateListItemEdit_editForm__priceTitle__-cift",editForm__inputDescription:"adminUpdateListItemEdit_editForm__inputDescription__1DXGD",editForm__btnSubmit:"adminUpdateListItemEdit_editForm__btnSubmit__iNCCw"}},227:function(e,t,n){e.exports={createContainer:"CreateNewProduct_createContainer__QLD-v",applyForm:"CreateNewProduct_applyForm__N7yWR",ingredientsContainer:"CreateNewProduct_ingredientsContainer__9g0mv",ingredient:"CreateNewProduct_ingredient__2JCkI",select:"CreateNewProduct_select__1CPbU",inputLabel:"CreateNewProduct_inputLabel__1UtZe",editCard__title:"CreateNewProduct_editCard__title__1unn4",editCard__titleName:"CreateNewProduct_editCard__titleName__2MMbd",editCard__titleLang:"CreateNewProduct_editCard__titleLang__1mE74",title:"CreateNewProduct_title__1Y9O1",editForm__inputLang:"CreateNewProduct_editForm__inputLang__8yJas",btn:"CreateNewProduct_btn__RwOxW",inputImg:"CreateNewProduct_inputImg__1LqFh",chooseVar:"CreateNewProduct_chooseVar__JdsX5",descriptionInput:"CreateNewProduct_descriptionInput__36YoH"}},248:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n(46),r=n.n(a),c=n(53),i=n(45),u=n(43),o=n(0),d=n.n(o),s=n(11),l=n(227),_=n.n(l),p=n(82),m=n(176),f=n(175),g=n(76),b=n(172),E=n(44),C=n(187),v=n.n(C),h=function(){var e=Object(s.d)((function(e){return e.local.lang})),t="pizza",n="drinks",a="sides",l="desserts",C=[{value:t,label:E.a[e].pizza},{value:n,label:E.a[e].drinks},{value:a,label:E.a[e].sides},{value:l,label:E.a[e].desserts}],h=[{value:"classic",label:E.a[e]["pizza.classic"]},{value:"branded",label:E.a[e]["pizza.special"]},{value:"premium",label:E.a[e]["pizza.premium"]}],N=Object(o.useState)(C[0]),L=Object(u.a)(N,2),I=L[0],j=L[1],F=Object(o.useState)(h[0]),O=Object(u.a)(F,2),y=O[0],w=O[1],P=Object(o.useState)(""),S=Object(u.a)(P,2),k=S[0],U=S[1],x=Object(o.useState)(""),z=Object(u.a)(x,2),R=z[0],q=z[1],D=Object(o.useState)(""),J=Object(u.a)(D,2),B=J[0],M=J[1],T=Object(o.useState)(""),V=Object(u.a)(T,2),X=V[0],Z=V[1],A=Object(o.useState)(""),G=Object(u.a)(A,2),Q=G[0],W=G[1],Y=Object(o.useState)(""),H=Object(u.a)(Y,2),K=H[0],$=H[1],ee=Object(o.useState)(""),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],re=Object(o.useState)(""),ce=Object(u.a)(re,2),ie=ce[0],ue=ce[1],oe=Object(o.useState)([]),de=Object(u.a)(oe,2),se=de[0],le=de[1],_e=Object(s.d)(m.a.getIngredients),pe=Object(s.c)(),me=Object(s.d)(m.a.fileLink),fe=function(e){return pe(f.a.sendProduct(e))},ge=Object(s.d)(m.a.getProducts);Object(o.useEffect)((function(){pe(f.a.getIngredients())}),[pe]);var be=function(e){if(e.persist(),e.target.checked)return le((function(t){return[].concat(Object(i.a)(t),[e.target.value])}));le((function(t){return t.filter((function(t){return t!==e.target.value}))}))},Ee=function(){var e=Object(c.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.persist(),n.preventDefault(),a={categories:I.value,currency:"\u0433\u0440\u043d",images:me,name:{ukr:k,en:R,ru:B}},I.value===t?(a.ingredients=se,a.subcategory=y.value,a.price={M:Q,L:K,XL:ne}):(a.price={price:X},a.description=ie),fe(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return d.a.createElement("div",{className:_.a.createContainer},1===ge.length&&d.a.createElement(g.a,{message:E.a[e]["product.created"],confirm:!0,forCard:!0}),d.a.createElement("form",{onSubmit:Ee,className:_.a.applyForm},d.a.createElement(p.a,{className:_.a.select,value:I,onChange:j,options:C}),d.a.createElement(p.a,{className:_.a.select,value:I.value===t?y:null,onChange:w,options:h,isDisabled:I.value!==t}),d.a.createElement("p",{className:_.a.title},d.a.createElement(b.a,{id:"product.name"})),d.a.createElement("div",{className:_.a.editCard__titleName},d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},d.a.createElement(b.a,{id:"rus name"})),d.a.createElement("input",{type:"text",value:B,onChange:function(e){return M(e.target.value)},className:_.a.editForm__inputLang}),d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},d.a.createElement(b.a,{id:"eng name"})),d.a.createElement("input",{type:"text",value:R,onChange:function(e){return q(e.target.value)},className:_.a.editForm__inputLang}),d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},d.a.createElement(b.a,{id:"ukr name"})),d.a.createElement("input",{type:"text",value:k,onChange:function(e){return U(e.target.value)},className:_.a.editForm__inputLang})),d.a.createElement("p",{className:_.a.title},d.a.createElement(b.a,{id:"product.price"})),I.value===t?d.a.createElement("div",{className:_.a.editCard__titleName},d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},"M"),d.a.createElement("input",{type:"text",value:Q,onChange:function(e){return W(e.target.value)},className:_.a.editForm__inputLang}),d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},"L"),d.a.createElement("input",{type:"text",value:K,onChange:function(e){return $(e.target.value)},className:_.a.editForm__inputLang}),d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},"XL"),d.a.createElement("input",{type:"text",value:ne,onChange:function(e){return ae(e.target.value)},className:_.a.editForm__inputLang})):d.a.createElement("div",{className:_.a.editCard__titleName},d.a.createElement("p",{className:"".concat(v.a.editCard__titleLang," ").concat(_.a.title)},d.a.createElement(b.a,{id:"product.price"})),d.a.createElement("input",{type:"text",value:X,onChange:function(e){return Z(e.target.value)},className:_.a.editForm__inputLang})),I.value!==t&&d.a.createElement("label",{className:_.a.inputLabel},d.a.createElement("h4",{className:_.a.title},d.a.createElement(b.a,{id:"product.description"})),d.a.createElement("input",{type:"text",value:ie,onChange:function(e){return ue(e.target.value)},className:_.a.descriptionInput})),d.a.createElement("label",{className:"".concat(_.a.inputLabel," ").concat(_.a.btn)},d.a.createElement("h4",{className:_.a.title},d.a.createElement(b.a,{id:"photo"})),d.a.createElement("input",{type:"file",id:"image",onChange:function(e){var t;e.persist(),e.preventDefault(),t=e.target.files[0],pe(f.a.sendFile(t))},className:_.a.inputImg})),d.a.createElement("div",{className:_.a.ingredientsContainer},I.value===t&&_e.map((function(t){return d.a.createElement("label",{key:t._id,className:_.a.ingredient},d.a.createElement("p",{className:_.a.chooseVar},t.name[e]),d.a.createElement("input",{onClick:be,type:"checkbox",id:t._id,value:t._id}))}))),d.a.createElement("button",{type:"Submit",className:"".concat(_.a.btn," ").concat(_.a.title)},d.a.createElement(b.a,{id:"send"}))))}}}]);
//# sourceMappingURL=18.4fd9e588.chunk.js.map