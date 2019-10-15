export class Task {
    constructor(title) {
      this.title = title;
      this.status = 0;
      this.timestamp = Date.now();
    }
  
    toggle() {
      this.status = this.status ? 0 : 1;
    }
  
  }