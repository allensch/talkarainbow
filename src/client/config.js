export default {

	colors: [
		{ name: 'red', start: 'FF0000', end: 'E20707' },
		{ name: 'orange', start: 'FFA500', end: 'E69603' },
		{ name: 'yellow', start: 'FFFF00', end: 'EFEF02' },
		{ name: 'green', start: '008000', end: '026F02' },
		{ name: 'blue', start: '0000FF', end: '0303E8' },
		{ name: 'indigo', start: '4B0082', end: '3F006D' },
		{ name: 'violet', start: 'EE82EE', end: '8E448E' }
	],

	assets: {
		images: [
			'/img/fire.png',
			'/img/particle.png'
		]
	},

	emitter: {
		"alpha": {
			"start": 0.62,
			"end": 0
		},
		"scale": {
			"start": 0.25,
			"end": 0.75
		},
		"color": {
			"start": "5215C7",
			"end": "C71546"
		},
		"speed": {
			"start": 500,
			"end": 500
		},
		"startRotation": {
			"min": 265,
			"max": 275
		},
		"rotationSpeed": {
			"min": 50,
			"max": 50
		},
		"lifetime": {
			"min": 0.1,
			"max": 0.75
		},
		"blendMode": "normal",
		"frequency": 0.001,
		"emitterLifetime": 0,
		"maxParticles": 1000,
		"pos": {
			"x": 0,
			"y": 0
		},
		"addAtBack": false,
		"spawnType": "circle",
		"spawnCircle": {
			"x": 0,
			"y": 0,
			"r": 10
		}
	}

}
