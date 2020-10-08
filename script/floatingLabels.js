function handleFloatingLabel() {
	let html_emailInput = document.querySelector(".js-email-input");
	let html_emailLabel = document.querySelector(".js-email-label");
	let html_passwordInput = document.querySelector(".js-password-input");
    let html_passwordLabel = document.querySelector(".js-password-label");
    
    html_emailInput.addEventListener('focusout', function() {
        console.log(this);
        if(this.value.length > 0){
            html_emailLabel.classList.add("is-floating");
        } else {
            html_emailLabel.classList.remove("is-floating");
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {


    handleFloatingLabel();
})