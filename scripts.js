document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    function createTaskElement(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-task">Delete</button>
        `;
        return li;
    }

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const taskElement = createTaskElement(taskText);
        taskList.appendChild(taskElement);
        newTaskInput.value = '';
    }

    function deleteTask(event) {
        if (event.target.classList.contains('delete-task')) {
            event.target.parentElement.remove();
        }
    }

    addTaskButton.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    taskList.addEventListener('click', deleteTask);
});
