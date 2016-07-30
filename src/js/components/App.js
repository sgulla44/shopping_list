import React from 'react';

import uuid from 'uuid';

//import {Header} from './Header';

import {Items} from './Items';

//import AddItem from './AddItem';




export default class Layout extends React.Componenet {
	constructor(props) {
		super(props);

		this.state = {
			items: [
				{
					sku: uuid.v4(),
					product: 'Apple'
				},
				{
					sku: uuid.v4(),
					product: 'Bananas'
				}

			]
		};
	}

	render() {
		const {items} = this.state;

		return (
			<div>
				<button onClick={() => console.log('add_item')}>+</button>
				<Items items={items} />
			</div>
		);
	}
}