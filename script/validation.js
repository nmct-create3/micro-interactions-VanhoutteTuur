let email = {},
	password = {},
	signInButton;

// helper function
const isValidEmailAddress = function (emailAddress) {
	// Basis manier om e-mailadres te checken.
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};
const isValidPassword = function (fieldValue) {
	return fieldValue && fieldValue.length > 1;
};
const isEmpty = function (fieldValue) {
	return !fieldValue || !fieldValue.length;
};

//get dom elements
const getDOMElements = function () {
	email.field = document.querySelector(".js-email-field");
	email.errorMessage = document.querySelector(".js-email-error");
	email.input = document.querySelector(".js-email-input");

	password.field = document.querySelector(".js-password-field");
	password.errorMessage = document.querySelector(".js-password-error");
	password.input = document.querySelector(".js-password-input");

	signInButton = document.querySelector(".js-sign-in-button");
};

const addErrors = function (formField, errorField, errorMessage) {
	formField.classList.add("has-error");
	errorField.style.display = "block";
	errorField.innerHTML = errorMessage;
};

const removeErrors = function (formField, errorField) {
	formField.classList.remove("has-error");
	//todo: toggle dit met een class
	errorField.style.display = "none";
};

// while the user is typing, check if errors need to be removed
const doubleCheckEmailAddress = function () {
	// if email is not empty and valid: remove errors and event listener
	if (isValidEmailAddress(email.input.value)) {
		removeErrors(email.field, email.errorMessage);
		email.input.removeEventListener("input", doubleCheckEmailAddress);
	} else {
		if (isEmpty(email.input.value)) {
			// email is empty
			addErrors(email.field, email.errorMessage, "Email is required");
		} else {
			// email is invalid
			addErrors(email.field, email.errorMessage, "Email is invalid");
		} 
	}
};

// while the user is typing, check if errors need to be removed
const doubleCheckPassword = function () {
	// if password is valid: remove errors and event listener
	if (isValidPassword(password.input.value)) {
		removeErrors(password.field, password.errorMessage);
		password.input.removeEventListener("input", doubleCheckPassword);
	} else {
        // invalid password: empty or too short: 
		if (isEmpty(password.input.value)) {
			// password is empty
			addErrors(password.field, password.errorMessage, "Password is required");
		} else {
			// password is invalid
			addErrors(password.field, password.errorMessage, "Password is too short");
		}
	}
};

// add listeners to the dom elements
const enableListeners = function () {
	email.input.addEventListener("blur", function () {
        // if empty or invalid
        if (isEmpty(email.input.value) || !isValidEmailAddress(email.input.value)) {
            // add appropriate message: required (if empty) or incorrect (if invalid)
            if (isEmpty(email.input.value)){
                addErrors(email.field, email.errorMessage, "Email is required");
            } else {
                addErrors(email.field, email.errorMessage, "Email is invalid");
            }
            // add doublecheck event function in both cases
			email.input.addEventListener("input", doubleCheckEmailAddress);
        } else {
            // if valid: remove errors and listener function
			removeErrors(email.field, email.errorMessage);
			email.input.removeEventListener("input", doubleCheckEmailAddress);
		}
	});

	password.input.addEventListener("blur", function () {
		// if empty or invalid
		if (isEmpty(password.input.value) || !isValidPassword(password.input.value)) {
			// add appropriate message: required (if empty) or incorrect (if invalid)
			if (isEmpty(password.input.value)) {
				addErrors(password.field, password.errorMessage, "Password is required");
			} else {
				addErrors(password.field, password.errorMessage, "Password is too short");
			}
			// add doublecheck event function in both cases
			password.input.addEventListener("input", doubleCheckPassword);
		} else {
			// if valid: remove errors and listener function
			removeErrors(password.field, password.errorMessage);
			password.input.removeEventListener("input", doubleCheckPassword);
		}
	});

	signInButton.addEventListener("click", function (e) {
		e.preventDefault();
	});
};

document.addEventListener("DOMContentLoaded", () => {
    getDOMElements();
	enableListeners();
});
