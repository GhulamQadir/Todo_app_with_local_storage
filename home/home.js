var getUser = JSON.parse(localStorage.getItem('userAccounts'))
var getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))


var userAccounts = getUser
var loggedInUser = getLoggedInUser

var getInfo = "";

for (var i = 0; i < userAccounts.length; i++) {
    if (userAccounts[i].email === loggedInUser.email && userAccounts[i].password === loggedInUser.password) {
        console.log(userAccounts[i])

        getInfo = userAccounts[i]

    }
}

var userInfo = document.getElementById('userInfo')
var userName = document.createElement('h1')
var userNameText = document.createTextNode(`Welcome ${getInfo.name}`)
userName.appendChild(userNameText)
userInfo.appendChild(userName)


var toDosArray = getInfo.todos
console.log(toDosArray)
function addTodo() {
    var todo = document.getElementById('todo_field').value

    toDosArray.push(todo)


    getInfo.todos = toDosArray
    console.log(getInfo)


    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))

}


// for (var i = 0; i < toDosArray.length; i++) {
//     var todosList = document.getElementById('todos_div')

//     var list = document.createElement('p')
//     var listText = document.createTextNode(toDosArray[i])
//     list.appendChild(listText)

//     todosList.appendChild(list)

// }

