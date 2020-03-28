function fillBar(seconds) {
  const bar = document.querySelector(".bar");

  let atPercent = 0;

  const interval = setInterval(() => {
    bar.style.width = atPercent + "%";
    atPercent++;

    // check if its running correctly
    console.log("running at", atPercent);

    // check that the percentages doesnt go over 100
    if (atPercent > 100) {
      clearInterval(interval);
    }

    // set that it updates 1% every millisecond
  }, (seconds * 1000) / 100);
}

// GROW AFFECT
// function barGrow {
//   for (atPercent = 100) {
//     barContainer
//       &.grow {
//       transition: all .2s ease -in -out;
//       transform: scale(1.5);
//     }
//   }
// }

// heart
function fillHeart() {
  var heart = new ProgressBar.Path("#heart-path", {
    easing: "easeInOut",
    duration: 1400
  });

  heart.set(0);
  heart.animate(1.0);
}

// https://kimmobrunfeldt.github.io/progressbar.js/
