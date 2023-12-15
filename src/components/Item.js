import './Item.css';
import Draggable from 'react-draggable'; // The default

function Item(props) {
	const left = Math.floor(Math.random() * (5000-500));
	const top = Math.floor(Math.random() * (4000-500));

	let showAuthor = false;

	function setShow() {
		showAuthor = true;
	}

	return(
		<Draggable>
			<div className="item-box" style={{left: left, top: top}} onClick={setShow}>
				<h1>{props.el.fields.Name}</h1>
				<p class="display-linebreak">{props.el.fields.Contents}</p>
			</div>
		</Draggable>
		)

}

export default Item;