class SubTasksPage{
  constructor(){
    this.dueDate = element(by.id('dueDate'));
    this.subTaskButton = element(by.css('[ng-click="editModal(task)"]'));
    this.subTaskDescription = element(by.id('new_sub_task'));
    this.taskID = element(by.css('[class="modal-header ng-scope"]'));
  }

  hasDueDate(){
    return this.dueDate.isPresent();
  }

  hasID(){
    return this.taskID.isPresent();
  }

  openSubTask(){
    this.subTaskButton.click();
  }

}

module.exports = SubTasksPage;