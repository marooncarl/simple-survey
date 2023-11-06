import AnswerList from './AnswerList.js';

function SurveyQuestion(props) {
	return <>
		<p>{props.question}</p>
		<AnswerList answers={props.answers} />
	</>;
}

export default SurveyQuestion;