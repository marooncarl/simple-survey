import AnswerList from './AnswerList.js';

function SurveyQuestion(props) {
	let questionClass = 'question' + ((props.isClearing && props.lingeringAnswer === '') ? ' hidden' : '');
	
	return <>
		<p className={questionClass} key={'q' + props.questionId} >{props.question}</p>
		<AnswerList
			answers={props.answers}
			handleClick={props.handleClick}
			questionId={props.questionId}
			buttonCount={props.buttonCount}
			isClearing={props.isClearing}
			lingeringAnswer={props.lingeringAnswer}
		/>
	</>;
}

export default SurveyQuestion;