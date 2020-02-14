/**
 * List of Tasks will be a array of objects
 * Each object will contain Task name & task id.
 * Example
 * [
 * 	{
 * 		id: 1,
 * 		name: Task1
 * 	},
 * 	{
 * 		id: 2,
 * 		name: Task2
 * 	},
 * 	{
 * 		id: 3,
 * 		name: Task3
 * 	},
 * 	{
 * 		id: 4,
 * 		name: Task4
 * 	}
 * ]
 */

var listOfTasks = [];

function deleteTask(taskId) {
	console.log("delete Task - Id : ", taskId);
	var deleteAbleTaskRow = document.getElementById("task_" + taskId);
	// var deletebutton = document.getElementsByClassName("deletebutton");
	// var i;
	// for (i = 0; i < deletebutton.length; i++) {
	// 	deletebutton[i].onclick = function newElement() {
	// 		var div = this.parentElement;
	// 		var el = div.parentElement;
	// 		el.style.display = "none";
	// 	};
	// }
	// location.reload();
}

function editTask(taskId) {
	// Find object from array of objects. -> id == 3 (Goolge update the correct syntax)
	var editableTask = listOfTasks.find(function(task) {
		if (task["id"] == editableTaskId) {
			return task;
		}
	});

	// After find the task update task name to newTaskName id.
	document.getElementById("newTaskName").value = editableTask["name"];

	// Remove "hide" class from update button and add hide class to Add button.
	document.getElementById("createTask").className += "hide";
	document.getElementById("updateTask").classList.remove("hide");
}

function newElement() {
	var newTask = {};

	var taskName = document.getElementById("newTaskName").value;
	var taskId = listOfTasks.length + 1;

	newTask["id"] = taskId;
	newTask["name"] = taskName;

	var taskTable = document.getElementById("taskTable");
	var totalTaskName = taskTable.rows.length;
	var newTaskRow = taskTable.insertRow(totalTaskName);
	newTaskRow.id += "task_" + taskId;

	var taskNameColumn = newTaskRow.insertCell(0);
	taskNameColumn.innerHTML = taskName;

	// Adds edit column for tasks.
	var taskActionEditColumn = newTaskRow.insertCell(1);
	var editButtonElement = document.createElement("button");
	editButtonElement.innerHTML = "Edit";
	editButtonElement.className += "editbutton";
	editButtonElement.onclick = function() {
		editTask(taskId);
	};
	taskActionEditColumn.appendChild(editButtonElement);

	// Adds delete column for tasks.
	var taskActionDeleteColumn = newTaskRow.insertCell(2);
	var deleteButtonElement = document.createElement("button");
	deleteButtonElement.innerHTML = "Delete";
	deleteButtonElement.className += " deletebutton";
	deleteButtonElement.onclick = function() {
		deleteTask(taskId);
	};
	taskActionDeleteColumn.appendChild(deleteButtonElement);
	listOfTasks.push(newTask);

	console.log("listOfTasks: ", listOfTasks);
}

function updateTaskName() {
	// Add `taskId` to `editableTaskId` element.

	// 1. Get the new task name from id: newTaskName
	// 2. Get the object id from hidden "editableTaskId"
	var updatedTaskName = document.getElementById("newTaskName");
	var editableTaskId = document.getElementById("editableTaskId");

	// Find object from array of objects. -> id == 3 (Goolge update the correct syntax)
	// editableTask = listOfTasks.find(function (taskId == 0. taskName === 0) { 
	// 		return task;
	// 	});
	// 	console.log(editableTask);
	
	editableTask["name"] = updatedTaskName;

	// Find the task row in Task table using the id attribute. Eg: task_" + editableTaskId
	var editableTaskRow = document.getElementById("task_" + editableTaskId);
	// using this editableTaskRow element update the cell 0 value to updatedTaskName.

	// Add hide class to update button and remove hide class from Add button.
	// Reset the input task name value to ''.
}
