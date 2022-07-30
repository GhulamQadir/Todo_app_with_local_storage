var userAccounts = []
var getUser = JSON.parse(localStorage.getItem('userAccounts'))

userAccounts = getUser



var alertErrorDiv = document.getElementById('alert')
var closeAlertBtn = document.getElementById('closebtn')
var errorMessage = document.getElementById('error_message')


closeErrorAlert = () => {
    alertErrorDiv.style.opacity = "0"
    setTimeout(() => {
        alertErrorDiv.style.opacity = "1"
        alertErrorDiv.style.display = "none"
    }, 600)

}

function login() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')


    if (email.value === "") {
        email.focus();
        console.log("Please enter your email address")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your email address"
        return;
    }


    if (password.value === "") {
        password.focus();
        console.log("Please enter your password")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your password"
        return;
    }

    else {
        var emailMatch = false;
        var passwordMatch = false;

        for (var i = 0; i < userAccounts.length; i++) {

            if (email.value === userAccounts[i].email) {
                emailMatch = true

                if (password.value === userAccounts[i].password) {
                    passwordMatch = true
                    localStorage.setItem('loggedInUser', JSON.stringify({ "email": email.value, "password": password.value }))
                    console.log("matched")
                    window.location.replace('file:///C:/Users/abdulqadir/Desktop/JS%20todo-app/home/home.html')
                }

            }
        }
        if (emailMatch === false) {
            console.log("User not found")
            alertErrorDiv.style.display = "block"
            errorMessage.innerHTML = "User not found"
            return;
        }
        if (emailMatch === true && passwordMatch === false) {
            password.focus()
            console.log("The password is invalid or the user does not have a password")
            alertErrorDiv.style.display = "block"
            errorMessage.innerHTML = "The password is invalid or the user does not have a password"
            return;
        }

    }
}


function showAndHidePassword() {
    var getPassword = document.getElementById("password");
    if (getPassword.type === "password") {
        getPassword.type = "text";
    } else {
        getPassword.type = "password";
    }
}



