document.getElementById("toggle-form").addEventListener("click", function() {
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");
    const formTitle = document.getElementById("form-title");
    const formSubtitle = document.getElementById("form-subtitle");
    const toggleText = document.getElementById("toggle-text");

    if (toggleText.textContent === "Se connecter") {
        formTitle.textContent = "Se connecter";
        formSubtitle.textContent = "Entrez vos informations pour vous connecter.";
        registerForm.style.display = "none";
        loginForm.style.display = "block";
        toggleText.textContent = "S'inscrire";
    } else {
        formTitle.textContent = "S'inscrire";
        formSubtitle.textContent = "Créez un compte pour utiliser nos services.";
        registerForm.style.display = "block";
        loginForm.style.display = "none";
        toggleText.textContent = "Se connecter";
    }
});
