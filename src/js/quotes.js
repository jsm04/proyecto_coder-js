const newQuoteButton = document.getElementById('newQuote');
const quoteBodyText = document.getElementById('quoteBody');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteImg = document.getElementById('cardImg');
const favoritesSelection = document.getElementById(
	'favoritesSelection'
);
const quoteToFavorites = document.getElementById('QuoteToFavorites');
const quoteArrayReset = document.getElementById('QuoteListReset');
let userFavoriteQuotes = [];

// fetch a la api de quotable para generar el contenido
fetch('http://api.quotable.io/random')
	.then((res) => res.json())
	.then((data) => {
		quoteBodyText.innerText = `"${data.content}"`;
		quoteAuthor.innerText = `${data.author}`;
	});

// generador de numeros aleatorios para obtener ids de imagenes
const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// boton para request de una nueva imagen y quote
newQuoteButton.addEventListener('click', () => {
	fetch('http://api.quotable.io/random')
		.then((res) => res.json())
		.then((data) => {
			quoteBodyText.innerText = `"${data.content}"`;
			quoteAuthor.innerText = `${data.author}`;
			quoteImg.setAttribute(
				'src',
				`https://picsum.photos/id/${getRandomNumber(3, 1000)}/400/300`
			);
		});
});

// funcion para generar la lista de favoritos
const displayFavorites = () => {
	favoritesSelection.innerHTML = '';
	if (userFavoriteQuotes.length > 0) {
		for (quote of userFavoriteQuotes) {
			favoritesSelection.innerHTML += `
		<h5 class="card-title display-6 my-2">
			${quote.Author}
		</h5>
		<p class="card-text p-3">
			${quote.Quote}
	  </p>
	`;
		}
	} else {
		favoritesSelection.innerHTML += `
		Tu lista esta vacia
	`;
	}
};

// boton agregar a favoritos
quoteToFavorites.addEventListener('click', () => {
	let dataToFavorites = {
		Author: quoteAuthor.innerText,
		Quote: quoteBodyText.innerText,
	};
	// array method para prevenir la repeticion cuando se agrega un quote a los favoritos
	let filteredArr;
	const lookForDuplicates = (obj) =>
		(filteredArr = userFavoriteQuotes.filter(
			(elm) => obj.Author == elm.Author && obj.Quote == elm.Quote
		));

	lookForDuplicates(dataToFavorites);
	if (filteredArr.length === 0)
		userFavoriteQuotes.push(dataToFavorites);
	displayFavorites();
});

// boton reiniciar lista de favoritos
quoteArrayReset.addEventListener('click', () => {
	userFavoriteQuotes = [];
	displayFavorites();
});
