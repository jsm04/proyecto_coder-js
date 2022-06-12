const usersInfo = window.localStorage.getItem('usersInfo');
const retrievedUsersInfo = JSON.parse(usersInfo);
const emailInput = document.getElementById('inputEmailLogin');
const inputEmail = document.getElementById('inputEmailLogin');
const submitLoginForm = document.getElementById('loginForm');
const modalText = document.getElementById('modalText');

// libreria con jquery y vegas
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

	// display del modal luego del log in
	const succesfulLogInAlert = () => {
		modalText.innerHTML = 'El ingreso fue exitoso';
		$('#loginModal').modal('toggle');
		setTimeout("location.href = '../pages/quotes.html';", 3500);
	};

	const errorLogInAlert = () => {
		modalText.innerHTML = 'Algo salio mal \n Intente de nuevo';
		$('#loginModal').modal('toggle');
		emailInput.classList.remove('is-valid');
		submitLoginForm.reset();
	};

	// simula el login despues del registro
	submitLoginForm.addEventListener('submit', function (event) {
		const inputPassword = document.getElementById('inputPassword');
		event.preventDefault();
		if (
			retrievedUsersInfo[0].email === inputEmail.value &&
			retrievedUsersInfo[0].password === inputPassword.value
		) {
			succesfulLogInAlert();
		} else {
			errorLogInAlert();
		}
	});
});
