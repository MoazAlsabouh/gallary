// hbd page
let down = document.querySelector(".down"),
  days = document.querySelector(".days"),
  hours = document.querySelector(".hour"),
  minets = document.querySelector(".mint"),
  secends = document.querySelector(".secend");
let countDownEnd = new Date("May 8, 2023 00:00:00").getTime();

let countDown = setInterval(() => {
  // now time 
  let nowTime = new Date().getTime();

  // rem time
  let remCountdown = countDownEnd - nowTime;
  // let remCountdown = nowTime - countDown;

  if (remCountdown === 0) {
    clearInterval(countDown);
  } else {
    let day = Math.floor(remCountdown / (1000 * 60 * 60 * 24)),
      hour = Math.floor(remCountdown % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
      minet = Math.floor(remCountdown % (1000 * 60 * 60) / (1000 * 60)),
      secend = Math.floor(remCountdown % (1000 * 60) / (1000));
    days.textContent = day < 100 ? `0${day}` : day < 10 ? `00${day}` : day;
    hours.textContent = hour < 10 ? `0${hour}` : hour;
    minets.textContent = minet < 10 ? `0${minet}` : minet;
    secends.textContent = secend < 10 ? `0${secend}` : secend;
    // days.textContent = day;
    // hours.textContent = hour;
    // minets.textContent = minet;
    // secends.textContent =  secend;
  }
}, 1000);