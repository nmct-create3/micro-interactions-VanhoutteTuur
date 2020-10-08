let html_passwordInput;
let html_passwordToggle;



function handlePasswordSwitcher() {
	html_passwordInput = document.querySelector(".js-password-input");
	html_passwordToggle = document.querySelector(".js-password-toggle");

	html_passwordToggle.addEventListener("change", function () {
		if (this.checked) {
			html_passwordInput.type = "text";
		} else {
			html_passwordInput.type = "password";
		}
	});
}

document.addEventListener("DOMContentLoaded", function () {
	console.log("Script loaded!");
    handlePasswordSwitcher();
});
