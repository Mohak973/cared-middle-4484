let url="https://intense-atoll-23792.herokuapp.com/api/stor"
let singnup=document.getElementById("signup")
singnup.addEventListener("click",function(){
    singnu_data()
})

let  singnu_data=async ()=>{
    let email=document.getElementById("email").value 
    let password=document.getElementById("password").value

    let obj={
        email,
        password,
    }

    let res= await fetch(`${url}`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json',
        }
        
    })

    res=await res.json()
    console.log(res)
    alert(res)
}




