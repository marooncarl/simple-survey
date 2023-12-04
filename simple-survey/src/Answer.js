function Answer(props) {
	let answerClass = '';
	switch (props.answer) {
		case 'Red':
		case 'Blue':
		case 'Green':
		case 'Yellow':
		case 'Orange':
		case 'Purple':
			answerClass = props.answer.toLowerCase();
			break;
		
		default:
			answerClass = 'plain';
			break;
	}
	
	if (!props.isVisible) {
		answerClass += ' hidden';
	}
	
	return <button className={answerClass} onClick={() => props.handleClick(props.answer)} disabled={props.isDisabled}>{props.answer}</button>;
}

export default Answer;