import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {
	render () {
		return(
			<div>
				<button onClick={(e) => this.handleClick(e)}>Add</button>
			</div>
		)
	}
	handleClick (e) {
		this.props.onAddClick('New text')
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}