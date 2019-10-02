var todoIdx = 0;

// Todo要素を追加する。
function addTodo(todoIdx, content, todoList) {
    var newTodoIdx = todoIdx + 1;
    var todoElement = document.createElement("div");
    todoElement.setAttribute("class", "todo");
    todoElement.setAttribute("data-todo-idx", newTodoIdx);
    var todoEditBtn = document.createElement("div");
    todoEditBtn.setAttribute("class", "todoEditBtn");
    todoEditBtn.setAttribute("data-todo-idx", newTodoIdx);
    todoEditBtn.textContent = "edit";
    todoElement.appendChild(todoEditBtn);
    var todoDeleteBtn = document.createElement("div");
    todoDeleteBtn.setAttribute("class", "todoDeleteBtn");
    todoDeleteBtn.setAttribute("data-todo-idx", newTodoIdx);
    todoDeleteBtn.textContent = "delete";
    todoElement.appendChild(todoDeleteBtn);
    var todoContent = document.createElement("div");
    todoContent.setAttribute("class", "content");
    todoContent.setAttribute("data-todo-idx", newTodoIdx);
    todoContent.textContent = content;
    todoElement.appendChild(todoContent);
    todoList.appendChild(todoElement);
    return newTodoIdx;
}

// 画面ロード時のイベント処理。
window.addEventListener("load", function() {

    // Todo追加ボタンのイベント処理を定義する。
    var todoAddBtn = document.getElementById("todoAddBtn");
    todoAddBtn.addEventListener("click", function() {
        var todoContent = document.getElementById("todoContent");
        var todoListElement = document.getElementById("todoList");
        todoIdx = addTodo(todoIdx, todoContent.value, todoListElement);
    });

});
