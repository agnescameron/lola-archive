import { useState, useEffect } from 'react';
import Item from './Item';

function Table(props) {
	const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
 	 }

 	 const getPosition = (el) => {
 	 	// console.log('getting position')
 	 	return { top: props.offset.top + (Math.random()-0.5)*Math.random()*1000, left: props.offset.left + 10 + (Math.random()-0.5)*Math.random()*1000 - 500}
 	 }

	const data = shuffleArray(props.data)
	// console.log('in table data is', data)
	const blockid = "block" + props.index;

	return(
		<div className="grid-item" id={blockid}>
			{
				data.length > 0 && data.map((el, i) => {
					// return <div key={i}>{el.fields.Name}</div>
						return <Item key={i} el={el.fields} pos={getPosition(el)} />
				})}
		</div>
	)
}

export default Table;