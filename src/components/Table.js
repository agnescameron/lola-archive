import { useState, useEffect } from 'react';


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
					return <div key={i}>{el.fields.Name}</div>
				})}
		</div>
	)
}

export default Table;