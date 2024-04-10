import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Ilość dóbr, oferowana na rynku przez producentów przy określonej cenie w danym miejscu i czasie to:',
			answerOptions: [
				{ answerText: 'Cena', isCorrect: false },
				{ answerText: 'Popyt', isCorrect: false },
				{ answerText: 'Podaż', isCorrect: true },
				{ answerText: 'Dochód', isCorrect: false },
			],
		},
		{
			questionText: 'Do czego dążą producenci?',
			answerOptions: [
				{ answerText: 'Zrównania podaży i popytu', isCorrect: true },
				{ answerText: 'Zwiększenia popytu względem podaży', isCorrect: false },
        { answerText: 'Zwiększenia podaży względem popytu', isCorrect: false },
        { answerText: 'Wszystkie odpowiedzi są prawidłowe', isCorrect: false },
			],
		},
		{
			questionText: 'Dobra komplementarne to dobra?',
			answerOptions: [
				{ answerText: 'Wszystkie dobra wolne', isCorrect: false },
				{ answerText: 'Zastępujące się', isCorrect: false },
				{ answerText: 'Wykluczające sie', isCorrect: false },
				{ answerText: 'Uzupełniające się', isCorrect: true },
			],
    },
    {
			questionText: 'Ilość towarów lub usług, którą konsumenci są gotowi nabyć przy określonej cenie w danym miejscu i czasie to: ',
			answerOptions: [
				{ answerText: 'Cena', isCorrect: false },
				{ answerText: 'Popyt', isCorrect: true },
				{ answerText: 'Podaż', isCorrect: false },
				{ answerText: 'Dochod', isCorrect: false },
			],
    },
    {
			questionText: 'Główny czynnik wpływający wielkość popytu to?',
			answerOptions: [
				{ answerText: 'Cena', isCorrect: true },
				{ answerText: 'Moda', isCorrect: false },
				{ answerText: 'Ilość', isCorrect: false },
				{ answerText: 'Producenci', isCorrect: false },
			],
    },
    {
			questionText: 'Dobra substytucyjne to dobra?',
			answerOptions: [
				{ answerText: 'Wszystkie dobra wolne', isCorrect: false },
				{ answerText: 'Zastępujące się', isCorrect: true },
				{ answerText: 'Wykluczające sie', isCorrect: false },
				{ answerText: 'Uzupełniające się', isCorrect: false },
			],
    },
    {
			questionText: 'Przykładem dóbr komplementarnych są?',
			answerOptions: [
				{ answerText: 'Wszystkie dobra wolne', isCorrect: false },
				{ answerText: 'Chleb oraz bułki', isCorrect: false },
				{ answerText: 'Kuchenka gazowa oraz gaz', isCorrect: true },
				{ answerText: 'Margaryna i masło', isCorrect: false },
			],
    },
    {
			questionText: 'Przykładem dóbr substytucyjnych są?',
			answerOptions: [
        { answerText: 'Lewy but oraz prawy but', isCorrect: false },
				{ answerText: 'Wszystkie dobra wolne', isCorrect: false },
				{ answerText: 'Samochód oraz benzyna', isCorrect: false },
				{ answerText: 'Kawa i herbata', isCorrect: true },
			],
    },
    {
			questionText: 'Gdy podaż jest większa niż popyt występuje:',
			answerOptions: [
				{ answerText: 'Cena równowagi rynkowej', isCorrect: false },
				{ answerText: 'Punkt równowagi rynkowej', isCorrect: false },
        { answerText: 'Nadwyzka rynkowa', isCorrect: false },
        { answerText: 'Niedobór rynkowy', isCorrect: true },
			],
    },
    {
			questionText: 'Jeśli cena rośnie to popyt: ',
			answerOptions: [
        { answerText: 'Maleje', isCorrect: true },
				{ answerText: 'Nie zmienia się', isCorrect: false },
        { answerText: 'Rośnie', isCorrect: false },
        { answerText: 'Wszystkie odpowiedzi są prawidłowe', isCorrect: false },
			],
    },
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  };
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<p>Zdobyłeś {score} z {questions.length} punktów. Quiz wykonał Jakub Wilk</p>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Pytanie {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
  );
  
}