/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'

/*
 * action constants
 */

export function addTodo (text) {
	return {
		type: ADD_TODO,
		text
	}
}
