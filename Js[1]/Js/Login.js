function filedvalidation() {
    var userid = document.getElementById('loginUser').value;
    var pswd = document.getElementById('loginPassword').value;
    var message;
   
    alert(userid + ' ' + pswd)
    if (userid == 'rajatkkr2' && pswd == '12345') {
        alert('Your login Sucessfull !!');
    }
    else {
        alert('Your login credential failed!!');
    }
}

function Ankur(event) {
    var a = event.charCode || event.keyCode;
    if (a >= 48 && a <= 57) {
        return true;
    }
    event.preventDefault(); // Fix the typo here
    return false;
}
function checkPasswordMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    }
}

// document.getElementById('loginUser').setAttribute('autocomplete', 'off');