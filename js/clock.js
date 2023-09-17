const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");  // padStart는 string의 길이를 제한한 후, 부족한 만큼 특정문자로 채울 수 있다.
    const minutes = String(date.getMinutes()).padStart(2,"0");  
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;  
}
getClock();
setInterval(getClock, 1000);

