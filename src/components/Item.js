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
		setMediaSize("large")
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

	return(
		// onDrag={dragHandler} onDragOver={ onOver } onStop = { e => onDrop (e)} onMouseUp = { e => onDrop (e)}
		<Draggable >

			{ mediaSize === "small" ? (
				<div className="archive-item" style={{ left: props.pos.left, top: props.pos.top }} onClick={openHandler}>
					{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails['small'].url } /> }
				</div>
				) : (

			<div className="archive-item-large" style={{ left: props.pos.left, top: props.pos.top }}>
				{ props.el.Name ? <span onClick={closeHandler}>{props.el.Name}</span> : <span>item name</span> } 
				<span className="close" onClick={closeHandler}>x</span><br/>
				{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails['full'].url } /> }
				{ props.el.Description ? <p>{props.el.Description}</p> : <p>item description would go here </p> }
			</div>
			)}

		</Draggable>
	)
}

export default Item;

				