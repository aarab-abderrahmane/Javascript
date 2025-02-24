document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#header .day-name').forEach(day => {
        day.style.cursor = "pointer";

        day.addEventListener('click', function () {
            all_day = document.querySelectorAll('#header .day-name')

            all_day.forEach(d => d.style.backgroundColor = "");
            document.querySelectorAll('.day').forEach(d => d.style.backgroundColor = "");

            

            // if this.backgroundColor === "rga(0,255,0)"{

            // }

            this.style.backgroundColor = "green";

            let clickedDayName = this.textContent.trim();
            let columnIndex = getDayIndex(clickedDayName);

            let days = document.querySelectorAll('.day');
            days.forEach((dayCell, index) => {
                let dayOfWeek = index % 7; 

                if (dayOfWeek === columnIndex) {
                    dayCell.style.backgroundColor = "lightgreen"; 
                }
            });
        });
    });


    function getDayIndex(dayName) {
        const days = ["الاتنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعة", "السبت", "الاحد"]; // المصفوفة معكوسة
        console.log(days.indexOf(dayName))
        return days.indexOf(dayName);
    }

    document.getElementById('Day').textContent= new Date().getDate();
    
    document.getElementById('Month').textContent = (function(){

        const monthsArabic = [
            "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
            "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
        ];

        return monthsArabic[new Date().getMonth()];
        
    })();

    tooday = new Date().getDay();
    let indexMap = [0,6,5,4,3,2,1];
    let index = indexMap[tooday];
    document.querySelectorAll('#header .day-name')[index].style.backgroundColor="red"
    // Array.from(document.querySelectorAll('#header .day-name')).reverse()[tooday-1].style.backgroundColor="red";

});












function generateRamadanCalendar(startDate){

    let daysArray=[];

    let container = document.getElementById('days-container');
    container.innerHTML="";
    let firstDay = new Date(startDate).getDay();

    console.log(firstDay)
    let totalDays = 30;
    let currentDay=1 ; 

    let today = new Date();
    let start = new Date(startDate);
    // let diffDays= Math.floor((today -start)/(1000*60*60*24))
    let diffDays = Math.floor((today.getDate())-(start.getDate()))


    if (diffDays < 0){
        alert('رمضان لم يحن بعد');
    }
        
    for (let i=1 ; i< firstDay;i++){
        daysArray.push("");
    }

    for (let i=0;i < totalDays;i++){
        Day_number = currentDay.toString().padStart(2,"0");

        // if (i < diffDays){
        //     emtyDiv.classList.add("past-day")
        // }

        daysArray.push(Day_number);
        currentDay++;
    };

    container.innerHTML=daysArray.map(day => {
        return `<div class="day">${day}</div>`;
    }).join("");
}


function updateCalendar() {
    let startDate = document.getElementById("start-date").value;
    if (!startDate) {
        alert("Please select a start date!"); 
        return;
    }

    generateRamadanCalendar(startDate);
    DayColor();

};

function DayColor(){
    today_index= new Date().getDay();
    console.log(today_index);
    days= document.querySelectorAll('.day-name');

    let adjustedIndex = (today_index === 0) ? 6 : today_index -1 ;
    
    if (adjustedIndex >= 0 && adjustedIndex < days.length){
        days[adjustedIndex].style.backgroundColor="green"
    }


}


document.getElementById('start-date').onchange=updateCalendar;

