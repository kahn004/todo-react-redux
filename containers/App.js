import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {

	render () {
		const { dispatch, visibleTodos } = this.props
		return(
			<div>
				<AddTodo
					onAddClick={text =>
						dispatch(addTodo(text))
					} />
				<TodoList
					todos={visibleTodos}
					onTodoClick={index =>
						dispatch(completeTodo(index))
					} />
			</div>
		)
	}	
}

App.propTypes = {
	visibleTodos: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired
	})).isRequired
}

function select (state) {
	return {
		visibleTodos: state.todos
	}
}

export default connect(select)(App)