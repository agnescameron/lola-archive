import { useState, useEffect } from 'react';
import Item from './Item.js'

function Table(props) {
	const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
 	 }

	const data = shuffleArray(props.data)
	const blockid = "block" + props.index;

	return(
		<div className="grid-item" id={blockid}>
			{
				data.length > 0 && data.map((el, i) => {
					return <Item key={i} el={el}/>
				})}
		</div>
	)
}

export default Table;