// login

// email validation --> modifica las clases del elemento que indican si el contenido es correcto
function validateEmail() {
	const input = document.getElementById('inputEmailLogin');
	let regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

// password validation --> modifica las clases del elemento que indican si el contenido es correcto

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

// tu turno

/* 
Simulacion:
un sistema de turnos que va asignando valores a las cajas 
de colores segun la variacion del turno principal --> (incompleto)
*/

const turnoActual = document.getElementById('turnoActual');

// crea un numero aleatorio --> para esta entrega a modo de demostracion 
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}
// se asigna el numero aletorio como turno principal
turnoActual.innerHTML = Math.round(getRandomArbitrary(10, 60));

/* 
se crea una funcion contador que reduce con intervalos asignados 
la duracion del turno
*/

function counter() {
	do {
		turnoActual.innerHTML -= 1;
		return turnoActual.innerHTML;
	} while (turnoActual.innerHTML > 0)
}

/* 
para q sea posible observar la funcionalidad los turnos tienen una duracion de 5 segundos cada uno -->
en un caso real el valor estaria asignado por la persona que emite el turno y no necesariamente utilizando
setInterval
 */ 

setInterval(counter, 5000);
