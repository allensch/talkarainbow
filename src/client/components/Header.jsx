import React from 'react'
import { Link } from 'react-router'

import config from '../config'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    rainbow() {
        return 'rainbow'.split('').map((letter, index) => {
            const color = config.colors[index].name
            const style = { color, textShadow: '1px 1px #333' }
            return <span style={style} key={index}>{letter}</span>
        })
    }

    render() {
        return (
            <nav className="navbar navbar-light bg-faded navbar-fixed-top">
                <div className="container">
                    <div key="brand">
                        <Link className="navbar-brand" to="/">{this.rainbow()}</Link>
                    </div>
                    <ul className="nav navbar-nav pull-center">
                        <li className="nav-item">
                            <Link className="nav-link" to="rainbow"><i className="fa fa-microphone"></i> Talk</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="activity"><i className="fa fa-history"></i> Activity</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}
