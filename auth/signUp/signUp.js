
var userAccounts = []

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



signUp = () => {
    var firstName = document.getElementById('first_name')
    var lastName = document.getElementById('last_name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var gender = document.getElementById('gender')

    var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");



    if (firstName.value === "") {
        firstName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your first name"
        // closeAlertDiv()
        return;
    }
    else if (firstName.value.length != "" && firstName.value.length < 3) {
        firstName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your first name is too short"
        console.log("Your first name is too short")
        return;
    }
    if (lastName.value === "") {
        lastName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your last name"
        return;
    }
    else if (lastName.value.length < 2) {
        lastName.focus();
        console.log("Your last name is too short")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your last name is too short"
        return;
    }

    if (gender.value.length < 4 || gender.value.length > 6) {
        gender.focus();
        console.log("Please select your gender")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please select your gender"
        return;
    }
    if (email.value === "") {
        email.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your email address"
        return;
    }
    else if (!(email.value.match(emailPattern))) {
        email.focus();
        console.log("Please enter your valid email address")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your valid email address"
        return;
    }
    if (password.value === "") {
        password.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your password"
        return;
    }
    else if (password.value.length < 8) {
        password.focus();
        console.log("Your password must be at least 8 characters")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your password must be at least 8 characters"
        return;
    }
    else if (password.value.length > 25) {
        password.focus();
        console.log("Your password must be at max 25 characters")
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your password must be at max 25 characters"
        return;
    }


    else {
        var emailMatch = false;
        for (var i = 0; i < userAccounts.length; i++) {
            if (email.value === userAccounts[i].email) {
                console.log("The email address is already in use by another account")
                alertErrorDiv.style.display = "block"
                errorMessage.innerHTML = "The email address is already in use by another account"
                emailMatch = true
            }
        }

        if (emailMatch === false) {

            if (!(password.value.match(passwordPattern))) {
                password.focus();
                console.log("Your password should contain at least one uppercase character, one lowercase character and one digit")
                alertErrorDiv.style.display = "block"
                errorMessage.innerHTML = "Your password should contain at least one uppercase character, one lowercase character and one digit"
                return;
            }

            else {
                userAccounts.push({ "firstName": firstName.value, "lastName": lastName.value, "email": email.value, "password": password.value, "gender": gender.value })

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