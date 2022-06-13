input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P14, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P14, 0)
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1) {
        servos.P2.setAngle(20)
    }
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        servos.P2.setAngle(130)
    }
})
