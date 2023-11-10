function SurveyResults(props) {
	let answers = [];
	for (let i = 0; i < props.answers.length; i++) {
		let resultClass = (i >= props.resultCount - 1 ? 'hidden' : '');
		answers.push(<li key={'ra' + i} className={resultClass}>{props.headers[i]}: {props.answers[i]}</li>);
	}
	
	let headerClass = (props.resultCount < 1 ? 'hidden' : '');
	
	return <div className='results'>
		<p>You answered all of the questions!  Huzzah!</p>
		<p className={headerClass}>Here's what you answered:</p>
		<ul>{answers}</ul>
	</div>;
}

export default SurveyResults;