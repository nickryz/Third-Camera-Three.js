import * as THREE from 'three'
import { OrbitControls } from '~/node_modules/three/examples/jsm/controls/OrbitControls'
import Scene from './Scene'
export default class Camera {
  constructor() {
    this.app = new Scene()
    this.sizes = this.app.sizes
    this.scene = this.app.scene
    this.canvas = this.app.canvas
    this.debug = this.app.debug

    this._setInstance()
    if (this.debug.active) this._setDebug()
    // this._setOrbitControls()
  }

  _setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      60,
      this.sizes.width / this.sizes.height,
      0.1,
      300
    )
    this.instance.position.set(0, 1, 4)
    this.scene.add(this.instance)
  }
  _setOrbitControls() {
    this.controls = new OrbitControls(this.instance, this.canvas)
    this.controls.enableDamping = true
  }
  _setDebug(){
    this.debugFolder = this.debug.ui.addFolder('Camera')

    this.debugFolder
      .add(this.instance.position, 'x')
      .name('positionX')
      .min(-10)
      .max(10)
      .step(0.01)
  }
  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height
    this.instance.updateProjectionMatrix()
  }
  update() {
    if (this.controls) {
      this.controls.update()
    }
  }
}
