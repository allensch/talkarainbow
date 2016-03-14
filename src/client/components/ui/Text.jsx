import React from 'react'

export default class Text extends React.Component {

	render() {
		const style = { color: '#eee', position: 'absolute', top: 60, left: 60 }
		return <div style={style}>{this.props.text}</div>
	}

}
