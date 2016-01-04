import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO } from './actions'

function todo (state, action) {
	if (state.id !== action.id) {
		return state
	}
	return {
		...state,
		completed: true
	}
}

function todos (state = [], action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					completed: false
				}
			]
		case COMPLETE_TODO:
			return state.map(t =>
				todo(t, action)
			)
		default:
			return state
	}
}

const todoApp = combineReducers({
	todos
})

export default todoApp