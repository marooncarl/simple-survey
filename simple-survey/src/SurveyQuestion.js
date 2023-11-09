import AnswerList from './AnswerList.js';

function SurveyQuestion(props) {
	return <>
		<p className='question'>{props.question}</p>
		<AnswerList answers={props.answers} handleClick={props.handleClick} questionId={props.questionId} buttonCount={props.buttonCount} isClearing={props.isClearing}/>
	</>;
}

export default SurveyQuestion;