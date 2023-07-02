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
		<Draggable onDrag={dragHandler} onDragOver={ onOver } onDrop = { e => onDrop (e)}>
			<div className="archive-item" style={{ left: props.pos.left, top: props.pos.top }} onClick={openHandler}>
				{/*{ props.el.Name && <p>{props.el.Name}</p> }*/}
				{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails[mediaSize].url } /> }
				{/*{ props.el.Description && <p>{props.el.Description}</p> }*/}
			</div>
		</Draggable>
	)
}

export default Item;