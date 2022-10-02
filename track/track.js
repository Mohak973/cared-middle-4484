let state = false;
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("hide1").style.display = "block"
        document.getElementById("hide2").style.display = "none"
        state = false;
    }
    else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("hide2").style.display = "block"
        document.getElementById("hide1").style.display = "none"
        state = true;
    }
}
//********************************Stop_watch*************************************//

let hr = 0;
let min = 0;
let sec = 0;



setTimeout(() => {
    setInterval(() => {
        start()
    }, 1000)
    setTimeout(() => {
        document.getElementById("play").style.display = "none";
        document.getElementById("stop").style.display = "block"
        setTimeout(() => {
            document.getElementById("hand").style.display = "none";
            document.getElementById("timer_p").style.display = "block";
        }, 1700)
    }, 1000)
}, 2000)

setTimeout(() => {
    document.getElementById("hand").style.display = "block";
}, 1000)


function start() {

    sec++;
    if (sec == 60) {
        min++;
        sec = 0;
    }
    if (min == 60) {
        hr++;
        min = 0;
        sec = 0;
    }
    document.getElementById("stop_watch").innerHTML = null
    document.getElementById("stop_watch").innerHTML = `${hr < 10 ? "0" + hr : hr}:${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`


}


document.getElementById("password").addEventListener("focus",()=>{
    document.getElementById("password_alert").style.display="block"
})
document.getElementById("password").addEventListener("blur",()=>{
    document.getElementById("password_alert").style.display="none"
})


document.getElementById("password").addEventListener("input",()=>{

    let password_check=false;
    let password = document.getElementById("password").value
    if(password.length>=8 ){
     document.getElementById("policy-length").style.color="green"
     if(/[A-Z]/.test(password) && /[a-z]/.test(password)){
        document.getElementById("policy-uppercase").style.color="green"
        if(/[0-9]/.test(password)){
            document.getElementById("policy-number").style.color="green"
            password_check=true;
        }else{
            document.getElementById("policy-number").style.color="red"
        }
     }
     else{
        document.getElementById("policy-uppercase").style.color="red"
     }
 
 
    }
    else{
        document.getElementById("policy-length").style.color="red"
 
    }

})









