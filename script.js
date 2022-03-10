const ball = document.querySelector(`img`); // tylko jeden obraz na stronie, mozemy odwolac sie za pomoca img
const input = document.querySelector(`input`); // jw
const answer = document.querySelector(`.answer`);
const error = document.querySelector(`.error`);

const answersArr = [
	`Tak, zdecydowanie tak! 😎`,
	`Na pewno nie. To nie jest najlepszy pomysł. 😒`,
	`Hmm... Ciężko powiedzeć. 🧐`,
	`Myślę, że nie chciałbys znać odpowiedzi na to pytanie 😶`,
	`Jestem tylko kulą... Czarną ! Nie wiem wszystkiego... 🎱`,
];

const shakeBall = () => {
	ball.classList.add(`shake-animaton`);
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === `?`) {
		generateAnswers();
		error.textContent = ``;
	} else if (input.value !== '' && input.value.slice(-1) !== `?`) {
		error.textContent = `Pytanie musi być zakończone znakiem "?"`;
		answer.textContent = ``;
	} else {
		error.textContent = `Proszę zadaj mi pytanie.`;
		answer.textContent = ``;
	}
	ball.classList.remove(`shake-animaton`);
};

// generowanie numerow - 0 1 2 3 4
const generateAnswers = () => {
	const number = Math.floor(Math.random() * 5);
	answer.innerHTML = `<span>Odpowiedź :</span>${answersArr[number]}`; // wypisywanie odp
};

ball.addEventListener(`click`, shakeBall);
