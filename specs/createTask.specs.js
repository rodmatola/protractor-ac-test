const faker = require('faker');
const MyTaskPage = require('../pageobj/MyTaskPage.po.js');
const LoginPage = require('../pageobj/LoginPage.po.js');  

describe('Create Task', function(){

  const myTasksPage = new MyTaskPage();
  const loginPage = new LoginPage();
  
  var user = {
    'name': '',
    'email': '',
    'password': ''
  };

  function addTasks(quant){
    for (let i = 0; i < quant; i++) {
      myTasksPage.newTask('Buy ' + faker.commerce.productName());     
    }    
  }

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
  });  

  it('should see user name at the top of the list', function(){
    let title = myTasksPage.getTitle();
    expect(title).toContain(user['name']);
  });

  it('should be able to enter a new task by hitting enter', function(){
    myTasksPage.countTasks().then(function(size){
      var numberOfTasksBefore = size;
      var numberOfTasksAfter = numberOfTasksBefore + 1;

      var product = 'Buy ' + faker.commerce.productName();
      myTasksPage.newTaskField.sendKeys(product);
      myTasksPage.newTaskField.sendKeys(protractor.Key.ENTER);
     
      myTasksPage.countTasks().then(function(size){
        numberOfTasksNow = size;
        expect(numberOfTasksAfter).toEqual(numberOfTasksNow);
      });  
    });
  });

  it('should be able to enter a new task by clicking on the add task button', function(){
    myTasksPage.countTasks().then(function(size){
      var numberOfTasksBefore = size;
      var numberOfTasksAfter = numberOfTasksBefore + 1;

      var product = 'Buy ' + faker.commerce.productName();
      myTasksPage.newTask(product);
     
      myTasksPage.countTasks().then(function(size){
        numberOfTasksNow = size;
        expect(numberOfTasksAfter).toEqual(numberOfTasksNow);
      });  
    });
  });

  it('can’t have more than 250 characters', function(){
    expect(myTasksPage.newTaskField.getAttribute('maxlength')).toEqual('250');
  });

  it('should be appended on the top the list of created tasks', function(){
    var product = 'Buy ' + faker.commerce.productName();
    myTasksPage.newTask(product);
    let firstTask = myTasksPage.firstTask();
    expect(firstTask).toContain(product);
  });

  it('should remove a task', function(){
    myTasksPage.countTasks().then(function(size){
      var numberOfTasksBefore = size;
      var numberOfTasksAfter = numberOfTasksBefore - 1;
      
      myTasksPage.removeATask();
     
      myTasksPage.countTasks().then(function(size){
        numberOfTasksNow = size;
        expect(numberOfTasksAfter).toEqual(numberOfTasksNow);
      });  
    });    
  });

});