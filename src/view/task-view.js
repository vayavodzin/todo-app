export function TaskView(task) {
  let checked = task.status === 1 ? 'checked' : '';
  return `<li class="todo-list__item" id="${task.id}">
            <button class="todo-list__deleteButton">X</button>
            <div class="todo-list__title">${task.title}</div>
            <input type="checkbox" class="todo-list__checkbox" ${checked} />    
          </li>`;
}
