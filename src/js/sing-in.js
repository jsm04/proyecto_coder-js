// import { faker } from '@faker-js/faker';

$(document).ready(function () {
	// jQuery methods go here...
	$('body').vegas({
		slides: [
			{
				src: 'https://picsum.photos/id/125/1200/700?blur=6',
			},
			{
				src: 'https://picsum.photos/id/126/1200/700?blur=7',
			},
			{
				src: 'https://picsum.photos/id/171/1200/700?blur=7',
			},
		],
	});
});

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
			break;
		} else {
			inputCity.classList.add('is-invalid');
			inputCity.classList.remove('is-valid');
		}
	}
	if (inputCity.value === '') {
		inputCity.classList.remove('is-invalid');
		inputCity.classList.remove('is-valid');
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

const usersInfo = [];

// faker js
// const randomUsername = faker.internet.userName();
// const randomPassword = faker.random.alphaNumeric(7);
// const randomName = faker.name.findName();
// const randomLastname = faker.name.lastName();
// const randomEmail = faker.internet.email();
// const randomCity = faker.address.city();

// const generateRandomUsers = (userQuantity) => {
// 	let result = [];
// 	for (let i = 0; i < userQuantity; i++) {
// 		let randomUser = new User();
// 		randomUser.username = randomUsername;
// 		randomUser.password = randomPassword;
// 		randomUser.name = randomName;
// 		randomUser.lastname = randomLastname;
// 		randomUser.email = randomEmail;
// 		randomUser.city = randomCity;
// 		result.push(randomUser);
// 	}
// 	return usersInfo.concat(result);
// };

// Form element
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (event) {
	event.preventDefault();

	let newUser = new User();

	newUser.username = inputRegisterUsername.value;
	newUser.password = inputRegisterPassword.value;
	newUser.name = inputRegisterName.value;
	newUser.lastname = inputRegisterLastname.value;
	newUser.email = inputRegisterEmail.value;
	newUser.city = inputCity.value;

	usersInfo.push(newUser);

	const userDataToStorage = JSON.stringify(usersInfo);

	localStorage.setItem('usersInfo', userDataToStorage);

	// Notificacion del modal popup
	let registrationSuccessfulMessage = `Felicitaciones ${newUser.username} su registro fue satisfactorio. \n \n Aguarde y sera redireccionado.`;
	modalText.innerText = registrationSuccessfulMessage;

	// jquerry for toggling modal
	// eslint-disable-next-line no-undef
	$('#registrationModal').modal('toggle');

	const validItemsClassSelect =
		registerForm.querySelectorAll('.is-valid');

	validItemsClassSelect.forEach((item) => {
		item.classList.remove('is-valid');
	});

	// Reset form values
	registerForm.reset();
	registerSubmitButton.classList.add('disabled');
	setTimeout("location.href = '../pages/login.html';", 3200);
});
