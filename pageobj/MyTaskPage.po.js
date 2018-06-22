class MyTaskPage{
  constructor(){
    this.addTaskButton = element(by.css('[ng-click="addTask()"]'));
    this.newTaskField = element(by.id('new_task'));
    this.removeButton = element(by.css('[ng-click="removeTask(task)"]'));
    this.subtaskList = element.all(by.repeater('sub_task in task.sub_tasks'));
    this.title = element(by.css('body > div.container > h1'));
    this.todoList = element.all(by.repeater('task in tasks'));
  }

  countTasks(){
    return this.todoList.count();
  }

  firstTask(){
    return this.todoList.first().getText();
  }
  
  getTitle(){
    return this.title.getText();
  }

  lastSubTask(){
    return this.subtaskList.last().getText();
  }

  newTask(taskname){
    this.newTaskField.sendKeys(taskname);
    this.addTaskButton.click();
  }

  open(){
    browser.get('tasks');
  }

  removeATask(){
    this.removeButton.click();
  }  

}

module.exports = MyTaskPage;