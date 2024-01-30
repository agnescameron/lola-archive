import { useState, useEffect } from 'react';
import Item from './Item';
import { Parallax } from 'react-scroll-parallax';
import { Link } from "react-router-dom";
import Draggable, {DraggableCore} from 'react-draggable';

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

 	 		setLayers(sorted);
 	 }, [props])

 	 const getPosition = (el) => {
 	 	return { top: props.offset.top + (Math.random()-0.5)*Math.random()*window.innerHeight*1 -30, left: props.offset.left + (Math.random()-0.5)*Math.random()*window.innerWidth*1 }
 	 }

	const data = shuffleArray(props.data)
	const blockid = "block" + props.index;

	return(
		<div className="grid-item" id={blockid}>
		<h1 className="title">THIS IS A TEMPORAL LANDSCAPE,<br/> YOU WILL FIND NO DIRECTION HERE</h1>
		
{/*		<div className="spotlight-image">
			<img src="https://v5.airtableusercontent.com/v3/u/25/25/1706212800000/QuGaoHLaJph8nvF_9i9ZyA/CG2EJ9ICykVEQvY9LzsuzRSpZ6MjXAEcarOUbIayfArYzVJtG-aSBTHbynxVeiKvsEuTqDo73ipIjHeOvp4l8jUidGci3IvBGv0h1EdMLE6s-EWtlYorGY0w3AHK1JoWPp99ERLTxCeP_ar8p-LxoA/wzpE8BFGYEPVAlNDAZIG5_s9PPff26mtiKSsmSPV1CI" />
		</div>*/}

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

				<Draggable>
					<Link to="/transcripts/alex-kelbert"><div className="transcript-excerpt">"Grasping makes sense. For me, it's also the feeling of looking back and seeing that actually, it was always there. Sometimes you feel like you're doing nothing, and then you'll do something and realise it was all happening; the future was already in the past and then in the present moment you look back and you're like "oh". It's a sense of --- its not really surprise --- but suddenly you realise that time is also working with you."</div></Link>
				</Draggable>

				<h1 className="about">?</h1>
				</>
			)}
		</div>
	)
}

export default Table;
