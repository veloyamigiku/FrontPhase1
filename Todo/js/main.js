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
    
    // Todo要素を削除するボタンを作成する。
    var todoDeleteBtn = document.createElement("div");
    todoDeleteBtn.setAttribute("class", "todoDeleteBtn");
    todoDeleteBtn.setAttribute("data-todo-idx", newTodoIdx);
    todoDeleteBtn.textContent = "delete";
    todoDeleteBtn.addEventListener("click", function(event) {
        // 削除ボタンの親要素（Todo要素）を、Todo要素の親要素から削除する。
        var todoListEle = document.getElementById("todoList");
        var todoEle = event.target.parentNode;
        todoListEle.removeChild(todoEle);
    });
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
