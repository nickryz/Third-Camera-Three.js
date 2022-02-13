import gsap from 'gsap'
import EventEmitter from "./EventEmitter";

export default class Ticker extends EventEmitter {
  constructor() {
    super()
    this.time = 0;
    this.deltaTime = 0;
    this.frame = 0;
    // Set global ticker with GSAP
    gsap.ticker.add(this._tick.bind(this))
  }
  _tick(time, deltaTime, frame){
    this.time = time;
    this.deltaTime = deltaTime;
    this.frame = frame;
    // Emit event
    this.trigger('tick')
  }
}
