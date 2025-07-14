let currentTime  = new Date();
const showTime = document.querySelector('#digital-clock') as HTMLElement;
const showDay  = document.querySelector('#clock-day') as HTMLElement;
const showDate  = document.querySelector('#clock-date') as HTMLElement; 

// Arrays for day and month names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function tellTime() {
   currentTime  = new Date();
   let hrs : number = currentTime.getHours();
   let sec : number = currentTime.getSeconds();
   let minutes: number = currentTime.getMinutes();

   // day
   let dayIndex: number = currentTime.getDay(); // FIXED: getDay() for day of week
   let day: string = dayNames[dayIndex];

   // date
   let date: number = currentTime.getDate();

   // month 
   let monthIndex: number = currentTime.getMonth();
   let month: string = monthNames[monthIndex];

   // year
   let year: number = currentTime.getFullYear();

   // format 
   const format = (n: number): string => {
     return `${n.toString().padStart(2, "0")}`;
   };

   // html
   showTime.innerHTML =  `${format(hrs)}:${format(minutes)}:${format(sec)}`;
   showDay.innerHTML = `${day}`;
   showDate.innerHTML = `${format(date)} ${month} ${year}`;
}

setInterval(tellTime, 1000);

