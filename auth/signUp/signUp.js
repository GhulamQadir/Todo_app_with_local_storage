
var userAccounts = []


function signUp() {
    var getName = document.getElementById('name').value
    var getEmail = document.getElementById('email').value
    var getPassword = document.getElementById('password').value


    userAccounts.push({ "name": getName, "email": getEmail, "password": getPassword })

    setItem()


    window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/login/login.html')





}

function setItem() {
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
}


function getItem() {
    var getUserAccounts = JSON.parse(localStorage.getItem('userAccounts'))
    userAccounts = getUserAccounts
    if (!userAccounts) {
        userAccounts = []
    }
}
getItem()