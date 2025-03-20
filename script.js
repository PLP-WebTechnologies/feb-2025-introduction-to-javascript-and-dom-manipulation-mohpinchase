// Function to create and add a new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    // Validate input
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    listItem.className = "task-item"; // Add class for styling

    // Toggle completion on click
    listItem.addEventListener("click", function(event) {
        if (event.target !== deleteButton) { // Prevent toggle when clicking delete
            listItem.style.textDecoration = 
                listItem.style.textDecoration === "line-through" ? "none" : "line-through";
        }
    });

    // Create and configure delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn"; // Add class for styling
    deleteButton.addEventListener("click", function() {
        listItem.remove(); // Remove the task item
    });

    // Append delete button to list item
    listItem.appendChild(deleteButton);

    // Add list item to task list
    document.getElementById("taskList").appendChild(listItem);

    // Clear input field
    taskInput.value = "";
}

// Add task when clicking the button
document.getElementById("addButton").addEventListener("click", addTask);

// Add task when pressing Enter key
document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});