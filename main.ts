let _1 = 0
let _2 = 0
basic.forever(function () {
    if (_2 % 2 == 1) {
        _1 = 4
        for (let index = 0; index < 5; index++) {
            led.plot(_1, _2)
            basic.pause(100)
            _1 += -1
        }
        _2 += 1
    } else {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, 0)
            basic.pause(100)
        }
    }
    _2 += 1
})
