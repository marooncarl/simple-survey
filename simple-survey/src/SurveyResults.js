function SurveyResults(props) {
	let answers = [];
	for (let i = 0; i < props.answers.length; i++) {
		let resultClass = (i >= props.resultCount - 1 ? 'hidden' : '');
		let answerText = '';
		
		switch (i) {
			case 0:  // Food
			case 4:  // Entertainment
			case 6:  // Topic
				answerText = props.answers[i];
				break;
			
			case 1:  // Music
				answerText = props.answers[i] + ' music';
				break;
			
			case 2:  // Color
				answerText = 'The color ' + props.answers[i].toLowerCase();
				break;
			
			case 3:  // Historical period
				answerText = props.answers[i] + ' history';
				break;
			
			case 5:  // Surveys
				answerText = (props.answers[i] == 'Yes' ? 'Taking surveys' : 'Not taking surveys');
				break;
		}
		
		answers.push(<li key={'ra' + i} className={resultClass}>{answerText}</li>);
	}
	
	let introClass = (props.resultCount === 0 ? 'big' : '');
	let headerClass = (props.resultCount < 1 ? 'hidden' : '');
	
	return <div className='results'>
		<p className={introClass}>You answered all of the questions!  Huzzah!</p>
		<p className={headerClass}>So, here's what you like:</p>
		<ul>{answers}</ul>
	</div>;
}

export default SurveyResults;