const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // text 그대로 storage에 저장
}

function deleteToDo(event) {
 const li = event.target.parentElement;  // 함수 인자가 어떤 타겟을 지정하는지 나타냄. parentElement는 부모인자를 확인이 가능
 li.remove();
 toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //parseInt는 인자를 number(정수)로 바꾼다.
 saveToDos();
}


function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id; // newTodo로 생기는 li에 id를 입력해줌.
    const span = document.createElement("span");
    span.innerText = `- ${newTodo.text}`; // newTodo를 text로 입력
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now() //랜덤하게 데이터를 줌.
    };
    toDos.push(newTodoObj); // newTodo를 toDos array에 넣음.
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // JSON.parse는 string을 다시 array로 만들어준다.
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); 
    // forEach는 array의 각 요소에 함수를 실행할 수 있게 만든다. 여기서 => 는 arrow function 이라고 한다.
}