(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[7],{175:function(e,t,a){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngredients:function(e){return e.products.ingredients},createNewIngredient:function(e){return e.products.newIngredient},fileLink:function(e){return e.products.fileLink},addIngredient:function(e){return e.products.ingredient}}},176:function(e,t,a){"use strict";var n=a(4),r=a(177);t.a={fetchProducts:function(){return function(e){e(n.a.productsRequest()),Object(r.g)().then((function(t){var a=t.data;return e(n.a.productsSuccess(a.products))})).catch((function(t){return e(n.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(n.a.byCategoryRequest()),Object(r.j)(e).then((function(e){var a=e.data;return t(n.a.byCategorySuccess(a.products))})).catch((function(e){return t(n.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(n.a.byIdRequest()),Object(r.i)(e).then((function(e){var a=e.data;return t(n.a.byIdSuccess(a.product))})).catch((function(e){return t(n.a.byIdError(e))}))}},sendFile:function(e){return function(t){t(n.a.sendFileRequest()),Object(r.k)(e).then((function(e){var a=e.data;return t(n.a.sendFileSuccess(a.image.file))})).catch((function(e){return t(n.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(n.a.sendProductRequest()),Object(r.l)(e).then((function(e){var a=e.data;t(n.a.sendProductSuccess(a.product)),t(n.a.clearFile())})).catch((function(e){return t(n.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(n.a.getAllIngredientsRequest()),Object(r.f)().then((function(t){var a=t.data;return e(n.a.getAllIngredientsSuccess(a.ingredients))})).catch((function(t){return e(n.a.getAllIngredientsError(t))}))}},updateProduct:function(e,t){return function(a){a(n.a.updateProductRequest()),Object(r.p)(e,t).then((function(e){var t=e.data;return a(n.a.updateProductSuccess(t))})).catch((function(e){return a(n.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(n.a.deleteProductRequest()),Object(r.c)(e).then((function(e){var a=e.data;return t(n.a.deleteProductSuccess(a))})).catch((function(e){return t(n.a.deleteProductError(e))}))}},createNewIngredient:function(e){return function(t){t(n.a.createNewIngredientsRequest()),Object(r.a)(e).then((function(){return t(n.a.createNewIngredientsSuccess())})).catch((function(e){return t(n.a.createNewIngredientsError(e))}))}}}},177:function(e,t,a){"use strict";a.d(t,"e",(function(){return h})),a.d(t,"f",(function(){return _})),a.d(t,"a",(function(){return p})),a.d(t,"l",(function(){return g})),a.d(t,"k",(function(){return b})),a.d(t,"g",(function(){return m})),a.d(t,"j",(function(){return s})),a.d(t,"i",(function(){return l})),a.d(t,"p",(function(){return f})),a.d(t,"c",(function(){return E})),a.d(t,"d",(function(){return F})),a.d(t,"n",(function(){return N})),a.d(t,"m",(function(){return v})),a.d(t,"o",(function(){return L})),a.d(t,"b",(function(){return O})),a.d(t,"h",(function(){return j}));var n=a(46),r=a.n(n),i=a(53),c=a(25),o=a.n(c),d=o.a.CancelToken.source(),u="https://evening-caverns-34846.herokuapp.com",m=function(){return o.a.get("/products")},s=function(e){return o.a.get('/products/?category="'.concat(e,'"'),{cancelToken:d.token})},l=function(e){return o.a.get("/products/".concat(e))},_=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.get("".concat(u,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.post("".concat(u,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){return o.a.post("".concat(u,"/products"),e)},f=function(e,t){return o.a.put("/products/".concat(e),t)},E=function(e){return o.a.delete("/products/".concat(e))},b=function(){var e=Object(i.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),e.abrupt("return",o.a.post("".concat(u,"/images"),a));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){return o.a.get("/developers")},F=function(){return o.a.get("/promo")},N=function(e){return o.a.post("/images",e)},v=function(e){return o.a.post("/promo",e)},L=function(e,t){return o.a.put("/promo/".concat(e),t)},O=function(e){return o.a.delete("/promo/".concat(e))},j=function(e){return o.a.get("/promo/".concat(e))}},181:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(11),c=a(12),o=a(175),d=a(172),u=a(18),m=a(186),s=a.n(m);t.a=function(e){var t=e.massage,a=Object(i.d)(o.a.getError);a&&(t=a);var n="/admin/create-product"===Object(u.h)().pathname;return r.a.createElement("div",{className:s.a.confirmation,"data-confirm":"continue"},r.a.createElement("div",{className:s.a.confirmation__form},r.a.createElement("p",{className:s.a.confirmation__formText},t),!n&&r.a.createElement(c.b,{to:"/admin/update-product",className:s.a.confirmation__formBtnLink},r.a.createElement("button",{type:"button",className:s.a.confirmation__formBtn},r.a.createElement(d.a,{id:"update.return"}))),"deleted product"===t.props.id||r.a.createElement("button",{type:"button",className:s.a.confirmation__formBtn,name:"continue"},r.a.createElement(d.a,{id:"continue editing"}))))}},186:function(e,t,a){e.exports={confirmation:"confirmationWindow_confirmation__BuNtQ",confirmation__form:"confirmationWindow_confirmation__form__3Sw6Z",confirmation__formText:"confirmationWindow_confirmation__formText__2_-NC",confirmation__formBtnLink:"confirmationWindow_confirmation__formBtnLink__15LfN",confirmation__formBtn:"confirmationWindow_confirmation__formBtn__oOiAc"}},187:function(e,t,a){"use strict";var n=a(43),r=a(0),i=a.n(r),c=a(188),o=a.n(c),d=a(11),u=a(172),m=a(176),s=a(181);t.a=function(){var e=Object(d.c)(),t=Object(r.useState)(!1),a=Object(n.a)(t,2),c=a[0],l=a[1],_=Object(r.useState)(""),p=Object(n.a)(_,2),g=p[0],f=p[1],E=Object(r.useState)(""),b=Object(n.a)(E,2),h=b[0],F=b[1],N=Object(r.useState)(""),v=Object(n.a)(N,2),L=v[0],O=v[1],j=Object(r.useState)(""),I=Object(n.a)(j,2),C=I[0],S=I[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:o.a.editForm__newIngredient},i.a.createElement("h4",{className:o.a.editCard__title},i.a.createElement(u.a,{id:"update.createNewIngredient"})),i.a.createElement("div",{className:o.a.editCard__titleName},i.a.createElement("p",{className:o.a.editCard__titleLang},"ru"),i.a.createElement("input",{type:"text",value:h,onChange:function(e){return F(e.target.value)},className:o.a.editForm__inputLang,maxLength:"30"}),i.a.createElement("p",{className:o.a.editCard__titleLang},"en"),i.a.createElement("input",{type:"text",value:C,onChange:function(e){return S(e.target.value)},className:o.a.editForm__inputLang,maxLength:"30"}),i.a.createElement("p",{className:o.a.editCard__titleLang},"ukr"),i.a.createElement("input",{type:"text",value:L,onChange:function(e){return O(e.target.value)},className:o.a.editForm__inputLang,maxLength:"30"})),i.a.createElement("button",{type:"button",onClick:function(){if(C.length>=3&&h.length>=3&&L.length>=3){var t={name:{ru:h,en:C,ukr:L}};e(m.a.createNewIngredient(t)),f(i.a.createElement(u.a,{id:"update.ingredientAdded"}))}else f(i.a.createElement(u.a,{id:"update.errorValidationName"}));l(!0)},className:o.a.editForm__addNewIngredientBtn},i.a.createElement(u.a,{id:"update.addNewIngredient"}))),i.a.createElement("div",{onClick:function(t){l(!1),t.target.name=e(m.a.getIngredients())}},c&&g&&i.a.createElement(s.a,{massage:g})))}},188:function(e,t,a){e.exports={editForm__newIngredient:"addNewIngredient_editForm__newIngredient__t55rz",editCard__title:"addNewIngredient_editCard__title__2P_Rc",editForm__inputNewIngredient:"addNewIngredient_editForm__inputNewIngredient__10v4K",editForm__inputLang:"addNewIngredient_editForm__inputLang__RTOWJ",editForm__addNewIngredientBtn:"addNewIngredient_editForm__addNewIngredientBtn__xBrte",editCard__titleName:"addNewIngredient_editCard__titleName__2MMJ6"}},189:function(e,t,a){"use strict";var n=a(16),r=a(45),i=a(43),c=a(0),o=a.n(c),d=a(11),u=a(172),m=a(79),s=a(175),l=a(4),_=a(190),p=a.n(_);t.a=function(e){var t=e.productForEdit,a=void 0===t?{}:t,_=Object(d.c)(),g=Object(d.d)((function(e){return e.local.lang})),f=Object(d.d)(s.a.getIngredients),E=f.map((function(e,t){return{label:e.name[g],value:t}})),b=Object(c.useState)(""),h=Object(i.a)(b,2),F=h[0],N=h[1],v=Object(c.useState)(a.ingredients||[]),L=Object(i.a)(v,2),O=L[0],j=L[1];Object(c.useEffect)((function(){_((function(e){return e(l.a.addIngredient(O))}))}),[O]),Object(c.useEffect)((function(){N(E[0])}),[f]);var I=function(e){var t=O.findIndex((function(t){return t._id===e.currentTarget.dataset.id})),a=Object(r.a)(O);a.splice(t,1),j(a)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",{className:p.a.editCard__title},o.a.createElement(u.a,{id:"update.composition"})),o.a.createElement("span",{className:p.a.discriptionTitle},o.a.createElement(u.a,{id:"update.compositionDiscription"})),o.a.createElement("ul",{className:p.a.editForm__ingredients},O.map((function(e,t){return o.a.createElement("li",{key:e._id,className:p.a.editForm__ingredient},o.a.createElement("span",{className:p.a.editForm__ingredientName},e.name[g]),o.a.createElement("button",{type:"button",onClick:I,"data-id":e._id,className:p.a.editForm__ingredientBtnDel},o.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:p.a.editForm__ingredientBtnDelImage},o.a.createElement("path",{d:"M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z",fill:"#ffff"}))))}))),o.a.createElement("label",{className:p.a.editForm__ingredientsSelect},o.a.createElement(m.a,{options:E,value:F,onChange:function(e){return N(e)},className:p.a.editForm__ingredientsList,theme:function(e){return Object(n.a)(Object(n.a)({},e),{},{borderRadius:0,colors:Object(n.a)(Object(n.a)({},e.colors),{},{primary25:"white",primary:"#ff6c00"})})}}),o.a.createElement("button",{type:"button",onClick:function(){O.some((function(e){return f[F.value]._id===e._id}))||j((function(e){return[].concat(Object(r.a)(e),[f[F.value]])}))},className:p.a.editForm__addIngredientBtn},o.a.createElement(u.a,{id:"update.addToComposition"}))))}},190:function(e,t,a){e.exports={variables:"'../../../stylesheet/vars.css'",lightColor:"#FFF",accentColor:"#FF6C00",primaryColor:"#272727",primaryTextFontSize:"0.875 rem",editCard__title:"ingredientSelect_editCard__title__1x4Yc",discriptionTitle:"ingredientSelect_discriptionTitle__3YmdO",editForm__ingredientsSelect:"ingredientSelect_editForm__ingredientsSelect__1dAFH",editForm__ingredients:"ingredientSelect_editForm__ingredients__crgNt",editForm__ingredient:"ingredientSelect_editForm__ingredient__3E-I6",editForm__ingredientName:"ingredientSelect_editForm__ingredientName__1nU-y",editForm__ingredientsList:"ingredientSelect_editForm__ingredientsList__Wy2SW",editForm__addIngredientBtn:"ingredientSelect_editForm__addIngredientBtn__JU45N",editForm__ingredientBtnDel:"ingredientSelect_editForm__ingredientBtnDel__gSDc2",editForm__ingredientBtnDelImage:"ingredientSelect_editForm__ingredientBtnDelImage__3fO20"}},191:function(e,t,a){e.exports={container:"adminUpdateListItemEdit_container__1UZEx",editCard:"adminUpdateListItemEdit_editCard__3wMLf",editCard__image:"adminUpdateListItemEdit_editCard__image__1S-TF",editForm:"adminUpdateListItemEdit_editForm__2N10V",editCard__title:"adminUpdateListItemEdit_editCard__title__2IwRu",editCard__titleName:"adminUpdateListItemEdit_editCard__titleName__18hZa",editCard__titleLang:"adminUpdateListItemEdit_editCard__titleLang__1n8uS",editForm__inputLang:"adminUpdateListItemEdit_editForm__inputLang__1GqpP",editCard__photoLabel:"adminUpdateListItemEdit_editCard__photoLabel__1r1BC",editForm__photo:"adminUpdateListItemEdit_editForm__photo__3681v",editForm__photoBtn:"adminUpdateListItemEdit_editForm__photoBtn__17eVj",editForm__inputCategory:"adminUpdateListItemEdit_editForm__inputCategory__Q5FO7",editForm__price:"adminUpdateListItemEdit_editForm__price__1lh-2",editForm__priceInput:"adminUpdateListItemEdit_editForm__priceInput__1JbGK",editForm__inputSinglePrice:"adminUpdateListItemEdit_editForm__inputSinglePrice__hQZDx",editForm__priceTitle:"adminUpdateListItemEdit_editForm__priceTitle__-cift",editForm__inputDescription:"adminUpdateListItemEdit_editForm__inputDescription__1DXGD",editForm__btnSubmit:"adminUpdateListItemEdit_editForm__btnSubmit__iNCCw"}},251:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var n=a(16),r=a(43),i=a(0),c=a.n(i),o=a(11),d=a(172),u=a(79),m=a(18),s=a(181),l=a(187),_=a(189),p=a(175),g=a(176),f=a(47),E=a(191),b=a.n(E),h=a(4),F=a(44),N=function(){var e=Object(o.c)(),t=Object(m.h)(),a=null;a=t.state?t.state.product:JSON.parse(sessionStorage.getItem("editedItem"));var E=Object(o.d)((function(e){return e.local.lang})),N=Object(o.d)(p.a.addIngredient),v=Object(o.d)(p.a.getLoading),L=Object(o.d)(p.a.fileLink),O=Object(i.useState)(""),j=Object(r.a)(O,2),I=j[0],C=j[1],S=Object(i.useState)(a.name.ru),y=Object(r.a)(S,2),w=y[0],x=y[1],k=Object(i.useState)(a.name.en),z=Object(r.a)(k,2),B=z[0],P=z[1],U=Object(i.useState)(a.name.ukr),D=Object(r.a)(U,2),T=D[0],R=D[1],q=Object(i.useState)({value:a.subcategory,label:F.a[E]["pizza.".concat(a.subcategory)]}),J=Object(r.a)(q,2),M=J[0],W=J[1],A=Object(i.useState)(a.price.price),V=Object(r.a)(A,2),X=V[0],Z=V[1],G=Object(i.useState)(""),Q=Object(r.a)(G,2),K=Q[0],Y=Q[1],H=Object(i.useState)(a.price.M),$=Object(r.a)(H,2),ee=$[0],te=$[1],ae=Object(i.useState)(a.price.L),ne=Object(r.a)(ae,2),re=ne[0],ie=ne[1],ce=Object(i.useState)(a.price.XL),oe=Object(r.a)(ce,2),de=oe[0],ue=oe[1],me=Object(i.useState)(a.description),se=Object(r.a)(me,2),le=se[0],_e=se[1],pe=Object(i.useState)(!1),ge=Object(r.a)(pe,2),fe=ge[0],Ee=ge[1],be=[{label:F.a[E]["pizza.classic"],value:"classic"},{label:F.a[E]["pizza.special"],value:"branded"},{label:F.a[E]["pizza.premium"],value:"premium"}];Object(i.useEffect)((function(){"pizza"===a.categories?(Ee(!1),Y({M:ee,L:re,XL:de})):Y({price:X})}),[ee,re,de,X]),Object(i.useEffect)((function(){e(g.a.getIngredients())}),[]),Object(i.useEffect)((function(){e(e(h.a.imagesInit(a.images)))}),[]);var he=function(){var e={ru:w,ukr:T,en:B};K||("pizza"===a.categories?Y({M:"",L:"",XL:""}):Y({price:""}));var t={price:K,name:e,ingredients:N,images:L};return t.name={ru:w,ukr:T,en:B},t.categories=a.categories,t.subcategory=M.value,"pizza"!==a.categories&&(t.description=le),t};window.addEventListener("unload",(function(){var e=Object(n.a)({_id:a._id},he());sessionStorage.setItem("editedItem",JSON.stringify(e))}));return c.a.createElement("div",{className:b.a.container},v&&c.a.createElement(f.a,null),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:b.a.editCard},c.a.createElement("img",{src:L,alt:a.closeUpImages,className:b.a.editCard__image}),c.a.createElement("form",{id:"editForm",onSubmit:function(t){t.preventDefault(),Ee(!1);var n=B.length>=3&&w.length>=3&&T.length>=3,r="pizza"===a.categories?re.toString().length>=2&&ee.toString().length>=2&&de.toString().length>=2:X.toString().length>=2,i="pizza"===a.categories||le.toString().length>=1&&"0"!==le;if(n&&r&&i){var o=he();!function(t,a){e(g.a.updateProduct(t,a))}(a._id,o),C(c.a.createElement(d.a,{id:"product updated"}))}else"pizza"!==a.categories&&(i||C(c.a.createElement(d.a,{id:"update.errorValidationDescription"}))),r||C(c.a.createElement(d.a,{id:"update.errorValidationPrice"})),n||C(c.a.createElement(d.a,{id:"update.errorValidationName"}))},className:b.a.editForm},c.a.createElement("h4",{className:b.a.editCard__title},c.a.createElement(d.a,{id:"photo"})),c.a.createElement("label",{className:b.a.editCard__photoLabel},c.a.createElement("input",{type:"file",accept:"image/*",onChange:function(t){var a;t.preventDefault(),t.target.files[0]&&(a=t.target.files[0],e(g.a.sendFile(a))),window.history.pushState({},"","/")},className:b.a.editForm__photo}),c.a.createElement("p",{className:b.a.editForm__photoBtn},c.a.createElement(d.a,{id:"upload"}))),c.a.createElement("h4",{className:b.a.editCard__title},c.a.createElement(d.a,{id:"product.category"})),c.a.createElement("p",null,c.a.createElement(d.a,{id:a.categories})),"pizza"===a.categories&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:b.a.editCard__title},c.a.createElement(d.a,{id:"product.subcategory"})),c.a.createElement(u.a,{options:be,value:M,onChange:function(e){return W(e)},theme:function(e){return Object(n.a)(Object(n.a)({},e),{},{borderRadius:0,colors:Object(n.a)(Object(n.a)({},e.colors),{},{primary25:"white",primary:"#ff6c00"})})}})),c.a.createElement("h4",{className:b.a.editCard__title},c.a.createElement(d.a,{id:"product.name"})),c.a.createElement("div",{className:b.a.editCard__titleName},c.a.createElement("p",{className:b.a.editCard__titleLang},c.a.createElement(d.a,{id:"rus name"})),c.a.createElement("input",{type:"text",value:w,onChange:function(e){return x(e.target.value)},className:b.a.editForm__inputLang,maxLength:"30"}),c.a.createElement("p",{className:b.a.editCard__titleLang},c.a.createElement(d.a,{id:"eng name"})),c.a.createElement("input",{type:"text",value:B,onChange:function(e){return P(e.target.value)},className:b.a.editForm__inputLang,maxLength:"30"}),c.a.createElement("p",{className:b.a.editCard__titleLang},c.a.createElement(d.a,{id:"ukr name"})),c.a.createElement("input",{type:"text",value:T,onChange:function(e){return R(e.target.value)},className:b.a.editForm__inputLang,maxLength:"30"})),c.a.createElement("h4",{className:b.a.editCard__title},c.a.createElement(d.a,{id:"product.price"})),"pizza"===a.categories?c.a.createElement("div",{className:b.a.editForm__price},c.a.createElement("h4",{className:b.a.editForm__priceTitle},"M"),c.a.createElement("input",{type:"text",value:ee,onChange:function(e){return te(e.target.value)},className:b.a.editForm__priceInput,maxLength:"3"}),c.a.createElement("h4",{className:b.a.editForm__priceTitle},"L"),c.a.createElement("input",{type:"text",value:re,onChange:function(e){return ie(e.target.value)},className:b.a.editForm__priceInput,maxLength:"3"}),c.a.createElement("h4",{className:b.a.editForm__priceTitle},"XL"),c.a.createElement("input",{type:"text",value:de,onChange:function(e){return ue(e.target.value)},className:b.a.editForm__priceInput,maxLength:"3"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"text",value:X,onChange:function(e){return Z(e.target.value)},className:b.a.editForm__inputSinglePrice,maxLength:"3"}),c.a.createElement("p",{className:b.a.editCard__title},c.a.createElement(d.a,{id:"volume weight"})),c.a.createElement("input",{type:"text",value:le,onChange:function(e){return _e(e.target.value)},className:b.a.editForm__inputDescription,maxLength:"3"})),"pizza"===a.categories&&c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{productForEdit:a}),c.a.createElement("label",{className:"".concat(b.a.editForm)},c.a.createElement("h4",{className:"".concat(b.a.editForm__photoBtn)},c.a.createElement(d.a,{id:"update.createNewIngredient"})),c.a.createElement("input",{type:"button",onClick:function(){return Ee(!fe)},className:b.a.editForm__photo})),fe&&c.a.createElement(l.a,null))),c.a.createElement("button",{disabled:v,form:"editForm",type:"submit",className:b.a.editForm__btnSubmit},c.a.createElement(d.a,{id:"update.saveChanges"})),c.a.createElement("button",{disabled:v,form:"editForm",type:"submit",className:b.a.editForm__btnSubmit,onClick:function(t){t.preventDefault(),Ee(!1),e(g.a.deleteProduct(a._id)),sessionStorage.removeItem("editedItem"),window.history.pushState({},"","/"),C(c.a.createElement(d.a,{id:"deleted product"}))}},c.a.createElement(d.a,{id:"delete product"}))),c.a.createElement("div",{onClick:function(e){Ee(!1),"deleted product"!==I.props.id&&"continue"===e.target.dataset.confirm&&C(""),"continue"===e.target.name&&C("")}},!v&&I&&c.a.createElement(s.a,{massage:I}))))}}}]);
//# sourceMappingURL=7.37618eae.chunk.js.map