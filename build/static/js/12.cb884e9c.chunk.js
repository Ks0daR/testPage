(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[12],{177:function(e,t,n){"use strict";n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"l",(function(){return k})),n.d(t,"k",(function(){return b})),n.d(t,"g",(function(){return l})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return d})),n.d(t,"p",(function(){return E})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return v})),n.d(t,"n",(function(){return g})),n.d(t,"m",(function(){return h})),n.d(t,"o",(function(){return N})),n.d(t,"b",(function(){return j})),n.d(t,"h",(function(){return O}));var a=n(46),r=n.n(a),o=n(53),c=n(25),u=n.n(c),i=u.a.CancelToken.source(),s="https://evening-caverns-34846.herokuapp.com",l=function(){return u.a.get("/products")},m=function(e){return u.a.get('/products/?category="'.concat(e,'"'),{cancelToken:i.token})},d=function(e){return u.a.get("/products/".concat(e))},p=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.get("".concat(s,"/ingredients")));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.a.post("".concat(s,"/ingredients"),t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return u.a.post("".concat(s,"/products"),e)},E=function(e,t){return u.a.put("/products/".concat(e),t)},S=function(e){return u.a.delete("/products/".concat(e))},b=function(){var e=Object(o.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("file",t),e.abrupt("return",u.a.post("".concat(s,"/images"),n));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){return u.a.get("/developers")},v=function(){return u.a.get("/promo")},g=function(e){return u.a.post("/images",e)},h=function(e){return u.a.post("/promo",e)},N=function(e,t){return u.a.put("/promo/".concat(e),t)},j=function(e){return u.a.delete("/promo/".concat(e))},O=function(e){return u.a.get("/promo/".concat(e))}},225:function(e,t,n){e.exports={form:"AdminStocksEditor_form__2NEvG",formInput:"AdminStocksEditor_formInput__3mAzf",title:"AdminStocksEditor_title__2G-zO",formButton:"AdminStocksEditor_formButton__1w1lL",formButtonReset:"AdminStocksEditor_formButtonReset__3E8bR",uploadInput:"AdminStocksEditor_uploadInput__3_GCN",fileUpload:"AdminStocksEditor_fileUpload__2XI6Z",fileUploadGreen:"AdminStocksEditor_fileUploadGreen__2JQ73 AdminStocksEditor_fileUpload__2XI6Z",uploadLabel:"AdminStocksEditor_uploadLabel__gavwc",uploadSpan:"AdminStocksEditor_uploadSpan__1n_QA",fileName:"AdminStocksEditor_fileName__2T-qv"}},226:function(e,t,n){e.exports={card:"AdminStocksListItem_card__1XvI0",descriptionContainer:"AdminStocksListItem_descriptionContainer__gVM4n",cardImg:"AdminStocksListItem_cardImg__3HD-l",title:"AdminStocksListItem_title__3OuaW",description:"AdminStocksListItem_description__EbPWQ",buttonContainer:"AdminStocksListItem_buttonContainer__2e4ae",button:"AdminStocksListItem_button__2C7Kp"}},227:function(e,t,n){e.exports={cardList:"AdminStocksList_cardList__33GPh"}},228:function(e,t,n){e.exports={container:"AdminStocksPage_container__25gLi"}},240:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var a=n(0),r=n.n(a),o=n(43),c=n(172),u=n(11),i=n(47),s=n(76),l=n(9),m=n(177),d={fetchStocks:function(){return function(e){e(l.a.getStocksRequest()),Object(m.d)().then((function(t){var n=t.data;return e(l.a.getStocksSuccess(n.promo))})).catch((function(t){return e(l.a.getStocksError(t))}))}},sendStock:function(e){return function(t){t(l.a.sendStockRequest()),Object(m.m)(e).then((function(e){var n=e.data;return t(l.a.sendStockSuccess(n.newPromo))})).catch((function(e){return t(l.a.sendStockError(e))}))}},updateStock:function(e,t){return function(n){n(l.a.updateStockRequest()),Object(m.o)(e,t).then((function(e){var t=e.data;return n(l.a.updateStockSuccess(t.updatedPromo))})).catch((function(e){return n(l.a.updateStockError(e))}))}},deleteStock:function(e){return function(t){t(l.a.deleteStockRequest()),Object(m.b)(e).then((function(e){var n=e.data;return t(l.a.deleteStockSuccess(n.deletedPromo._id))})).catch((function(e){return t(l.a.deleteStockError(e))}))}},sendFile:function(e){return function(t){t(l.a.sendFileRequest()),Object(m.n)(e).then((function(e){var n=e.data;return t(l.a.sendFileSuccess(n.image.file))})).catch((function(e){return t(l.a.sendFileError(e))}))}},getStockById:function(e){return function(t){t(l.a.getStockByIdRequest()),Object(m.h)(e).then((function(e){var n=e.data;return t(l.a.getStockByIdSuccess(n.promo))})).catch((function(e){return t(l.a.getStockByIdError(e))}))}}},p=function(e){return e.stocks.items},f=function(e){return e.stocks.fileLink},k=function(e){return e.stocks.isLoading},E=function(e){return e.stocks.item},S=(n(84),n(225)),b=n.n(S);var _=function(){var e=document.getElementById("uploadeFile").value;e=e.replace(/\\/g,"/").split("/").pop(),document.getElementById("fileName").innerHTML="\u0418\u043c\u044f \u0444\u0430\u0439\u043b\u0430: "+e};var v={onSubmitFile:d.sendFile,onSubmit:d.sendStock,onCancel:l.a.cancelInput,onUpdate:d.updateStock},g=Object(u.b)((function(e){return{linkFile:f(e),isLoading:k(e),editStock:E(e)}}),v)((function(e){var t=e.onSubmitFile,n=e.onSubmit,l=e.onUpdate,m=e.onCancel,d=e.isLoading,p=e.linkFile,f=e.editStock,k=Object(a.useState)(!1),E=Object(o.a)(k,2),S=E[0],v=E[1];Object(a.useEffect)((function(){S&&setTimeout((function(){v(!1)}),3e3)}),[S]),Object(u.d)((function(e){return e.local.lang}));var g=Object(a.useState)(null),h=Object(o.a)(g,2),N=h[0],j=h[1],O=Object(a.useState)(""),I=Object(o.a)(O,2),C=I[0],L=I[1],A=Object(a.useState)(""),y=Object(o.a)(A,2),F=y[0],B=y[1],R=Object(a.useState)(""),w=Object(o.a)(R,2),U=w[0],D=w[1],P=Object(a.useState)(""),q=Object(o.a)(P,2),x=q[0],z=q[1],G=Object(a.useState)(""),T=Object(o.a)(G,2),H=T[0],J=T[1],M=Object(a.useState)(""),Q=Object(o.a)(M,2),X=Q[0],W=Q[1],Z=Object(a.useState)(null),K=Object(o.a)(Z,2),V=K[0],Y=K[1],$={success:"\u0410\u043a\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430",updated:"\u0410\u043a\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430",successFile:"\u0424\u0430\u0439\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d"},ee=Object(a.useState)(null),te=Object(o.a)(ee,2),ne=te[0],ae=te[1];Object(a.useEffect)((function(){ae(f),f&&(j(f.images),L(f.title.en),z(f.description.en),B(f.title.ru),J(f.description.ru),D(f.title.ukr),W(f.description.ukr))}),[f]);var re=function(e){e.preventDefault();var t=p||ne.images,a={title:{en:C,ru:F,ukr:U},description:{en:x,ru:H,ukr:X},images:t};if("update"===e.target.name)return l(ne._id,a),oe(),Y($.updated),void v(!0);Y($.success),v(!0),n(a),oe()},oe=function(){j(null),L(""),z(""),B(""),J(""),D(""),W(""),document.getElementById("formStocks").reset(),document.getElementById("fileName").innerHTML="",m()};return r.a.createElement(r.a.Fragment,null,S&&r.a.createElement(s.a,{message:V,confirm:!0}),d&&r.a.createElement(i.a,null),r.a.createElement("form",{className:b.a.form,id:"formStocks"},r.a.createElement("div",{className:p?b.a.fileUploadGreen:b.a.fileUpload},r.a.createElement("label",{className:b.a.uploadLabel},r.a.createElement("input",{type:"file",name:"file",id:"uploadeFile",className:b.a.uploadInput,onChange:function(e){var n=e.target;v(!0),_();var a=new FormData;a.append("file",n.files[0]),Y($.successFile),t(a)}}),r.a.createElement("span",{className:b.a.uploadSpan},N?r.a.createElement(c.a,{id:"file.uploaded"}):r.a.createElement(c.a,{id:"file.upload"})))),r.a.createElement("div",{id:"fileName",className:b.a.fileName}),r.a.createElement("div",null,r.a.createElement("h2",{className:b.a.title},r.a.createElement(c.a,{id:"promo.name"})),r.a.createElement("input",{name:"promoNameEn",id:"promoNameEn",placeholder:"Promo name on english",className:b.a.formInput,value:C,onChange:function(e){var t=e.target.value;return L(t)}}),r.a.createElement("input",{name:"promoNameRu",id:"promoNameRu",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c",className:b.a.formInput,value:F,onChange:function(e){var t=e.target.value;return B(t)}}),r.a.createElement("input",{name:"promoNameUkr",id:"promoNameUkr",placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0430\u043a\u0446\u0456\u0457 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u044e",className:b.a.formInput,value:U,onChange:function(e){var t=e.target.value;return D(t)}})),r.a.createElement("div",null,r.a.createElement("h2",{className:b.a.title},r.a.createElement(c.a,{id:"promo.about"})),r.a.createElement("input",{name:"promoDescriptionEn",id:"promoDescriptionEn",placeholder:"Promo description on english",className:b.a.formInput,value:x,onChange:function(e){var t=e.target.value;return z(t)}}),r.a.createElement("input",{name:"promoDescriptionRu",id:"promoDescriptionRu",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0430\u043a\u0446\u0438\u0438 \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u043e\u043c",className:b.a.formInput,value:H,onChange:function(e){var t=e.target.value;return J(t)}}),r.a.createElement("input",{name:"promoDescriptionUkr",id:"promoDescriptionUkr",placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0430\u043a\u0446\u0456\u0457 \u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u043e\u044e",className:b.a.formInput,value:X,onChange:function(e){var t=e.target.value;return W(t)}})),p&&!f&&r.a.createElement("button",{type:"submit",name:"onSubmit",onClick:re,className:b.a.formButton},r.a.createElement(c.a,{id:"promo.send"})),f&&r.a.createElement("button",{type:"submit",name:"update",onClick:re,className:b.a.formButton},r.a.createElement(c.a,{id:"promo.refresh"})),r.a.createElement("button",{type:"button",onClick:oe,className:"".concat(b.a.formButton," ").concat(b.a.formButtonReset)},r.a.createElement(c.a,{id:"reset form"}))))})),h=n(180),N=n(226),j=n.n(N);var O={onRemove:d.deleteStock,onChange:d.getStockById},I=Object(u.b)(null,O)((function(e){var t=e.images,n=e.title,a=e.description,o=e.id,u=e.onRemove,i=e.onChange;return r.a.createElement("div",{className:j.a.card},r.a.createElement("div",{className:j.a.descriptionContainer},r.a.createElement(h.LazyLoadImage,{className:j.a.cardImg,src:t}),r.a.createElement("div",null,r.a.createElement("h1",{className:j.a.title},n.en),r.a.createElement("p",{className:j.a.description},a.en),r.a.createElement("h1",{className:j.a.title},n.ru),r.a.createElement("p",{className:j.a.description},a.ru),r.a.createElement("h1",{className:j.a.title},n.ukr),r.a.createElement("p",{className:j.a.description},a.ukr))),r.a.createElement("div",{className:j.a.buttonContainer},r.a.createElement("button",{type:"button",className:j.a.button,onClick:function(){return u(o)}},r.a.createElement(c.a,{id:"promo.delete"})),r.a.createElement("button",{type:"button",className:j.a.button,onClick:function(){return function(e){window.scrollTo(0,0),i(e)}(o)}},r.a.createElement(c.a,{id:"promo.change"}))))})),C=n(227),L=n.n(C);var A={onFetchStocks:d.fetchStocks},y=Object(u.b)((function(e){return{elements:p(e)}}),A)((function(e){var t=e.elements,n=e.onFetchStocks;return Object(a.useEffect)((function(){n()}),[n]),t&&r.a.createElement("div",{className:L.a.cardList},t.map((function(e){var t=e.title,n=e.description,a=e.images,o=e._id;return r.a.createElement(I,{key:o,title:t,description:n,images:a,id:o})})))})),F=n(228),B=n.n(F);function R(){return r.a.createElement("div",{className:B.a.container},r.a.createElement(g,null),r.a.createElement(y,null))}}}]);
//# sourceMappingURL=12.cb884e9c.chunk.js.map