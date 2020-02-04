function changePassword() {
    var showPassword = document.getElementById("current-password");
    if (showPassword.type === "password") {
        showPassword.type === "text";
    } else {
        showPassword.type === "password";
    }
}