var userAccounts = []
var getUser = JSON.parse(localStorage.getItem('userAccounts'))

userAccounts = getUser



var loginFormDiv = document.getElementById('login_form_div')
var alertErrorDiv = document.getElementById('alert')
var closeAlertBtn = document.getElementById('closebtn')
var errorMessage = document.getElementById('error_message')
var loader = document.getElementById('loader')


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


                    loginFormDiv.style.pointerEvents = "none"
                    loader.style.display = "block"
                    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
                    setTimeout(() => {
                        loginFormDiv.style.pointerEvents = "auto"
                        loader.style.display = "none"
                        document.body.style.backgroundColor = "rgb(215, 219, 220)"
                        localStorage.setItem('loggedInUser', JSON.stringify({ "email": email.value, "password": password.value }))
                        console.log("matched")
                        window.location.replace('../../home/home.html')
                    }, 2000)
                }

            }
        }
        if (emailMatch === false) {
            loginFormDiv.style.pointerEvents = "none"
            loader.style.display = "block"
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
            setTimeout(() => {
                loginFormDiv.style.pointerEvents = "auto"
                document.body.style.backgroundColor = "rgb(215, 219, 220)"
                loader.style.display = "none"
                alertErrorDiv.style.display = "block"
                errorMessage.innerHTML = "User not found"
                email.focus()

            }, 2000)
            return;
        }
        if (emailMatch === true && passwordMatch === false) {
            loginFormDiv.style.pointerEvents = "none"
            loader.style.display = "block"
            document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
            setTimeout(() => {
                loginFormDiv.style.pointerEvents = "auto"
                document.body.style.backgroundColor = "rgb(215, 219, 220)"
                loader.style.display = "none"
                alertErrorDiv.style.display = "block"
                errorMessage.innerHTML = "The password is invalid or the user does not have a password"
                password.focus()
            }, 2000)
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



