function signUp() {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var retype = document.getElementById("retype").value;

    if(!re.test(email)){alert("enter a valid email")}
    else if(password.length < 6){alert("minimum length of password is 6")}
    else if (password != retype) {alert("passwords do not match")}
    else {
        var userAge = parseFloat(document.getElementById("age").value);
        if (isNaN(userAge)) {
            alert("Please enter a number")
        }
        else if (userAge < 16) {
            alert("Sorry, you are not old enough to access the following content")
        }
        else {
            alert("Please check email to confirm account")
        }
    }
}