radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, -100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, -100)
    } else if (receivedNumber == 1) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, -100)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, -100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 100)
    } else if (receivedNumber == 3) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
    } else if (receivedNumber == 4) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, 0)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 0)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 0)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 0)
    } else if (receivedNumber == 5) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, -100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, -100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, 100)
    } else if (receivedNumber == 6) {
        wuKong.mecanumSpeed(wuKong.WheelList.LeftFront_def, -100)
        wuKong.mecanumSpeed(wuKong.WheelList.LeftRear_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightFront_def, 100)
        wuKong.mecanumSpeed(wuKong.WheelList.RightRear_def, -100)
    }
})
music.setVolume(109)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
radio.setGroup(105)
