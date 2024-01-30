import {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";

import "./Item.css"

function InfoPage(props){
	const [item, setItem] = useState(null)
	const [press, setPress] = useState([])

	let params = useParams();

	const { id } = params ? params : 1;

	useEffect(() => {
		const item = props.data.length > 0 ? props.data.find(el => el.id === id) : null
		setItem(item)
	}, [props.data])


	return (

		<div className="item">
	 		{ props.loading ? 'loading' : 
	 		<div>

	 			{ item && 
	 				<div>
	 					{item.fields.Name}
	 					<img className="info-image" src={item.fields["Media File"][0].url}/>
	 				</div>
	 			}
	 		</div>
			}
		</div>
	)
}

export default InfoPage;