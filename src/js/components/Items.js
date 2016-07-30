import React from 'react';

import Item from './Item';

import Editable from './Editable';



export default ({
	items, 
	onItemClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (
	

	<ul>{items.map(({sku, editing, product}) =>
		<li key={sku}>
			<Item onClick={onItemClick.bind(null, sku)}>
				<Editable
					editing={editing}
					value={product}
					onEdit={onEdit.bind(null, sku)} />

 				<button onClick={onDelete.bind(null, sku)}>x</button>
			</Item>
		</li>
	)}</ul>

)