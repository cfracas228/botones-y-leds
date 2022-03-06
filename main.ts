input.onButtonPressed(Button.A, function () {
	
})
basic.pause(500)
basic.showIcon(IconNames.Square)
basic.pause(100)
basic.showIcon(IconNames.SmallSquare)
basic.pause(100)
while (true) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
}
basic.forever(function () {
	
})
