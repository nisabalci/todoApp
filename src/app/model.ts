export class Model {
  user;
  items;

  constructor() {
    this.user = 'Nisa';
    this.items= [
      new TodoItem("Sport", true),
      new TodoItem("Breakfast", false),
      new TodoItem("Book",false),
      new TodoItem("Cinema",false)
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description: string, action: boolean) {
      this.description = description;
      this.action = action;
  }
}
