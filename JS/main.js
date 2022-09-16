// let clockTime = document.getElementById('clock');
let milTime = new Date()
let milHours = milTime.getHours()
let mint = milTime.getMinutes()
let secs = milTime.getSeconds()
// clockTime.innerText = milHours + ':' + mint + ':' + secs





function militaryTime() {
    let officalTime = new Date()
    let setTime = document.getElementById('clock')
    fhours = officalTime.getHours()
    testmints = officalTime.getMinutes()
    testsecs = officalTime.getSeconds()
    let fmints = testmints
    if (testmints < 10) {
        fmints = '0' + testmints
    }
    else if (fhours === 0) {
        fhours = 12
    }
    else {
        fmints = testmints
    }
    let fsecs = testsecs
    if (testsecs < 10) {
        fsecs = '0' + testsecs
    }

    setTime.innerText = `${fhours}:${fmints}:${fsecs}`

}


setInterval(militaryTime, 1000)
militaryTime()


function standardTime() {
    let milTime = new Date()
    let clockStand = document.getElementById('standardTimeDiv')
    let stanHours = milHours
    let seconds = milTime.getSeconds()
        let zeroSeconds = seconds
    if (seconds < 10) {
        zeroSeconds = '0'+ seconds
    }
    
        if (milHours >= 13) {
    let zeroMints = mint
    if (mint < 10) {
        zeroMints = '0'+ mint
    }
        stanHours = (milHours - 12) + ':' + zeroMints + ':' + zeroSeconds + ' PM'
    }
    else if (milHours <= 12) {
    stanHours = milHours+ ':' + zeroMints + ':' + zeroSeconds + ' AM'
    }
    else {console.log('wrong')}



    clockStand.innerText = `${stanHours}`
}

setInterval(standardTime, 1000)
standardTime()

let alarmTime = null;
let alarmOff = null;
let confirmAlarm = document.getElementById('setUp')
let reset = document.getElementById('reset')
let constant = new Date()
let pop = new Date(alarm)


function alarm(value) {
alarmTime = value
}
function alarmSet() {
    console.log(alarmTime)
    alert('The alarm was set for ' + alarmTime)

    if (pop > constant) {
        const timeout = pop.getTime() - constant.getTime();
        alarmOff = setTimeout(() => alert('Beep Beep Beep BEEEEEP'), timeout);
        
        
    }
}

function resetAlarm () {
    alarmTime = null
    alert('The alarm was reset.')
    console.log(alarmTime)
}

// confirmAlarm.addEventListener('click',() =>{
//     alarm()
//     console.log(alarm(value))
// } )
reset.addEventListener('click', () => {
    resetAlarm()
})


console.log(alarm)