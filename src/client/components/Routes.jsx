import React from 'react'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'

import App from './App.jsx'
import Main from './pages/Main.jsx'
import Rainbow from './pages/Rainbow.jsx'
import Activity from './pages/Activity.jsx'

export default (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main} />
            <Route path="activity" component={Activity} />
            <Route path="rainbow" component={Rainbow} />
        </Route>
    </Router>
)
