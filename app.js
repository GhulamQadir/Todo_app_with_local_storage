function ifUserExists() {
    if (localStorage.getItem('userAccounts') == null) {
        window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/signUp/signUp.html')
    }
    else if (localStorage.getItem('userAccounts') != null && localStorage.getItem('loggedInUser') == null) {
        window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/login/login.html')
    }
    else {
        window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/home/home.html')
    }
}