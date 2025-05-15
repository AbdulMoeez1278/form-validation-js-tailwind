function submitForm() {
  // firstName
  let firstName = document.getElementById("firstName").value.trim();
  let firstNameError = document.getElementById("firstNameError");

  //   lastName
  let lastName = document.getElementById("lastName").value.trim();
  let lastNameError = document.getElementById("lastNameError");

  //   email
  let email = document.getElementById("email").value.trim();
  let emailError = document.getElementById("emailError");

  //   password
  let password = document.getElementById("password").value.trim();
  let passwordError = document.getElementById("passwordError");
  let togglePass = document.getElementById("togglePass");

  //   confirmPassword
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let toggleConfirmPass = document.getElementById("toggleConfirmPass");

  //   dateOfBirth
  let dobInput = document.getElementById("dob").value;
  let dobError = document.getElementById("dobError");

  //   gender
  let gender = document.querySelector('input[name="gender"]:checked');
  let genderError = document.getElementById("genderError");
  let otherGenderError = document.getElementById("otherGenderError");
  let otherOption = document.querySelector(
    'input[name="gender"][value="Other"]'
  );
  let extraInput = document.getElementById("extraInput").value.trim();

  // checkboxes
  let checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
  let checkboxError = document.getElementById("checkboxError");

  //   textarea
  let message = document.getElementById("message").value.trim();
  let messageError = document.getElementById("messageError");

  //   file upload
  let fileUpload = document.getElementById("fileUpload");
  let fileUploadError = document.getElementById("fileUploadError");

  //   firstName validation
  if (firstName.length === 0) {
    firstNameError.innerHTML = "First name is required.";
  } else if (!/^[A-Za-z]+$/.test(firstName)) {
    firstNameError.textContent = "First Name must only contain letters.";
  } else if (firstName.length < 3) {
    firstNameError.textContent = "At least 3 characters required.";
  } else {
    firstNameError.textContent = "";
  }

  //   lastName validation
  if (lastName.length === 0) {
    lastNameError.innerHTML = "Last name is required.";
  } else if (!/^[A-Za-z]+$/.test(lastName)) {
    lastNameError.textContent = "Last Name must only contain letters.";
  } else if (lastName.length < 3) {
    lastNameError.textContent = "At least 3 characters required.";
  } else {
    lastNameError.textContent = "";
  }

  //   email validation
  if (email.length === 0) {
    emailError.textContent = "Email is required.";
  } else if (!/^[a-z]+[0-9]*@[a-z]+\.[a-z]{2,3}$/.test(email)) {
    emailError.textContent =
      "Enter a valid email: (letters first, one @ and one . only)";
  } else {
    emailError.textContent = "";
  }

  // **Password Validation**
  let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (password.length === 0) {
    passwordError.innerHTML = "Password is required.";
    togglePass.style.bottom = "2rem";
    toggleConfirmPass.style.bottom = "2rem";
  } else if (!regex.test(password)) {
    passwordError.textContent =
      "Password must be 8+ characters with letters and numbers.";
    togglePass.style.bottom = "2rem";
    toggleConfirmPass.style.bottom = "2rem";
  } else {
    passwordError.textContent = "";
    togglePass.style.bottom = "2rem";
    toggleConfirmPass.style.bottom = "2rem";
  }

  // **Confirm Password Validation**
  if (confirmPassword.length === 0) {
    confirmPasswordError.innerHTML = "Please confirm your password.";
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }

  //   dateOfBirth validation
  if (dobInput === "") {
    dobError.innerHTML = "Date of birth is required.";
  } else {
    dobError.innerHTML = "";
  }

  //   gender validation
  if (!gender) {
    genderError.innerHTML = "Please select your gender.";
  } else if (gender && gender.value !== "Other") {
    genderError.innerHTML = "";
    otherGenderError.innerHTML = "";
  } else if (gender && gender.value === "Other") {
    if (extraInput.length === 0) {
      genderError.innerHTML = "";
      otherGenderError.innerHTML = "Input field cannot be empty.";
    } else if (!/^[a-zA-Z]+$/.test(extraInput)) {
      otherGenderError.innerHTML = "Only letters are allowed.";
    } else if (extraInput.length < 3) {
      otherGenderError.innerHTML = "At least 3 characters required.";
    } else {
      otherGenderError.innerHTML = "";
      genderError.innerHTML = "";
    }
  }

  //   checkboxes validation
  if (checkboxes.length === 0) {
    checkboxError.innerHTML = "Select at least one checkbox.";
  } else {
    checkboxError.innerHTML = "";
  }

  //   textarea validation
  if (message.length === 0) {
    messageError.innerHTML = "Message cannot be empty.";
  } else if (message.length < 3) {
    messageError.innerHTML = "Message must be at least 3 characters.";
  } else if (message.length > 500) {
    messageError.innerHTML = "Message cannot exceed 500 characters.";
  } else {
    messageError.innerHTML = "";
  }

  // file upload validation
  let maxFileSize = 2 * 1024 * 1024; // 2 MB
  if (!fileUpload.value) {
    fileUploadError.innerHTML = "Please select a file.";
  } else if (fileUpload.files[0].size > maxFileSize) {
    fileUploadError.innerHTML = "File size exceeds the limit of 2MB.";
  } else {
    fileUploadError.innerHTML = "";
  }

  // **Final Form Validation**
  if (
    firstName.length === 0 ||
    lastName.length === 0 ||
    email.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0 ||
    dobInput.length === 0
  ) {
    fillFormError.innerHTML = "Please fill in all required fields";
    // alert("Please fill in all required fields");
  } else {
    fillFormError.innerHTML = "Form submitted successfully";
    // alert("Form submitted successfully");
    let inputs = registrationForm.querySelectorAll("input, textarea");
    // Loop through the form inputs, log only selected ones
    inputs.forEach((input) => {
      if (
        (input.type === "checkbox" || input.type === "radio") &&
        input.checked
      ) {
        console.log(input.name + ": " + input.value);
      } else if (
        input.type !== "checkbox" &&
        input.type !== "radio" &&
        input.value.trim() !== ""
      ) {
        console.log(input.name + ": " + input.value);
      }

      // Clear inputs
      input.value = "";
      eyeIcon.innerHTML = "";
      eyeIconConfirm.innerHTML = "";
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      }
    });
  }
}

