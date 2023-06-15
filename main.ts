let vlhkost = 0
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    vlhkost = smarthome.ReadSoilHumidity(AnalogPin.P1)
    OLED.writeString("vlhkost")
    OLED.writeNum(vlhkost)
    if (vlhkost > 10) {
        basic.showString("lže")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showString("mluví pravdu")
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(1000)
})
