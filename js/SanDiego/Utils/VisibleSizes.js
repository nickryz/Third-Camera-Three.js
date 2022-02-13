import * as THREE from 'three'
import Scene from '../Scene'

export default class VisibleSizes {
  constructor() {
    this.app = new Scene()
    this.camera = this.app.camera
    this.resize()
  }

  visibleHeightAtZDepth() {
    // compensate for cameras not positioned at z=0
    const cameraOffset =  Math.abs(this.camera.instance.position.z)
    // vertical fov in radians
    const vFOV = (this.camera.instance.fov * Math.PI) / 180
    // Math.abs to ensure the result is always positive
    return 2 * Math.tan(vFOV / 2) * Math.abs(cameraOffset)
  }
  visibleWidthAtZDepth() {
    const height = this.visibleHeightAtZDepth()
    return height * this.camera.instance.aspect
  }

  resize() {
    this.height = this.visibleHeightAtZDepth()
    this.width = this.visibleWidthAtZDepth()
  }
}
