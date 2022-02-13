import * as THREE from 'three'
import Ticker from "./Utils/Ticker"
import Sizes from './Utils/Sizes'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Resources from './Utils/Resources'
import Debug from './Utils/Debug'
import sources from './sources'

let instance = null

export default class SanDiego {
  constructor(canvas) {
    if (instance) {
      return instance
    }
    instance = this
    // Options
    this.canvas = canvas
    // Setup
    this.sizes = new Sizes()
    this.ticker = new Ticker()
    this.debug = new Debug()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()
    // Helper
    this.resizeTimer = null
    // Listeners
    this.sizes.on('resize', this._resize.bind(this))
    this.ticker.on('tick', this._update.bind(this))
  }
  _resize() {
    clearTimeout(this.resizeTimer)
    this.resizeTimer = setTimeout(() => {
      this.camera.resize()
      this.renderer.resize()
    }, 200)
  }
  _update() {
    this.camera.update()
    this.world.update()
    this.renderer.update()
  }
}
