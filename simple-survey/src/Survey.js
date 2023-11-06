import { useState } from 'react';
import SurveyQuestion from './SurveyQuestion.js';
import content from './SurveyContent.js';

function Survey() {
	let [page, setPage] = useState(0);
	
	return <SurveyQuestion question={content[page].question} answers={content[page].answers} />;
}

export default Survey;