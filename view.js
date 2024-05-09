class TaskView {
  constructor() {
    this.taskList = document.getElementById("task-list");

    this.taskForm = document.getElementById("task-form");

    // form inputs
    this.taskNameInput = document.getElementById("formControlTaskName");
    this.taskDescriptionInput = document.getElementById(
      "formControlTaskDescription"
    );
  }

  generateTaskTemplate(task) {
    return `
    <div class="card mb-2">
      <div class="card-body">
        <h5 class="card-title">${task?.name}</h5>
        <p class="card-text">${task?.description}</p>
      </div>
    </div>
    `;
  }

  displayTasks(tasks) {
    this.taskList.innerHTML = "";
    if (tasks.length === 0) {
      this.taskList.innerHTML = `<p class="text-center mt-4">No tasks, please add some</p>`;
    } else {
      tasks.forEach((task) => {
        this.taskList.innerHTML += this.generateTaskTemplate(task);
      });
    }
  }

  bindAddTask(handler) {
    this.taskForm.addEventListener("submit", (event) => {
      event.preventDefault();

      handler(this.taskNameInput.value, this.taskDescriptionInput.value);

      // reset inputs
      this.taskNameInput.value = "";
      this.taskDescriptionInput.value = "";
    });
  }
}
