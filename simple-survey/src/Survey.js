import { useState, useEffect } from 'react';
import SurveyQuestion from './SurveyQuestion.js';
import SurveyResults from './SurveyResults.js';
import content from './SurveyContent.js';

function Survey() {
	let [page, setPage] = useState(-1);
	let [answers, setAnswers] = useState([]);
	let [buttonCount, setButtonCount] = useState(0);
	let [isClearing, setIsClearing] = useState(false);
	let [lingeringAnswer, setLingeringAnswer] = useState('');
	let [hasShownIntro, setHasShownIntro] = useState(false);
	
	useEffect(() => {
		if (page < 0) {
			// Intro page
			
			let introTimer = setTimeout(() => setButtonCount(1), 2000);
			return () => {
				clearTimeout(introTimer);
			};
		}
		
		if (page < content.length) {
			// Reveal answers one by one
			
			setButtonCount(0);
			setIsClearing(false);
			let buttonTimer = 0;
			let timesAdded = 0;
			
			const showButton = () => {
				setButtonCount(prev => prev + 1);
				timesAdded += 1;
				
				if (timesAdded >= content[page].answers.length) {
					clearInterval(buttonTimer);
				}
			}
			buttonTimer = setInterval(showButton, 100);
			
			return () => {
				clearInterval(buttonTimer);
			}
		} else {
			// Reveal results one by one
			
			setButtonCount(0);
			let resultTimer = 0;
			let timesAdded = 0;
			let hasStartedInterval = false;
			
			const showResult = () => {
				setButtonCount(prev => prev + 1);
				timesAdded += 1;
				
				// Use different timings for intro and result list
				if (timesAdded === 1) {
					resultTimer = setTimeout(showResult, 1000);
				
				} else if (timesAdded === 2) {
					resultTimer = setInterval(showResult, 500);
					hasStartedInterval = true;
				
				} else if (timesAdded >= content.length + 1) {
					clearInterval(resultTimer);
				}
			}
			
			resultTimer = setTimeout(showResult, 2000);
			return () => {
				if (!hasStartedInterval) {
					clearTimeout(resultTimer);
				} else {
					clearInterval(resultTimer);
				}
			}
		}
	}, [page]);
	
	const handleClick = (answer) => {
		// Save answer and hide buttons one by one
		
		setAnswers(prevAnswers => {
			let newAnswers = [...prevAnswers];
			newAnswers.push(answer);
			return newAnswers;
		});
		setLingeringAnswer(answer);
		setIsClearing(true);
		
		let hideTimer = 0;
		let timesRemoved = 0;
		
		const hideButton = () => {
			setButtonCount(prev => Math.max(0, prev - 1));
			timesRemoved += 1;
			
			if (timesRemoved >= content[page].answers.length) {
				clearInterval(hideTimer);
				setTimeout(() => setLingeringAnswer(''), 1000);
				setTimeout(() => setPage(prevPage => (prevPage + 1)), 1500);
			}
		}
		hideTimer = setInterval(hideButton, 100);
	}
	
	const startSurvey = (answer) => {
		// Pressed start
		
		setIsClearing(true);
		setTimeout(() => setButtonCount(0), 500);
		setTimeout(() => {
			setHasShownIntro(true);
			setPage(prevPage => (prevPage + 1));
		}, 1500);
	}
	
	if (!hasShownIntro) {
		let introClass = 'intro' + (isClearing && buttonCount == 0 ? ' hidden' : '');
		let descClass = introClass + (isClearing && buttonCount == 0 ? '' : ' desc');
		return <>
			<div class='intro-box'>
				<p class={introClass}>Welcome to my simple survey!</p>
				<p class={descClass}>Pick your favorite thing for each topic!</p>
			</div>
			<SurveyQuestion
				questionId={-1}
				question={''}
				answers={['Take Survey']}
				handleClick={startSurvey}
				buttonCount={buttonCount}
				isClearing={isClearing}
				lingeringAnswer={''}
			/>
		</>;
	} else if (page < content.length) {
		return <SurveyQuestion
			questionId={page}
			question={content[page].question}
			answers={content[page].answers}
			handleClick={handleClick}
			buttonCount={buttonCount}
			isClearing={isClearing}
			lingeringAnswer={lingeringAnswer}
		/>;
	} else {
		return <SurveyResults answers={answers} resultCount={buttonCount} />;
	}
}

export default Survey;