
let isLogin=false;
document.addEventListener("DOMContentLoaded",()=>{
const f=document.getElementById("authForm");
const t=document.getElementById("toggleAuth");
const title=document.getElementById("formTitle");
const btn=document.getElementById("authBtn");
const d=document.getElementById("userDisplay");
t.onclick=()=>{isLogin=!isLogin;title.innerText=isLogin?"Login":"Signup";btn.innerText=title.innerText;t.innerText=isLogin?"New user? Signup":"Already have an account? Login";};
f.onsubmit=e=>{e.preventDefault();const e1=f.email.value,p=f.password.value;
if(!isLogin){localStorage.setItem("authUser",JSON.stringify({e1,p}));alert("Signup success");t.click();}
else{const s=JSON.parse(localStorage.getItem("authUser"));s&&s.e1===e1&&s.p===p?(localStorage.setItem("user",e1),d.innerText="Welcome "+e1):alert("Invalid login");}};
});
