import * as THREE from 'three'
export default class CameraFolower {
  constructor(params) {
    console.log(params)
    this.camera = params.camera.instance
    this.target = params.target.cube
    // helper
    this.currentPosition = new THREE.Vector3();
    this.currentSubstractPosition = this.camera.position.clone().sub(this.target.position);

    this._currentPosition = new THREE.Vector3();
  }

  update(time){
    const newPosition = this.currentSubstractPosition.clone()
    newPosition.applyQuaternion(this.target.quaternion.clone());
    newPosition.add(this.target.position)
    const t = 1 - Math.pow(0.01, time/1000)
    this.currentPosition.lerp(newPosition, t)
    this.camera.position.copy(this.currentPosition)
    this.camera.lookAt(this.target.position)
  }
}
