var getUser = JSON.parse(localStorage.getItem('userAccounts'))
var getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
var edit = document.getElementById('edit_todo')
var editModal = document.getElementById('edit_modal')
let currentArrayIndex;
let innerVal;


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
var userNameText = document.createTextNode(`Hi, ${getInfo.firstName}`)
userName.style.display = "inline"
userName.appendChild(userNameText)
userInfo.appendChild(userName)



var avatar = ""
var avatarImg = getInfo.gender === "Male" ? avatar = "https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg" : avatar = "https://cdn.pixabay.com/photo/2016/08/20/05/36/avatar-1606914_1280.png"
var userAvatar = document.createElement('img')
userAvatar.setAttribute('src', avatarImg)
userAvatar.setAttribute('id', 'user_avatar')
userInfo.appendChild(userAvatar)

var setuserAvatar = document.getElementById('user_avatar_nav')
setuserAvatar.src = avatarImg





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
        var separateTodo = document.createElement('todo')
        var todoPara = document.createElement('p')
        todoPara.style.display = "inline"
        var todoText = document.createTextNode(todo.value)
        todoPara.appendChild(todoText)
        separateTodo.appendChild(todoPara)

        var delBtn = document.createElement('button')
        var delBtnText = document.createTextNode('Delete')
        delBtn.appendChild(delBtnText)
        delBtn.setAttribute('onclick', 'deleteTodo(this)')
        separateTodo.appendChild(delBtn)


        var editBtn = document.createElement('button')
        var editBtnText = document.createTextNode('Edit')
        editBtn.appendChild(editBtnText)
        editBtn.setAttribute('onclick', 'editTodo(this)')
        separateTodo.appendChild(editBtn)

        var lineBreak = document.createElement('br')
        separateTodo.appendChild(lineBreak)

        todosDiv.appendChild(separateTodo)


        todo.value = ""
    }
}

function getTodosFromLocalStor() {
    for (var i in toDosArray) {

        var separateTodo = document.createElement('todo')
        var todoPara = document.createElement('p')
        todoPara.style.display = "inline"
        var todoText = document.createTextNode(toDosArray[i])
        todoPara.appendChild(todoText)
        separateTodo.appendChild(todoPara)

        var delBtn = document.createElement('button')
        var delBtnText = document.createTextNode('Delete')
        delBtn.appendChild(delBtnText)
        delBtn.setAttribute('onclick', 'deleteTodo(this)')
        separateTodo.appendChild(delBtn)

        var editBtn = document.createElement('button')
        var editBtnText = document.createTextNode('Edit')
        editBtn.appendChild(editBtnText)
        editBtn.setAttribute('onclick', 'editTodo(this)')
        separateTodo.appendChild(editBtn)

        var lineBreak = document.createElement('br')
        separateTodo.appendChild(lineBreak)

        todosDiv.appendChild(separateTodo)

    }
}


function deleteTodo(e) {
    e.parentNode.remove();
    for (var i = 0; i < toDosArray.length; i++) {
        if (toDosArray[i] === e.parentNode.firstChild.innerHTML) {
            toDosArray.splice(i, 1);
        }
    }
    console.log(toDosArray)



    // setting new todos array in local storage
    getInfo.todos = toDosArray
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
}


function editTodo(e) {
    editModal.style.display = "block"
    for (var i = 0; i < toDosArray.length; i++) {
        if (toDosArray[i] === e.parentNode.firstChild.innerHTML) {
            currentArrayIndex = i
            edit.value = toDosArray[i]
            innerVal = e


        }
    }
    console.log(toDosArray)

}

editValue = () => {
    toDosArray.splice(currentArrayIndex, 1, edit.value);
    innerVal.parentNode.firstChild.innerHTML = edit.value
    getInfo.todos = toDosArray
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
    editModal.style.display = "none"
}


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
    window.location.replace('../auth/login/login.html')
}



var chevronUpIcon = document.getElementById('chevron_up')
var chevronDownIcon = document.getElementById('chevron_down')

chevronUp = () => {
    chevronUpIcon.style.display = "block"
    chevronDownIcon.style.display = "none"
}

chevronDown = () => {
    chevronDownIcon.style.display = "block"
    chevronUpIcon.style.display = "none"
}


searchTodo = () => {
    var searchModal = document.getElementById('search_modal')

    window.onclick = () => {
        searchModal.style.display = "none"
    }
    let search = document.getElementById('search_todo').value
    if (search.value === "") {
        searchModal.style.display = "none"
    }


    let filter = toDosArray.filter(a => {
        if (a.includes(search)) {
            searchModal.style.display = "block"
            
        }
        else {
            searchModal.style.display = "none"
        }
        return a.includes(search)
    })
    console.log(filter)
}