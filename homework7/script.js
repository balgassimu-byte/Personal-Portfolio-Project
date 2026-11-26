// Requirement 1: a click listener changes visible page content.
const motivationButton = document.querySelector('#motivation-button');
const motivationMessage = document.querySelector('#motivation-message');
const encouragements = [
  'Progress comes from practice. Keep going!',
  'You do not need to finish everything today. Take the next step.',
  'Small, consistent efforts build strong skills.',
  'Every big goal starts with one small step.'
];
let encouragementIndex = 0;

motivationButton.addEventListener('click', () => {
  motivationMessage.textContent = encouragements[encouragementIndex];
  encouragementIndex = (encouragementIndex + 1) % encouragements.length;
});

// Requirement 2: typing changes the preview's content AND CSS class in real time.
const focusInput = document.querySelector('#focus-input');
const focusPreview = document.querySelector('#focus-preview');

focusInput.addEventListener('input', () => {
  const focusText = focusInput.value.trim();
  focusPreview.textContent = focusText ? `Today's focus: ${focusText}` : 'Your focus will appear here.';
  focusPreview.classList.toggle('has-focus', focusText.length > 0);
});

// Requirement 3: createElement and appendChild add tasks; remove deletes them.
const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const taskError = document.querySelector('#task-error');
const emptyMessage = document.querySelector('#empty-message');
const taskStatus = document.querySelector('#task-status');

function updateTaskStatus(action) {
  const taskCount = taskList.children.length;
  emptyMessage.hidden = taskCount > 0;
  taskStatus.textContent = `${action} ${taskCount} ${taskCount === 1 ? 'task' : 'tasks'} in your list.`;
}

taskInput.addEventListener('input', () => {
  taskError.textContent = '';
  taskInput.removeAttribute('aria-invalid');
});

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (!taskText) {
    taskError.textContent = 'Please enter a task with at least one non-space character.';
    taskInput.setAttribute('aria-invalid', 'true');
    taskInput.focus();
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;
  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.setAttribute('aria-label', `Delete task: ${taskText}`);

  deleteButton.addEventListener('click', () => {
    taskItem.remove();
    updateTaskStatus('Task deleted.');
    taskInput.focus();
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
  taskInput.value = '';
  taskError.textContent = '';
  taskInput.removeAttribute('aria-invalid');
  updateTaskStatus('Task added.');
  taskInput.focus();
});
