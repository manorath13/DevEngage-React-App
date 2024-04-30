import  { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Quiz.css';
export default function Quiz() {
	const questions = [
		{
			questionText: "Which of this is not a programming language?",
			answerOptions: [
				{ answerText: 'Python', isCorrect: false },
				{ answerText: 'JavaScript', isCorrect: false },
				{ answerText: 'MC-03', isCorrect: true },
				{ answerText: 'java', isCorrect: false },
			],
		},
		{
			questionText: 'Which of this is not a javascript framework?',
			answerOptions: [
				{ answerText: 'React', isCorrect: false },
				{ answerText: 'Angular', isCorrect: false },
				{ answerText: 'Vue', isCorrect: false },
				{ answerText: 'Java', isCorrect: true },
			],
		},
		{
			questionText: 'When the switch statement matches the expression with the given labels, how is the comparison done?',
			answerOptions: [
				{ answerText: 'Both the datatype and the result of the expression are compared', isCorrect: true },
				{ answerText: 'Only the datatype of the expression is compared', isCorrect: false },
				{ answerText: 'Only the value of the expression is compared', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
		{
			questionText: 'The process in which an object or data structure is translated into a format suitable for transferral over a netword, or storage is called?',
			answerOptions: [
				{ answerText: 'Object Encapsulation', isCorrect: false },
				{ answerText: 'Object Inheritance', isCorrect: false },
				{ answerText: 'Object detection', isCorrect: false },
				{ answerText: 'Object Serialization', isCorrect: true },
			],
		},
        {
			questionText: "What is a state in React?",
			answerOptions: [
				{ answerText: 'Internal storage of the component.', isCorrect: false },
				{ answerText: 'External storage of the component.', isCorrect: false },
				{ answerText: 'A permanent storage', isCorrect: true },
				{ answerText: 'None of the above.', isCorrect: false },
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
	const handleExitButtonClick = () => {
		window.location.href = '/';
	};
	const x=localStorage.getItem("User");
  if (!x) {
    return <Navigate to="/login" />;
  }
	return (
		<>
		<button className='Exit' onClick={handleExitButtonClick}>X</button>
		<h1 className='Heading'>Daily Quiz</h1>
		<div className='app quiz-card'>
            {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							// eslint-disable-next-line react/jsx-key
							<button className='answer-section-button' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
		</>
	);
}