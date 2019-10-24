export class Task {
  constructor(title) {
    this._title = title;
    this._id = Math.floor(Math.random() * 10000);
    this._status = 0;
    this._timestamp = Date.now();
  }

  get title() {
    return this._title;
  }

  get id() {
    return this._id;
  }

  get status() {
    return this._status;
  }

  get timestamp() {
    return this._timestamp;
  }

  toggle() {
    this._status = this.status ? 0 : 1;
  }

}
