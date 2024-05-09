class TaskModel {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  get getName() {
    return this.name;
  }

  get getDescription() {
    return this.description;
  }

  set setName(newName){
    this.name = newName;
  }

  set setDescription(newDescription){
    this.description = newDescription;
  }
}

class AdvancedTaskModel extends TaskModel {
  constructor(name, description, category) {
    super(name, description);
    this.category = category;
  }

  get getCategory() {
    return this.category;
  }

  set setCategory(newCategory){
    this.category = newCategory;
  }
}

class TaskList {
  constructor() {
    if (!TaskList.instance) {
      TaskList.instance = this;
      this.tasks = [];
    }
    return TaskList.instance;
  }

  addTask(name, description, category) {
    let task = new AdvancedTaskModel(name, description, category)
    this.tasks.push(task);
  }
}