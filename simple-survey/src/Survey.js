import { useState } from 'react';
import SurveyQuestion from './SurveyQuestion.js';
import SurveyResults from './SurveyResults.js';
import content from './SurveyContent.js';

function Survey() {
	let [page, setPage] = useState(0);
	
	const handleClick = () => {
		setPage(prevPage => (prevPage + 1));
	}
	
	if (page < content.length) {
		return <SurveyQuestion question={content[page].question} answers={content[page].answers} handleClick={handleClick} />;
	} else {
		return <SurveyResults />;
	}
}

export default Survey;