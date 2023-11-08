function Answer(props) {
	let answerClass = 'plain';
	switch (props.answer) {
		case 'Red':
			answerClass = 'red';
			break;
		
		case 'Blue':
			answerClass = 'blue';
			break;
		
		case 'Green':
			answerClass = 'green';
			break;
		
		case 'Yellow':
			answerClass = 'yellow';
			break;
		
		case 'Orange':
			answerClass = 'orange';
			break;
		
		case 'Purple':
			answerClass = 'purple';
			break;
	}
	
	if (!props.isVisible) {
		answerClass += ' hidden';
	}
	
	return <button className={answerClass} onClick={() => props.handleClick(props.answer)}>{props.answer}</button>;
}

export default Answer;