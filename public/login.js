document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById ("email");
    const passwordInput = document.getElementById ("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
       
        let isValid = true;

        const emailValue = emailInput.value;
        if (!validEmail(emailValue)){
            emailError.textContent = "Invalid email format";
            isValid = false;
        } else{
            emailError.textContent = "";
        }

        // password validation
        const passwordValue = passwordInput.value;
        const passwordStrenght = checkPasswordStrength(passwordValue);

        if(passwordStrenght != "Strong"){
            passwordError.textContent = `Password is ${passwordStrenght}`;
            isValid = false;
        }else{
            passwordError.textContent = "";
        }

        if (isValid){
            alert("login successful");
        }
    });
});

function validEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function checkPasswordStrength(password){
    if (password.length < 6){
        return "Too Short";
    }

    if (!/[0-9]/.text(password)){
        return "Missing number";
    }

    if (!/[a-z]/.test(password)){
        return "Missing lowecase letter";
    }

    if (!/[A-Z]/.test(password)){
        return "Missing Uppercase letter"
    }

    return "Strong";
}
