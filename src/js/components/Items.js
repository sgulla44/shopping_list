import React from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';

import Item from './Item';

import Editable from './Editable';



export default ({
	items, 
	onItemClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (
	

	<ul>{items.map(({sku, editing, product}) =>
		<li key={sku}>
			<Item className="items-text" onClick={onItemClick.bind(null, sku)}>
				<Editable
					editing={editing}
					value={product}
					onEdit={onEdit.bind(null, sku)} />

 				<button className="button-delete"onClick={onDelete.bind(null, sku)}><Glyphicon glyph="trash" /></button>
 				{/* <button className="button-check" onClick={onCheck.bind(, sku)}>C</button>*/}
			</Item>
		</li>
	)}</ul>

)