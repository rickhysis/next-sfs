(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return s(4575)}])},6933:function(e,r,s){"use strict";var n=s(5893),i=s(3100),t=s(204),l=s(9008),o=s.n(l);s(7294);var a=s(3299),d=s(1163);r.Z=e=>{let{children:r,pageTitle:s=" SFS DEMO"}=e,l=(0,d.useRouter)(),{status:u}=(0,a.useSession)({required:!0});return"authenticated"===u&&l.push("/users"),(0,n.jsxs)(i.xu,{h:"100vh",w:"full",children:[(0,n.jsx)(o(),{children:(0,n.jsx)("title",{children:s})}),(0,n.jsx)("main",{children:(0,n.jsx)(t.k,{direction:"column",h:"100vh",children:(0,n.jsx)(t.k,{flex:"1",children:(0,n.jsx)(i.xu,{width:{base:"full",md:"100%"},children:r})})})})]})}},1846:function(e,r,s){"use strict";var n=s(5893),i=s(654),t=s(6177),l=s(8129),o=s(9056),a=s(438);s(7294),r.Z=e=>{let{label:r,inputProps:s,isDisabled:d,isRequired:u,paddingTop:c}=e,{field:{onChange:h,value:p},error:g}=(0,a.Wh)();return(0,n.jsxs)(i.NI,{isInvalid:!!g,pt:null!=c?c:1,children:[(0,n.jsx)(t.l,{children:r}),(0,n.jsx)(l.I,{...s,w:"100%",disabled:void 0!==d&&"true",onChange:e=>{h(e.target.value)},value:null!=p?p:"",required:u,type:"Password"===r||"Confirmation Password"===r?"password":"text",color:"gray.700",_hover:{borderColor:"green.700"}}),(0,n.jsx)(o.J1,{children:null==g?void 0:g.errorMessage})]})}},6665:function(e,r,s){"use strict";s.d(r,{I:function(){return l}});var n=s(3977),i=s(1259),t=s(9828);(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyAWxHQ4Wfc7z_5H8OLrl9mJuGv4dIb88wE",authDomain:"sfs-db-e2130.firebaseapp.com",projectId:"sfs-db-e2130",storageBucket:"sfs-db-e2130.appspot.com",messagingSenderId:"609222608047",appId:"1:609222608047:web:0293d99168dd1622c1c05a",measurementId:"G-8V857YV961"}),(0,t.ad)();let l=(0,i.v0)()},4575:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return I}});var n=s(5893);s(7294);var i=s(6933),t=s(3194),l=s(3100),o=s(8911),a=s(7754),d=s(3838),u=s(9222),c=s(438),h=s(1604),p=s(1846);let g=[[h.z.string(),p.Z]],m=(0,c.DD)(g,{FormComponent:e=>{let{onSubmit:r,children:s,loading:i}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("form",{onSubmit:r,children:[s,(0,n.jsx)(u.z,{mt:4,width:"full",colorScheme:"green",type:"submit",isLoading:i,children:"Sign in"})]})})}}),f=h.z.object({email:h.z.string({required_error:"Email is required"}),password:h.z.string({required_error:"Password is required"})});var x=s(1259),w=s(6665),j=s(3299),b=()=>{let e=(0,t.p)();return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.xu,{bg:"white",h:"full",w:"full",display:"flex",alignItems:"center",flexDirection:"column",mt:"6",p:"4",children:(0,n.jsxs)(l.xu,{w:"md",p:{base:8,md:10},children:[(0,n.jsx)(o.x,{fontSize:28,align:"center",color:"green.600",fontWeight:900,children:"Sign In"}),(0,n.jsx)(o.x,{fontSize:14,align:"center",fontWeight:700,children:"Input your email and password to sign in"}),(0,n.jsx)(m,{schema:f,onSubmit:r=>{(0,x.e5)(w.I,r.email,r.password).then(s=>{console.log(s),e({title:"You have successfully logged in",position:"top",isClosable:!0}),(0,j.signIn)("credentials",{email:r.email,password:r.password,redirect:!0,callbackUrl:"/users"})}).catch(r=>{let s=r.code,n=r.message;"auth/wrong-password"==s?e({title:"Wrong password",position:"top",isClosable:!0}):"auth/user-not-found"==s?e({title:"User not found/registered",position:"top",isClosable:!0}):e({title:n,position:"top",isClosable:!0})})},defaultValues:{email:"",password:""},props:{email:{label:"Email",inputProps:{placeholder:"Input your email address"}},password:{label:"Password",inputProps:{placeholder:"Input your password"}}}}),(0,n.jsxs)(a.M,{py:5,children:[(0,n.jsx)("span",{style:{marginRight:"0.5rem"},children:"Don't have account?"}),(0,n.jsx)(d.r,{color:"green.600",href:"/register",fontWeight:700,children:"Sign up"})]})]})})})};let v=()=>(0,n.jsx)(b,{});v.getLayout=e=>(0,n.jsx)(i.Z,{children:e});var I=v}},function(e){e.O(0,[16,737,225,678,774,888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);