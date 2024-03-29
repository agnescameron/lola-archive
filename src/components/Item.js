import { useState, useEffect } from 'react';
import './Item.css';
import Draggable, {DraggableCore} from 'react-draggable';

function Item(props) {
	const [ mediaSize, setMediaSize ] = useState("small")
	const [ showTitle, setShowTitle ] = useState(false)
	//props.el["Media File"] ? React.useState() : React.useState("")

	const dragHandler = (e, data) => {
		// console.log(e.type, data)
	}

	const openHandler = (e) => {
		setMediaSize("large")
		console.log('showtitle is', showTitle)
	}

	const closeHandler = (e) => {
		console.log('closing')
		setMediaSize("small")
	}


	const onOver = (e) => {
	    // let event = e as Event;
	    e.stopPropagation();
	    e.preventDefault();
		console.log('over')
	}

	const onDrop = (e) => {
		console.log('drop')
	}

	const mouseEnter = (e) => {
		setShowTitle(true)
	}

	const mouseLeave = (e) => {
		setShowTitle(false)
	}

	return(
		// onDrag={dragHandler} onDragOver={ onOver } onStop = { e => onDrop (e)} onMouseUp = { e => onDrop (e)}
		<Draggable >
		
			{ mediaSize === "small" ? (
				<div className="archive-item" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} style={{ left: props.pos.left, top: props.pos.top }} onClick={openHandler}>
					{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails['large'].url } /> }
					{ showTitle && <span>{ props.el.Name ? props.el.Name : "item name" }</span> }
				</div>
				) : (

			<div className="archive-item-large" style={{ left: props.pos.left, top: props.pos.top }}>
					{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails['full'].url } /> }
					<div>
					{ props.el.Name ? <span onClick={closeHandler}>{props.el.Name}</span> : <span>item name</span> } 
					<span className="close" onClick={closeHandler}>x</span><br/>
					{ props.el.Description ? <p>{props.el.Description}</p> : <p>item description would go here </p> }
				</div>
			</div>
			)}

		</Draggable>
	)
}

export default Item;

				