input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (true) {
        strip.showRainbow(1, 360)
        music.playMelody("G B A G C5 B A B ", 215)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("sHake to plaY!")
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1609, 1, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.pause(1000)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 1653, 0, 255, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    led.stopAnimation()
    basic.clearScreen()
    music.stopAllSounds()
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
})
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    music.stopAllSounds()
})
let Hand = 0
let strip: neopixel.Strip = null
basic.showString("Hold Me!")
basic.showLeds(`
    . . # . .
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    `)
basic.pause(1000)
basic.clearScreen()
strip = neopixel.create(DigitalPin.P0, 15, NeoPixelMode.RGB)
strip.setBrightness(175)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(200)
})
