document.querySelectorAll('#header div').forEach(day => {

    day.style.cursor="pointer"
    day.addEventListener('click' , function() {
        document.querySelectorAll('#header div').forEach(d => {
            d.style.backgroundColor=" #838585"
        });

        this.style.backgroundColor="#b31520"
    })
})



function generateRamadanCalendar(startDate){
    let container = document.getElementById('days-container');
    container.innerHTML="";
    let firstDay = new Date(startDate).getDay();
    let totalDays = 30;
    let currentDay=1 ; 

    let today = new Date();
    let start = new Date(startDate);
    let diffDays= Math.floor((today -start)/(1000*60*60*24))

    if (diffDays < 0){
        alert('رمضان لم يحن بعد')
    }else{
        for (let i=0 ; i< firstDay;i++){
            let emptyDiv=document.createElement('div');
            container.appendChild(emptyDiv);
        }

        for (let i=0;i < totalDays;i++){
            let dayDiv = document.createElement('div');
            dayDiv.classList.add('day');

            let weekday =(firstDay +1) %7;
            if (weekday === 6){
                dayDiv.classList.add("sunday")
            }

            dayDiv.textContent = currentDay.toString().padStart(2,"0")

            if (i < diffDays){
                dayDiv.classList.add("past-day")
            }

            container.appendChild(dayDiv);
            currentDay++;
        }
    }
}


function updateCalendar() {
    let startDate = document.getElementById("start-date").value;
    if (startDate) {
        generateRamadanCalendar(startDate);
    }
}

updateCalendar()
