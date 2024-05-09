class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTask(this.handleAddTask.bind(this));

    this.updateView();
  }

  handleAddTask(name, description, category) {
    console.log(name, description, category);
    this.model.addTask(name, description, category);
    console.log(this.model.tasks);
    this.updateView();
  }

  updateView() {
    const tasks = this.model.tasks;
    this.view.displayTasks(tasks);
  }
}

// App initialization
const model = new TaskList();
const view = new TaskView();
const controller = new TaskController(model, view);
