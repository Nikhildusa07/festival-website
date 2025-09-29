// Festival countdown (example: Oct 1, 2025)
const festivalDate = new Date("Oct 1, 2025 00:00:00").getTime();

let timer = setInterval(() => {
  let now = new Date().getTime();
  let distance = festivalDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (document.getElementById("timer")) {
    document.getElementById("timer").innerHTML =
      `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  if (distance < 0) {
    clearInterval(timer);
    if (document.getElementById("timer")) {
      document.getElementById("timer").innerHTML = "Happy Festival 🎉";
    }
  }
}, 1000);
