
let url="https://intense-atoll-23792.herokuapp.com/api/stor"

let login_data= async()=>{
    let res=await fetch (`${url}`)
    res=await res.json()
    //console.log(res)
}
login_data()

let login=document.getElementById("login_button")
login.addEventListener("click",function(){
    loginitem()
})

let  loginitem= async()=>{
    
   
let email=document.getElementById("email").value 
let password=document.getElementById("password").value

//console.log(email,password)

 if(email==""&&password==""){

    document.getElementById("b_email").innerText="Required"
    document.getElementById("b_password").innerText="Required"
   return
 }
 else if(email==""){
    
    document.getElementById("b_email").innerText="Required"
    document.getElementById("b_password").innerText=""
    return
 }
 else if(password==""){
   
    document.getElementById("b_password").innerText="Required"
    document.getElementById("b_email").innerText=""
    return
 }else if(email!=""&&password!=""){

   
    document.getElementById("b_email").innerText=""
    document.getElementById("b_password").innerText=""
  
 }
let sucess

 let wrong=false
 let res=await fetch (`${url}`)
 res=await res.json()
console.log(res)
 res.forEach((ele)=> {
   if(ele.email==email&&ele.password==password){
     sucess=true;
     localStorage.setItem("tog_log",JSON.stringify(ele))
     
      return;
   }

else if(ele.email!=email||ele.password!=password){
   wrong=true
   return;
}else{
 
    wrong=false
    return
}
 });
 if(sucess==true){

document.getElementById("wrong").innerText=""
window.location.href="../landPage/HTML/timer.html"
 }
 else if(wrong==true){
    document.getElementById("wrong").innerText="The email/password combination used was not found on the system."
 }
 
}

import { navbar,navbar2, footer } from '../Components/nav_footer.js'
document.querySelector("nav").innerHTML=navbar2()
document.getElementById("navbar").innerHTML=navbar()

document.getElementById("footer1").innerHTML=footer()


//document.getElementById("lognav").innerHTML=navbar()
document.getElementById("by_signup").addEventListener("click",myFunction11)
function myFunction11(){
window.location.href="signup.html"
}