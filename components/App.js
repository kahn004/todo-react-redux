import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { pushPath } from 'redux-simple-router'

class App extends Component {
	render () {
		const { number, pushPath, children } = this.props
		return (
			<div>
				<header>
					Links:
					{ ' ' }
					<Link to="/">Home</Link>
					{ ' ' }
					<Link to="/foo">Foo</Link>
					{ ' ' }
					<Link to="/bar">Bar</Link>
					{ ' ' }
					Current number: { number }
				</header>
				<div>
					<button onClick={() => pushPath('/foo')}>Go to /foo</button>
				</div>
				<div style={{marginTop: '1.5em'}}>{ children }</div>
			</div>
		)
	}
}

export default connect(
	state => ({ number: state.count.number }),
	{ pushPath }
)(App)