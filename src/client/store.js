import Reflux from 'reflux'
import Actions from './actions'

const ACCEPT_JSON = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
}

const AuthStore = Reflux.createStore({

	loading: false,
	elapsed: 0,

	init() {
		Actions.doneTalking.listen(this.onDoneTalking)
	},

	done() {
		this.loading = false
		this.trigger()
	},

	load(path, opts) {
		this.loading = true
		Actions.showLoading(true)
		return fetch(path, opts)
	},

	loadResults() {

	},

	postResult(name, result) {
		this.load('/api/result', {
			method: 'post',
			headers: ACCEPT_JSON,
			body: JSON.stringify({
				name, result
			})
		})
		.then(response => {
			return response.json()
		})
		.then(json => {
			this.done()
			return json
		})
	},

	onDoneTalking() {
		var name
		const userName = store.get('userName')
		const lastTime = store.get('lastTime')
		if (userName) {
			name = userName
		} else {
			name = prompt('Please enter your name.')
			store.set('userName', name)
		}
		if (lastTime) {
			alert(`Your last time was ${lastTime}`)
		}
		store.set('lastTime', this.elapsed)
	},

	onElapsedTick(elapsed) {
		this.elapsed = elapsed
	}

})

export default AuthStore
