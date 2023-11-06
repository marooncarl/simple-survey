function SurveyResults(props) {
	let answers = [];
	for (let i = 0; i < props.answers.length; i++) {
		answers.push(<li>{props.answers[i]}</li>);
	}
	
	return <>
		<p>You answered all of the questions!  Huzzah!</p>
		<p>Here's what you answered:</p>
		<ul>{answers}</ul>
	</>;
}

export default SurveyResults;