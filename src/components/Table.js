import { useState, useEffect } from 'react';
import Item from './Item';
import { Parallax } from 'react-scroll-parallax';


function Table(props) {
	const [layers, setLayers] = useState({});

	const layerMap = {
		top: -10,
		middle: -20,
		bottom: -30
	}

	const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
 	 }

		const groupBy = (arr, key) => {
		  return arr.reduce((rv, x) => {
		    (rv[x[key]] = rv[x[key]] || []).push(x);
		    return rv;
		  }, {});
		};

 	 useEffect(() => {
 	 		let tempData = []

 	 		props.data.forEach((el) => tempData.push(el.fields))
 	 		const sorted = groupBy(tempData, 'Layer');
 	 		delete sorted[undefined]

 	 		console.log(sorted)

 	 		setLayers(sorted);
 	 }, [props])

 	 const getPosition = (el) => {
 	 	// console.log('getting position')
 	 	return { top: props.offset.top + (Math.random()-0.5)*Math.random()*700 -30, left: props.offset.left + (Math.random()-0.5)*Math.random()*1000 }
 	 }

	const data = shuffleArray(props.data)
	// console.log('in table data is', data)
	const blockid = "block" + props.index;

	return(
		<div className="grid-item" id={blockid}>
		<h1 className="title">THIS IS A TEMPORAL LANDSCAPE,<br/> YOU WILL FIND NO DIRECTION HERE</h1>
		
				<Parallax speed={0}>
					<div className="transcript-box">
						<p>HEGEMONIC CLOCK TIME CAUSES ↝  SUPPRESSED IMAGINATIONS↝ TOPOLOGICAL FRAME (RETHINKING TEMPORALITY) ↝ DEFEATS/CHALLENGES HEGEMONIC CLOCK TIME (CLEARS A SPACE FOR) ↝ IMAGINATIVE REVOLUTIONARY POTENTIAL STORED IN CULTURAL PRODUCTS TO EMERGE ↝ HELPS DEAL WITH THE PROBLEM OF SUPPRESSED IMAGINATIONS VIA NEW THE CREATION AFFECTIVE LANDSCAPES THAT SHORE UP POLITICAL DESIRE</p>
					</div>
				</Parallax>
			{ Object.entries(layers).map(([key, data]) => 
				<>
				<Parallax speed={layerMap[key]}>
				{
					data.map((el, i) => {
							// return <div key={i}>{el.fields.Name}</div>
								return <Item key={i} el={el} pos={getPosition(el)} />
						})
					}
				</Parallax>

				</>
			)}
		</div>
	)
}

export default Table;


// HEGEMONIC CLOCK TIME CAUSES ↝  SUPPRESSED IMAGINATIONS↝ TOPOLOGICAL FRAME (RETHINKING TEMPORALITY) ↝ DEFEATS/CHALLENGES HEGEMONIC CLOCK TIME (CLEARS A SPACE FOR) ↝ IMAGINATIVE REVOLUTIONARY POTENTIAL STORED IN CULTURAL PRODUCTS TO EMERGE ↝ HELPS DEAL WITH THE PROBLEM OF SUPPRESSED IMAGINATIONS VIA NEW THE CREATION AFFECTIVE LANDSCAPES THAT SHORE UP POLITICAL DESIRE
			// 	<Parallax speed={layerMap[key]-2}>
			// 		<div className="transcript-box">
			// </div>
			// 	</Parallax>