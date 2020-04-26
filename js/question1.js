const firstName = document.querySelector("#contactForm");
firstName.addEventListener("submit",validateForm);
function validateForm(event){
    event.preventDefault();
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;
    if (checkInput(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
    }
}
function checkInput(name) {
    const inputValue = name.trim();
    const valueLength = inputValue.length;
    if(valueLength >= 2) {
        return true;
    } else {
        return false;
    }
}