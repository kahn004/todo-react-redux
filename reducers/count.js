import constants from '../constants'

const initialState = {
	number: 1
}

function update (state = initialState, action) {
	switch (action.type) {
		case constants.INCREASE:
			return {
				number: state.number + action.amount
			}
		case constants.DECREASE:
			return {
				number: state.number - action.amount
			}
		default:
			return state
	}
}

module.exports = update