import { useState, useEffect } from 'react';
import './Item.css';
import Draggable, {DraggableCore} from 'react-draggable';

function Item(props) {

	const dragHandler = (e, data) => {
		console.log(e.type, data)
	}

	return(
		<Draggable onDrag={dragHandler}>
			<div className="archive-item">
				{ props.el.Name && <p>{props.el.Name}</p> }
				{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails.large.url } /> }
				{ props.el.Description && <p>{props.el.Description}</p> }
			</div>
		</Draggable>
	)
}

export default Item;