var username = document.querySelector(".team__sectionAb__name__user")
var email = document.querySelector(".team__sectionAb__name__email")

var user = JSON.parse(localStorage.getItem("user"))

username.innerHTML = user.username
email.innerHTML = user.email

