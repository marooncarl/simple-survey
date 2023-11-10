import { useState, useEffect } from 'react';
import SurveyQuestion from './SurveyQuestion.js';
import SurveyResults from './SurveyResults.js';
import content from './SurveyContent.js';

function Survey() {
	let [page, setPage] = useState(0);
	let [answers, setAnswers] = useState([]);
	let [buttonCount, setButtonCount] = useState(10);
	let [isClearing, setIsClearing] = useState(false);
	let [lingeringAnswer, setLingeringAnswer] = useState('');
	
	useEffect(() => {
		if (page < content.length) {
			// Reveal answers one by one
			
			setButtonCount(0);
			setIsClearing(false);
			let buttonTimer = 0;
			let timesAdded = 0;
			
			const showButton = () => {
				setButtonCount(prev => prev + 1);
				timesAdded += 1;
				
				if (timesAdded >= content[page].answers.length) {
					clearInterval(buttonTimer);
				}
			}
			buttonTimer = setInterval(showButton, 100);
			
			return () => {
				clearInterval(buttonTimer);
			}
		} else {
			// Reveal results one by one
			
			setButtonCount(0);
			let resultTimer = 0;
			let timesAdded = 0;
			
			const showResult = () => {
				setButtonCount(prev => prev + 1);
				timesAdded += 1;
				
				if (timesAdded >= content.length + 1) {
					clearInterval(resultTimer);
				}
			}
			resultTimer = setInterval(showResult, 500);
			
			return () => {
				clearInterval(resultTimer);
			}
		}
	}, [page]);
	
	const handleClick = (answer) => {
		// Save answer and hide buttons one by one
		
		setAnswers(prevAnswers => {
			let newAnswers = [...prevAnswers];
			newAnswers.push(answer);
			return newAnswers;
		});
		setLingeringAnswer(answer);
		setIsClearing(true);
		
		let hideTimer = 0;
		let timesRemoved = 0;
		
		const hideButton = () => {
			setButtonCount(prev => Math.max(0, prev - 1));
			timesRemoved += 1;
			
			if (timesRemoved >= content[page].answers.length) {
				clearInterval(hideTimer);
				setTimeout(() => setLingeringAnswer(''), 1000);
				setTimeout(() => setPage(prevPage => (prevPage + 1)), 1500);
			}
		}
		hideTimer = setInterval(hideButton, 100);
	}
	
	if (page < content.length) {
		return <SurveyQuestion
			questionId={page}
			question={content[page].question}
			answers={content[page].answers}
			handleClick={handleClick}
			buttonCount={buttonCount}
			isClearing={isClearing}
			lingeringAnswer={lingeringAnswer}
		/>;
	} else {
		let headers = [];
		for (let i = 0; i < content.length; i++) {
			headers.push(content[i].resultHeader);
		}
		return <SurveyResults answers={answers} headers={headers} resultCount={buttonCount} />;
	}
}

export default Survey;