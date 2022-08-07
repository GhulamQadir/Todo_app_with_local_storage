// Users Accounts Array
var userAccounts = []


var signUpFormDiv = document.getElementById('signUp_form_div')
var alertErrorDiv = document.getElementById('alert')
var closeAlertBtn = document.getElementById('closebtn')
var errorMessage = document.getElementById('error_message')
var loader = document.getElementById('loader')


// close error alert function
closeErrorAlert = () => {
    alertErrorDiv.style.opacity = "0"
    setTimeout(() => {
        alertErrorDiv.style.opacity = "1"
        alertErrorDiv.style.display = "none"
    }, 600)

}


// Sign Up function
signUp = () => {

    // Getting data from input fields 
    let firstName = document.getElementById('first_name')
    let lastName = document.getElementById('last_name')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let gender = document.getElementById('gender')



    // Regex for Email and password Validation
    let emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    let passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");




    // Form Validation
    if (firstName.value === "") {
        firstName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Please enter your first name"
        return;
    }
    else if (firstName.value.length < 3) {
        firstName.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your first name is too short"
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
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your last name is too short"
        return;
    }

    if (gender.value.length < 4 || gender.value.length > 6) {
        gender.focus();
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
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your password must be at least 8 characters"
        return;
    }
    else if (password.value.length > 25) {
        password.focus();
        alertErrorDiv.style.display = "block"
        errorMessage.innerHTML = "Your password must be at max 25 characters"
        return;
    }



    // Checking User's Credentials if already registered
    else {
        var emailMatch = false;
        for (var i = 0; i < userAccounts.length; i++) {
            if (email.value === userAccounts[i].email) {
                signUpFormDiv.style.pointerEvents = "none"
                loader.style.display = "block"
                setTimeout(() => {
                    signUpFormDiv.style.pointerEvents = "auto"
                    loader.style.display = "none"
                    alertErrorDiv.style.display = "block"
                    errorMessage.innerHTML = "The email address is already in use by another account"
                    email.focus()
                }, 2000)
                return;
            }
        }

        if (emailMatch === false) {

            if (!(password.value.match(passwordPattern))) {
                password.focus();
                alertErrorDiv.style.display = "block"
                errorMessage.innerHTML = "Your password should contain at least one uppercase character, one lowercase character and one digit"
                return;
            }

            else {

                signUpFormDiv.style.pointerEvents = "none"
                loader.style.display = "block"
                setTimeout(() => {
                    signUpFormDiv.style.pointerEvents = "auto"
                    loader.style.display = "none"

                    userAccounts.push({ "firstName": firstName.value, "lastName": lastName.value, "email": email.value, "password": password.value, "gender": gender.value })
                    setUserAccounts()
                    window.location.replace('../login/login.html')
                }, 2000)

            }
        }
    }

}


// setting Users Accounts in local storage
function setUserAccounts() {
    localStorage.setItem('userAccounts', JSON.stringify(userAccounts))
}


// getting Users Accounts in local storage
function getUserAccounts() {
    var getUserAccounts = JSON.parse(localStorage.getItem('userAccounts'))
    userAccounts = getUserAccounts
    if (!userAccounts) {
        userAccounts = []
    }
}
getUserAccounts()



// Show and Hide password checkBox
function showAndHidePassword() {
    var getPassword = document.getElementById("password");
    if (getPassword.type === "password") {
        getPassword.type = "text";
    } else {
        getPassword.type = "password";
    }
}
