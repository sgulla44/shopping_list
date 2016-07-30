import React from 'react';
import uuid from 'uuid';

// import all components

import Header from './Header';
import Items from './Items';
//import AddItem from './AddItem';

export default class Layout extends React.Component {
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
		}
	}

	render() {
		const {items} = this.state;

		return (
			<div>
				<Header />
				
				<button className="add-item" onClick={this.addItem}>+</button>
				
				<Items
					items={items}
					onItemClick={this.activateItemEdit}
					onEdit={this.editItem}
					onDelete={this.deleteItem}
				/>

			</div>
		);
	}
	// add an item to the array by 'concat' (?concatinating?) with a unique key(sku).
	addItem = () => {
		this.setState({
			items: this.state.items.concat([{
				sku: uuid.v4(),
				product: 'New Product'
			}])
		});
	}
	// filter the array (?immutable?) and set the state without the item that was 'deleted'.
	deleteItem = (sku, e) => {

		e.stopPropagation();

		this.setState({
			items: this.state.items.filter(item => item.sku !== sku)
		});
	}
	// set the editing flag to true (note the strict equality === here).
	activateItemEdit = (sku) => {
		this.setState({
			items: this.state.items.map(item => {
				if(item.sku === sku) {
					item.editing = true;
				}

				return item;
			})
		});
	}
	// set the editing 'flag' back to false
	editItem = (sku, product) => {
		this.setState({
			items: this.state.items.map(item => {
				if(item.sku === sku) {
					item.editing = false;
					item.product = product;
				}

				return item;
			})
		});
	}
}