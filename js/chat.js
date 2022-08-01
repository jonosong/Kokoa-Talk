const timestamp = document.getElementById("timestamp");
const myMessageTime1 = document.getElementById("myMSTime");
const myMessageTime2 = document.getElementById("myMSTime2");
const myMessageTime3 = document.getElementById("myMSTime3");
const msgForm = document.getElementById("msg-form");
const myMsgBox = document.getElementById("my-msg-box");
const myTextInput = document.querySelector("#msg-form input");
const myText = document.getElementById("my-text")
const reply = document.getElementById("message-row--reply");
const hidingTrigger = document.getElementById("hide-trigger");
const hasVisited = sessionStorage.getItem('visited');

function changeTimeFormat(x){
    return String(x).padStart(2, "0"); // Date() returns number so needs to change to String
}

const date = new Date();

function getTimeStamp(){
    const day = date.getDate();
    const month = changeTimeFormat(date.getMonth() + 1); // +1? getMonth() returns from 0 - 11
    const year = changeTimeFormat(date.getFullYear()); 
    timestamp.innerText = `${day}-${month}-${year}`;
}

function getMyMessageTime(time){
    const hours = changeTimeFormat(date.getHours()); 
    const mins = changeTimeFormat(date.getMinutes());
    time.innerText = `${hours}:${mins}`;
}

function onSubmit(event){
    event.preventDefault();
    myText.innerText = myTextInput.value;
    getMyMessageTime(myMessageTime2);
    myMsgBox.classList.remove("hidden");
    myTextInput.value = "";
    getMyMessageTime(myMessageTime3);
    reply.classList.remove("hidden");
    myTextInput.blur();
}

msgForm.addEventListener("submit", onSubmit);

if (! hasVisited){
    sessionStorage.setItem('visited', true);
}

getTimeStamp();
getMyMessageTime(myMessageTime1);

