"use strict";(self.webpackChunkanime=self.webpackChunkanime||[]).push([[792],{4091:(e,s,a)=>{a.d(s,{Z:()=>j});var c=a(7689),n=a(2822);const t="AnimeCard_card__MN31s",i="AnimeCard_front__BX9l2",r="AnimeCard_back__+XidZ",l="AnimeCard_img__36FKN",d="AnimeCard_title__NN5zZ",m="AnimeCard_caption__DcLbc",o="AnimeCard_btn__MSUHx";var _=a(184);const h=e=>{let{genre:s,title:a,year:h,img:u,id:x}=e;const j=(0,c.TH)();return(0,_.jsxs)("div",{className:t,children:[(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("img",{className:l,src:u,alt:a}),(0,_.jsx)("h5",{className:d,children:a}),(0,_.jsxs)("p",{className:m,children:[h||"-",", ",s]})]}),(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("h5",{className:d,children:a}),(0,_.jsxs)("p",{className:m,children:[h||"-",", ",s]}),(0,_.jsx)(n.Z,{className:o,to:j.pathname.includes("/catalog")?"".concat(x):"/catalog/".concat(x),children:"Learn more"})]})]})},u="AnimeCards_cards__udoxo",x="AnimeCards_title__u5YmA",j=e=>{let{title:s,animelist:a}=e;return(0,_.jsxs)("div",{children:[s&&(0,_.jsx)("h5",{className:x,children:s}),(0,_.jsx)("div",{className:u,children:a.map((e=>{var s;return(0,_.jsx)(h,{genre:e.genres?null===(s=e.genres[0])||void 0===s?void 0:s.name:"",year:e.year,title:e.title,img:e.images.jpg.image_url,id:e.mal_id},e.mal_id)}))})]})}},2822:(e,s,a)=>{a.d(s,{Z:()=>i});a(2791);var c=a(1087);const n="Button_btn__53Zcg";var t=a(184);const i=e=>{let{to:s,children:a,className:i}=e;return(0,t.jsx)(c.rU,{to:s,children:(0,t.jsx)("button",{className:n+" "+i,children:a})})}},622:(e,s,a)=>{a.d(s,{Z:()=>i});var c=a(2791),n=a(2685),t=a(4780);const i=e=>{const{id:s}=(0,t.a)(),a=(0,n.N8)(),[i,r]=(0,c.useState)([]);return(0,c.useEffect)((()=>{s&&(async()=>{try{const c=(0,n.iH)(a,"users/".concat(s,"/").concat(e,"/animelist")),t=await(0,n.U2)(c);if(t.exists()){const e=t.val(),s=Object.values(e);r(s)}else console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0435\u0449\u0435 \u043d\u0435 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u043b \u0430\u043d\u0438\u043c\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 ".concat(e)),r([])}catch(c){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0441\u043f\u0438\u0441\u043a\u0435 ".concat(e," \u0430\u043d\u0438\u043c\u0435:"),c),r([])}})()}),[s,e,a]),i}},7792:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var c=a(4091),n=a(622),t=a(184);const i=()=>{const e=(0,n.Z)("towatch");return(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,{animelist:e})})}}}]);
//# sourceMappingURL=792.cad99535.chunk.js.map