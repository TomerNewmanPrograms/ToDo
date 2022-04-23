var toggleCheck = function () {
    let _parent = this.parentNode;
    _parent.classList.toggle('checked');
};

var deleteTodo = function () {
    let todoLi = this.parentNode;
    todoLi.remove();
};

var createTodo = function (todo) {
    let li = document.createElement('li');
    let label = document.createElement('label');
    label.innerHTML = todo;
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.onclick = toggleCheck;
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    deleteButton.onclick = deleteTodo;

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton);
    return li;
};

document.getElementById('add').onclick = function () {
    var parent = this.parentNode;
    var addTextInput = parent.children[0];
    var ul = document.getElementById("todoList");
    if (addTextInput.value === "") {
        return;
    }
    else {
        var templi = createTodo(addTextInput.value);
        ul.appendChild(templi);
        addTextInput.value = "";
    }
};