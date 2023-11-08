import AnswerList from './AnswerList.js';

function SurveyQuestion(props) {
	return <>
		<p className='question'>{props.question}</p>
		<AnswerList answers={props.answers} handleClick={props.handleClick} />
	</>;
}

export default SurveyQuestion;