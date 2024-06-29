const hoursSpan = document.querySelector(".hours");
const minutesSpan = document.querySelector(".minutes");
const secondsSpan = document.querySelector(".seconds");
const sessionSpan = document.querySelector(".session");

function getTime() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let session = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    session = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  hoursSpan.innerHTML = hour;
  minutesSpan.innerHTML = minutes;
  secondsSpan.innerHTML = seconds;
  sessionSpan.innerHTML = session;
}

setInterval(getTime, 1000);
