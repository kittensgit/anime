"use strict";(self.webpackChunkanime=self.webpackChunkanime||[]).push([[894],{2175:(e,a,n)=>{n.d(a,{Z:()=>d});var l=n(2791);const s=n.p+"static/media/ava.6e62f80f9c62022b7bf5.jpg",t="Form_form__H-TCY",r="Form_avatar_container__lzlur",i="Form_avatar_image__zvjC+",c="Form_plus__v23Ay",o="Form_file_input__xKoIw";var u=n(184);const d=e=>{let{title:a,isSignUp:n,handleClick:d}=e;const[h,v]=(0,l.useState)(""),[m,p]=(0,l.useState)(""),[_,g]=(0,l.useState)(""),[j,x]=(0,l.useState)(null),f=(0,l.useRef)(null),k=(0,l.useRef)(null);return(0,u.jsxs)("div",{className:t,children:[n&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:r,onClick:()=>{f.current&&f.current.click()},children:[(0,u.jsx)("input",{type:"file",accept:"image/*",className:o,ref:f,onChange:e=>{var a;const n=null===(a=e.target.files)||void 0===a?void 0:a[0];if(n){const e=new FileReader;e.onload=e=>{var a;k.current&&(k.current.src=null===(a=e.target)||void 0===a?void 0:a.result)},e.readAsDataURL(n),x(n)}}}),(0,u.jsx)("img",{className:i,src:s,alt:"Avatar",ref:k}),(0,u.jsx)("div",{className:c,children:"+"})]}),(0,u.jsx)("label",{children:"Username"}),(0,u.jsx)("input",{value:_,onChange:e=>g(e.target.value),placeholder:"Enter username",type:"text"})]}),(0,u.jsx)("label",{children:"Email"}),(0,u.jsx)("input",{value:h,onChange:e=>v(e.target.value),placeholder:"Enter email",type:"email"}),(0,u.jsx)("label",{children:"Password"}),(0,u.jsx)("input",{value:m,onChange:e=>p(e.target.value),placeholder:"Enter password",type:"password"}),(0,u.jsx)("button",{onClick:()=>d(h,m,_,j),children:a})]})}},9911:(e,a,n)=>{n.d(a,{T:()=>l});const l=n(4420).I0},6709:(e,a,n)=>{n.r(a),n.d(a,{default:()=>v});var l=n(7689),s=n(8011),t=n(1087),r=n(2175);const i="Login_login__SiAzS",c="Login_link__5WF+X";var o=n(184);const u=e=>{let{handleClick:a}=e;return(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("h2",{children:"Login"}),(0,o.jsx)(r.Z,{title:"Log In",handleClick:a}),(0,o.jsxs)(t.rU,{className:c,to:"/sign-up",children:["Don't have an account? ",(0,o.jsx)("span",{children:"Sign Up"})]})]})};var d=n(9911),h=n(4450);const v=()=>{const e=(0,l.s0)(),a=(0,d.T)();return(0,o.jsx)("div",{className:"container",children:(0,o.jsx)(u,{handleClick:(n,l)=>{const t=(0,s.v0)();(0,s.e5)(t,n,l).then((n=>{let{user:l}=n;a((0,h.av)({email:l.email,id:l.uid,token:l.refreshToken,username:l.displayName,photo:l.photoURL})),e("/profile")})).catch(console.error)}})})}}}]);
//# sourceMappingURL=894.7b4c4fe7.chunk.js.map