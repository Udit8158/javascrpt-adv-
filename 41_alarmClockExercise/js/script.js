console.log("welcome");

//Js for showing clock and time
setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let hourHandRotation = 30 * hour + minute / 2;
  let minuteHandRotation = 6 * minute;
  let secondHandRotation = 6 * second;

  hourHand.style.transform = `rotate(${hourHandRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandRotation}deg)`;
  secondHand.style.transform = `rotate(${secondHandRotation}deg)`;
  let para = document.getElementById("para");
  para.innerHTML = date;
}, 1000);

//Js for alarm function
let setAlarm = document.getElementById("alarmBtn");

// var audio = new Audio("/41_alarmClockExercise/images/alarm.mp3");
// audio.play();

//Set alarm action
setAlarm.addEventListener("click", (e) => {
  e.preventDefault();

//   console.log("clicked");
  let alarm = document.getElementById("alarm");
  let alarmValue = alarm.value;

  //Date now work
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();

  //user inputs
  // console.log(alarmValue);
  let inputHour = alarmValue.slice(0, 2);
  let inputMinute = alarmValue.slice(3, 5);


  //play alarm logic

  // console.log(`${date.getFullYear()},${date.getMonth()},${date.getDate()},${inputHour},${inputMinute},${date.getSeconds()}`);
 let zero = 00;
  let userDate = new Date(
    `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()} ${inputHour}:${inputMinute}:${zero}`
  );
//   console.log(date);
//   console.log(userDate);

  let alarmToTime = userDate.getTime() - date.getTime();  //.getTime() is used to convert a date into some milisec
//   console.log(alarmToTime);

  //run settimeout
  setTimeout(() => {
    if (alarmToTime > 0) {
      console.log("alarm will be played");
      var audio = new Audio("/41_alarmClockExercise/images/alarm.mp3");
      audio.play();
    }
  }, alarmToTime);
});

// let newDate = new Date("2021-10-15 05:01:46");  //This is the format for making the new date in the time of string
// console.log(newDate)
