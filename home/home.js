var getUser = JSON.parse(localStorage.getItem('userAccounts'))
var getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))


var userAccounts = getUser
var loggedInUser = getLoggedInUser

var getInfo = "";

for (var i = 0; i < userAccounts.length; i++) {
    if (userAccounts[i].email === loggedInUser.email && userAccounts[i].password === loggedInUser.password) {
        console.log(userAccounts[i])
        console.log(loggedInUser.email)

        getInfo = userAccounts[i]


    }
}

var a = document.getElementById('userInfo')
var userName = document.createElement('h1')
var userNameText = document.createTextNode(`Welcome, ${getInfo.name}`)
userName.appendChild(userNameText)
a.appendChild(userName)