import Scene from '../Scene'
import Cube from "./Cube";
import Environment from './Environment'
import CameraFolower from '../Utils/CameraFolower'

export default class World {
  constructor() {
    this.app = new Scene()
    this.camera = this.app.camera
    this.scene = this.app.scene
    this.ticker =this.app.ticker
    this.resources = this.app.resources
    // Objects
    this.cube = new Cube()

    // Helper
    this.cameraFolower = new CameraFolower({target: this.cube, camera: this.camera})

    // Listeners
    this.resources.on('ready', () => {
      this.environment = new Environment()
    })
  }

  update() {
    this.cameraFolower.update(this.ticker.deltaTime)
  }
}
