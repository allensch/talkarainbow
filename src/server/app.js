import http from 'http'
import express from 'express'
import body from 'body-parser'
import exphbs from 'express-handlebars'

import * as routes from './routes'
import * as config from './config'

const app = express()
const port = process.env.PORT
const server = http.createServer(app)

// disable tag
app.disable('x-powered-by')

// serve static files
app.use(express.static('public'))

// parse incoming json
app.use(body.json())

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

export function start() {
    routes.setup(app)
	server.listen(port, function() {
		console.log('connected on port ' + port)
	})
}
