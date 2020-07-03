(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[8],{175:function(e,t,n){"use strict";t.a={getLoading:function(e){return e.products.loading},getError:function(e){return e.products.errorReducer},getProducts:function(e){return e.products.items},getFileLink:function(e){return e.products.fileLink},getIngredients:function(e){return e.products.ingredients},createNewIngredient:function(e){return e.products.newIngredient},fileLink:function(e){return e.products.fileLink},addIngredient:function(e){return e.products.ingredient}}},176:function(e,t,n){"use strict";var a=n(4),r=n(177);t.a={fetchProducts:function(){return function(e){e(a.a.productsRequest()),Object(r.g)().then((function(t){var n=t.data;return e(a.a.productsSuccess(n.products))})).catch((function(t){return e(a.a.productsError(t))}))}},fetchProductsByCategory:function(e){return function(t){t(a.a.byCategoryRequest()),Object(r.j)(e).then((function(e){var n=e.data;return t(a.a.byCategorySuccess(n.products))})).catch((function(e){return t(a.a.byCategoryError(e))}))}},fetchProductById:function(e){return function(t){t(a.a.byIdRequest()),Object(r.i)(e).then((function(e){var n=e.data;return t(a.a.byIdSuccess(n.product))})).catch((function(e){return t(a.a.byIdError(e))}))}},sendFile:function(e){return function(t){t(a.a.sendFileRequest()),Object(r.k)(e).then((function(e){var n=e.data;return t(a.a.sendFileSuccess(n.image.file))})).catch((function(e){return t(a.a.sendFileError(e))}))}},sendProduct:function(e){return function(t){t(a.a.sendProductRequest()),Object(r.l)(e).then((function(e){var n=e.data;t(a.a.sendProductSuccess(n.product)),t(a.a.clearFile())})).catch((function(e){return t(a.a.sendProductError(e))}))}},getIngredients:function(){return function(e){e(a.a.getAllIngredientsRequest()),Object(r.f)().then((function(t){var n=t.data;return e(a.a.getAllIngredientsSuccess(n.ingredients))})).catch((function(t){return e(a.a.getAllIngredientsError(t))}))}},updateProduct:function(e,t){return function(n){n(a.a.updateProductRequest()),Object(r.p)(e,t).then((function(e){var t=e.data;return n(a.a.updateProductSuccess(t))})).catch((function(e){return n(a.a.updateProductError(e))}))}},deleteProduct:function(e){return function(t){t(a.a.deleteProductRequest()),Object(r.c)(e).then((function(e){var n=e.data;return t(a.a.deleteProductSuccess(n))})).catch((function(e){return t(a.a.deleteProductError(e))}))}},createNewIngredient:function(e){return function(t){t(a.a.createNewIngredientsRequest()),Object(r.a)(e).then((function(){return t(a.a.createNewIngredientsSuccess())})).catch((function(e){return t(a.a.createNewIngredientsError(e))}))}}}},177:function(e,t,n){"use strict";n.d(t,"e",(function(){return F})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return p})),n.d(t,"l",(function(){return f})),n.d(t,"k",(function(){return b})),n.d(t,"g",(function(){return m})),n.d(t,"j",(function(){return s})),n.d(t,"i",(function(){return _})),n.d(t,"p",(function(){return g})),n.d(t,"c",(function(){return E})),n.d(t,"d",(function(){return v})),n.d(t,"n",(function(){return N})),n.d(t,"m",(function(){return h})),n.d(t,"o",(function(){return I})),n.d(t,"b",(function(){return L})),n.d(t,"h",(function(){return C}));var a=n(46),r=n.n(a),i=n(53),c=n(25),d=n.n(c),o=d.a.CancelToken.source(),u="https://evening-caverns-34846.herokuapp.com",m=function(){return d.a.get("/products")},s=function(e){return d.a.get('/products/?category="'.concat(e,'"'),{cancelToken:o.token})},_=function(e){return d.a.get("/products/".concat(e))},l=function(){var e=Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.get("".concat(u,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d.a.post("".concat(u,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return d.a.post("".concat(u,"/products"),e)},g=function(e,t){return d.a.put("/products/".concat(e),t)},E=function(e){return d.a.delete("/products/".concat(e))},b=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.abrupt("return",d.a.post("".concat(u,"/images"),n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){return d.a.get("/developers")},v=function(){return d.a.get("/promo")},N=function(e){return d.a.post("/images",e)},h=function(e){return d.a.post("/promo",e)},I=function(e,t){return d.a.put("/promo/".concat(e),t)},L=function(e){return d.a.delete("/promo/".concat(e))},C=function(e){return d.a.get("/promo/".concat(e))}},181:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),c=n(12),d=n(175),o=n(172),u=n(188),m=n.n(u);t.a=function(e){var t=e.massage,n=Object(i.d)(d.a.getError);return n&&(t=n),r.a.createElement("div",{className:m.a.confirmation,"data-confirm":"continue"},r.a.createElement("div",{className:m.a.confirmation__form},r.a.createElement("p",{className:m.a.confirmation__formText},t),r.a.createElement(c.b,{to:"/admin/update-product",className:m.a.confirmation__formBtnLink},r.a.createElement("button",{type:"button",className:m.a.confirmation__formBtn},r.a.createElement(o.a,{id:"return back"}))),"deleted product"===t.props.id||r.a.createElement("button",{type:"button",className:m.a.confirmation__formBtn,name:"continue"},r.a.createElement(o.a,{id:"continue editing"}))))}},188:function(e,t,n){e.exports={confirmation:"confirmationWindow_confirmation__pKnzY",confirmation__form:"confirmationWindow_confirmation__form__pR0yr",confirmation__formText:"confirmationWindow_confirmation__formText__1Rc3f",confirmation__formBtnLink:"confirmationWindow_confirmation__formBtnLink__3We4i",confirmation__formBtn:"confirmationWindow_confirmation__formBtn__1H50C"}},189:function(e,t,n){"use strict";var a=n(43),r=n(0),i=n.n(r),c=n(190),d=n.n(c),o=n(11),u=n(172),m=n(176),s=n(181);t.a=function(){var e=Object(o.c)(),t=Object(r.useState)(!1),n=Object(a.a)(t,2),c=n[0],_=n[1],l=Object(r.useState)(""),p=Object(a.a)(l,2),f=p[0],g=p[1],E=Object(r.useState)(""),b=Object(a.a)(E,2),F=b[0],v=b[1],N=Object(r.useState)(""),h=Object(a.a)(N,2),I=h[0],L=h[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("label",{className:d.a.editForm__newIngredient},i.a.createElement("h4",{className:d.a.editCard__title},i.a.createElement(u.a,{id:"update.createNewIngredient"})),i.a.createElement("div",{className:d.a.editCard__titleName},i.a.createElement("p",{className:d.a.editCard__titleLang},"ru"),i.a.createElement("input",{type:"text",value:f,onChange:function(e){return g(e.target.value)},className:d.a.editForm__inputLang}),i.a.createElement("p",{className:d.a.editCard__titleLang},"en"),i.a.createElement("input",{type:"text",value:I,onChange:function(e){return L(e.target.value)},className:d.a.editForm__inputLang}),i.a.createElement("p",{className:d.a.editCard__titleLang},"ukr"),i.a.createElement("input",{type:"text",value:F,onChange:function(e){return v(e.target.value)},className:d.a.editForm__inputLang})),i.a.createElement("button",{type:"button",onClick:function(){var t={name:{ru:f,en:I,ukr:F}};e(m.a.createNewIngredient(t)),_(!0)},className:d.a.editForm__addNewIngredientBtn},i.a.createElement(u.a,{id:"update.addNewIngredient"}))),i.a.createElement("div",{onClick:function(t){_(!1),t.target.name=e(m.a.getIngredients())}},c&&i.a.createElement(s.a,{massage:i.a.createElement(u.a,{id:"update.ingredientAdded"})})))}},190:function(e,t,n){e.exports={editForm__newIngredient:"addNewIngredient_editForm__newIngredient__3LTfv",editCard__title:"addNewIngredient_editCard__title__2k1zu",editForm__inputNewIngredient:"addNewIngredient_editForm__inputNewIngredient__1ZifC",editForm__addNewIngredientBtn:"addNewIngredient_editForm__addNewIngredientBtn__lrMth",editCard__titleName:"addNewIngredient_editCard__titleName__1MXsJ",editForm__inputLang:"addNewIngredient_editForm__inputLang__39CUR"}},191:function(e,t,n){e.exports={container:"adminUpdateListItemEdit_container__3HLuE",editCard:"adminUpdateListItemEdit_editCard__21bL0",editCard__image:"adminUpdateListItemEdit_editCard__image__3bGof",editForm:"adminUpdateListItemEdit_editForm__b5-qw",editCard__title:"adminUpdateListItemEdit_editCard__title__3FVGH",editCard__titleName:"adminUpdateListItemEdit_editCard__titleName__1ZB1V",editCard__titleLang:"adminUpdateListItemEdit_editCard__titleLang__3A86I",editForm__inputLang:"adminUpdateListItemEdit_editForm__inputLang__3aBBj",editCard__photoLabel:"adminUpdateListItemEdit_editCard__photoLabel__3AqSD",editForm__photo:"adminUpdateListItemEdit_editForm__photo__4go7p",editForm__photoBtn:"adminUpdateListItemEdit_editForm__photoBtn__1ruwQ",editForm__inputCategory:"adminUpdateListItemEdit_editForm__inputCategory__2OUAK",editForm__price:"adminUpdateListItemEdit_editForm__price__3l36G",editForm__priceInput:"adminUpdateListItemEdit_editForm__priceInput__2BURD",editForm__inputSinglePrice:"adminUpdateListItemEdit_editForm__inputSinglePrice__DZQgv",editForm__priceTitle:"adminUpdateListItemEdit_editForm__priceTitle__7VoSo",editForm__inputDescription:"adminUpdateListItemEdit_editForm__inputDescription__3l4iF",editForm__btnSubmit:"adminUpdateListItemEdit_editForm__btnSubmit__1COXz"}},224:function(e,t,n){e.exports={variables:"'../../../stylesheet/vars.css'",lightColor:"#FFF",accentColor:"#FF6C00",primaryColor:"#272727",primaryTextFontSize:"0.875 rem",editCard__title:"ingredientSelect_editCard__title__340t2",editForm__ingredientsSelect:"ingredientSelect_editForm__ingredientsSelect__1_j7x",editForm__ingredients:"ingredientSelect_editForm__ingredients__5jnV7",editForm__ingredient:"ingredientSelect_editForm__ingredient__1094b",editForm__ingredientName:"ingredientSelect_editForm__ingredientName__a3kOJ",editForm__ingredientsList:"ingredientSelect_editForm__ingredientsList__2wu2V",editForm__addIngredientBtn:"ingredientSelect_editForm__addIngredientBtn__2jLde",editForm__ingredientBtnDel:"ingredientSelect_editForm__ingredientBtnDel__ckeY9",editForm__ingredientBtnDelImage:"ingredientSelect_editForm__ingredientBtnDelImage__1X9RN"}},249:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return I}));var a=n(16),r=n(43),i=n(0),c=n.n(i),d=n(11),o=n(172),u=n(82),m=n(18),s=n(181),_=n(189),l=n(45),p=n(175),f=n(4),g=n(224),E=n.n(g),b=function(e){var t=e.productForEdit,n=Object(d.c)(),a=Object(d.d)((function(e){return e.local.lang})),m=Object(d.d)(p.a.getIngredients),s=m.map((function(e,t){return{label:e.name[a],value:t}})),_=Object(i.useState)(""),g=Object(r.a)(_,2),b=g[0],F=g[1],v=Object(i.useState)(t.ingredients),N=Object(r.a)(v,2),h=N[0],I=N[1];Object(i.useEffect)((function(){n((function(e){return e(f.a.addIngredient(h))}))}),[h]),Object(i.useEffect)((function(){F(s[0])}),[m]);var L=function(e){var t=h.findIndex((function(t){return t._id===e.currentTarget.dataset.id})),n=Object(l.a)(h);n.splice(t,1),I(n)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:E.a.editCard__title},c.a.createElement(o.a,{id:"update.composition"})),c.a.createElement("ul",{className:E.a.editForm__ingredients},h.map((function(e,t){return c.a.createElement("li",{key:e._id,className:E.a.editForm__ingredient},c.a.createElement("span",{className:E.a.editForm__ingredientName},e.name[a]),c.a.createElement("button",{type:"button",onClick:L,"data-id":e._id,className:E.a.editForm__ingredientBtnDel},c.a.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",className:E.a.editForm__ingredientBtnDelImage},c.a.createElement("path",{d:"M11.25 1.8075L10.1925 0.75L6 4.9425L1.8075 0.75L0.75 1.8075L4.9425 6L0.75 10.1925L1.8075 11.25L6 7.0575L10.1925 11.25L11.25 10.1925L7.0575 6L11.25 1.8075Z",fill:"#ffff"}))))}))),c.a.createElement("label",{className:E.a.editForm__ingredientsSelect},c.a.createElement(u.a,{options:s,value:b,onChange:function(e){return F(e)},className:E.a.editForm__ingredientsList}),c.a.createElement("button",{type:"button",onClick:function(){h.some((function(e){return m[b.value]._id===e._id}))||I((function(e){return[].concat(Object(l.a)(e),[m[b.value]])}))},className:E.a.editForm__addIngredientBtn},c.a.createElement(o.a,{id:"update.addToComposition"}))))},F=n(176),v=n(47),N=n(191),h=n.n(N),I=function(){var e=Object(d.c)(),t=Object(m.h)(),n=null;n=t.state?t.state.product:JSON.parse(sessionStorage.getItem("editedItem"));var l=Object(d.d)(p.a.addIngredient),g=Object(d.d)(p.a.getLoading),E=Object(d.d)(p.a.fileLink),N=Object(i.useState)(n.name.ru),I=Object(r.a)(N,2),L=I[0],C=I[1],j=Object(i.useState)(n.name.en),O=Object(r.a)(j,2),S=O[0],y=O[1],w=Object(i.useState)(n.name.ukr),k=Object(r.a)(w,2),B=k[0],x=k[1],U=Object(i.useState)({value:n.subcategory,label:n.subcategory}),P=Object(r.a)(U,2),z=P[0],D=P[1],R=Object(i.useState)(""),T=Object(r.a)(R,2),q=T[0],A=T[1],M=Object(i.useState)(n.price.price),X=Object(r.a)(M,2),J=X[0],W=X[1],V=Object(i.useState)(""),Z=Object(r.a)(V,2),G=Z[0],H=Z[1],K=Object(i.useState)(n.price.M),Q=Object(r.a)(K,2),Y=Q[0],$=Q[1],ee=Object(i.useState)(n.price.L),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],re=Object(i.useState)(n.price.XL),ie=Object(r.a)(re,2),ce=ie[0],de=ie[1],oe=Object(i.useState)(n.description),ue=Object(r.a)(oe,2),me=ue[0],se=ue[1];Object(i.useEffect)((function(){"pizza"===n.categories?H({M:Y,L:ne,XL:ce}):H({price:J})}),[Y,ne,ce,J]),Object(i.useEffect)((function(){e(F.a.getIngredients())}),[]),Object(i.useEffect)((function(){e(e(f.a.imagesInit(n.images)))}),[]);var _e=function(){var e={ru:L,ukr:B,en:S};G||("pizza"===n.categories?H({M:"",L:"",XL:""}):H({price:""}));var t={price:G,name:e,ingredients:l,images:E};return t.name={ru:L,ukr:B,en:S},t.categories=n.categories,t.subcategory=z.value,"pizza"!==n.categories&&(t.description=me),t};window.addEventListener("unload",(function(){var e=Object(a.a)({_id:n._id},_e());sessionStorage.setItem("editedItem",JSON.stringify(e))}));return c.a.createElement("div",{className:h.a.container},g&&c.a.createElement(v.a,null),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:h.a.editCard},c.a.createElement("img",{src:E,alt:n.closeUpImages,className:h.a.editCard__image}),c.a.createElement("form",{id:"editForm",onSubmit:function(t){t.preventDefault();var a=_e();!function(t,n){e(F.a.updateProduct(t,n))}(n._id,a),A("edit")},className:h.a.editForm},c.a.createElement("h4",{className:h.a.editCard__title},c.a.createElement(o.a,{id:"photo"})),c.a.createElement("label",{className:h.a.editCard__photoLabel},c.a.createElement("input",{type:"file",accept:"image/*",onChange:function(t){var n;t.preventDefault(),t.target.files[0]&&(n=t.target.files[0],e(F.a.sendFile(n))),window.history.pushState({},"","/")},className:h.a.editForm__photo}),c.a.createElement("p",{className:h.a.editForm__photoBtn},c.a.createElement(o.a,{id:"upload"}))),c.a.createElement("h4",{className:h.a.editCard__title},c.a.createElement(o.a,{id:"product.name"})),c.a.createElement("div",{className:h.a.editCard__titleName},c.a.createElement("p",{className:h.a.editCard__titleLang},"ru"),c.a.createElement("input",{type:"text",value:L,onChange:function(e){return C(e.target.value)},className:h.a.editForm__inputLang}),c.a.createElement("p",{className:h.a.editCard__titleLang},"en"),c.a.createElement("input",{type:"text",value:S,onChange:function(e){return y(e.target.value)},className:h.a.editForm__inputLang}),c.a.createElement("p",{className:h.a.editCard__titleLang},"ukr"),c.a.createElement("input",{type:"text",value:B,onChange:function(e){return x(e.target.value)},className:h.a.editForm__inputLang})),c.a.createElement("h4",{className:h.a.editCard__title},c.a.createElement(o.a,{id:"product.category"})),c.a.createElement("p",null,n.categories),"pizza"===n.categories&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",{className:h.a.editCard__title},c.a.createElement(o.a,{id:"product.subcategory"})),c.a.createElement(u.a,{options:[{label:"classic",value:"classic"},{label:"branded",value:"branded"},{label:"premium",value:"premium"}],value:z,onChange:function(e){return D(e)}}),c.a.createElement(b,{productForEdit:n}),c.a.createElement(_.a,null)),c.a.createElement("h4",{className:h.a.editCard__title},c.a.createElement(o.a,{id:"product.price"})),"pizza"===n.categories?c.a.createElement("div",{className:h.a.editForm__price},c.a.createElement("h4",{className:h.a.editForm__priceTitle},"M"),c.a.createElement("input",{type:"text",value:Y,onChange:function(e){return $(e.target.value)},className:h.a.editForm__priceInput}),c.a.createElement("h4",{className:h.a.editForm__priceTitle},"L"),c.a.createElement("input",{type:"text",value:ne,onChange:function(e){return ae(e.target.value)},className:h.a.editForm__priceInput}),c.a.createElement("h4",{className:h.a.editForm__priceTitle},"XL"),c.a.createElement("input",{type:"text",value:ce,onChange:function(e){return de(e.target.value)},className:h.a.editForm__priceInput})):c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{type:"number",value:J,onChange:function(e){return W(e.target.value)},className:h.a.editForm__inputSinglePrice}),c.a.createElement("p",{className:h.a.editCard__title},c.a.createElement(o.a,{id:"volume weight"})),c.a.createElement("input",{type:"text",value:me,onChange:function(e){return se(e.target.value)},className:h.a.editForm__inputDescription}))),c.a.createElement("button",{disabled:g,form:"editForm",type:"submit",className:h.a.editForm__btnSubmit},c.a.createElement(o.a,{id:"update.saveChanges"})),c.a.createElement("button",{disabled:g,form:"editForm",type:"submit",className:h.a.editForm__btnSubmit,onClick:function(t){t.preventDefault(),e(F.a.deleteProduct(n._id)),A("del"),sessionStorage.removeItem("editedItem"),window.history.pushState({},"","/")}},c.a.createElement(o.a,{id:"delete product"}))),c.a.createElement("div",{onClick:function(e){"del"!==q&&"continue"===e.target.dataset.confirm&&A(""),"continue"===e.target.name&&A("")}},!g&&q&&c.a.createElement(s.a,{massage:"del"===q?c.a.createElement(o.a,{id:"deleted product"}):c.a.createElement(o.a,{id:"product updated"})}))))}}}]);
//# sourceMappingURL=8.77ee3f02.chunk.js.map