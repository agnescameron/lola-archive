import { useState, useEffect } from 'react';
import './Item.css';
import Draggable, {DraggableCore} from 'react-draggable';

function Item(props) {
	const [ mediaSize, setMediaSize ] = useState("small")
	//props.el["Media File"] ? React.useState() : React.useState("")

	const dragHandler = (e, data) => {
		// console.log(e.type, data)
	}

	const openHandler = (e) => {
		mediaSize === "small" ? setMediaSize("large") : setMediaSize("small")
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

	return(
		// onDrag={dragHandler} onDragOver={ onOver } onStop = { e => onDrop (e)} onMouseUp = { e => onDrop (e)}
		<Draggable >
			<div className={ mediaSize === "small" ? "archive-item" : "archive-item-large" } style={{ left: props.pos.left, top: props.pos.top }} onClick={openHandler}>
				{ mediaSize === "large" && ( props.el.Name ? <p>{props.el.Name}</p> : <p>item name</p> ) }
				{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails[mediaSize].url } /> }
				{ mediaSize === "large" && ( props.el.Description ? <p>{props.el.Description}</p> : <p>item description would go here </p> ) }
			</div>
		</Draggable>
	)
}

export default Item;