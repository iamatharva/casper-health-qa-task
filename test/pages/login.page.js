function loginElements() {
  return {
		email: function() { return $('//*[@id="mat-input-0"]') },
		password: function() { return $('//*[@id="mat-input-1"]') },
    submitButton: function() { return $('.login.non-trasparent.mat-raised-button.mat-primary') }
  }
}

function loginMethods() {
  const element = loginElements()

  return {
    setInfoLogin: function(emailParam) {
      element.email().waitForExist()
      element.email().clearValue()
      element.email().setValue(emailParam)
    },

    setInfoPassword: function(password){
      element.password().clearValue()
      element.password().setValue(password)
		},

    confirmLogin: function(){
      element.submitButton().click()
    }
  }
}

function login() {

  const login = loginMethods()

  return {
		fillForm: function(objLoginId, objPassWord) {
      browser.url('/')
      login.setInfoLogin(objLoginId)
      login.setInfoPassword(objPassWord)
      login.confirmLogin()
		}
  }
}

module.exports = login()