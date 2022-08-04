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

var profileUserName = document.getElementById('profile_userName')
let userEmail = document.getElementById('user_email')
var userInfo = document.getElementById('userInfo')
var userName = document.createElement('h1')
var userNameText = document.createTextNode(`Hi, ${getInfo.firstName}`)
userName.style.display = "inline"
userName.appendChild(userNameText)
userInfo.appendChild(userName)
profileUserName.innerHTML = `${getInfo.firstName} ${getInfo.lastName}`
userEmail.innerHTML = `${getInfo.email}`


var avatar = ""
var avatarImg = getInfo.gender === "Male" ? avatar = "https://i.pinimg.com/736x/d6/30/8a/d6308a0357b762ee72b49b482f125ef7.jpg" : avatar = "https://cdnb.artstation.com/p/assets/images/images/001/372/641/large/hamada-mabrouk-woman-avatar-hijab-3.jpg?1445282460"
var userAvatar = document.createElement('img')
userAvatar.setAttribute('src', avatarImg)
userAvatar.setAttribute('id', 'user_avatar')
userInfo.appendChild(userAvatar)

var setuserAvatar = document.getElementById('user_profile_dropdown')
var userProfileImg = document.getElementById('user_profile_img')
setuserAvatar.src = avatarImg
userProfileImg.src = avatarImg



let todo = document.getElementById('todo_field')


function addTodo() {

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
window.onload = () => {
    getTodosFromLocalStor()
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
    let search = document.getElementById('search_todo').value
    console.log(`Value: ${search}`)
    let filter = toDosArray.filter(a => {
        return a.includes(search)

    })
    console.log(filter)
    todosDiv.innerHTML = ""
    for (var i = 0; i < filter.length; i++) {
        var separateTodo = document.createElement('div')
        var todoPara = document.createElement('p')
        todoPara.style.display = "inline"
        var todoText = document.createTextNode(filter[i])
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


addTodoDropdown = () => {
    todo.focus()
}