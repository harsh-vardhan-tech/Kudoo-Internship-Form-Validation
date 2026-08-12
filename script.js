const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    }
    else if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (phoneInput.value.trim() === "") {
        phoneError.textContent = "Phone number is required.";
        isValid = false;
    }
    else if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }

    // Message validation
    if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required.";
        isValid = false;
    }

    // Final result
    if (isValid) {

        successMessage.textContent =
            "Form submitted successfully!";

        form.reset();
    }
});
