let milTime = new Date();
let milHours = milTime.getHours();
let mint = milTime.getMinutes();
let secs = milTime.getSeconds();


function militaryTime() {
  let officalTime = new Date();
  let setTime = document.getElementById("clock");
  fhours = officalTime.getHours();
  testmints = officalTime.getMinutes();
  testsecs = officalTime.getSeconds();
  let fmints = testmints;
  if (testmints < 10) {
    fmints = "0" + testmints;
  } else if (fhours === 0) {
    fhours = 0;
  } else {
    fmints = testmints;
  }
  let fsecs = testsecs;
  if (testsecs < 10) {
    fsecs = "0" + testsecs;
  }

  setTime.innerText = `${fhours}:${fmints}:${fsecs}`;
}

setInterval(militaryTime, 1000);
militaryTime();

function standardTime() {
  let milTime = new Date();
  let clockStand = document.getElementById("standardTimeDiv");
  let stanHours = milHours;
  let seconds = milTime.getSeconds();
  let minutes = milTime.getMinutes();
  let zeroSeconds = seconds;
  if (seconds < 10) {
    zeroSeconds = "0" + seconds;
  }
  let zeroMints = minutes;
  if (minutes < 10) {
    zeroMints = "0" + minutes;
  }
  if (milHours >= 13) {
    stanHours = milHours - 12;
    clockStand.innerText = `${stanHours}:${zeroMints}:${zeroSeconds} P.M.`;
  } else if (milHours === 0) {
    stanHours = 12;
    clockStand.innerText = `${stanHours}:${zeroMints}:${zeroSeconds} A.M.`;
  } else if (milHours <= 12) {
    stanHours = milHours;
    clockStand.innerText = `${stanHours}:${zeroMints}:${zeroSeconds} A.M.`;
  }
}

setInterval(standardTime, 1000);
standardTime();

let alarmTime = null;
let alarmTimeout = null;
let confirmAlarm = document.getElementById("setUp");
let reset = document.getElementById("reset");
let constant = new Date();
let pop = new Date(alarmTime);



function alarm(value) {
  alarmTime = value;
}
function alarmSet() {
  let constant = new Date();
  let pop = new Date(alarmTime);
  console.log(pop)
  console.log(alarmTime);
  alert("The alarm was set for " + alarmTime);
  if (pop > constant) {
    let myTime = pop.getTime() - constant.getTime; ///please work
    alarmTimeout = setTimeout(() => alert("Beep"), myTime); // didn't work
  }
}

function resetAlarm() {
  alarmTime = null;
  alert("The alarm was reset.");
  console.log(alarmTime);
}

reset.addEventListener("click", () => {
  resetAlarm();
});
