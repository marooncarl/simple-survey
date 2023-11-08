import Answer from './Answer.js';

function AnswerList(props) {
	let answers = [];
	for (let i = 0; i < props.answers.length; i++) {
		answers.push(<Answer answer={props.answers[i]} handleClick={props.handleClick} />);
	}
	
	return <div className='answer-list'>{answers}</div>;
}

export default AnswerList;