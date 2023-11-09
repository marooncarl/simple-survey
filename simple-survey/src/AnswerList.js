import Answer from './Answer.js';

function AnswerList(props) {
	let answers = [];
	for (let i = 0; i < props.answers.length; i++) {
		let answerKey = 'q' + props.questionId + 'a' + i;
		let visible = false;
		
		if (props.answers[i] == props.lingeringAnswer) {
			visible = true;
		} else if (!props.isClearing) {
			visible = (i < props.buttonCount ? true : false);
		} else {
			visible = (i >= props.answers.length - props.buttonCount ? true : false);
		}
		
		answers.push(<Answer key={answerKey} answer={props.answers[i]} handleClick={props.handleClick} isVisible={visible} isDisabled={props.isClearing} />);
	}
	
	return <div className='answer-list'>{answers}</div>;
}

export default AnswerList;