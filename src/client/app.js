import ReactDOM from 'react-dom'
import Router from 'react-router'

import Routes from './components/Routes.jsx'

//Setup window globals
// window['$'] = window['jQuery'] = require('jquery')

function setupApp() {
    ReactDOM.render(Routes, document.getElementById('app'))
}

// setup App
window.onload = setupApp
