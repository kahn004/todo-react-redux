import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
	render() {
		const { price, quantity, title } = this.props
		return (
			<div>
				{ title } - NZD{ price } { quantity ? `x ${quantity}` : null }
			</div>
		)
	}
}

Product.propTypes = {
	title: PropTypes.string.isRequired,
	quantity: PropTypes.number,
	price: PropTypes.number.isRequired
}