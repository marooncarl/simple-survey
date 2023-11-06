import { useState } from 'react';
import SurveyQuestion from './SurveyQuestion.js';
import SurveyResults from './SurveyResults.js';
import content from './SurveyContent.js';

function Survey() {
	let [page, setPage] = useState(0);
	let [answers, setAnswers] = useState([]);
	
	const handleClick = (answer) => {
		setAnswers(prevAnswers => {
			let newAnswers = [...prevAnswers];
			newAnswers.push(answer);
			return newAnswers;
		});
		setPage(prevPage => (prevPage + 1));
	}
	
	if (page < content.length) {
		return <SurveyQuestion question={content[page].question} answers={content[page].answers} handleClick={handleClick} />;
	} else {
		let headers = [];
		for (let i = 0; i < content.length; i++) {
			headers.push(content[i].resultHeader);
		}
		return <SurveyResults answers={answers} headers={headers}/>;
	}
}

export default Survey;