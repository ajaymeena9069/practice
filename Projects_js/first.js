function validateForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let valid = true;
    if (name.value.trim() === "") {
        valid = false;
    }
    if (email.value.trim() === "" || !email.value.include("@")) {
        valid = false;      
    }
    if (password.value.length <= 8) {
        valid = false;
    }
    if (!valid) {
            alert("invalid!");
        } else {
            alert("Form submitted successfully!");
        }
}