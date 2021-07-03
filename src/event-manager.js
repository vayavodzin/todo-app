export class EventManager {

  bindCreateListItem(cb) {
    const form = document.getElementById('todo-form-id');
    form.addEventListener('submit', function(e) {
      if (this.firstElementChild.value) {
        cb(this.firstElementChild.value);
        this.firstElementChild.value = '';
      }
      e.preventDefault();

    })
    return this;
  }

  bindDeleteListItem(cb) {
    const list = document.getElementById('todo-list-id');
    list.addEventListener('click', function(e) {
      if (e.target.className === 'todo-list__deleteButton') {
        cb(e.target.parentElement.id);
      }
    })
    return this;
  }

  bindToggleListItem(cb) {
    const list = document.getElementById('todo-list-id');
    list.addEventListener('change', function(e) {
      if (e.target.className === 'todo-list__checkbox') {
        cb(e.target.parentElement.id);
      }
    })
    return this;
  }

}
