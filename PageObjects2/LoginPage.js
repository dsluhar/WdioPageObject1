class LoginPage {
//export default class LoginPage {
get userName() {
  return $('#user-name')
}

get Password() {
  return $('#password')
}

get SubmitButton() {
  return $('#login-button')
}

async Login(Username, Password) {
  await this.userName.setValue(Username)
  await this.Password.setValue(Password)
  await this.SubmitButton.click()
}

}

//module.exports = new LoginPage()
export default new LoginPage();
