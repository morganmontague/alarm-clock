let clockTime = document.getElementById('clock');
console.log(clockTime.innerText)
let milTime = new Date()
console.log(milTime);
let milHours = milTime.getHours()
console.log(milHours)
let mint = milTime.getMinutes()
console.log(mint)
clockTime.innerText = milHours + ':' + mint
console.log(clockTime.innerText)

let stanHours = milHours
console.log(stanHours)
function standardTime() {
    console.log('worked')
    if (milHours >= 13) {
        console.log('true')
        stanHours = (milHours - 12) + ':' + mint + ' PM'
        console.log(stanHours)
    }
    else if (milHours <= 12) {
    stanHours = milHours+ ':' + mint + ' PM'
    }
    else {console.log('wrong')}
    
}
//setTimeout(standardTime, 15000) need to add auto renew function
standardTime()

console.log(stanHours +':' + mint + ' PM')

let clockStand = document.getElementById('standardTimeDiv')
console.log(clockStand.innerText)
clockStand.innerText = stanHours
