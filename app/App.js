import React from 'react'
import { render } from 'react-dom'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

export default class App extends React.Component {

	render () {
		return (
			<div className="row">
				<AddTodo
					onAddClick={text =>
						console.log('add todo', text)
					}
				/>
				<TodoList
					todos={
						[
							{
								text: 'Use Redux',
								completed: true
							},
							{
								text: 'Learn to connect it to React',
								completed: false
							}
						]
					}
					onTodoClick={index =>
						console.log('todo clicked', index)
					} />
				<Footer 
					filter="SHOW_ALL"
					onFilterChange={filter =>
						console.log('filter change', filter)
					} />
			</div>
		)
	}
}

render(
	<App />,
	document.getElementById('app')
)
