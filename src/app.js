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
	if (turnoActual.innerHTML > 0) {
		do {
			turnoActual.innerHTML -= 1;
			return turnoActual.innerHTML;
		} while (turnoActual.innerHTML != 0);
	}
}

/* 
para q sea posible observar la funcionalidad los turnos tienen una duracion de 5 segundos cada uno -->
en un caso real el valor estaria asignado por la persona que emite el turno y no necesariamente utilizando
setInterval
 */

setInterval(counter, 5000);
