const heartCount = document.getElementById("heart-count");

function addOne(){
    if(heartCount.innerText == "420,000"){
        heartCount.innerText = "420,001";
    } else{
        heartCount.innerText = "420,000";
    }
}

heartCount.addEventListener("click", addOne);