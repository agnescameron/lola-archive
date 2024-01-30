import ReactMarkdown from 'react-markdown';
import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import './Transcript.css'

function Transcript(props) {
	const [text, setText] = useState('loading...')

	let params = useParams();
	const { id } = params ? params : 1;
	console.log('id is', id)

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