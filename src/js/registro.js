// Validate Name Registration
const inputRegisterName = document.getElementById('registrationName');
inputRegisterName.addEventListener('input', validateName);

// Validate LastName Registration
const inputRegisterLastname = document.getElementById(
	'registrationLastname'
);
inputRegisterLastname.addEventListener('input', validateLastname);

// Validate Email Registration
const inputRegisterEmail = document.getElementById(
	'registrationEmail'
);
inputRegisterEmail.addEventListener('input', validateEmail);

// Validate Country Registration
const inputRegisterCountry = document.getElementById(
	'registrationCountry'
);
inputRegisterCountry.addEventListener('input', validateCountry);

// Validate Password Registration
const inputRegisterPassword = document.getElementById(
	'registrationPassword'
);
inputRegisterPassword.addEventListener('input', validatePassword);

// Validate Password Registration
const inputRegisterUsername = document.getElementById(
	'registerUsername'
);
inputRegisterUsername.addEventListener('input', validateUsername);

// Validate Terms Registration
const inputRegisterTerms = document.getElementById('terms');
inputRegisterTerms.addEventListener('input', validateTerms);

//* functions

// name validation
function validateName() {
	const input = document.getElementById('registrationName');
	let regex = /^[a-z ,.'-]+$/i;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// Lastname validation
function validateLastname() {
	const input = document.getElementById('registrationLastname');
	let regex = /^[a-z ,.'-]+$/i;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// Email validation
function validateEmail() {
	const input = document.getElementById('registrationEmail');
	let regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// Country validation
function validateCountry() {
	const input = document.getElementById('registrationCountry');
	if (input.value === 'disabled') {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	} else {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	}
}

// validate password
function validatePassword() {
	const input = document.getElementById('registrationPassword');
	// minimo 8 caracteres, una letra y un numero
	let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// validate Username
function validateUsername() {
	const input = document.getElementById('registerUsername');
	// minimo 8 caracteres, una letra y un numero
	let regex =
		/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/i;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// validate Username
function validateTerms() {
	const input = document.getElementById('terms');
	if (this.checked) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
}

// Se agrega la clase valido o no valido segun si la ciudad se encuentra en la lista
const inputCity = document.getElementById('registerCity');
inputCity.addEventListener('input', validateAvailableCities);

// array de ciudades validas para el input ciudades
const validCities = [
	'Buenos Aires',
	'Santiago de Chile',
	'Montevideo',
	'Brasilia',
];

// loop que busca si la ciudad es valida o no
function validateAvailableCities() {
	for (let cities of validCities) {
		if (inputCity.value === cities) {
			inputCity.classList.add('is-valid');
			inputCity.classList.remove('is-invalid');
		}
	}
}

// Desactiva el boton de submit si no esta el checked de terminos y condiciones
const registerSubmitButton =
	document.getElementById('registerSubmit');

document.addEventListener('change', enableSubmit);

function enableSubmit() {
	if (document.getElementById('terms').checked) {
		registerSubmitButton.classList.remove('disabled');
	} else {
		registerSubmitButton.classList.add('disabled');
	}
}

// form entrega la data como json, prevent default y reload windows after submit

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const name = data.get('name');
	const lastname = data.get('lastname');
	const email = data.get('email');
	const city = data.get('city');
	const username = data.get('username');
	const password = data.get('password');
	console.log(data, name, lastname, email, city, username, password);
	alert(`Congrats, ${name}!, su registro fue satisfactorio.`);
	window.location.reload();
});
