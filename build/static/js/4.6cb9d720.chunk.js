(this.webpackJsonppizza_project=this.webpackJsonppizza_project||[]).push([[4],{202:function(e,t,o){e.exports={promoList:"PromoList_promoList__3jT4m"}},203:function(e,t,o){e.exports={promoListItem:"PromoListItem_promoListItem__1kDsi",promoListItemWrapper:"PromoListItem_promoListItemWrapper__QphYf",promoListItemTextWrapper:"PromoListItem_promoListItemTextWrapper__1-kRJ",promoName:"PromoListItem_promoName__h8JtO",promoText:"PromoListItem_promoText__2oM2P"}},204:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return u}));var r=o(16),a=o(0),m=o.n(a),i=o(19),s=o.n(i),p=o(202),n=o.n(p),c=o(203),l=o.n(c);var _=function(e){var t=e._id,o=e.images,r=e.title,a=e.description;return m.a.createElement("li",{className:l.a.promoListItem,key:t},m.a.createElement("div",{className:l.a.promoListItemWrapper},m.a.createElement("img",{className:l.a.promoListItemImg,width:"280",height:"190",src:o,alt:""}),m.a.createElement("div",{className:l.a.promoListItemTextWrapper},m.a.createElement("h2",{className:l.a.promoName},r),m.a.createElement("p",{className:l.a.promoText},a))))};function u(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),o=t[0],i=t[1];return Object(a.useEffect)((function(){s.a.get("/promo").then((function(e){var t=e.data;return i(t.promo)}))}),[]),m.a.createElement("ul",{className:n.a.promoList},o.map((function(e){var t=e._id,o=e.images,r=e.title,a=e.description;return m.a.createElement(_,{key:t,images:o,title:r,description:a})})))}}}]);
//# sourceMappingURL=4.6cb9d720.chunk.js.map