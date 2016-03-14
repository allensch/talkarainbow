import cache from './cache'

function renderWebApp(request, response) {
	response.render('main')
}

function loadResults(request, response) {

}

function postUserTime(request, response) {

}

export function setup(app) {
	app.post('/api/result', postUserTime)
	app.get('/api/results', loadResults)
	app.get('*', renderWebApp)
}
