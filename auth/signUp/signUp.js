
var userAccounts = []


function signUp() {
    var firstName = document.getElementById('first_name')
    var lastName = document.getElementById('last_name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var gender = document.getElementById('gender')

    var emailPattern = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
    var passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])");



    if (firstName.value === "") {
        firstName.focus();
        console.log("Please enter your name")
        return false;
    }
    else if (firstName.value.length < 3) {
        firstName.focus();
        console.log("Your name is too short")
        return false;
    }
    if (lastName.value === "") {
        lastName.focus();
        console.log("Please enter your last name")
        return false;
    }
    else if (lastName.value.length < 2) {
        lastName.focus();
        console.log("Your last name is too short")
        return false;
    }
    if (email.value === "") {
        email.focus();
        console.log("Please enter your email")
        return false;
    }
    else if (!(email.value.match(emailPattern))) {
        email.focus();
        console.log("Please enter your valid email address")
        return false;
    }
    if (password.value === "") {
        password.focus();
        console.log("Please enter your password")
        return false;
    }
    else if (password.value.length < 8) {
        password.focus();
        console.log("Your password must be at least 8 characters")
        return false;
    }
    else if (password.value.length > 25) {
        password.focus();
        console.log("Your password must be at max 25 characters")
        return false;
    }

    if (gender.value.length < 4 || gender.value.length > 6) {
        gender.focus();
        console.log("Please select your gender")
        return false;
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
                userAccounts.push({ "firstName": lastName.value, "lastName": last.value, "email": email.value, "password": password.value, "gender": gender.value })

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