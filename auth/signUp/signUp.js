
var userAccounts = []


function signUp() {
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");



    if (name.value === "") {
        name.focus();
        console.log("Please enter your name")
    }
    else if (name.value.length < 3) {
        name.focus();
        console.log("Your name is too short")
    }
    if (email.value === "") {
        email.focus();
        console.log("Please enter your email")
    }
    else if (!(email.value.match(emailPattern))) {
        email.focus();
        console.log("Please enter your valid email address")
        return false;
    }
    if (password.value === "") {
        password.focus();
        console.log("Please enter your password")
    }
    else if (password.value.length < 8) {
        console.log("Your password must be at least 8 characters")
    }
    else if (password.value.length > 25) {
        console.log("Your password must be at max 25 characters")
    }


    else {
        var emailMatch = false;
        for (var i = 0; i < userAccounts.length; i++) {
            if (email.value === userAccounts[i].email) {
                console.log("The email address is already in use by another account")
                emailMatch = true
            }
        }

        if (emailMatch === false) {

            if (!(password.value.match(passwordPattern))) {
                password.focus();
                console.log("Your password should contain at least one uppercase character, one lowercase character and one digit")
                return false;
            }

            else {
                userAccounts.push({ "name": name.value, "email": email.value, "password": password.value })

                setItem()

                window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/auth/login/login.html')

            }
        }
    }

}

function setItem() {
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
}


function getItem() {
    var getUserAccounts = JSON.parse(localStorage.getItem('userAccounts'))
    userAccounts = getUserAccounts
    if (!userAccounts) {
        userAccounts = []
    }
}
getItem()