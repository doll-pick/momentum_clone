const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//onLoginSubmit() 여기서 () 공간을 채워주면 그 공간으로 JS가 저장을 해주게 된다.
function onLoginSubmit(event) {
     event.preventDefault(); // 브라우저의 기본 동작을 막아준다. 여기서는 새로고침을 막고 있음.
     loginForm.classList.add(HIDDEN_CLASSNAME); // classList를 추가한다!
     const username = loginInput.value;
     localStorage.setItem(USERNAME_KEY, username); // localStorage는 mini DB 같은 것. 여기서 USERNAME_KEY라는 값에 username(InPut에서 입력된 값)을 저장
     paintGreetings(username); //처음에는 loginInput에 입력된 값
    }

function paintGreetings(username){
    greeting.innerText = `안녕하세요! ${username}님 :)`; // ``와 ${}를 사용해서 string을 보다 편하게 만들 수 있다.
    greeting.classList.remove(HIDDEN_CLASSNAME);
}



const savedUsername = localStorage.getItem(USERNAME_KEY); 
console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    paintGreetings(savedUsername);//savedUsername을 통해 localStorage에서 값을 가져옴

    

}