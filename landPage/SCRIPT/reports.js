document.querySelector(".reports__nav__bottom__team").addEventListener("click", teamSearch)
document.querySelector(".reports__nav__bottom__client").addEventListener("click", clientSearch)
document.querySelector(".reports__nav__bottom__project").addEventListener("click", projectSearch)
document.querySelector(".reports__nav__bottom__tag").addEventListener("click", tagSearch)
document.querySelector(".reports__nav__bottom__description").addEventListener("click", descriptionSearch)

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
function tagSearch(){
    var tagMenu = document.querySelector(".reports__tagMenu")
    tagMenu.classList.toggle("reports__tagMenu__show")
}
function descriptionSearch(){
    var descriptionMenu = document.querySelector(".reports__descriptionMenu")
    descriptionMenu.classList.toggle("reports__descriptionMenu__show")
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

    if(!event.target.matches(".reports__nav__bottom__tag__a"))
    {
        var tagMenu = document.querySelector(".reports__tagMenu")
        if(tagMenu.classList.contains("reports__tagMenu__show"))
        {
            tagMenu.classList.remove("reports__tagMenu__show")
        }
    }

    if(!event.target.matches(".reports__nav__bottom__description__a"))
    {
        var descriptionMenu = document.querySelector(".reports__descriptionMenu")
        if(descriptionMenu.classList.contains("reports__descriptionMenu__show"))
        {
            descriptionMenu.classList.remove("reports__descriptionMenu__show")
        }
    }
}


var myChart = document.getElementById("reports__barChart").getContext("2d")

var barChart = new Chart(myChart, {
    type: 'bar',

    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            backgroundColor: "#6ACCF9",
            data: [3, 6, 5, 2, 9, 8, 12],
            
        }]
    },

    options: {
        legend: {
            display : false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    stepSize: 2
                }
            }]
        }
    }
});