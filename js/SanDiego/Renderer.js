import * as THREE from 'three'
import Scene from './Scene'

export default class Renderer {
  constructor() {
    this.app = new Scene()
    this.canvas = this.app.canvas
    this.sizes = this.app.sizes
    this.scene = this.app.scene
    this.camera = this.app.camera

    this._setInstance()
  }
  _setInstance() {
    this.instance = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    })
    this.instance.physicallyCorrectLights = true
    this.instance.outputEncoding = THREE.sRGBEncoding
    this.instance.toneMapping = THREE.CineonToneMapping
    this.instance.toneMappingExposure = 1.75
    this.instance.shadowMap.enabled = true
    this.instance.shadowMap.type = THREE.PCFShadowMap
    this.instance.setClearColor('gray')
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height)
    this.instance.setPixelRatio(this.sizes.pixelRatio)
  }
  update() {
    this.instance.render(this.scene, this.camera.instance)
  }
}
