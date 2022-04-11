let todoList =[];

function add(){
    let task = document.getElementById("todo").value;
    todoList.push(task);
    console.log(todoList);
    showTasks();
}

function del(){
    let a = document.getElementById("todo");
    let del = document.getElementById("a");
    let item = document.getElementById("del.value");
    a.removeChild(item);
}

function showTasks(){
    let ullist = document.getElementById('todoList');
    ullist.innerHTML ="";
    let bodyList = "";

    for(let i=0; i<todoList.length; i++){
        bodyList +=`<li> ${todoList[i]} </li>`;
    }

    ullist.innerHTML = bodyList;
}