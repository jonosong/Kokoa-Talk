const clock = document.querySelector("#clock");

function changeTimeFormat(time){
    return String(time).padStart(2, "0"); // Date() returns number so needs to change to String
}

function getClock(){
    const date = new Date();
    const hours = changeTimeFormat(date.getHours()); 
    const mins = changeTimeFormat(date.getMinutes());
    clock.innerText = `${hours}:${mins}`;
}

getClock() // clock starts as soons as page is loaded
setInterval(getClock, 1000); // starts right away in 'ms'. eg 1s = 1,000ms

//setTimeout(sayHello, 3000); // starts after 3s or 3,000ms