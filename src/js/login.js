$(document).ready(function () {
	// jQuery methods go here...
	$('body').vegas({
		slides: [
			{
				src: 'https://picsum.photos/id/1044/1200/700?blur=6',
			},
			{
				src: 'https://picsum.photos/id/1067/1200/700?blur=7',
			},
			{
				src: 'https://picsum.photos/id/1026/1200/700?blur=7',
			},
		],
	});
});

/* eslint-disable no-undef */
// login visual validation

const usersInfo = window.localStorage.getItem('usersInfo');
const retrievedUsersInfo = JSON.parse(usersInfo);
const emailInput = document.getElementById('inputEmailLogin');

const inputEmail = document.getElementById('inputEmailLogin');
inputEmail.addEventListener('keyup', function () {
	if (retrievedUsersInfo[0].email === inputEmail.value) {
		emailInput.classList.add('is-valid');
		emailInput.classList.remove('is-invalid');
	} else {
		emailInput.classList.remove('is-valid');
		emailInput.classList.add('is-invalid');
	}
});

const submitLoginForm = document.getElementById('loginForm');
submitLoginForm.addEventListener('submit', function (event) {
	event.preventDefault();
	const inputPassword = document.getElementById('inputPassword');
	const modalText = document.getElementById('modalText');
	if (
		retrievedUsersInfo[0].email === inputEmail.value &&
		retrievedUsersInfo[0].password === inputPassword.value
	) {
		let successfulLogIn = 'El ingreso fue exitoso';
		modalText.innerHTML = successfulLogIn;
		$('#loginModal').modal('toggle');
		setTimeout("location.href = '../pages/quotes.html';", 3500);
	} else {
		let WrongLogIn = 'Algo salio mal \n Intente de nuevo';
		modalText.innerHTML = WrongLogIn;
		$('#loginModal').modal('toggle');
		emailInput.classList.remove('is-valid');
		submitLoginForm.reset();
	}
});
