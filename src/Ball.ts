// const INITIAL_VELOCITY = 0.025
// const VELOCITY_INCREASE = 0.00001

// // ball class that handles movement
// export default class Ball {
//     constructor(ballElem) {
//         this.ballElem = ballElem
//         this.reset()
//     }

//     // x axis movement
//     get x() {
//         return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
//     }

//     set x(value) {
//         this.ballElem.style.setProperty("--x", value)
//     }
//     // y axis movement
//     get y() {
//         return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
//     }

//     set y(value) {
//         this.ballElem.style.setProperty("--y", value)
//     }
//     // stop ball from moving off screen
//     rect() {
//         return this.ballElem.getBoundingClientRect()
//     }
//     // reset function
//     reset() {
//         this.x = 50
//         this.y = 50
//         this.direction = { x: 0 }
//         while (
//             Math.abs(this.direction.x) <= 0.2 ||
//             Math.abs(this.direction.x) >= 0.9
//         ) {
//             const heading = randomNumberBetween(0, 2 * Math.PI)
//             this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
//         }
//         this.velocity = INITIAL_VELOCITY
//     }
//     // increase velocity of ball over time
//     update(delta, paddleRects) {
//         this.x += this.direction.x * this.velocity * delta
//         this.y += this.direction.y * this.velocity * delta
//         this.velocity += VELOCITY_INCREASE * delta
//         const rect = this.rect()

//         if (rect.bottom >= window.innerHeight || rect.top <= 0) {
//             this.direction.y *= -1
//         }

//         if (paddleRects.some(r => isCollision(r, rect))) {
//             this.direction.x *= -1
//         }
//     }
// }
// // function that controls random direction of ball start
// function randomNumberBetween(min, max) {
//     return Math.random() * (max - min) + min
// }


// function isCollision(rect1, rect2) {
//     return (
//         rect1.left <= rect2.right &&
//         rect1.right >= rect2.left &&
//         rect1.top <= rect2.bottom &&
//         rect1.bottom >= rect2.top
//     )
// }


const INITIAL_VELOCITY = 0.025;
const VELOCITY_INCREASE = 0.00001;

// ball class that handles movement
export default class Ball {
  ballElem: HTMLElement;
  direction!: { x: number; y: number; };
  velocity!: number;

  constructor(ballElem: HTMLElement) {
    this.ballElem = ballElem;
    this.reset();
  }

  // x axis movement
  get x(): number {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
  }

  set x(value: number) {
    this.ballElem.style.setProperty("--x", value.toString());
  }
  // y axis movement
  get y(): number {
    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
  }

  set y(value: number) {
    this.ballElem.style.setProperty("--y", value.toString());
  }
  // stop ball from moving off screen
  rect(): DOMRect {
    return this.ballElem.getBoundingClientRect();
  }
  // reset function
  reset() {
    this.x = 50;
    this.y = 50;
    this.direction = { x: 0, y: 0 };
    while (
      Math.abs(this.direction.x) <= 0.2 ||
      Math.abs(this.direction.x) >= 0.9
    ) {
      const heading = randomNumberBetween(0, 2 * Math.PI);
      this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
    }
    this.velocity = INITIAL_VELOCITY;
  }
  // increase velocity of ball over time
  update(delta: number, paddleRects: DOMRect[]) {
    this.x += this.direction.x * this.velocity * delta;
    this.y += this.direction.y * this.velocity * delta;
    this.velocity += VELOCITY_INCREASE * delta;
    const rect = this.rect();

    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
      this.direction.y *= -1;
    }

    if (paddleRects.some((r) => isCollision(r, rect))) {
      this.direction.x *= -1;
    }
  }
}

// function that controls random direction of ball start
function randomNumberBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function isCollision(rect1: DOMRect, rect2: DOMRect): boolean {
  return (
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left &&
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top
  );
}

