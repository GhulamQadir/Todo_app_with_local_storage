var getUser = JSON.parse(localStorage.getItem('userAccounts'))
var getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))


var userAccounts = getUser
var loggedInUser = getLoggedInUser

var toDosArray = []

var getInfo = "";

for (var i = 0; i < userAccounts.length; i++) {
    if (userAccounts[i].email === loggedInUser.email && userAccounts[i].password === loggedInUser.password) {

        getInfo = userAccounts[i]

    }
}

var userInfo = document.getElementById('userInfo')
var userName = document.createElement('h1')
var userNameText = document.createTextNode(`Welcome ${getInfo.name}`)
userName.appendChild(userNameText)
userInfo.appendChild(userName)

console.log(getInfo)


function addTodo() {
    var todo = document.getElementById('todo_field')

    if (todo.value === "") {
        console.log("Please enter some value")
    }
    else {

        toDosArray.push(todo.value)


        getInfo.todos = toDosArray
        console.log(getInfo)


        localStorage.setItem('userAccounts', JSON.stringify(userAccounts))

        todo.value = ""
    }
}

function getTodos() {
    var todos = getInfo.todos
    toDosArray = todos
    if (!toDosArray) {
        toDosArray = []
    }
}
getTodos()
// for (var i = 0; i < toDosArray.length; i++) {
//     var todosList = document.getElementById('todos_div')

//     var list = document.createElement('p')
//     var listText = document.createTextNode(toDosArray[i])
//     list.appendChild(listText)

//     todosList.appendChild(list)

// }