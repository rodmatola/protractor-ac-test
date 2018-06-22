class LoginPage{
  constructor(){
    this.userNameField = element(by.id('user_email'));
    this.passwordField = element(by.id('user_password'));
    this.signInButton = element(by.name('commit'));
  }

  open(){
    browser.get('users/sign_in');
  }

  username(username){
    return this.userNameField.sendKeys(username);
  }

  password(password){
    return this.passwordField.sendKeys(password);
  }

  loginWith(username, userpassword){
    this.username(username);
    this.password(userpassword);
    return this.signInButton.click();
  }
}

module.exports = LoginPage;