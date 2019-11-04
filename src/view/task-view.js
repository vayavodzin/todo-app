export function TaskView(task) {
  let checked = task.status === 1 ? 'checked' : '';
  return `<li class="todo-list--item" id="${task.id}">
            <div class="todo-list--title">${task.title}</div>
            <input type="checkbox" class="todo-list--checkbox" ${checked} />
          </li>`;
}
