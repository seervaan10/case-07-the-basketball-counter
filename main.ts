let p = 0
let i = 0
basic.showNumber(i)
basic.forever(function () {
    p = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (p > 0 && p < 6) {
        i += 1
        basic.showNumber(i)
        basic.pause(200)
    }
})
