const endDate = "10 Aug 2023 10:00 PM"
// change the date accordingly

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input")
// const clock = () => {



function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;
  
  // calculate days
  input[0].value = Math.floor(diff / 3600 / 24);
  // calculate hours
  input[1].value = Math.floor((diff / 3600) % 24);
  // calculate Mins
  input[2].value = Math.floor((diff / 60) % 60);
  // calculate Seconds
  input[3].value = Math.floor((diff) % 60);  
}

clock()

/**
 * 1 day = 24 hrs
 * 1 hr = 60 mins
 * 60 mins = 1600 sec 
 */

setInterval(
    ()=>{
        clock()
    },
    1000
)