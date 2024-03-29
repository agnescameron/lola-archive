import { useState, useEffect } from 'react';
import './Item.css';
import Draggable, {DraggableCore} from 'react-draggable';

function ItemLarge(props) {

	const dragHandler = (e, data) => {
		// console.log(e.type, data)
	}


	return(
		<Draggable onDrag={dragHandler}>
			<div className="archive-item" style={{ left: props.pos.left, top: props.pos.top }}>
				{ props.el.Name && <p>{props.el.Name}</p> }
				{ props.el["Media File"] && <img className="large-image" src={ props.el["Media File"][0].thumbnails.full.url } /> }
				{ props.el.Description && <p>{props.el.Description}</p> }
			</div>
		</Draggable>
	)
}

export default ItemLarge;