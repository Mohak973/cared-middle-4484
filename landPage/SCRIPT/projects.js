var localData = JSON.parse(localStorage.getItem("projectList"))
if(localData == null)
{
    localStorage.setItem("projectList", JSON.stringify([]))
}
else if(localData.length != 0 )
{
    document.querySelector(".projects__content").style.display = "none"
    showProjects()
}

document.querySelector(".reports__nav__bottom__team").addEventListener("click", teamSearch)
document.querySelector(".reports__nav__bottom__client").addEventListener("click", clientSearch)
document.querySelector(".reports__nav__bottom__project").addEventListener("click", projectSearch)

function teamSearch(){
    console.log(event.currentTarget)
    var teamMenu = document.querySelector(".reports__teamMenu")
    teamMenu.classList.toggle("reports__teamMenu__show")
}
function clientSearch(){
    var clientMenu = document.querySelector(".reports__clientMenu")
    clientMenu.classList.toggle("reports__clientMenu__show")
}
function projectSearch(){
    var projectMenu = document.querySelector(".reports__projectMenu")
    projectMenu.classList.toggle("reports__projectMenu__show")
}

window.onclick = function(event){
    if(!event.target.matches(".reports__nav__bottom__team__a"))
    {
        var teamMenu = document.querySelector(".reports__teamMenu")
        if(teamMenu.classList.contains("reports__teamMenu__show"))
        {
            teamMenu.classList.remove("reports__teamMenu__show")
        }
    }

    if(!event.target.matches(".reports__nav__bottom__client__a"))
    {
        var clientMenu = document.querySelector(".reports__clientMenu")
        if(clientMenu.classList.contains("reports__clientMenu__show"))
        {
            clientMenu.classList.remove("reports__clientMenu__show")
        }
    }

    if(!event.target.matches(".reports__nav__bottom__project__a"))
    {
        var projectMenu = document.querySelector(".reports__projectMenu")
        if(projectMenu.classList.contains("reports__projectMenu__show"))
        {
            projectMenu.classList.remove("reports__projectMenu__show")
        }
    }
}


document.querySelector(".projects__nav__top__btn").addEventListener("click", popup__show)

function popup__show()
{
    var popup = document.querySelector(".popup__container")
    popup.classList.toggle("popup__show")
}

document.querySelector(".popup__cancel").addEventListener("click", popup__remove)

function popup__remove()
{
    var popup = document.querySelector(".popup__container")
    popup.classList.remove("popup__show")

    if(document.querySelector(".popup__projectName__validation").classList.contains("popup__projectName__validation__alert"))
    {
        document.querySelector(".popup__projectName__validation").classList.remove("popup__projectName__validation__alert")
        document.querySelector(".popup__projectName").style.border = "1px solid #d9d9d9"
    }
}

document.querySelector(".popup__submit").addEventListener("click", popup__submit)

function popup__submit()
{
    var projectName = document.querySelector(".popup__projectName").value
    if(projectName != "")
    {
        var team = document.querySelector(".popup__workspace").value
        var client = document.querySelector(".popup__client").value
    
        var get = JSON.parse(localStorage.getItem("projectList"))
    
        get.push({projectName : projectName , team : team, client : client})
        localStorage.setItem("projectList", JSON.stringify(get))
    
        var popup = document.querySelector(".popup__container")
        popup.classList.remove("popup__show")
    
        showProjects()
        document.querySelector(".popup__projectName").style.border = "1px solid #d9d9d9"
        document.querySelector(".popup__projectName__validation").classList.remove("popup__projectName__validation__alert")
    }
    else{
        document.querySelector(".popup__projectName").style.border = "1px solid red"
        document.querySelector(".popup__projectName__validation").classList.add("popup__projectName__validation__alert")
    }
    
    
}


function showProjects()
{
    var projectList = JSON.parse(localStorage.getItem("projectList"))
    var html = `
        <div class = "projectListHeader projects__flex">
            <div class = "projectList__name"><strong>PROJECT</strong></div>
            <div  class = "projectList__client"><strong>CLIENT</strong></div>
            <div class = "projectList__status"><strong>STATUS</strong></div>
            <div class = "projectList__team"><strong>TEAM</strong></div>
        </div>
    `

    projectList.forEach((e,i) => {
        html += `
        <div class = "projectListItem projects__flex">
            <div class = "projectList__name">${e.projectName}</div>
            <div class = "projectList__client">${e.client}</div>
            <div class = "projectList__status">0 h</div>
            <div class = "projectList__team"><strong>${e.team}</strong></div>
            <button class = "projectList__delete" onclick = popupListItem__delete(${i})>DELETE</button> 
        </div>
        `
    })

    var projects__content__container = document.querySelector(".projects__content__container")
    projects__content__container.innerHTML = html
}

function popupListItem__delete(e)
{
    var projectList = JSON.parse(localStorage.getItem("projectList"))
    projectList.splice(e, 1)
    localStorage.setItem("projectList", JSON.stringify(projectList))

    showProjects()
}


