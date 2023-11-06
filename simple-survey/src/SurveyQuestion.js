import AnswerList from './AnswerList.js';

function SurveyQuestion(props) {
	return <>
		<p>{props.question}</p>
		<AnswerList answers={props.answers} handleClick={props.handleClick} />
	</>;
}

export default SurveyQuestion;