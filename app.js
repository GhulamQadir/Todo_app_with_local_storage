function ifUserExists() {
    if (localStorage.getItem('userAccounts') == null) {
        window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/signUp/signUp.html')
    }
    else {
        window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/login/login.html')
    }

}