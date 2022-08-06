// Todos Array
let toDosArray = []



let getUserAccounts = JSON.parse(localStorage.getItem('userAccounts'))
let todosDiv = document.getElementById('todos_div')
let getLoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
let edit = document.getElementById('edit_todo')
let profileUserName = document.getElementById('profile_userName')
let userEmail = document.getElementById('user_email')
let editModal = document.getElementById('edit_modal')
let todo = document.getElementById('todo_field')
let currentArrayIndex;
let innerVal;


let userAccounts = getUserAccounts
let loggedInUser = getLoggedInUser

let getInfo = "";





// Getting Current User
for (var i = 0; i < userAccounts.length; i++) {
    if (userAccounts[i].email === loggedInUser.email && userAccounts[i].password === loggedInUser.password) {

        getInfo = userAccounts[i]

    }
}



// capitalizing first name
let firstNameChar1 = getInfo.firstName.slice(0, 1)
firstNameChar1 = firstNameChar1.toUpperCase();
let firstNameOtherChars = getInfo.firstName.slice(1)
firstNameOtherChars = firstNameOtherChars.toLowerCase();
let firstName = firstNameChar1 + firstNameOtherChars


// capitalizing last name
let lastNameChar1 = getInfo.lastName.slice(0, 1)
lastNameChar1 = lastNameChar1.toUpperCase();
let lastNameOtherChars = getInfo.lastName.slice(1)
lastNameOtherChars = lastNameOtherChars.toLowerCase();
let lastName = lastNameChar1 + lastNameOtherChars


profileUserName.innerHTML = `${firstName} ${lastName}`
userEmail.innerHTML = `${getInfo.email}`


// User avatar image (profile image)
let avatarImg = getInfo.gender === "Male" ? avatar = "https://i.pinimg.com/736x/d6/30/8a/d6308a0357b762ee72b49b482f125ef7.jpg" : avatar = "https://cdnb.artstation.com/p/assets/images/images/001/372/641/large/hamada-mabrouk-woman-avatar-hijab-3.jpg?1445282460"
var userAvatar = document.createElement('img')
userAvatar.setAttribute('src', avatarImg)
userAvatar.setAttribute('id', 'user_avatar')

var setuserAvatar = document.getElementById('user_profile_dropdown')
var userProfileImg = document.getElementById('user_profile_img')
setuserAvatar.src = avatarImg
userProfileImg.src = avatarImg





// Add Todo function
addTodo = () => {

    if (todo.value === "") {
        console.log("Please enter some value")
    }
    else {

        toDosArray.push(todo.value)

        getInfo.todos = toDosArray
        console.log(getInfo)

        localStorage.setItem('userAccounts', JSON.stringify(userAccounts))


        // fetching todo

        todosDiv.innerHTML += `<div class="todo">
<p class="todo_text">${todo.value}</p>
<button class="delBtn" onclick="deleteTodo(this)"><i class="fa fa-trash-o" aria-hidden="true"></i></<button>
<button class="editBtn" onclick="editTodo(this)"><i class="fa fa-pencil" aria-hidden="true"></i></<button>
<br>
</div>`

        todo.value = ""
    }
}



// Getting todos from local storage when page refreshes
function getTodosFromLocalStor() {
    for (var i in toDosArray) {

        todosDiv.innerHTML += `<div class="todo">
        <p class="todo_text">${toDosArray[i]}</p>
        <button class="delBtn" onclick="deleteTodo(this)"><i class="fa fa-trash-o" aria-hidden="true"></i></<button>
        <button class="editBtn" onclick="editTodo(this)"><i class="fa fa-pencil" aria-hidden="true"></i></<button>
        <br>
        </div>`

    }
}




// Delete Todo Function
function deleteTodo(e) {
    e.parentNode.remove();
    for (var i = 0; i < toDosArray.length; i++) {
        if (toDosArray[i] === e.parentNode.childNodes[1].innerHTML) {
            toDosArray.splice(i, 1);
        }
    }


    // setting new todos array in local storage
    getInfo.todos = toDosArray
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
}



// Edit Todo Function
function editTodo(e) {
    editModal.style.display = "block"
    for (var i = 0; i < toDosArray.length; i++) {

        if (toDosArray[i] === e.parentNode.childNodes[1].innerHTML) {
            currentArrayIndex = i
            edit.value = toDosArray[i]
            innerVal = e

        }
    }
    console.log(toDosArray)


    window.onclick = function (event) {
        if (event.target == editModal) {
            editModal.style.display = "none";
        }
    }

}


// Edit Todo Value Function
function editTodoValue() {
    toDosArray.splice(currentArrayIndex, 1, edit.value);
    innerVal.parentNode.childNodes[1].innerHTML = edit.value
    getInfo.todos = toDosArray
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
    editModal.style.display = "none"
}


// Setting local storage todos in Todos Array
function getTodos() {
    var todos = getInfo.todos
    toDosArray = todos
    if (!toDosArray) {
        toDosArray = []
    }
}
getTodos()




// Logout Function
logOut = () => {
    localStorage.removeItem('loggedInUser')
    window.location.replace('../auth/login/login.html')
}




// Search Todo Function
searchTodo = () => {
    let search = document.getElementById('search_todo').value
    console.log(`Value: ${search}`)
    let filter = toDosArray.filter(a => {
        return a.includes(search)

    })
    todosDiv.innerHTML = ""
    for (var i = 0; i < filter.length; i++) {

        todosDiv.innerHTML += `<div class="todo">
        <p class="todo_text">${filter[i]}</p>
        <button id="delBtn" onclick="deleteTodo(this)"><i class="fa fa-trash-o" aria-hidden="true"></i></<button>
        <button id="editBtn" onclick="editTodo(this)"><i class="fa fa-pencil" aria-hidden="true"></i></<button>
        <br>
        </div>`

    }
}

// Profile Dropdown Add todo link Function
addTodoDropdown = () => {
    todo.focus()
}


// Close Edit Modal Function
closeModal = () => {
    editModal.style.display = "none"
}