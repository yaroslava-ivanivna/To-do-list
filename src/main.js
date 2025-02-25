import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const createNewTask = taskInfo => `
  <li class="task-list-item">
    <p class="task-list-text">${taskInfo}</p>
    <label class="todo-item">
      <input type="checkbox" class="todo-checkbox">
      <span class="checkmark"></span>
    </label>
  </li>`;

const listInputEl = document.querySelector('.to-do-list-input');
const taskList = document.querySelector('.task-list');
const listBtn = document.querySelector('.to-do-list-btn');

listBtn.addEventListener('click', function () {
  const inputValue = listInputEl.value.trim();

  if (inputValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a task!',
      position: 'topRight',
    });
    return;
  }

  console.log('Task added:', inputValue);

  taskList.insertAdjacentHTML('beforeend', createNewTask(inputValue));

  listInputEl.value = '';
});
