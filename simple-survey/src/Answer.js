function Answer(props) {
	return <button onClick={props.handleClick}>{props.answer}</button>;
}

export default Answer;