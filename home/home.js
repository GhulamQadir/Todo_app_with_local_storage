var getUser = JSON.parse(localStorage.getItem('userAccounts'))
var getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))


var userAccounts = getUser
var loggedInUser = getLoggedInUser

var toDosArray = []
var todosDiv = document.getElementById('todos_div')


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


        // fetching todos
        var todoPara = document.createElement('p')
        var todoText = document.createTextNode(todo.value)
        todoPara.appendChild(todoText)
        todosDiv.appendChild(todoPara)


        todo.value = ""
    }
}

function getTodosFromLocalStor() {
    for (var i in toDosArray) {
        // if (localArray[i].name != "") {

        var todoPara = document.createElement('p')
        var todoText = document.createTextNode(toDosArray[i])
        todoPara.appendChild(todoText)
        todosDiv.appendChild(todoPara)
    }
}
// }

function getTodos() {
    var todos = getInfo.todos
    toDosArray = todos
    if (!toDosArray) {
        toDosArray = []
    }
}
getTodos()



function logOut() {
    localStorage.removeItem('loggedInUser')
    window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/login/login.html')
}