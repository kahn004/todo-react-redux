import { combineReducers } from 'redux'
import { ADD_TODO } from './actions'

const initialState = {
	todos: [
		{
			text: 'first!'
		}
	]
}

function todos (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return Object.assign({}, state, {
				todos: [
					...state.todos,
					{
						text: action.text
					}
				]
			})
		default:
			return state
	}
}

const todoApp = combineReducers({
	todos
})

export default todoApp