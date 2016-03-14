import React from 'react'
import Actions from '../../actions'

export default class Timer extends React.Component {

	constructor() {
		super()
		this.interval = 0
		this.state = { elapsed: 0, started: 0 }
	}

	componentDidMount() {
		this.start()
	}

	componentWillUnmount() {
		this.stop()
	}

	start() {
		this.setState({ started: Date.now() })
		this.interval = setInterval(() => {
			const elapsed = Date.now() - this.state.started
			this.setState({ elapsed })
			Actions.elapsedTick(elapsed)
		}, 1000)
	}

	stop() {
		clearInterval(this.interval)
	}

	render() {
		const { elapsed } = this.state
		const style = { color: '#eee', position: 'absolute', top: 60, left: 10 }
		if (elapsed) {
			return <div style={style}>{`${Math.round(elapsed / 1000)}s`}</div>
		}
		return <div></div>
	}

}
