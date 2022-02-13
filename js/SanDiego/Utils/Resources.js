import * as THREE from 'three'
import { GLTFLoader } from '~/node_modules/three/examples/jsm/loaders/GLTFLoader'
import { FBXLoader } from '~/node_modules/three/examples/jsm/loaders/FBXLoader'
import { RGBELoader } from '~/node_modules/three/examples/jsm/loaders/RGBELoader'
import { DRACOLoader } from '~/node_modules/three/examples/jsm/loaders/DRACOLoader'
import EventEmitter from './EventEmitter'

export default class Resources extends EventEmitter {
  constructor(sources) {
    super()
    // Options
    this.sources = sources
    // Setup
    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0

    this._setLoaders()
  }

  _setLoaders() {
    this.loaders = {}
    this.loaders.DRACOLoader = new DRACOLoader()

    this.loaders.DRACOLoader.setDecoderPath('./draco/')
    this.loaders.DRACOLoader.setDecoderConfig({ type: 'js' })
    this.loaders.fbxLoader = new FBXLoader()
    this.loaders.gltfLoader = new GLTFLoader().setDRACOLoader(
      this.loaders.DRACOLoader
    )
    this.loaders.RGBELoader = new RGBELoader()
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()

    this._startLoading()
  }
  _startLoading() {
    for (const source of this.sources) {
      switch (source.type) {
        case 'RGBEenv':
          this.loaders.RGBELoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'drcModel':
          this.loaders.DRACOLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'gltfModel':
          this.loaders.gltfLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'fbxModel':
          this.loaders.fbxLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'cubeTexture':
          this.loaders.cubeTextureLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
        case 'texture':
          this.loaders.textureLoader.load(
            source.path,
            this._sourceLoaded.bind(this, source)
          )
          break
      }
    }
  }
  _sourceLoaded(source, file) {
    this.items[source.name] = file
    ++this.loaded
    if (this.loaded === this.toLoad) this.trigger('ready')
  }
}
