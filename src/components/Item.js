import { useState, useEffect } from 'react';


function Item(props) {

	return(
		<div className="archive-item" id={props.key}>
			{ props.el.Name && <p>{props.el.Name}</p> }
			{ props.el["Media File"] && <img src={ props.el["Media File"][0].thumbnails.large.url } /> }
			{ props.el.Description && <p>{props.el.Description}</p> }
		</div>
	)
}

export default Item;