import * as THREE from 'three'
import Scene from '../Scene'

export default class Environment {
  constructor() {
    this.app = new Scene()
    this.scene = this.app.scene
    this.resources = this.app.resources
    this.debug = this.app.debug

    this._setSunLight()
    this._setEnvironmentMap()
    if (this.debug.active) this._setDebug()
  }

  _setSunLight() {
    this.sunlight = new THREE.DirectionalLight('#ffe3c9', 3)
    this.sunlight.castShadow = true
    this.sunlight.shadow.camera.far = 15
    this.sunlight.shadow.mapSize.set(1024, 1024)
    this.sunlight.shadow.normalBias = 0.05
    this.sunlight.position.set(3.5, 2, 20)
    this.scene.add(this.sunlight)
  }
  _setEnvironmentMap() {
    this.environmentMap = {}
    this.environmentMap.intensity = 0.4
    this.environmentMap.texture = this.resources.items.environmentMapTexture
    this.environmentMap.texture.encodeURIComponent = THREE.sRGBEncoding

    this.scene.environment = this.environmentMap.texture

    this._setEnvironmentMap.updateMaterials = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture
          child.material.envMapIntensity = this.environmentMap.intensity
          child.material.needsUpdate = true
        }
      })
    }
    this._setEnvironmentMap.updateMaterials()
  }
  _setDebug() {
    this.debugFolder = this.debug.ui.addFolder('Environment')

    this.debugFolder
      .add(this.environmentMap, 'intensity')
      .name('environmentMap')
      .min(0)
      .max(4)
      .step(0.001)
      .onChange(this._setEnvironmentMap.updateMaterials)

    this.debugFolder
      .add(this.sunlight, 'intensity')
      .name('sunLight')
      .min(0)
      .max(10)
      .step(0.001)

    if (this.scene.fog) {
      this.debugFolder
        .add(this.scene.fog, 'near')
        .name('Fog near')
        .min(0)
        .max(300)
        .step(0.1)
      this.debugFolder
        .add(this.scene.fog, 'far')
        .name('Fog far')
        .min(0)
        .max(300)
        .step(0.1)
    }
  }
}
