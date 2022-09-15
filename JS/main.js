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
    if (milHours >= 13) {
    let zeroMints = mint
    if (mint < 10) {
        zeroMints = '0'+mint
    }
        stanHours = (milHours - 12) + ':' + zeroMints + ':' + seconds + ' PM'
    }
    else if (milHours <= 12) {
    stanHours = milHours+ ':' + zeroMints + ':' + seconds + ' AM'
    }
    else {console.log('wrong')}
    let zeroSeconds = seconds
    if (seconds <10) {
        zeroseconds = '0'+ seconds
    }



    clockStand.innerText = `${stanHours}`
}

setInterval(standardTime, 1000)
standardTime()

