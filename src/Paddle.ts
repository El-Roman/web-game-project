// const SPEED = 0.01

// export default class Paddle {
//     constructor(paddleElem) {
//         this.paddleElem = paddleElem
//         this.reset()
//     }

//     get position() {
//         return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
//     }

//     set position(value) {
//         this.paddleElem.style.setProperty("--position", value)
//     }

//     rect() {
//         return this.paddleElem.getBoundingClientRect()
//     }

//     reset() {
//         this.position = 50
//     }

//     update(delta, ballHeight) {
//         this.position += SPEED * delta * (ballHeight - this.position)
//     }
// }



const SPEED = 0.01;

export default class Paddle {
  paddleElem: HTMLElement;
  currentPosition!: number;

  constructor(paddleElem: HTMLElement) {
    this.paddleElem = paddleElem;
    this.reset();
  }

  get position(): number {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    );
  }

  set position(value: number) {
    this.paddleElem.style.setProperty("--position", value.toString());
  }

  rect(): DOMRect {
    return this.paddleElem.getBoundingClientRect();
  }

  reset() {
    this.currentPosition = 50;
  }

  update(delta: number, ballHeight: number) {
    this.currentPosition += SPEED * delta * (ballHeight - this.currentPosition);
  }
}


