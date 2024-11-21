function addTask() {
    // Get the task input and list elements
    let taskInput = document.getElementById("taskInput");
    let todoList = document.getElementById("todoList");

    // Get the task text and clear the input field
    let taskText = taskInput.value.trim();
    taskInput.value = "";

    // Return if the input is empty
    if (!taskText) return;

    // Create a new list item for the task
    let listItem = document.createElement("li");
    listItem.className = "todo-item";

    // Task text element
    let taskTextElem = document.createElement("span");
    taskTextElem.className = "task-text";
    taskTextElem.innerText = taskText;
    taskTextElem.onclick = function() {
        listItem.classList.toggle("completed");
    };

    // Remove button for the task
    let removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerText = "Remove";
    removeButton.onclick = function() {
        todoList.removeChild(listItem);
    };

    // Append task text and remove button to the list item
    listItem.appendChild(taskTextElem);
    listItem.appendChild(removeButton);

    // Add the new task to the list
    todoList.appendChild(listItem);
}
