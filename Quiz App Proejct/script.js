// Questions that will be asked
const Questions = [{
	q: "What is capital of Egypt?",
	a: [{ text: "Alexandria", isCorrect: false },
	{ text: "Giza", isCorrect: false },
	{ text: "Cairo", isCorrect: true },
	{ text: "Dubai", isCorrect: false }
	]

},
{
	q: "What is the capital of Japan?",
	a: [{ text: "Nagoya", isCorrect: false, isSelected: false },
	{ text: "Osaka", isCorrect: false },
	{ text: "Kyoto", isCorrect: false },
	{ text: "Tokyo", isCorrect: true }
	]

},
{
	q: "What is the capital of Mexico?",
	a: [{ text: "Guadalajara", isCorrect: false },
	{ text: "Puebla", isCorrect: false },
	{ text: "Mexico City", isCorrect: true },
	{ text: "Cancun", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
