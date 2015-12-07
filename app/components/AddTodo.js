import React, { Component, PropTypes } from 'react'

export default class AddTodo extends Component {

	render () {
		return (
			<div>
				<h5>Add todo list</h5>
				<input type="text" ref="input" />
				<button className="button" onClick={e => this.handleClick(e)}>Add</button>
			</div>
		)
	}

	handleClick (e) {
		var node = this.refs.input
		var text = node.value.trim()
		this.props.onAddClick(text)
		node.value = ''
	}
}

AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}