let userName = prompt("Enter your name:");

let greeting = document.getElementById("greeting");
let clock = document.getElementById("clock");

greeting.innerText = `Hello, ${userName}! Welcome 🎉`;

function showTime() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clock.innerText = `${hours}:${minutes}:${seconds} ${day}`;
}

showTime();
setInterval(showTime, 1000);
