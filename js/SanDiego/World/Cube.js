import * as THREE from 'three'
import Scene from '../Scene'

export default class Cube {
  constructor() {
    this.app = new Scene()
    this.scene = this.app.scene
    this.debug = this.app.debug
    this.cube = null
    // Setup
    this._addCube()
    if (this.debug.active) this._setDebug()

    const size = 10;
    const divisions = 10;

    const gridHelper = new THREE.GridHelper( size, divisions );
    this.scene.add( gridHelper );
  }

  _addCube(){
    const geometry = new THREE.BoxBufferGeometry(1,1,1)
    const material = new THREE.MeshNormalMaterial()
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
  }
  _setDebug(){
    this.debugFolder = this.debug.ui.addFolder('Cube')

    this.debugFolder
      .add(this.cube.position, 'z')
      .name('positionZ')
      .min(-10)
      .max(10)
      .step(0.0001)
    this.debugFolder
      .add(this.cube.position, 'x')
      .name('positionX')
      .min(-10)
      .max(10)
      .step(0.0001)
    this.debugFolder
      .add(this.cube.rotation, 'y')
      .name('rotationY')
      .min(-Math.PI)
      .max(+Math.PI)
      .step(0.01)
  }
}
