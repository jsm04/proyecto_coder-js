// Validate Name Registration
const inputRegisterName = document.getElementById('registrationName');

inputRegisterName.addEventListener('input', function () {
	let input = document.getElementById('registrationName');
	let regex = /^[a-z ,.'-]+$/i;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
});

// Validate LastName Registration
const inputRegisterLastname = document.getElementById(
	'registrationLastname'
);

inputRegisterLastname.addEventListener('input', function () {
	let input = document.getElementById('registrationLastname');
	let regex = /^[a-z ,.'-]+$/i;

	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
});

// Validate Email Registration
const inputRegisterEmail = document.getElementById(
	'registrationEmail'
);

inputRegisterEmail.addEventListener('input', function () {
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
});

// Validate Country Registration
const inputRegisterCountry = document.getElementById(
	'registrationCountry'
);

inputRegisterCountry.addEventListener('input', function () {
	const input = document.getElementById('registrationCountry');
	if (input.value === 'disabled') {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	} else {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	}
});

// Validate Password Registration
const inputRegisterPassword = document.getElementById(
	'registrationPassword'
);
inputRegisterPassword.addEventListener('input', function () {
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
});

// Validate Password Registration
const inputRegisterUsername = document.getElementById(
	'registerUsername'
);
inputRegisterUsername.addEventListener('input', function () {
	const input = document.getElementById('registerUsername');
	// minimo 8 caracteres, una letra y un numero
	let regex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
	if (input.value.match(regex)) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
});

// Validate Terms Registration
const inputRegisterTerms = document.getElementById('terms');
inputRegisterTerms.addEventListener('input', function () {
	const input = document.getElementById('terms');
	if (this.checked) {
		input.classList.add('is-valid');
		input.classList.remove('is-invalid');
	} else {
		input.classList.remove('is-valid');
		input.classList.add('is-invalid');
	}
});

const inputCity = document.getElementById('registerCity');

// array de ciudades validas para el input ciudades
const validCities = [
	'Buenos Aires',
	'Santiago de Chile',
	'Montevideo',
	'Brasilia',
];

// loop que busca si la ciudad esta disponible
inputCity.addEventListener('input', function () {
	for (let cities of validCities) {
		if (inputCity.value === cities) {
			inputCity.classList.add('is-valid');
			inputCity.classList.remove('is-invalid');
		}
	}
});

// Desactiva el boton de submit si no esta el checked de terminos y condiciones
const registerSubmitButton =
	document.getElementById('registerSubmit');

document.addEventListener('change', function () {
	if (document.getElementById('terms').checked) {
		registerSubmitButton.classList.remove('disabled');
	} else {
		registerSubmitButton.classList.add('disabled');
	}
});

const modalText = document.getElementById('modalText');

class User {
	constructor(username, password, name, lastname, email, city) {
		this.username = username;
		this.password = password;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.city = city;
	}
}

// Form element
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (event) {
	event.preventDefault();
	// form data API
	const data = new FormData(event.target);

	let username = data.get('username');
	let password = data.get('password');
	let name = data.get('name');
	let lastname = data.get('lastname');
	let email = data.get('email');
	let city = data.get('city');

	const newUser = new User(
		username,
		password,
		name,
		lastname,
		email,
		city
	);

	window.localStorage.setItem('usersInfo', JSON.stringify(newUser));

	// Notificacion del modal popup
	let registrationSuccessfulMessage = `Felicitaciones ${username} su registro fue satisfactorio. \n \n Aguarde y sera redireccionado.`;
	modalText.innerText = registrationSuccessfulMessage;

	// Busqueda de items con la clase valido en el form
	const validItemsClassSelect =
		registerForm.querySelectorAll('.is-valid');
	//If true se le remueve la clase => se reincia el form
	validItemsClassSelect.forEach(function (item) {
		item.classList.remove('is-valid');
	});

	// Reset form values
	registerForm.reset();

	// Submit button reset
	registerSubmitButton.classList.add('disabled');
	setTimeout("location.href = '../pages/login.html';", 3500);
});
