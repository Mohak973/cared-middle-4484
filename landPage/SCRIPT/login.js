var login__btn = document.querySelector(".login__btn")
login__btn.addEventListener("click", validation)

function validation(){

    var user = document.querySelector(".username").value
    var email = document.querySelector(".email").value
    var password = document.querySelector(".password").value

    var obj = {
        username : user,
        email : email,
        password : password
    }
    var objString = JSON.stringify(obj)

    if(user == "" || email == "" || password == "")
    {
        window.alert("Invalid inputs")
    }
    else
    {
        localStorage.setItem("user", objString)
        window.location = "../HTML/timer.html"
    }
}

