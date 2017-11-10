//Problem: User interaction doesn't provide desired results
//Solution: Add interactivity so the user can manage daily tasks

var taskInput = document.getElementById("new-task"); // new-task
var addButton = document.getElementsByTagName("button")[0]; // first button on page
var incompleteTasksHolder = document.getElementById("incomplete-tasks");// incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); // completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
	//create list item
	var listItem = document.createElement("li");

	// input (checkbox)
	var checkBox = document.createElement("input"); // checkbox
	// label
	var label = document.createElement("label")
	// input (text)
	var editInput = document.createElement("input") // text
	// button.edit
	var editButton = document.createElement("button")
	// button.delete
	var deleteButton = document.createElement("button")

	// Each element needs modifying

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = taskString;


	// Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;


};

// Add NEW task
var addTask = function() {
	console.log("Add task...");
// Create a new list item with the text from the #new-task
var listItem = createNewTaskElement(taskInput.value)	;

	// Append List Item to incomplete Tasks Holder
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value = "";
};

// Edit existing task
var editTask = function() {
	console.log("edit task... ");

var listItem = this.parentNode;

var editInput = listItem.querySelector("input[type=text]");
var label = listItem.querySelector("label");

	// if the class of the parent is .editMode
var containsClass = listItem.classList.contains("editMode");

if(containsClass){
		// Switch FROM .editMode
		// label text become the input's value
label.innerText = editInput.value;
} else {
		// Switch TO .editMode
		// input value becomes the label's text

editInput.value = label.innerText
}
		//Toggle .editMode on the parent
listItem.classList.toggle("editMode");
}


// Delete existing task
var deleteTask = function() {
	console.log("Delete Task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode

			// Remove the parent list item from the ul (remove parent from parent)
ul.removeChild(listItem);
	};

// Mark task as COMPLETE
var taskCompleted = function() {
	console.log("complete task...");
		// append the task list item to the #completed-tasks
	var listItem = this.parentNode
	completedTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
	//could also be - completedTasksHolder.appendChild(this.parentNode);
};
// Mark task as incomplete
var taskIncomplete = function () {
	console.log("incomplete task...");
		// Append the task list item (li) to #incomplete-tasks
	var listItem = this.parentNode;
	incompleteTasksHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted)
};

var bindTaskEvents = function (taskListItem, checkBoxEventHandler){
	console.log("bind list item events");
		//select taskListItem's children it's children
		var checkBox = taskListItem.querySelector("input[type=checkbox]");
		var editButton = taskListItem.querySelector("button.edit");
		var deleteButton = taskListItem.querySelector("button.delete");

	//bind editTask to edit button
		editButton.onclick = editTask

		//bind deleteTask to delete button
		deleteButton.onclick = deleteTask

		//bind checkBoxEventHandler to checkbox
		checkBox.onchange = checkBoxEventHandler;
};

var ajaxRequest = function() {
console.log("Ajax request");
}
addButton.onclick = ajaxRequest;

// Set the click handler to the addTask function
addButton.onclick = addTask;
addButton.addEventListener("click", ajaxRequest);


//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
		//bind events to list item's children (taskCompleted)
		bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted)
};




//cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
				//bind events to list item's children (taskIncomplete)
		bindTaskEvents(completedTasksHolder.children[i], taskIncomplete)
};
