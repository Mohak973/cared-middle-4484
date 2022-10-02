const inp = document.getElementById('email');
const AInput = document.getElementById("password");
let show= document.getElementById("show_info")
inp.addEventListener('click', function onClick(event) {
    event.preventDefault();
  const input = document.getElementById('email');


    input.style.backgroundColor = "rgb(252, 229, 216)";
    input.style.color = "black"

});

AInput.addEventListener("click",function onClick(event){
    event.preventDefault();
  const AInput = document.getElementById("password");
    AInput.style.backgroundColor = 'rgb(252, 229, 216)';
    AInput.style.color = "black"

});





let form = document.querySelector("form");


// let signupArr  = JSON.parse(localStorage.getItem("btn")) || [];

form.addEventListener("submit",function(event){
  event.preventDefault();
  let obj = {
    email:form.email.value,
    password:form.password.value,
  }
  console.log(obj)
  
  singnu_data(obj)
  
});


let url="https://intense-atoll-23792.herokuapp.com/api/stor"



let  singnu_data=async(obj)=>{
  let pres;
   let aout=await fetch (url)
  aout=await aout.json()

aout.forEach((ele) => {
  if(ele.password==obj.password){
    pres=true
    return
  }
});

if(pres){
  alert("alred")
}
else{



    let res= await fetch(`${url}`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json',
        }
        
    })

    res=await res.json()
    console.log(res)
    window.location.href="login.html"
   show.style.display="none"
  }
}



document.getElementById("password").addEventListener("input", myFunction);
let s1="abcdefghijklmnopqrstuvwxyz"
let s2="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let low={}
let up={}

for(var i=0;i<=26;i++){
low[i+1]=s1[i]
up[i+1]=s2[i]
}





console.log(low,up)
function myFunction() {
    show.style.display="block"
    let count=document.getElementById("char_number")
    
    let password=document.getElementById("password").value
  let lowleter;
  let upleter;
 for(var i=1;i<=26;i++){
    if(password.includes(up[i])){
        upleter=true;
        console.log(up[i])
      }
      if(password.includes(low[i])){
        lowleter=true
      }
    console.log(up[i])
      
 }
 let p= /[0-9]/.test(password)

 if(p){
count.style.color="green"
 }
 else if(!p){
    count.style.color="rgba(0, 0, 0, 0.397)" 
 }
 if(lowleter&&upleter){
document.getElementById("charleter").style.color="green"
 }
 else if(lowleter!=true||upleter!=true){
    document.getElementById("charleter").style.color="rgba(0, 0, 0, 0.397)"
 }
 if(password.length>=8){
    document.getElementById("chacrcount").style.color="green"
 }else if(password.length<8){
    document.getElementById("chacrcount").style.color="rgba(0, 0, 0, 0.397)"
 }
 console.log(lowleter,upleter)
}

document.getElementById("password").addEventListener("blur",hide)
function hide(){
  
    show.style.display="none"
}





