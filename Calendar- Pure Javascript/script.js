const dateFormat = new Date();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const monthend = {
    "Jan": 31,
    "Feb": 28,
    "Mar": 31,
    "Apr": 30,
    "May": 31,
    "Jun": 30,
    "Jul": 31,
    "Aug": 31,
    "Sep": 30,
    "Oct": 31,
    "Nov": 30,
    "Dec": 31
}

const getMonth = document.getElementById("month")
getMonth.innerHTML = months[dateFormat.getMonth()];
const getYear = document.getElementById("year")
getYear.innerHTML = dateFormat.getFullYear();

const getTime = document.getElementById('time')


var currentMonth = getMonth.innerHTML;
var currentYear = getYear.innerHTML;

setDate();
function setDate() {
    var currentMonthStartingDay = new Date(currentYear + "-" + currentMonth + "-01").getDay();
    document.getElementById("start").style = "grid-column-start:" + currentMonthStartingDay;

    isLeapYear(currentYear);
    var totalDays = monthend[currentMonth];

    for(i = totalDays ; i <= 31 ; i++){
        document.getElementById(i).style = "display:none";
    }


}


function isLeapYear(y) {
    if (y % 4 === 0) {
        if (y % 100 == 0) {
            if (y % 400 == 0) {
                monthend["Feb"] = 29;
            }
            
        }else monthend["Feb"] = 29;;
    }

   
}

function updateMonth(n) {

    if (n == 1) {
        var monthIndex = currentMonth === 'Dec' ? -1 : months.indexOf(currentMonth);
        getMonth.innerHTML = months[monthIndex + 1];

    } else if (n == -1) {
        var monthIndex = currentMonth === 'Jan' ? 12 : months.indexOf(currentMonth);
        getMonth.innerHTML = months[monthIndex - 1];
    }

    currentMonth = getMonth.innerHTML;
    setDate();
}

function updateYear(n) {
    getYear.innerHTML = Number(currentYear) + n;
    currentYear = getYear.innerHTML;
    setDate();
}

function currentTime() {
    let date = new Date();
    getTime.innerText = date.toLocaleTimeString();
    setInterval(currentTime, 1000);
}
currentTime();

var today = dateFormat.getDate();


