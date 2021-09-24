class Events {
  constructor() {
    this.list = [];
  }
  $emit(eventname) {
    const data = Array.prototype.slice.call(arguments, 1);
    this.list[eventname].forEach((listener) => {
      listener(data);
    });
  }
  $on(eventname, callback) {
    if (!this.list[eventname]) {
      this.list[eventname] = [];
    }
    this.list[eventname] = [...this.list[eventname], callback];
  }
}

export default Events;
