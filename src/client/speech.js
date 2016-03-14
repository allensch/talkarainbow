import events from 'events'

export default class Speech extends events.EventEmitter {

	constructor() {
		super()
		this.init()
	}

	init() {
		if (!('webkitSpeechRecognition' in window)) {
			alert('Oh no! Your browser does not support Speech recognition :(')
		} else {
			this.recognition = new webkitSpeechRecognition()
			this.recognition.lang = 'en-US'
			this.recognition.continous = true
			this.recognition.interimResults = true
			this.recognition.onend = this.onEnd.bind(this)
			this.recognition.onstart = this.onReady.bind(this)
			this.recognition.onresult = this.onResult.bind(this)
			this.recognition.start()
		}
	}

	onEnd() {
		this.recognition.stop()
		this.recognition.start()
	}

	onReady() {
		this.emit('ready')
		// console.log('Speech recognition ready!')
	}

	onResult(event) {
		var i, result = ''
		for (i = event.resultIndex; i < event.results.length; i++) {
			if (event.results[i].isFinal) {
				result += event.results[i][0].transcript
			}
		}
		if (result.length) {
			this.emit('result', result.toLowerCase())
		}
	}

	onError(error) {
		this.emit('error')
		console.error(error)
	}

}
