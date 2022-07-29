var userAccounts = []
var getUser = JSON.parse(localStorage.getItem('userAccounts'))

userAccounts = getUser

function login() {
    var email = document.getElementById('email')
    var password = document.getElementById('password')

    var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;

    if (email.value === "") {
        console.log("Please enter your email address")
    }
    else if (!(email.value.match(emailPattern))) {
        email.focus();
        console.log("Please enter your valid email address")
        return false;
    }

    if (password.value === "") {
        console.log("Please enter your password")
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
            console.log("user not found")
        }
        if (emailMatch === true && passwordMatch === false) {
            console.log("Invalid password")
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



