const input = document.getElementById("taskInput");
const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const doneBox = document.getElementById("done");
const againBtn = document.getElementById("againBtn");
const resetBtn = document.getElementById("resetBtn");

let time = 60;
let interval = null;

// gespeicherte Aufgabe laden
const savedTask = localStorage.getItem("task");
if (savedTask) input.value = savedTask;

input.addEventListener("input", () => {
  localStorage.setItem("task", input.value);
});

function startTimer() {
  input.disabled = true;
  startBtn.disabled = true;

  interval = setInterval(() => {
    time--;
    timerEl.textContent = time;

    if (time === 0) {
      clearInterval(interval);
      if (navigator.vibrate) navigator.vibrate(200);
      doneBox.classList.remove("hidden");
    }
  }, 1000);
}

startBtn.addEventListener("click", startTimer);

againBtn.addEventListener("click", () => {
  time = 60;
  timerEl.textContent = time;
  doneBox.classList.add("hidden");
  startTimer();
});

resetBtn.addEventListener("click", () => {
  time = 60;
  timerEl.textContent = time;
  doneBox.classList.add("hidden");
  input.disabled = false;
  startBtn.disabled = false;
});
