input.onButtonPressed(Button.A, function () {
    キャラ[0].move(1)
})
input.onButtonPressed(Button.B, function () {
    キャラ[1].move(2)
})
let キャラ: game.LedSprite[] = []
キャラ = [game.createSprite(0, 0), game.createSprite(0, 1)]
