const inputRegisterName = document.getElementById('registrationName');
const inputRegisterLastname = document.getElementById(
	'registrationLastname'
);
const inputRegisterEmail = document.getElementById(
	'registrationEmail'
);
const inputRegisterCountry = document.getElementById(
	'registrationCountry'
);
const inputRegisterPassword = document.getElementById(
	'registrationPassword'
);
const inputRegisterUsername = document.getElementById(
	'registerUsername'
);
const inputRegisterTerms = document.getElementById('terms');
const registerSubmitButton =
	document.getElementById('registerSubmit');
const registerForm = document.getElementById('registerForm');
const modalText = document.getElementById('modalText');
const usersInfo = [];

class User {
	constructor(username, password, name, lastname, email) {
		this.username = username;
		this.password = password;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
	}
}

// libreria con jquery y vegas
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

	// Valida los campos del input con una ayuda visual
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

	// Desactiva el boton de submit si no esta el checked de terminos y condiciones
	document.addEventListener('change', function () {
		if (document.getElementById('terms').checked) {
			registerSubmitButton.classList.remove('disabled');
		} else {
			registerSubmitButton.classList.add('disabled');
		}
	});

	const resetRegisterFormAndModal = (user) => {
		const validItemsClassSelect =
			registerForm.querySelectorAll('.is-valid');

		validItemsClassSelect.forEach((item) => {
			item.classList.remove('is-valid');
		});

		registerSubmitButton.classList.add('disabled');

		modalText.innerText = `Felicitaciones ${user.username} su registro fue satisfactorio. 
	\n \n Aguarde y sera redireccionado.`;

		$('#registrationModal').modal('toggle');
	};

	// register form login
	registerForm.addEventListener('submit', function (event) {
		const user = new User();
		event.preventDefault();
		user.username = inputRegisterUsername.value;
		user.password = inputRegisterPassword.value;
		user.name = inputRegisterName.value;
		user.lastname = inputRegisterLastname.value;
		user.email = inputRegisterEmail.value;

		usersInfo.push(user);
		const userDataToStorage = JSON.stringify(usersInfo);
		localStorage.setItem('usersInfo', userDataToStorage);

		resetRegisterFormAndModal(user);

		//Simula la redireccion en un login exitoso y redireccion
		setTimeout("location.href = '../pages/login.html';", 3200);
	});
});
