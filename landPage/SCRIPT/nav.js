var showmore_btn = document.getElementById("nav__container__scroll__show-more__manage")
var newInfo = document.getElementById("nav__container__scroll__show-more")
var scroll = document.getElementsByClassName("nav__container__scroll")

showmore_btn.addEventListener("click", showMore)

function showMore() {



    if (newInfo.style.display === "none") {
        newInfo.style.display = 'block'
        showmore_btn.innerHTML = ` <div class = "nav__container__flexbox"> <i class="fas fa-angle-up"></i> &nbsp <div>Show less </div> </div>`

    } else {

        showmore_btn.innerHTML = ` <div class = "nav__container__flexbox">  <i class="fas fa-angle-down"></i> &nbsp<div>Show more </div> </div>`
        newInfo.style.display = 'none'

    }

}