function toggleEyeIcon() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");
  let togglePass = document.getElementById("togglePass");
  let toggleConfirmPass = document.getElementById("toggleConfirmPass");

  // Show or hide password eye icon
  if (password.value.length > 0) {
    togglePass.classList.remove("hidden");
  } else {
    togglePass.classList.add("hidden");
  }

  // Show or hide confirm password eye icon
  if (confirmPassword.value.length > 0) {
    toggleConfirmPass.classList.remove("hidden");
  } else {
    toggleConfirmPass.classList.add("hidden");
  }
}

// toggle password visibility function
function togglePassword() {
  let password = document.getElementById("password");
  let eyeIcon = document.getElementById("eyeIcon");

  if (password.type === "password") {
    password.type = "text";
    eyeIcon.innerHTML = `
            <path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
            1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
            c-1.99-4.61-6.19-7.5-11-7.5z"></path>
            <circle cx="12" cy="12" r="3"></circle>`;
  } else {
    password.type = "password";
    eyeIcon.innerHTML = `<path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
            1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
            c-1.99-4.61-6.19-7.5-11-7.5z"></path>`;
  }
}

// toggle confirm password visibility function
function toggleConfirmPassword() {
  let confirmPassword = document.getElementById("confirmPassword");
  let eyeIconConfirm = document.getElementById("eyeIconConfirm");

  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
    eyeIconConfirm.innerHTML = `
      <path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
      1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
      c-1.99-4.61-6.19-7.5-11-7.5z"></path>
      <circle cx="12" cy="12" r="3"></circle>`;
  } else {
    confirmPassword.type = "password";
    eyeIconConfirm.innerHTML = `
      <path d="M12 4.5c-4.81 0-9.01 2.89-11 7.5
      1.99 4.61 6.19 7.5 11 7.5s9.01-2.89 11-7.5
      c-1.99-4.61-6.19-7.5-11-7.5z"></path>`;
  }
}

// optional info input
function toggleInput() {
  let extraInput = document.getElementById("extraInput");
  let maleOption = document.querySelector('input[name="gender"][value="Male"]');
  let femaleOption = document.querySelector(
    'input[name="gender"][value="Female"]'
  );
  let otherOption = document.querySelector(
    'input[name="gender"][value="Other"]'
  );

  // Show input if "Other" is selected, hide otherwise
  if (otherOption.checked) {
    extraInput.classList.remove("hidden");
  } else if (femaleOption.checked || maleOption.checked) {
    extraInput.classList.add("hidden");
    otherGenderError.innerHTML = "";
  } else {
    extraInput.classList.add("hidden");
  }
}

// **Submit Button Event**
let button = document.getElementById("submitButton");
button.addEventListener("click", function (event) {
  event.preventDefault();
  submitForm();
});
