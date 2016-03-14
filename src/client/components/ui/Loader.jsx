import React from 'react'

export default class Loader extends React.Component {

	constructor() {
		super()
		this.state = { showing: false }
	}

	componentDidMount() {
		if (this.state.showing) {
			this.spinner = new Spinner(this.props).spin(this.refs.loader)
		}
	}

	componentDidUpdate() {
		if (this.spinner && !this.state.showing) {
			this.spinner.stop()
		} else if (this.state.showing) {
			this.spinner = new Spinner(this.props).spin(this.refs.loader)
		}
	}

	spin() {
		this.setState({ showing: true })
	}

	stop() {
		if (this.spinner) {
			this.spinner.stop()
			this.setState({ showing: false })
		}
	}

	render() {
		if (this.state.showing) {
			return <div><div ref="loader"></div></div>
		}
		return <div></div>
	}

}

Loader.defaultProps = {
	lines: 13 // The number of lines to draw
  , length: 28 // The length of each line
  , width: 14 // The line thickness
  , radius: 42 // The radius of the inner circle
  , scale: 1 // Scales overall size of the spinner
  , corners: 1 // Corner roundness (0..1)
  , color: '#000' // #rgb or #rrggbb or array of colors
  , opacity: 0.25 // Opacity of the lines
  , rotate: 0 // The rotation offset
  , direction: 1 // 1: clockwise, -1: counterclockwise
  , speed: 1 // Rounds per second
  , trail: 60 // Afterglow percentage
  , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
  , zIndex: 2e9 // The z-index (defaults to 2000000000)
  , className: 'spinner' // The CSS class to assign to the spinner
  , top: '50%' // Top position relative to parent
  , left: '50%' // Left position relative to parent
  , shadow: false // Whether to render a shadow
  , hwaccel: false // Whether to use hardware acceleration
  , position: 'absolute' // Element positioning
}
