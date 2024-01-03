import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';

function Transcript(props) {
	const [text, setText] = useState('loading..')

	useEffect( () => {
		console.log('fetching')
		fetch( '/transcripts/alex-kelbert.md')
		.then(data => data.text())
		.then(txt => setText(txt))
	}, [])

	return (
		<div className="transcript">
			<ReactMarkdown>{ text }
		</ReactMarkdown></div>
	)
}

export default Transcript;