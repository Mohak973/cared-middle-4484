var data = localStorage.getItem("calendar")
console.log(data)
data = JSON.parse(data)

draw(data)

var date = new Date
function draw(data){
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    nowIndicator : true,
    initialDate: date,
    themeSystem: 'bootstrap',
    headerToolbar: {
        left: 'prev today next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
    },
    events: data,
    });

    calendar.render();
}

