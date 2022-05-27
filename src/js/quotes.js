const quoteBodyText = document.getElementById('quoteBody');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteImg = document.getElementById('cardImg');

fetch('http://api.quotable.io/random')
	.then((res) => res.json())
	.then((data) => {
		quoteBodyText.innerHTML = `"${data.content}"`;
		quoteAuthor.innerHTML = `${data.author}`;
	});

const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const newQuoteButton = document.getElementById('newQuote');
newQuoteButton.addEventListener('click', () => {
	fetch('http://api.quotable.io/random')
		.then((res) => res.json())
		.then((data) => {
			quoteBodyText.innerHTML = `"${data.content}"`;
			quoteAuthor.innerHTML = `${data.author}`;
			quoteImg.setAttribute(
				'src',
				`https://picsum.photos/id/${getRandomNumber(3, 1000)}/400/300`
			);
		});
});
