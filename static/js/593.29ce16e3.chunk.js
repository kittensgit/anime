"use strict";(self.webpackChunkanime=self.webpackChunkanime||[]).push([[593],{2175:(e,a,n)=>{n.d(a,{Z:()=>d});var l=n(2791);const s=n.p+"static/media/ava.6e62f80f9c62022b7bf5.jpg",t="Form_form__H-TCY",r="Form_avatar_container__lzlur",i="Form_avatar_image__zvjC+",c="Form_plus__v23Ay",o="Form_file_input__xKoIw";var u=n(184);const d=e=>{let{title:a,isSignUp:n,handleClick:d}=e;const[h,p]=(0,l.useState)(""),[v,m]=(0,l.useState)(""),[_,g]=(0,l.useState)(""),[x,j]=(0,l.useState)(null),f=(0,l.useRef)(null),k=(0,l.useRef)(null);return(0,u.jsxs)("div",{className:t,children:[n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:r,onClick:()=>{f.current&&f.current.click()},children:[(0,u.jsx)("input",{type:"file",accept:"image/*",className:o,ref:f,onChange:e=>{var a;const n=null===(a=e.target.files)||void 0===a?void 0:a[0];if(n){const e=new FileReader;e.onload=e=>{var a;k.current&&(k.current.src=null===(a=e.target)||void 0===a?void 0:a.result)},e.readAsDataURL(n),j(n)}}}),(0,u.jsx)("img",{className:i,src:s,alt:"Avatar",ref:k}),(0,u.jsx)("div",{className:c,children:"+"})]}),(0,u.jsx)("label",{children:"Username"}),(0,u.jsx)("input",{value:_,onChange:e=>g(e.target.value),placeholder:"Enter username",type:"text"})]}),(0,u.jsx)("label",{children:"Email"}),(0,u.jsx)("input",{value:h,onChange:e=>p(e.target.value),placeholder:"Enter email",type:"email"}),(0,u.jsx)("label",{children:"Password"}),(0,u.jsx)("input",{value:v,onChange:e=>m(e.target.value),placeholder:"Enter password",type:"password"}),(0,u.jsx)("button",{onClick:()=>d(h,v,_,x),children:a})]})}},9911:(e,a,n)=>{n.d(a,{T:()=>l});const l=n(4420).I0},870:(e,a,n)=>{n.r(a),n.d(a,{default:()=>_});var l=n(2791),s=n(7689),t=n(8011),r=n(276),i=n(1087),c=n(2175);const o="SignUp_signup__rFBJg",u="SignUp_link__x2niM";var d=n(184);const h=e=>{let{handleClick:a}=e;return(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("h2",{children:"Sign Up"}),(0,d.jsx)(c.Z,{isSignUp:!0,title:"Sign Up",handleClick:a}),(0,d.jsxs)(i.rU,{className:u,to:"/login",children:["Already have an account? ",(0,d.jsx)("span",{children:"Log in"})]})]})};var p=n(9423),v=n(9911),m=n(4450);const _=()=>{const e=(0,s.s0)(),a=(0,v.T)(),[n,i]=(0,l.useState)(!1);return(0,d.jsx)("div",{className:"container",children:n?(0,d.jsx)(p.Z,{}):(0,d.jsx)(h,{handleClick:async(n,l,s,c)=>{const o=(0,t.v0)(),u=(0,r.cF)();try{i(!0);const{user:d}=await(0,t.Xb)(o,n,l);let h=null;if(c){const e=(0,r.iH)(u,"user_photos/".concat(d.uid));await(0,r.KV)(e,c),h=await(0,r.Jt)(e)}null!==h&&(await(0,t.ck)(d,{displayName:s,photoURL:h}),a((0,m.av)({email:d.email,id:d.uid,token:d.refreshToken,username:s,photo:h})),e("/profile"))}catch(d){console.error(d)}finally{i(!1)}}})})}}}]);
//# sourceMappingURL=593.29ce16e3.chunk.js.map