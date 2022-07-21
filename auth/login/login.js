var userAccounts = []
var getUser = JSON.parse(localStorage.getItem('userAccounts'))

userAccounts = getUser

function login() {
    var getEmail = document.getElementById('email').value
    var getPassword = document.getElementById('password').value
    console.log(userAccounts)

    for (var i = 0; i < userAccounts.length; i++) {
        if (getEmail === userAccounts[i].email && getPassword === userAccounts[i].password) {

            localStorage.setItem('loggedInUser', JSON.stringify({ "email": getEmail, "password": getPassword }))
            console.log("matched")
            window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/home/home.html')
        }
        else if (getEmail === userAccounts[i].email && getPassword != userAccounts[i].password) {
            console.log("Wrong password")
        }
    }
}