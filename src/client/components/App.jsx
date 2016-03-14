import React from 'react'
import { RouteHandler } from 'react-router'
import TransitionGroup from 'react-addons-transition-group'

import Actions from '../actions'
import Header from './Header.jsx'
import Loader from './ui/Loader.jsx'

export default class App extends React.Component {

    componentDidMount() {
        Actions.showLoading.listen(this.handleLoader.bind(this))
    }

    handleLoader(show) {
        if (show) {
            this.refs.loader.spin()
        } else {
            this.refs.loader.stop()
        }
    }

    render() {
        return (
            <main>
                <Header />
                <TransitionGroup component="div">
                    {this.props.children}
                </TransitionGroup>
                <Loader ref="loader" position="absolute" scale=".5" hwaccel={true} />
            </main>
        )
    }

}
