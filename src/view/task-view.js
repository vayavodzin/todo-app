export function TaskView(task) {
  return `<li id="${task.id}">
            <h3>${task.title}</h3>
          </li>`;
}
