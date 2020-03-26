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

// heart
var bar = new ProgressBar.Path("#heart-path", {
  easing: "easeInOut",
  duration: 1400
});

bar.set(0);
bar.animate(1.0);
