const $ = (selector) => document.querySelector(selector);

const slider = (() => {
  let interval;
  let isDone = false;
  const speed = [100, 80, 40, 10];

  return {
    setInterval: (newInterval) => {
      interval = newInterval;
    },
    getInterval: () => {
      return interval;
    },
    setIsDone: () => {
      isDone = !isDone;
    },
    getIsDone: () => {
      return isDone;
    },

    play: () => {
      if (!slider.getInterval()) {
        const interval = setInterval(() => {
          let sliderValue = Number.parseFloat($("#slider").value);
          if (sliderValue >= 100) {
            slider.stop();
            slider.setIsDone();
          }
          sliderValue += 0.1;
          $("#slider").value = sliderValue.toFixed(1);
        }, 10);
        slider.setInterval(interval);
        document.querySelector("#play").innerHTML = "Pause";
      } else {
        slider.pause();
      }
    },
    pause: () => {
      clearInterval(slider.getInterval());
      slider.setInterval();
      document.querySelector("#play").innerHTML = "Play";
    },

    stop: () => {
      if (slider.getInterval()) {
        clearInterval(slider.getInterval());
        slider.setInterval();
        // 초기화
      }
      // 100이면 0으로 reset
      if (slider.getIsDone()) {
        $("#slider").value = 0;
        slider.setIsDone();
      }
    },
  };
})();

// event
const clickEvents = {
  play: () => {
    slider.play();
  },
  stop: () => {
    slider.stop();
  },
  slider: () => {
    console.log($("#slider").value);
  },
  faster: () => {
    let nowSpeed = 0;
  },
};

$(".range-slider").addEventListener("click", (e) => {
  const target = e.target.id;
  if (target) {
    clickEvents[target]();
  }
});
