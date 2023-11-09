import { useState, useEffect } from 'react';
import SurveyQuestion from './SurveyQuestion.js';
import SurveyResults from './SurveyResults.js';
import content from './SurveyContent.js';

function Survey() {
	let [page, setPage] = useState(0);
	let [answers, setAnswers] = useState([]);
	let [buttonCount, setButtonCount] = useState(10);
	
	useEffect(() => {
		if (page < content.length) {
			setButtonCount(0);
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
			return () => {}
		}
	}, [page]);
	
	const handleClick = (answer) => {
		setAnswers(prevAnswers => {
			let newAnswers = [...prevAnswers];
			newAnswers.push(answer);
			return newAnswers;
		});
		setPage(prevPage => (prevPage + 1));
	}
	
	if (page < content.length) {
		return <SurveyQuestion questionId={page} question={content[page].question} answers={content[page].answers} handleClick={handleClick} buttonCount={buttonCount} />;
	} else {
		let headers = [];
		for (let i = 0; i < content.length; i++) {
			headers.push(content[i].resultHeader);
		}
		return <SurveyResults answers={answers} headers={headers}/>;
	}
}

export default Survey;