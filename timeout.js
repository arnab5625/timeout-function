const output = document.querySelector("p");
const button = document.querySelector(".button");
const timerDisplay = document.getElementById("timerDisplay");

button.addEventListener("click", reveal);
button.addEventListener("click", startCountdown);

function reveal() {
  output.style.display = "block";

  //set timeout
  setTimeout(() => {
    output.style.display = "none"
  }, 5000);
}

function startCountdown() {
  let seconds = 5;

  for (let i = seconds; i >= 0; i--) {
    setTimeout(() => {
      if (i === 0) {
        timerDisplay.textContent = "System Status: Idle";
      } else {
        timerDisplay.textContent = `System Shuting Down in: ${i}`;
        timerDisplay.style.color = "Green";
      }


    }, (seconds - i) * 1000);
  }
  button.classList.toggle("active");
  setTimeout(() => {
    button.classList.toggle("active");

  }, 5000);
}

timerDisplay.textContent = "System Status: Idle";
