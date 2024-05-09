/**
 * Abstract Class TaskRenderer.
 *
 * @class TaskRenderer
 */
class TaskRenderer {
  constructor() {
    if (new.target === TaskRenderer) {
      throw new TypeError("Abstract class TaskRenderer can't be instantiated");
    }
  }
  render(task) {
    throw new Error("Method 'render' must be implemented.");
  }
}

/**
 * WorkTaskRenderer.
 *
 * @class WorkTaskRenderer
 * @extends {TaskRenderer}
 */
class WorkTaskRenderer extends TaskRenderer {
  render(task) {
    return `<div class="card mb-2" style="border-left: 5px solid red">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${task.name} <span class="badge text-bg-danger">Work</span></h5>
        <p class="card-text">${task.description}</p>
      </div>
    </div>`
  }
}

/**
 * HomeTaskRenderer.
 *
 * @class HomeTaskRenderer
 * @extends {TaskRenderer}
 */
class HomeTaskRenderer extends TaskRenderer {
  render(task) {
    return `<div class="card mb-2" style="border-left: 5px solid blue">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${task.name} <span class="badge text-bg-primary">Home</span></h5>
        <p class="card-text">${task.description}</p>
      </div>
    </div>`
  }
}

/**
 * OtherTaskRenderer.
 *
 * @class OtherTaskRenderer
 * @extends {TaskRenderer}
 */
class OtherTaskRenderer extends TaskRenderer {
  render(task) {
    return `<div class="card mb-2" style="border-left: 5px solid green">
      <div class="card-body">
        <h5 class="card-title text-capitalize">${task.name} <span class="badge text-bg-success">Other</span></h5>
        <p class="card-text">${task.description}</p>
      </div>
    </div>`
  }
}

/**
 * TaskView.
 *
 * @class TaskView
 */
class TaskView {
  constructor() {
    this.taskList = document.getElementById("task-list");

    this.taskForm = document.getElementById("task-form");

    // form inputs
    this.taskNameInput = document.getElementById("formControlTaskName");
    this.taskCategorySelect = document.getElementById("formControlTaskCategory");
    this.taskDescriptionInput = document.getElementById(
      "formControlTaskDescription"
    );
  }

  getRendererForTask(task) {
    switch (task.category) {
      case 'work':
        return new WorkTaskRenderer();
      case 'home':
        return new HomeTaskRenderer();
      case 'other':
        return new OtherTaskRenderer();
      default:
        return new TaskRenderer();
    }
  }

  displayTasks(tasks) {
    this.taskList.innerHTML = "";
    if (tasks.length === 0) {
      this.taskList.innerHTML = `<p class="text-center mt-4">No tasks, please add some</p>`;
    } else {
      tasks.forEach((task) => {
        let taskRenderer = this.getRendererForTask(task);
        let taskHtml = taskRenderer.render(task);
        this.taskList.innerHTML += taskHtml;
      });
    }
  }



  bindAddTask(handler) {
    this.taskForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = this.taskNameInput.value;
      const description = this.taskDescriptionInput.value;
      const category = this.taskCategorySelect.value;

      handler(name, description, category);

      // reset inputs
      this.taskNameInput.value = "";
      this.taskCategorySelect.value = "";
      this.taskDescriptionInput.value = "";
    });
  }
}
