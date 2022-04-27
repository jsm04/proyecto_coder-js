// login visual validation

const inputEmail = document.getElementById('inputEmailLogin');
inputEmail.addEventListener('input', validateEmail);
const inputPassword = document.getElementById('InputPassword1');
inputPassword.addEventListener('input', validatePassword);

// email validationS
// eslint-disable-next-line no-unused-vars
function validateEmail() {
	const input = document.getElementById('inputEmailLogin');
	let regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (input.value == '') {
		input.classList.remove('is-valid');
		input.classList.remove('is-invalid');
	} else if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// password validation
// eslint-disable-next-line no-unused-vars
function validatePassword() {
	const input = document.getElementById('InputPassword1');
	// minimo 8 caracteres, una letra y un numero
	let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	if (input.value == '') {
		input.classList.remove('is-valid');
		input.classList.remove('is-invalid');
	} else if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}
