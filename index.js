import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import { App, Home, Foo, Bar } from './components'
import reducers from './reducers'

const reducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}))
const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="foo" component={Foo} />
				<Route path="bar" component={Bar} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)