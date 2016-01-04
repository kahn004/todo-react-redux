/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

/*
 * action creators
 */

let nextTodoId = 0

export function addTodo (text) {
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text
	}
}

export function completeTodo (id) {
	return {
		type: COMPLETE_TODO,
		id
	}
}