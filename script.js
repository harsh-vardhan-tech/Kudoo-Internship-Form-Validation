const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");
  const successMessage = document.getElementById("successMessage");

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  [name, email, phone, message].forEach((field) => {
    field.classList.remove("error-input", "success-input");
  });

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    name.classList.add("error-input");
    isValid = false;
  } else {
    name.classList.add("success-input");
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    email.classList.add("error-input");
    isValid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    email.classList.add("error-input");
    isValid = false;
  } else {
    email.classList.add("success-input");
  }

  const phonePattern = /^[0-9]{10}$/;

  if (phone.value.trim() === "") {
    phoneError.textContent = "Phone number is required.";
    phone.classList.add("error-input");
    isValid = false;
  } else if (!phonePattern.test(phone.value.trim())) {
    phoneError.textContent = "Phone number must contain 10 digits.";
    phone.classList.add("error-input");
    isValid = false;
  } else {
    phone.classList.add("success-input");
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message is required.";
    message.classList.add("error-input");
    isValid = false;
  } else if (message.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    message.classList.add("error-input");
    isValid = false;
  } else {
    message.classList.add("success-input");
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    form.reset();

    [name, email, phone, message].forEach((field) => {
      field.classList.remove("success-input");
    });
  }
});
