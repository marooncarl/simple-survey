import Answer from './Answer.js';

function AnswerList(props) {
	let answers = [];
	for (let i = 0; i < props.answers.length; i++) {
		let answerKey = 'q' + props.questionId + 'a' + i;
		answers.push(<Answer key={answerKey} answer={props.answers[i]} handleClick={props.handleClick} isVisible={(i < props.buttonCount ? true : false)} />);
	}
	
	return <div className='answer-list'>{answers}</div>;
}

export default AnswerList;