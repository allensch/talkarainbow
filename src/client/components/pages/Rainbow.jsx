import React from 'react'
import Config from '../../config'
import Actions from '../../actions'
import Speech from '../../speech'
import Text from '../ui/Text.jsx'
import Timer from '../ui/Timer.jsx'

export default class Rainbow extends React.Component {

    constructor() {
        super()
        this.stage = null
        this.assets = null
        this.elapsed = null
        this.emitter = null
        this.renderer = null
        this.updateId = null
        this.emitters = []
        this.colors = {}
        this.state = { spoken: null }
        this.update = this.update.bind(this)
        this.initialize()
    }

    initialize() {
        Config.colors.forEach(color => {
            color.showing = false
            this.colors[color.name] = color
        })
    }

    componentDidMount() {
        const canvas = this.refs.stage
        this.speech = new Speech()
        this.speech.on('result', this.onTalkResult.bind(this))
        this.elapsed = Date.now()
        this.stage = new PIXI.Container()
		this.renderer = PIXI.autoDetectRenderer(canvas.width, canvas.height, { view: canvas })
        this.load()
    }

    onTalkResult(value) {
        const color = this.colors[value]
        console.info(value)
        this.setState({ spoken: value })
        if (color && !color.showing) {
            const config = Object.assign({}, Config.emitter)
            color.showing = true
            config.color = color
            this.addColor(config)
        }
    }

    addColor(config) {
        const { innerHeight, innerWidth } = window
        const xpos = innerWidth / 2
        const container = new PIXI.Container()
        const emitter = new cloudkid.Emitter(container, this.assets, config)
        emitter.updateOwnerPos(xpos, innerHeight - 10)
        this.stage.addChild(container)
        this.emitters.forEach((e, i) => {
            e.xpos -= 50
            e.emitter.updateOwnerPos(e.xpos, innerHeight - 10)
        })
        this.emitters.push({ emitter, xpos })
		if (this.emitters.length === Config.colors.length) {
			setTimeout(() => {
				Actions.doneTalking()
			}, 1000)
		}
    }

    load() {
        const assets = []
        Config.assets.images.forEach((path, index) => {
            PIXI.loader.add(`img${index}`, path)
        })
        PIXI.loader.load(() => {
            Config.assets.images.forEach((path) => {
                assets.push(PIXI.Texture.fromImage(path))
            })
            this.assets = assets
            this.update()
        })
    }

    update() {
        const now = Date.now()
        this.updateId = requestAnimationFrame(this.update)
        this.emitters.forEach(e => {
            e.emitter.update((now - this.elapsed) * 0.001)
        })
        this.renderer.render(this.stage)
    }

    render() {
        const { innerHeight, innerWidth } = window
        const style = { width: `${innerWidth}px`, height: `${innerHeight}px` }
        return (
            <div ref="self">
                <canvas ref="stage" style={style} width={innerWidth} height={innerHeight} />
                <Timer />
                <Text text={this.state.spoken} />
            </div>
        )
    }

}
