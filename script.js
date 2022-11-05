const next = document.getElementById("next");
const prev = document.getElementById("prev");
const progress = document.getElementById("progress");
const circle = document.querySelectorAll(".circle");

let currentActive = 1;

const updateProgress = function () {
  progress.style.width = `${
    ((currentActive - 1) / (circle.length - 1)) * 100
  }%`;
};

const removeActive = function () {
  circle.forEach((circle, index) => {
    circle.classList.remove("active");
  });
};

// WHEN NEXT BUTTON IS CLICKED

next.addEventListener("click", function () {
  // GO TO THE NEXT STEP
  if (currentActive < circle.length) {
    currentActive++;
    // INCREASE THE PROGRESS LINE
    updateProgress();
    // REMOVE ACTIVE CLASS FROM ALL CIRCLE
    removeActive();
    // ADD ACTIVE CLASS TO THE CURRENT CIRCLE
    circle[currentActive - 1].classList.add("active");
  }

  //   ACTIVATE THE PREVIOUS BUTTON WHEN NEXT IS CLICKED
  if (currentActive > 1) {
    prev.removeAttribute("disabled");
  }

  //   DISABLE THE NEXT BUTTON WHEN THE LAST STEP IS REACHED

  if (currentActive > circle.length - 1) {
    next.setAttribute("disabled", "disabled");
  }
});

// WHEN PREVOUS BUTTON IS CLICKED
prev.addEventListener("click", function () {
  if (currentActive > 1) {
    currentActive--;

    //  ACTIVATE THE NEXT BUTTON WHEN LAST STEP IS NOT REACHED
    next.removeAttribute("disabled");

    // DECREASE THE PROGRESS LINE
    updateProgress();

    // REMOVE ACTIVE CLASS FROM ALL CIRCLE
    removeActive();

    // ADD ACTIVE CLASS TO THE CURRENT CIRCLE
    circle[currentActive - 1].classList.add("active");
  }

  //   DISABLE PREVIOUS BUTTON WHEN WE ARE ON THE FIRST STEP
  if (currentActive < 2) {
    prev.setAttribute("disabled", "disabled");
  }
});
