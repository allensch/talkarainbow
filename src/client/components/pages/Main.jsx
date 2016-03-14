import React from 'react'
import { Link } from 'react-router'

export default class Main extends React.Component {

    componentWillEnter(callback) {
        TweenMax.from(this.refs.self, .5, { y: -500 })
    }

    render() {
        const style = { marginTop: 100 }
        return (
            <div style={style}>
                <div className="container">
                    <div className="jumbotron text-center">
                      <h1>Talk a Rainbow.</h1>
                      <p>One by one, speak the colors of the rainbow.</p>
                      <p>
                          <Link className="btn btn-primary btn-lg" to="rainbow" role="button">Talk now</Link>
                      </p>
                    </div>
                </div>
            </div>
        )
    }

}
