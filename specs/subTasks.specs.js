const faker = require('faker');
const MyTaskPage = require('../pageobj/MyTaskPage.po.js');
const LoginPage = require('../pageobj/LoginPage.po.js');  
const SubTasksPage = require('../pageobj/SubTasksPage.po.js');  

describe('Sub Tasks', function(){

  const myTasksPage = new MyTaskPage();
  const loginPage = new LoginPage();
  const subTasksPage = new SubTasksPage();

  var user = {
    'name': 'RodrigoMatola',
    'email': 'rodmatola@gmail.com',
    'password': 'rodrigomatola'
  };

  beforeAll(function(){
    loginPage.open();
    loginPage.loginWith(user['email'], user['password']);   
  });

  beforeEach(function(){
    myTasksPage.open();
    
    myTasksPage.countTasks().then(function(size){
      if (size == 0){
        addTasks(5);
      }
    });
    
    subTasksPage.openSubTask();
  });  

  xit('should be displayed in each task', function(){

  });

  xit('should have the number of subtasks created for that tasks', function(){

  });

  xit('should opens up in a modal dialog (popup)', function(){

  });

  it('should have a read only field with the task ID and the task description', function(){
    expect(subTasksPage.hasID()).toBe(true);
  });

  it('should have a form for SubTask Description (up to 250 characters)', function(){
    expect(subTasksPage.subTaskDescription.getAttribute('maxlength')).toEqual('250');
  });

  it('should have a Due Date field', function(){
    expect(subTasksPage.hasDueDate()).toBe(true);
  });

  xit('should have Due Date format MM/dd/yyyy', function(){

  });

  xit('should click on the add button to add a new Subtask', function(){

  });

  xit('Task Description and Due Date are required fields', function(){

  });

  xit('should be appended on the bottom the list of subtasks', function(){

  });


})