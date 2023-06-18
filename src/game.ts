// import Ball from "./Ball.js"
// import Paddle from "./Paddle.js"

// const ball = new Ball(document.getElementById("ball"))
// const playerPaddle = new Paddle(document.getElementById("player-paddle"))
// const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
// const playerScoreElem = document.getElementById("player-score")
// const computerScoreElem = document.getElementById("computer-score")

// // function updating timing
// let lastTime
// function update(time) {
//     if (lastTime != null) {
//         const delta = time - lastTime
//         ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
//         computerPaddle.update(delta, ball.y)

//         if (isLose()) handleLose()
//     }

//     lastTime = time
//     window.requestAnimationFrame(update)
// }

// function isLose() {
//     const rect = ball.rect()
//     return rect.right >= window.innerWidth || rect.left <= 0
// }

// function handleLose() {
//     const rect = ball.rect()
//     if (rect.right >= window.innerWidth) {
//         playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
//     } else {
//         computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
//     }
//     ball.reset()
//     computerPaddle.reset()
// }

// // game win condition

// function gameWin() {
//     if (playerScoreElem === 3) {
//         const newDiv = document.createElement("div");
//         const newContent = document.createTextNode("You win!");
//         newDiv.appendChild(newContent);
//         const currentDiv = document.getElementById("div1");
//         document.body.insertBefore(newDiv, currentDiv);
//     }
// }


// // mouse movement controls player paddle
// document.addEventListener("mousemove", e => {
//     playerPaddle.position = (e.y / window.innerHeight) * 100
// })


// window.requestAnimationFrame(update)


import Ball from "./Ball";
import Paddle from "./Paddle";

const ballElement = document.getElementById("ball");
const playerPaddleElement = document.getElementById("player-paddle");
const computerPaddleElement = document.getElementById("computer-paddle");
const playerScoreElem = document.getElementById("player-score") as HTMLElement;
const computerScoreElem = document.getElementById("computer-score") as HTMLElement;

if (ballElement && playerPaddleElement && computerPaddleElement) {
  const ball = new Ball(ballElement);
  const playerPaddle = new Paddle(playerPaddleElement);
  const computerPaddle = new Paddle(computerPaddleElement);

  // function updating timing
  let lastTime: number | null;
  function update(time: number) {
    if (lastTime != null) {
      const delta = time - lastTime;
      ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()]);
      computerPaddle.update(delta, ball.y);

      if (isLose()) handleLose();
    }

    lastTime = time;
    window.requestAnimationFrame(update);
  }

  function isLose(): boolean {
    const rect = ball.rect();
    return rect.right >= window.innerWidth || rect.left <= 0;
  }

  function handleLose() {
    const rect = ball.rect();
    if (rect.right >= window.innerWidth) {
      playerScoreElem.textContent = (parseInt(playerScoreElem.textContent as string) + 1).toString();
    } else {
      computerScoreElem.textContent = (parseInt(computerScoreElem.textContent as string) + 1).toString();
    }
    ball.reset();
    computerPaddle.reset();
  }

  // game win condition
  function gameWin() {
    if (parseInt(playerScoreElem.textContent as string) === 3) {
      const newDiv = document.createElement("div");
      const newContent = document.createTextNode("You win!");
      newDiv.appendChild(newContent);
      const currentDiv = document.getElementById("div1");
      document.body.insertBefore(newDiv, currentDiv);
    }
  }

  // mouse movement controls player paddle
  document.addEventListener("mousemove", (e) => {
    playerPaddle.position = (e.y / window.innerHeight) * 100;
  });

  window.requestAnimationFrame(update);
} else {
  console.error("Failed to find required HTML elements.");
}

